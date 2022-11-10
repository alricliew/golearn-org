// This is Organization Core js
// Global Variables - Org User
var org_uid;
var org_name, org_email, org_phone, org_imgUrl,  org_accountStatus, org_lastOnline, org_orgId, org_accIdArr;
var org_current_uid; // This was added to check if different user is logged in on the same browser.

// Global Variables - Roles in Organization / Accounts
var role_id;
var role_uid, role_url, role_orgId, role_accId, role_type, role_oid, role_empStatus, role_empId, role_empName, role_empPhone, role_empEmail,
role_empImgUrl, role_empRef, role_empTitle, role_empRole, role_allowedPermissionArr, role_orgName, role_orgImgUrl, role_orgCoverImgUrl;

// Global Variables - Organization / Accounts
var ent_id;
var ent_url, ent_orgId, ent_accIdArr, ent_oid,  ent_aid, ent_type, ent_lastOnline, ent_rating, ent_ratingTimes, ent_ratingFinal,
  ent_accountStatus, ent_name, ent_phone, ent_email, ent_addr, ent_areaId, ent_stateId, ent_imgUrl, ent_coverImgUrl, ent_oneLiner, ent_intro,
  ent_lan, ent_timeSlotArr, ent_preferredSubArr, ent_corp, ent_corpId, ent_adminStatus;

// Check if user logged on
// AuthCheck() Hierachy:
// 1. Check if Firebase User exists & logged in
// 2. Check if Organization User exists in storage [loadOrgUserInfoObj()]
// 3. Additional Checks - In organization / account pages
// 3.1. TODO: Check if Org User has role(s) & permissions in this entity in storage. [loadUserRole()]
// 3.2. Check if Organization / Account entity exists in storage [loadOrg()]
function AuthCheck(){
  firebase.auth().onAuthStateChanged(function(user){
    if(!user){
      // Return to login if user does not exist.
      console.log('No User. Redirect to https://org.golearn.com.my/login/')
      window.location.href = "http://org.golearn.com.my/login/"
    }else{

      org_uid = user.uid;
      // if (firebase.auth().currentUser.displayName == null )
      //   tutorId = firebase.auth().currentUser.phoneNumber;
      // else
      //   tutorId = firebase.auth().currentUser.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();

      // Check Entity and Role.
      // loadOrg();

      // Check user
      // console.log('User found: '+ org_uid)
      loadOrgUserInfoObj(org_uid);

    }

  });
}

// Set the nav name and global var, if user already login and have session Storage
var tutorInfoObj = null;
// Check If tutorInfoObj exist
async function loadOrgUserInfoObj(uid){

  if (JSON.parse(sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER)) == null ){
    console.log("SESSION_STORAGE_PROFILE_ORG_USER does not exist. Org User Id: " + uid)

    // Although user exist, but the storage is null. Reload.
    loadUserInfo(uid);
  }
  else{
    // Set the nav user name
    dataObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER));
    org_current_uid = (dataObj.id == null || dataObj.id == "") ? "NO_ID" : dataObj.uid; // This was added to check if different user is logged in on the same browser.
    org_name = (dataObj.name == null || dataObj.name == "")? "New Tutor" : dataObj.name;
    org_email = (dataObj.email == null || dataObj.email == "")? "" : dataObj.email;
    org_phone = (dataObj.phone == null || dataObj.phone == "")? "New Tutor" : dataObj.phone;
    org_imgUrl = (dataObj.imgUrl == null || dataObj.imgUrl == "")? "https://org.golearn.com.my/assets/img/hello.gif" : dataObj.imgUrl;
    org_accountStatus = dataObj.accountStatus; // bool
    org_lastOnline = dataObj.lastOnline;
    org_orgId = dataObj.orgId == null ?  "" : dataObj.orgId;
    org_accIdArr = dataObj.accIdArr == null ? [] : dataObj.accIdArr;

    // Check if user logged in with other number. If true, logout
    if (org_current_uid != uid){
      console.log("Stored uid in sessionStorage: " + org_current_uid + " is not equal to latest uid: " + uid)
      firebase.auth().signOut();
    }
    // console.log(org_lastOnline)
    // let secondLastOnline = org_lastOnline.seconds;
    // let secondCurrent = new Date().getTime() / 1000;
    // let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
    // let reload = hoursEllapsed > 6;
    // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload)

    // Check last online. If > 6hr, reload
    if (org_lastOnline == null || org_lastOnline == ""){
      console.log("SESSION_STORAGE_PROFILE_ORG_USER exits, org_lastOnline is null")
      loadUserInfo(uid);
    }
    else{
      let secondLastOnline = org_lastOnline.seconds;
      let secondCurrent = new Date().getTime() / 1000;
      let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
      let reload = hoursEllapsed > 6;

      // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload);
      if (reload){
        console.log("SESSION_STORAGE_PROFILE_ORG_USER exits, org_lastOnline: "+hoursEllapsed+", reload true")
        loadUserInfo(uid);
      }
      else {
        console.log("SESSION_STORAGE_PROFILE_ORG_USER exits, org_lastOnline: "+hoursEllapsed+", reload false")
        // Update the general view
        updateOrgUserView();


        // Load org when necessary
        var pathArray = window.location.pathname.split('/');
        if (pathArray[1] === 'account' || pathArray[1] === 'organization' ){
          await loadOrg();
        }else {
          // Finally, load page specific view.
          // This function will be declared separately in each page
          loadPageInitFunc();
        }

        // Update Last Online
        let docLastOnlineRef = db.collection("org")
                        .doc('v1')
                        .collection('user')
                        .doc(uid);

        docLastOnlineRef.update({
          [ORG_USER_LAST_ONLINE] : new Date()
          }
        );
      }

    }


  }
}

// Load User Information
async function loadUserInfo(uid){
  // UID is a unique id tied to a phone during registration
  let orgDocRef =
    db.collection("org")
      .doc('v1')
      .collection('user')
      .doc(uid);

  orgDocRef.get().then((doc) => {
    if (doc.exists) {

      org_current_uid = (doc.id == null || doc.data().id == "") ? "NO_ID" : doc.uid; // This was added to check if different user is logged in on the same browser.
      org_uid = (doc.data()[ORG_USER_UID] == null || doc.data()[ORG_USER_UID] == "")? "" : doc.data()[ORG_USER_UID];
      if (uid !== org_uid ) alert('UID is not tally with document ID! Please immediately report to GoLearn Admin!')
      org_name = (doc.data()[ORG_USER_NAME] == null || doc.data()[ORG_USER_NAME] == "")? "New User" : doc.data()[ORG_USER_NAME];
      org_email = (doc.data()[ORG_USER_EMAIL] == null || doc.data()[ORG_USER_EMAIL]  == "")? "" : doc.data()[ORG_USER_EMAIL] ;
      org_phone = (doc.data()[ORG_USER_PHONE]  == null || doc.data()[ORG_USER_PHONE] == "")? "" : doc.data()[ORG_USER_PHONE];
      org_imgUrl = (doc.data()[ORG_USER_IMAGE_URL] == null || doc.data()[ORG_USER_IMAGE_URL] == "")? "https://org.golearn.com.my/assets/img/hello.gif" : doc.data()[ORG_USER_IMAGE_URL];
      org_accountStatus = doc.data()[ORG_USER_ACCOUNT_STATUS];
      org_lastOnline = doc.data()[ORG_USER_LAST_ONLINE];
      org_orgId = doc.data()[ORG_USER_ORG_ID] == null ?  "" : doc.data()[ORG_USER_ORG_ID];
      org_accIdArr = doc.data()[ORG_USER_ACC_ID_ARR] == null ? [] : doc.data()[ORG_USER_ACC_ID_ARR];

      // Store Org User in Session
      storeOrgUserSession(doc.data())

      // Update the general view
      updateOrgUserView();

    //  // Load org when necessary
    //  var pathArray = window.location.pathname.split('/');
    //  if (pathArray[1] === 'account' || pathArray[1] === 'organization' ){
    //    await loadOrg()
    //  }else {
    //    // Finally, load page specific view.
    //    // This function will be declared separately in each page
    //    loadPageInitFunc();
    //  }

    //  // Update Last Online
    //  let docLastOnlineRef = db.collection("org")
    //                          .doc('v1')
    //                          .collection('user')
    //                          .doc(uid);
    //  return Promise.resolve(
    //    docLastOnlineRef.update(
    //      {
    //        [ORG_USER_LAST_ONLINE] : new Date(),
    //      }
    //    )
    //  )


    }

    else {
      // console.log('No Org User found. Redirect to login')
      return 'NO_USER'
    }
  })
  .then((snapshot)=> {


    var promiseAll = [];
    if (snapshot === 'NO_USER'){
      console.log('No Org User found. Signout and Redirect to login')
      firebase.auth().signOut()
    }
    else {
      // Load org when necessary
      var pathArray = window.location.pathname.split('/');
      if (pathArray[1] === 'account' || pathArray[1] === 'organization' ){
        promiseAll.push(loadOrg())
      }else {
        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc();
      }

      // Update Last Online
      let docLastOnlineRef = db.collection("org")
                              .doc('v1')
                              .collection('user')
                              .doc(uid);

      promiseAll.push(
        docLastOnlineRef.update({[ORG_USER_LAST_ONLINE] : new Date(),})
      )

      return Promise.all(promiseAll)
    }
  })
}

// Store role
function storeOrgUserSession(data) {

  var dataObj = {
    'id' : data[ORG_USER_UID], // This will be used to check if different org user is logged in on the same browser.
    [ORG_USER_UID] : data[ORG_USER_UID],
    [ORG_USER_NAME] : data[ORG_USER_NAME],
    [ORG_USER_PHONE] : data[ORG_USER_PHONE],
    [ORG_USER_EMAIL] : data[ORG_USER_EMAIL],
    [ORG_USER_IMAGE_URL] :data[ORG_USER_IMAGE_URL],
    [ORG_USER_LAST_ONLINE] :data[ORG_USER_LAST_ONLINE],
    [ORG_USER_ACCOUNT_STATUS] :data[ORG_USER_ACCOUNT_STATUS],
    [ORG_USER_ORG_ID] :data[ORG_USER_ORG_ID],
    [ORG_USER_ACC_ID_ARR] :data[ORG_USER_ACC_ID_ARR]
  }

  // Set tutorInfoObj as sessionStorage
  sessionStorage.setItem(SESSION_STORAGE_PROFILE_ORG_USER, JSON.stringify(dataObj));
}

// Update Org User View
function updateOrgUserView(){
  // Set the nav user name.
  document.getElementById("user").textContent = org_name;

  // // Set badge and sidebar based on account status.
  // if (org_accountStatus == DEACTIVATED_ACCOUNT_STATUS_KEY || org_accountStatus == ACTIVE_ACCOUNT_STATUS_KEY ||
  //   org_accountStatus == PREMIUM_ACCOUNT_1_STATUS_KEY || org_accountStatus == PREMIUM_ACCOUNT_1_ACTIVE_STATUS_KEY){
  //   document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
  //   document.getElementById("btnActivateAccount").textContent = "UPGRADE";
  //   document.getElementById("btnActivateAccount").href = "https://golearn.com.my/pricing/";
  //   // document.getElementById("btnActivateAccount").target = "_blank";
  //   // Payroll
  //   document.getElementById("navPayroll").setAttribute("style", "display: none;");
  //   if (checkIsPayrollPages()) window.location.href = "https://org.golearn.com.my/";

  // }
  // else if (org_accountStatus == PREMIUM_ACCOUNT_2_STATUS_KEY || org_accountStatus == PREMIUM_ACCOUNT_2_ACTIVE_STATUS_KEY){
  //   document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
  //   document.getElementById("btnActivateAccount").textContent = "ENTERPRISE";
  //   document.getElementById("btnActivateAccount").href = "UPGRADE";
  //   document.getElementById("btnActivateAccount").target = "_blank";
  //   // Payroll
  //   document.getElementById("navPayroll").setAttribute("style", "display: inline;");
  // }
  // else if (org_accountStatus == PREMIUM_ACCOUNT_3_STATUS_KEY || org_accountStatus == PREMIUM_ACCOUNT_3_ACTIVE_STATUS_KEY){
  //   document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white;" );
  //   document.getElementById("btnActivateAccount").textContent = "ORGANIZATION";
  //   document.getElementById("btnActivateAccount").href = "javascript:;";
  //   // document.getElementById("btnActivateAccount").target = "_blank";
  //   // Payroll
  //   document.getElementById("navPayroll").setAttribute("style", "display: inline;");
  // }
  // else if (org_accountStatus == SUSPENDED_ACCOUNT_STATUS_KEY){
  //   document.getElementById("btnActivateAccount").setAttribute("style", "visibility: visible; color: white; background: red" );
  //   document.getElementById("btnActivateAccount").textContent = "Account Suspended. Fix Now";
  //   document.getElementById("btnActivateAccount").href = "https://golearn.com.my/contact-us/";
  //   document.getElementById("btnActivateAccount").target = "_blank";
  //   // Payroll
  //   document.getElementById("navPayroll").setAttribute("style", "display: none;");
  //   if (checkIsPayrollPages()) window.location.href = "https://org.golearn.com.my/";

  //   // Public profile link is disabled for suspended user
  //   document.getElementById("navPublicProfile").setAttribute("style", "background: #d6d6d6; pointer-events: none; cursor: default;")

  // }else {
  //   let activationNavItem = document.querySelector('#activationNavItem');
  //   // activationNavItem.parentNode.removeChild(activationNavItem);
  //   let activationNavItemIsExist = document.querySelector('#activationNavItem') !== null;
  //   // console.log(activationNavItemIsExist)
  //   // Remove NavItem if exist
  //   if (activationNavItemIsExist){
  //     activationNavItem.parentNode.removeChild(activationNavItem);
  //   }else{
  //     // Do nothing
  //   }
  //   // Payroll
  //   document.getElementById("navPayroll").setAttribute("style", "display: none;");
  //   if (checkIsPayrollPages()) window.location.href = "https://org.golearn.com.my/";

  // }

  // function checkIsPayrollPages(){
  //   const url = window.location.pathname;
  //   return url == "/account/payroll/" || url =="/account/payroll/run-payroll.html" || url == "/account/payroll/history.html" ||
  //           url == "/organization/payroll/" || url =="/organization/payroll/run-payroll.html" || url == "/organization/payroll/history.html";
  // }
}

// Update Entity / Account / Organization View
function updateEntityView(){
  document.getElementById('logoName').textContent = ent_name;

  const lock = document.getElementsByName('lockscreen')[0]

  // Hide lockscreen if status= active
  if (lock != null){
    if (ent_adminStatus === ORG_ADMIN_STATUS_ACTIVE && lock != null)lock.classList.add('hidden')
    else lock.classList.remove('hidden')
  }

}

// Update View based on Role & Permission
// const allPermissionArr =
//   ["addClass", "editClass", "delClass", "viewClass",
//   "addLesson", "editLesson", "delLesson", "viewLesson",
//   "addStudent", "editStudent", "delStudent", "viewStudent",
//   "addTeacher", "editTeacher", "delTeacher", "viewTeacher",
//   "addInv", "editInv", "recordPaymentInv", "delInv", "viewInv",
//   "addPayroll", "editPayroll", "delPayroll", "viewPayroll",
//   "addPayslip", "editPayslip", "recordPaymentPayslip", "delPayslip", "viewPayslip",
//   "addAdmin", "editAdmin", "delAdmin", "viewAdmin",
//   "addStaff", "editStaff", "delStaff", "viewStaff",
//   "addAssistant", "editAssistant", "delAssistant", "viewAssistant",
//   "addSuperAdmin", "editSuperAdmin", "delSuperAdmin", "viewSuperAdmin",
//   "viewInsight", "editAccountProfile"
//   ]

const bodyPermission = document.getElementsByTagName('body')[0];
function updateRoleView(){
  if ( sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER_ROLE) == null ){
    return;
  }
  else {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var orgUrl = url.searchParams.get("url"); // url
    var orgEnt = url.searchParams.get("ent"); // ent
    var pathArray = window.location.pathname.split('/');
    var type = (pathArray[1] === 'account') ? ORG_TYPE_ACC : ((pathArray[1] === 'organization') ? ORG_TYPE_ORG : 'INVALID')
    // ----- Get the role if already existed  ----- //
    let allRoleDataObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER_ROLE))
    allRoleDataObj.forEach((data, index) => {
      if ( ( orgEnt == data[ORG_ROLE_ORG_ID]  ||  orgEnt == data[ORG_ROLE_ACC_ID] ) && type == data[ORG_ROLE_TYPE] ){
        console.log(new Date().toISOString() + ': Role ' +  data.id + " found in sessionStorage. ")
        // UPDATE GLOBAL VAR
        role_id = data[ORG_ROLE_ID]
        role_uid = data[ORG_ROLE_UID]
        role_url = data[ORG_ROLE_URL]
        role_orgId = data[ORG_ROLE_ORG_ID]
        role_accId = data[ORG_ROLE_ACC_ID]
        role_type = data[ORG_ROLE_TYPE]
        role_oid = data[ORG_ROLE_OID]
        role_empStatus = data[ORG_ROLE_EMP_STATUS]
        role_empId = data[ORG_ROLE_EMP_ID]
        role_empName = data[ORG_ROLE_EMP_NAME]
        role_empPhone = data[ORG_ROLE_EMP_PHONE]
        role_empEmail = data[ORG_ROLE_EMP_EMAIL]
        role_empImgUrl = data[ORG_ROLE_EMP_IMG_URL]
        role_empRef = data[ORG_ROLE_EMP_REF]
        role_empTitle = data[ORG_ROLE_EMP_TITLE]
        role_empRole = data[ORG_ROLE_EMP_ROLE]
        role_allowedPermissionArr = data[ORG_ROLE_ALLOWED_PERMISSION_ARR]
        role_orgName = data[ORG_ROLE_ORG_NAME]
        role_orgImgUrl = data[ORG_ROLE_ORG_IMG_URL]
        role_orgCoverImgUrl = data[ORG_ROLE_ORG_COVER_IMG_URL]
      }
    })

  }
  // role_allowedPermissionArr
  // role_empRole

  if (role_empRole === ORG_ROLE_OWNER) {

  }
  else if (role_empRole === ORG_ROLE_SUPER_ADMIN){

  }
  else if (role_empRole === ORG_ROLE_ADMIN){

    // ROLE fields
    // console.log('jiiii')
    const roleSelect = bodyPermission.querySelectorAll(`.custom-select`)
    roleSelect.forEach((ele) => {
      let adminList = ele.querySelector(`[value='admin']`)
      let staffList = ele.querySelector(`[value='staff']`)
      let assistantList = ele.querySelector(`[value='assistant']`)

      console.log(adminList)

      if (role_allowedPermissionArr.includes('addAdmin')){
        adminList.selected = true;
        staffList.selected = false;
        assistantList.selected = false;

      }else if (role_allowedPermissionArr.includes('addStaff')){
        adminList.selected = false;
        staffList.selected = true;
        assistantList.selected = false;
      }
      else if (role_allowedPermissionArr.includes('addAssistant')){
        adminList.selected = false;
        staffList.selected = false;
        assistantList.selected = true;
      }
    })

    // Redirection


  }
  else if (role_empRole === ORG_ROLE_STAFF){
    // Redirection
    if (window.location.pathname.includes('team/edit')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  else if (role_empRole === ORG_ROLE_ASSISTANT){
    // Redirection
    if (window.location.pathname.includes('team/edit')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  else if (role_empRole === ORG_ROLE_NO_ROLE){
    // Redirection
    if (window.location.pathname.includes('team/edit')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const insight = bodyPermission.querySelectorAll(`[perm='insight']`)
  if (role_allowedPermissionArr.includes('viewInsight')){
    insight.forEach((ele) => {ele.classList.remove("hidden")})
  } else {
    insight.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teachHome = bodyPermission.querySelectorAll(`[perm='teach']`)
  if (role_allowedPermissionArr.includes('viewClass') || role_allowedPermissionArr.includes('viewStudent') || role_allowedPermissionArr.includes('viewTeacher')){
    teachHome.forEach((ele) => {ele.classList.remove("hidden")})
  } else {
    teachHome.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachClass = bodyPermission.querySelectorAll(`[perm='teach-class']`)
  if (role_allowedPermissionArr.includes('viewClass'))
    teachClass.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachClass.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachClassAdd = bodyPermission.querySelectorAll(`[perm='teach-class-add']`)
  if (role_allowedPermissionArr.includes('addClass'))
    teachClassAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachClassAdd.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.href.includes('add-class')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const teachClassEdit = bodyPermission.querySelectorAll(`[perm='teach-class-edit']`)
  if (role_allowedPermissionArr.includes('editClass'))
    teachClassEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachClassEdit.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachClassDel = bodyPermission.querySelectorAll(`[perm='teach-class-del']`)
  if (role_allowedPermissionArr.includes('delClass'))
    teachClassDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachClassDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachLessonAdd = bodyPermission.querySelectorAll(`[perm='teach-lesson-add']`)
  if (role_allowedPermissionArr.includes('addLesson'))
    teachLessonAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachLessonAdd.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teachLessonEdit = bodyPermission.querySelectorAll(`[perm='teach-lesson-edit']`)
  if (role_allowedPermissionArr.includes('editLesson'))
    teachLessonEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachLessonEdit.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachLessonDel = bodyPermission.querySelectorAll(`[perm='teach-lesson-del']`)
  if (role_allowedPermissionArr.includes('delLesson'))
    teachLessonDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachLessonDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachStudent = bodyPermission.querySelectorAll(`[perm='teach-student']`)
  if (role_allowedPermissionArr.includes('viewStudent'))
    teachStudent.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachStudent.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teachStudentAdd = bodyPermission.querySelectorAll(`[perm='teach-student-add']`)
  if (role_allowedPermissionArr.includes('addStudent'))
    teachStudentAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachStudentAdd.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.href.includes('add-student')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const teachStudentEdit = bodyPermission.querySelectorAll(`[perm='teach-student-edit']`)
  if (role_allowedPermissionArr.includes('editStudent'))
    teachStudentEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachStudentEdit.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teachStudentDel = bodyPermission.querySelectorAll(`[perm='teach-student-del']`)
  if (role_allowedPermissionArr.includes('delStudent'))
    teachStudentDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachStudentDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachTeacher = bodyPermission.querySelectorAll(`[perm='teach-teacher']`)
  if (role_allowedPermissionArr.includes('viewTeacher'))
    teachTeacher.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachTeacher.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('teacher/')) window.location.href = '../' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const teachTeacherAdd = bodyPermission.querySelectorAll(`[perm='teach-teacher-add']`)
  if (role_allowedPermissionArr.includes('addTeacher'))
    teachTeacherAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachTeacherAdd.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachTeacherEdit = bodyPermission.querySelectorAll(`[perm='teach-teacher-edit']`)
  if (role_allowedPermissionArr.includes('editTeacher'))
    teachTeacherEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachTeacherEdit.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teachTeacherDel = bodyPermission.querySelectorAll(`[perm='teach-teacher-del']`)
  if (role_allowedPermissionArr.includes('delTeacher'))
    teachTeacherDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teachTeacherDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const finHome = bodyPermission.querySelectorAll(`[perm='fin']`)
  if (role_allowedPermissionArr.includes('viewInv') || role_allowedPermissionArr.includes('viewPayroll'))
    finHome.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finHome.forEach((ele) => {ele.classList.add("hidden")})
  }
  const finInvoice = bodyPermission.querySelectorAll(`[perm='fin-invoice']`)
  if (role_allowedPermissionArr.includes('viewInv'))
    finInvoice.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finInvoice.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('invoice/')) window.location.href = '../' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const finInvoiceAdd = bodyPermission.querySelectorAll(`[perm='fin-invoice-add']`)
  if (role_allowedPermissionArr.includes('addInv'))
    finInvoiceAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finInvoiceAdd.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('invoice/create-invoice')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }

  const finInvoiceEdit = bodyPermission.querySelectorAll(`[perm='fin-invoice-edit']`)
  if (role_allowedPermissionArr.includes('editInv'))
    finInvoiceEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finInvoiceEdit.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('invoice/edit-invoice')) window.location.href = './view' +'?url=' + orgUrl + "&ent=" + orgEnt;
    if (window.location.pathname.includes('invoice/checker')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;

  }
  const finInvoiceRecordPayment = bodyPermission.querySelectorAll(`[perm='fin-invoice-record-payment']`)
  if (role_allowedPermissionArr.includes('recordPaymentInv'))
    finInvoiceRecordPayment.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finInvoiceRecordPayment.forEach((ele) => {ele.classList.add("hidden")})
  }

  const finInvoiceDel = bodyPermission.querySelectorAll(`[perm='fin-invoice-del']`)
  if (role_allowedPermissionArr.includes('delInv'))
    finInvoiceDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finInvoiceDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const finPayroll = bodyPermission.querySelectorAll(`[perm='fin-payroll']`)
  if (role_allowedPermissionArr.includes('viewPayroll'))
    finPayroll.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayroll.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('payroll/')) window.location.href = '../' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  const finPayrollAdd = bodyPermission.querySelectorAll(`[perm='fin-payroll-add']`)
  if (role_allowedPermissionArr.includes('addPayroll'))
    finPayrollAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayrollAdd.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('payroll/run-payroll')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;

  }
  const finPayrollEdit = bodyPermission.querySelectorAll(`[perm='fin-payroll-edit']`)
  if (role_allowedPermissionArr.includes('editPayroll'))
    finPayrollEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayrollEdit.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('payroll/history')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  const finPayrollDel = bodyPermission.querySelectorAll(`[perm='fin-payroll-del']`)
  if (role_allowedPermissionArr.includes('delPayroll'))
    finPayrollDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayrollDel.forEach((ele) => {ele.classList.add("hidden")})
  }
  const finPayslipView = bodyPermission.querySelectorAll(`[perm='fin-payslip-view']`)
  if (role_allowedPermissionArr.includes('viewPayslip')){
    // finPayslipView.forEach((ele) => {ele.classList.remove("hidden")})
    if (window.location.pathname.includes('payroll/run-payroll'))
      finPayslipView.forEach((ele) => {ele.setAttribute('data-toggle', 'collapse')})
    else if (window.location.pathname.includes('payroll/?'))
      finPayslipView.forEach((ele) => {ele.setAttribute('data-toggle', 'modal')})
  }
  else {
    // finPayslipView.forEach((ele) => {ele.classList.add("hidden")})
    finPayslipView.forEach((ele) => {ele.removeAttribute('data-toggle')})
  }

  const finPayslipAdd = bodyPermission.querySelectorAll(`[perm='fin-payslip-add']`)
  if (role_allowedPermissionArr.includes('addPayslip'))
  finPayslipAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayslipAdd.forEach((ele) => {ele.classList.add("hidden")})
  }
  const finPayslipEdit = bodyPermission.querySelectorAll(`[perm='fin-payslip-edit']`)
  if (role_allowedPermissionArr.includes('editPayslip'))
  finPayslipEdit.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayslipEdit.forEach((ele) => {ele.classList.add("hidden")})
  }
  const finPayslipRecordPayment = bodyPermission.querySelectorAll(`[perm='fin-payslip-record-payment']`)
  if (role_allowedPermissionArr.includes('recordPaymentPayslip')){
    finPayslipRecordPayment.forEach((ele) => {ele.classList.remove("hidden")})
  }
  else {
    finPayslipRecordPayment.forEach((ele) => {ele.classList.add("hidden")})
  }

  const finPayslipDel = bodyPermission.querySelectorAll(`[perm='fin-payslip-del']`)
  if (role_allowedPermissionArr.includes('delPayslip'))
  finPayslipDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finPayslipDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const finTransaction = bodyPermission.querySelectorAll(`[perm='fin-transaction']`)
  if (role_allowedPermissionArr.includes('viewInv') || role_allowedPermissionArr.includes('viewPayroll'))
    finTransaction.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    finTransaction.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('transaction/')) window.location.href = '../' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  const settings = bodyPermission.querySelectorAll(`[perm='settings']`)
  if (role_allowedPermissionArr.includes('editAccountProfile'))
    settings.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    settings.forEach((ele) => {ele.classList.add("hidden")})
    if (window.location.pathname.includes('transaction/settings')) window.location.href = './' +'?url=' + orgUrl + "&ent=" + orgEnt;

  }
  const team = bodyPermission.querySelectorAll(`[perm='team']`)
  if (role_allowedPermissionArr.includes('viewAdmin') || role_allowedPermissionArr.includes('viewStaff') || role_allowedPermissionArr.includes('viewAssistant')){
    team.forEach((ele) => {ele.classList.remove("hidden")})
    team.forEach((ele) => {ele.classList.remove("pointer-events-none")})
  }
  else {
    team.forEach((ele) => {ele.classList.add("hidden")})
    team.forEach((ele) => {ele.classList.add("pointer-events-none")})
    if (window.location.pathname.includes('team/')) window.location.href = '../' +'?url=' + orgUrl + "&ent=" + orgEnt;
  }
  const teamAdd = bodyPermission.querySelectorAll(`[perm='team-add']`)
  if (role_allowedPermissionArr.includes('addAdmin') || role_allowedPermissionArr.includes('addStaff') || role_allowedPermissionArr.includes('addAssistant')){
    teamAdd.forEach((ele) => {ele.classList.remove("hidden")})
  }
  else {
    teamAdd.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teamAdminAdd = bodyPermission.querySelectorAll(`[perm='team-admin-add']`)
  if (role_allowedPermissionArr.includes('addAdmin'))
    teamAdminAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teamAdminAdd.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teamAdminEdit = bodyPermission.querySelectorAll(`[perm='team-admin-edit']`)
  if (role_allowedPermissionArr.includes('editAdmin')){
    teamAdminEdit.forEach((ele) => {ele.classList.remove("pointer-events-none")})
  }
  else {
    teamAdminEdit.forEach((ele) => {ele.classList.add("pointer-events-none")})
  }
  const teamAdminDel = bodyPermission.querySelectorAll(`[perm='team-admin-del']`)
  if (role_allowedPermissionArr.includes('delAdmin'))
    teamAdminDel.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teamAdminDel.forEach((ele) => {ele.classList.add("hidden")})
  }

  const teamStaffAdd = bodyPermission.querySelectorAll(`[perm='team-staff-add']`)
  if (role_allowedPermissionArr.includes('addStaff'))
  teamStaffAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teamStaffAdd.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teamStaffEdit = bodyPermission.querySelectorAll(`[perm='team-staff-edit']`)
  if (role_allowedPermissionArr.includes('editStaff')){
    teamStaffEdit.forEach((ele) => {ele.classList.remove("pointer-events-none")})
  }
  else {
    teamStaffEdit.forEach((ele) => {ele.classList.add("pointer-events-none")})
  }
  const teamAssistantAdd = bodyPermission.querySelectorAll(`[perm='team-assistant-add']`)
  if (role_allowedPermissionArr.includes('addAssistant'))
  teamAssistantAdd.forEach((ele) => {ele.classList.remove("hidden")})
  else {
    teamAssistantAdd.forEach((ele) => {ele.classList.add("hidden")})
  }
  const teamAssistantEdit = bodyPermission.querySelectorAll(`[perm='team-assistant-edit']`)
  if (role_allowedPermissionArr.includes('editAssistant')){
    teamAssistantEdit.forEach((ele) => {ele.classList.remove("pointer-events-none")})
  }
  else {
    teamAssistantEdit.forEach((ele) => {ele.classList.add("pointer-events-none")})
  }
  // Redirection




  if (role_empRole === ORG_ROLE_OWNER || role_empRole === ORG_ROLE_SUPER_ADMIN ) updateOwnerRoleView();
  // Owner / SuperAdmin update
  function updateOwnerRoleView()
  {
    insight.forEach((ele) => {ele.classList.remove("hidden")})
    teachHome.forEach((ele) => {ele.classList.remove("hidden")})
    teachClass.forEach((ele) => {ele.classList.remove("hidden")})
    teachClassAdd.forEach((ele) => {ele.classList.remove("hidden")})
    teachClassEdit.forEach((ele) => {ele.classList.remove("hidden")})
    teachClassDel.forEach((ele) => {ele.classList.remove("hidden")})
    teachLessonAdd.forEach((ele) => {ele.classList.remove("hidden")})
    teachLessonEdit.forEach((ele) => {ele.classList.remove("hidden")})
    teachLessonDel.forEach((ele) => {ele.classList.remove("hidden")})

    teachStudent.forEach((ele) => {ele.classList.remove("hidden")})
    teachStudentAdd.forEach((ele) => {ele.classList.remove("hidden")})
    // teachStudentEdit.forEach((ele) => {ele.classList.remove("hidden")})
    // teachStudentDel.forEach((ele) => {ele.classList.remove("hidden")})

    teachTeacher.forEach((ele) => {ele.classList.remove("hidden")})
    finHome.forEach((ele) => {ele.classList.remove("hidden")})
    finInvoice.forEach((ele) => {ele.classList.remove("hidden")})
    finPayroll.forEach((ele) => {ele.classList.remove("hidden")})
    finTransaction.forEach((ele) => {ele.classList.remove("hidden")})
    settings.forEach((ele) => {ele.classList.remove("hidden")})
    team.forEach((ele) => {ele.classList.remove("hidden")})
  }
}


// Update all the link in org
function updateParamLink (){
  var eleList = document.querySelectorAll('a[name="param-link"]');
  var url_string = window.location.href;
  var url = new URL(url_string);
  var orgUrl = url.searchParams.get("url"); // url
  var orgEnt = url.searchParams.get("ent"); // ent

  var urlParam = "?url=" + orgUrl + "&ent=" + orgEnt;
  eleList.forEach((ele) => {
    let href = ele.href;
    // console.log(href)
    let newHref = href + urlParam;
    ele.href =newHref;
  })
}
updateParamLink ();



$( document ).ready(function() {
  // Sign Out
  $('#btnSignOutModalUpdate').on('click', function (e) {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      }).catch((error) => {
        window.alert("Logging out failed");
        func.showNotification('top','center', 'danger', 'error_outline', "Logging out failed." );
      });
  });

});

// ------ Load Organization / Account entity. ------ //
async function loadOrg(){

  // Get the Org / Entity docs from sessionStorage or reload it
  // Get all the Org User roles linked to the entity
  var url_string = window.location.href;
  var url = new URL(url_string);
  var orgUrl = url.searchParams.get("url"); // url
  var orgEnt = url.searchParams.get("ent"); // ent
  var pathArray = window.location.pathname.split('/');
  var type = (pathArray[1] === 'account') ? ORG_TYPE_ACC : ((pathArray[1] === 'organization') ? ORG_TYPE_ORG : 'INVALID')

  if (orgUrl == null || orgUrl == "" || orgEnt == null || orgEnt == "" || type === 'INVALID'){
    alert("LoadOrg: Invalid params or path. Redirect to home page")
    console.log("LoadOrg: Invalid params or path")
    window.location.href = 'http://org.golearn.com.my/'
  }
  else {

    if (sessionStorage.getItem(SESSION_STORAGE_ORG_ENTITY) == null ){
      console.log("Entity / Account / Organization does not exist.")
      // Although user exist, but the storage is null. Reload.
      await loadOrgInfo(orgEnt, type);
    }
    else if ( sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER_ROLE) == null ){
      console.log("Role does not exist.")
      // Although user exist, but the storage is null. Reload.
      await loadOrgInfo(orgEnt, type);
    }
    else{
      // ----- Get the entity if already existed ----- //
      let allDataObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_ORG_ENTITY))
      let entFounded = false;
      allDataObj.forEach((data, index) => {
        if (data.id === orgEnt){
          // console.log(data.id + " found in sessionStorage.")
          entFounded = true;
          // UPDATE GLOBAL VAR
          ent_id = data[ORG_ORG_ID];
          ent_url = data[ORG_ORG_URL];
          ent_orgId = data[ORG_ORG_ORG_ID];
          ent_accIdArr = data[ORG_ORG_ACC_ID_ARR];
          ent_oid = data[ORG_ORG_OID];
          ent_aid = data[ORG_ORG_AID];
          ent_type = data[ORG_ORG_TYPE];
          ent_lastOnline = data[ORG_ORG_LAST_ONLINE];
          ent_rating = data[ORG_ORG_RATING];
          ent_ratingTimes = data[ORG_ORG_RATING_TIMES];
          ent_ratingFinal = data[ORG_ORG_RATING_FINAL];
          ent_accountStatus = data[ORG_ORG_STATUS];
          ent_name = data[ORG_ORG_NAME];
          ent_phone = data[ORG_ORG_PHONE];
          ent_email = data[ORG_ORG_EMAIL];
          ent_addr = data[ORG_ORG_ADDRESS];
          ent_areaId = data[ORG_ORG_AREA];
          ent_stateId = data[ORG_ORG_STATE];
          ent_imgUrl = data[ORG_ORG_IMG_URL];
          ent_coverImgUrl = data[ORG_ORG_COVER_IMG_URL];
          ent_oneLiner = data[ORG_ORG_ONE_LINER];
          ent_intro = data[ORG_ORG_INTRO];
          ent_lan = data[ORG_ORG_LAN];
          ent_timeSlotArr = data[ORG_ORG_TIME_SLOT_ARR];
          ent_preferredSubArr = data[ORG_ORG_PREFERRED_SUBJECT_ARR];
          ent_corp = data[ORG_ORG_CORP];
          ent_corpId = data[ORG_ORG_CORP_ID];
          ent_adminStatus = data[ORG_ORG_ADMIN_STATUS]

        }
      })
      if (!entFounded){
        console.log("SESSION_STORAGE_ORG_ENTITY exits, but it wasn't the same with the url param. Reload")

        await loadOrgInfo(orgEnt, type); // Entity is not stored. Reload
      }
      else {
        console.log("Entity exits, update Entity View")

        updateEntityView();
      }

      // ----- Get the role if already existed  ----- //
      let allRoleDataObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_PROFILE_ORG_USER_ROLE))
      let roleFounded = false;
      allRoleDataObj.forEach((data, index) => {
        if ( ( orgEnt == data[ORG_ROLE_ORG_ID]  ||  orgEnt == data[ORG_ROLE_ACC_ID] ) && type == data[ORG_ROLE_TYPE] ){
          // console.log(data.id + " found in sessionStorage.")
          roleFounded = true;
          // UPDATE GLOBAL VAR
          role_id = data[ORG_ROLE_ID]
          role_uid = data[ORG_ROLE_UID]
          role_url = data[ORG_ROLE_URL]
          role_orgId = data[ORG_ROLE_ORG_ID]
          role_accId = data[ORG_ROLE_ACC_ID]
          role_type = data[ORG_ROLE_TYPE]
          role_oid = data[ORG_ROLE_OID]
          role_empStatus = data[ORG_ROLE_EMP_STATUS]
          role_empId = data[ORG_ROLE_EMP_ID]
          role_empName = data[ORG_ROLE_EMP_NAME]
          role_empPhone = data[ORG_ROLE_EMP_PHONE]
          role_empEmail = data[ORG_ROLE_EMP_EMAIL]
          role_empImgUrl = data[ORG_ROLE_EMP_IMG_URL]
          role_empRef = data[ORG_ROLE_EMP_REF]
          role_empTitle = data[ORG_ROLE_EMP_TITLE]
          role_empRole = data[ORG_ROLE_EMP_ROLE]
          role_allowedPermissionArr = data[ORG_ROLE_ALLOWED_PERMISSION_ARR]
          role_orgName = data[ORG_ROLE_ORG_NAME]
          role_orgImgUrl = data[ORG_ROLE_ORG_IMG_URL]
          role_orgCoverImgUrl = data[ORG_ROLE_ORG_COVER_IMG_URL]
        }
      })
      if (!roleFounded && type !== 'INVALID') {
        console.log("Role doesn't exits, but it wasn't the same with the url param. Reload")

        await loadOrgInfo(orgEnt, type); // Role is not stored. Reload

      }else {
        console.log("Role exits, update Role View")
        updateRoleView()
      }

      // ----- Check if reload is needed  ----- //
      let secondLastOnline = ent_lastOnline.seconds;
      let secondCurrent = new Date().getTime() / 1000;
      let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
      let reload = hoursEllapsed > 6;

      // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload);
      if (reload){
        console.log("SESSION_STORAGE_ORG_ENTITY exits, ent_lastOnline: "+hoursEllapsed+", reload true")
        await loadOrgInfo(orgEnt, type);
      }
      else {
        console.log("SESSION_STORAGE_ORG_ENTITY exits, ent_lastOnline: "+hoursEllapsed+", reload false")

        // Update Entity view
        // updateEntityView()

        // Update view based on role & permission
        // updateRoleView()

        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc();

        // // Update Last Online
        // let orgLastOnlineRef = db.collection("org")
        //   .doc('v1')
        //   .collection('org')
        //   .doc(orgEnt);
        // orgLastOnlineRef.update({
        //   [ORG_ORG_LAST_ONLINE] : new Date(),
        // })
      }

    }

  }


}

async function loadOrgInfo(entId, type){
  var promiseArr = []
  // Load the entity (org / acc) to be stored
  var entityDocRef =
    db.collection("org")
      .doc('v1')
      .collection('org')
      .doc(entId)

  promiseArr.push(entityDocRef.get())

  // Check if current Org User hold any 'role' in this entity

  var roleDocRef = null;

  if (type === ORG_TYPE_ORG){
    roleDocRef =
      db.collection("org")
        .doc('v1')
        .collection('role')
        .where(ORG_ROLE_ORG_ID, '==', entId)
        .where(ORG_ROLE_TYPE, '==', ORG_TYPE_ORG)
        .where(ORG_ROLE_UID, '==', org_uid)
  }
  else { // ORG_TYPE_ACC
    roleDocRef =
      db.collection("org")
        .doc('v1')
        .collection('role')
        .where(ORG_ROLE_ACC_ID, '==', entId)
        .where(ORG_ROLE_TYPE, '==', ORG_TYPE_ACC)
        .where(ORG_ROLE_UID, '==', org_uid)
  }

  promiseArr.push(roleDocRef.get())

  const OrgInfoAndRole = Promise.all(promiseArr)
  .then((snapshots) => {
    if (snapshots[0].exists){
      // console.log(snapshots[0].data())
      // snapshots[1].forEach((doc) => {
      //   console.log(doc.data())
      // })
      // console.log(snapshots[1].size )

      // If the Org user owned this account OR this user has a role(s) in this account.
      if (snapshots[0].data[ORG_ORG_OID] === org_uid || snapshots[1].size > 0){
        // Store Org User in Session
        storeOrgEntitySession(snapshots[0].data())

        // Get the role's permissions
        var allRoleDataObj = [];
        snapshots[1].forEach((doc) => {

          console.log(doc.data())

          let data = doc.data();

          role_id = data[ORG_ROLE_ID]
          role_uid = data[ORG_ROLE_UID]
          role_url = data[ORG_ROLE_URL]
          role_orgId = data[ORG_ROLE_ORG_ID]
          role_accId = data[ORG_ROLE_ACC_ID]
          role_type = data[ORG_ROLE_TYPE]
          role_oid = data[ORG_ROLE_OID]
          role_empStatus = data[ORG_ROLE_EMP_STATUS]
          role_empId = data[ORG_ROLE_EMP_ID]
          role_empName = data[ORG_ROLE_EMP_NAME]
          role_empPhone = data[ORG_ROLE_EMP_PHONE]
          role_empEmail = data[ORG_ROLE_EMP_EMAIL]
          role_empImgUrl = data[ORG_ROLE_EMP_IMG_URL]
          role_empRef = data[ORG_ROLE_EMP_REF]
          role_empTitle = data[ORG_ROLE_EMP_TITLE]
          role_empRole = data[ORG_ROLE_EMP_ROLE]
          role_allowedPermissionArr = data[ORG_ROLE_ALLOWED_PERMISSION_ARR]
          role_orgName = data[ORG_ROLE_ORG_NAME]
          role_orgImgUrl = data[ORG_ROLE_ORG_IMG_URL]
          role_orgCoverImgUrl = data[ORG_ROLE_ORG_COVER_IMG_URL]

          var dataObj = {
            [ORG_ROLE_ID] : data[ORG_ROLE_ID],
            [ORG_ROLE_UID] : data[ORG_ROLE_UID],
            [ORG_ROLE_URL] : data[ORG_ROLE_URL],
            [ORG_ROLE_ORG_ID] : data[ORG_ROLE_ORG_ID],
            [ORG_ROLE_ACC_ID] :data[ORG_ROLE_ACC_ID],
            [ORG_ROLE_TYPE] :data[ORG_ROLE_TYPE],
            [ORG_ROLE_OID] :data[ORG_ROLE_OID],
            [ORG_ROLE_EMP_STATUS] :data[ORG_ROLE_EMP_STATUS],
            [ORG_ROLE_EMP_ID] :data[ORG_ROLE_EMP_ID],
            [ORG_ROLE_EMP_NAME] :data[ORG_ROLE_EMP_NAME],
            [ORG_ROLE_EMP_PHONE]  : data[ORG_ROLE_EMP_PHONE],
            [ORG_ROLE_EMP_EMAIL]  : data[ORG_ROLE_EMP_EMAIL],
            [ORG_ROLE_EMP_IMG_URL]  : data[ORG_ROLE_EMP_IMG_URL],
            [ORG_ROLE_EMP_REF] : data[ORG_ROLE_EMP_REF],
            [ORG_ROLE_EMP_TITLE] : data[ORG_ROLE_EMP_TITLE],
            [ORG_ROLE_EMP_ROLE] : data[ORG_ROLE_EMP_ROLE],
            [ORG_ROLE_ALLOWED_PERMISSION_ARR] : data[ORG_ROLE_ALLOWED_PERMISSION_ARR],
            [ORG_ROLE_ORG_NAME] : data[ORG_ROLE_ORG_NAME],
            [ORG_ROLE_ORG_IMG_URL] :data[ORG_ROLE_ORG_IMG_URL],
            [ORG_ROLE_ORG_COVER_IMG_URL] :data[ORG_ROLE_ORG_COVER_IMG_URL],
          }

          allRoleDataObj.push(dataObj)
        })
       // Store role(s) in storage
       sessionStorage.setItem(SESSION_STORAGE_PROFILE_ORG_USER_ROLE, JSON.stringify(allRoleDataObj));


        // ----- Update page view ----- //
        updateEntityView()

        // ----- Update role view ----- //
        updateRoleView()

        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc();


        // Update Last Online
        let orgLastOnlineRef = db.collection("org")
          .doc('v1')
          .collection('org')
          .doc(entId);
        orgLastOnlineRef.update({
          [ORG_ORG_LAST_ONLINE] : new Date(),
        })

      }
      else{
        console.log('Not an owner or No role found. Redirect back to home page')
        window.location.href = "http://org.golearn.com.my/"
      }


    }
    else {
      console.log('Entity does not exist: '+entId + " Redirect back to home page")
      window.location.href = "http://org.golearn.com.my/"
    }


  }).then(() => {

  })

  await OrgInfoAndRole;

}

function storeOrgEntitySession(data){
  // Update to Global vars
  ent_id = data[ORG_ORG_ID];
  ent_url = data[ORG_ORG_URL];
  ent_orgId = data[ORG_ORG_ORG_ID];
  ent_accIdArr = data[ORG_ORG_ACC_ID_ARR];
  ent_oid = data[ORG_ORG_OID];
  ent_aid = data[ORG_ORG_AID];
  ent_type = data[ORG_ORG_TYPE];
  ent_lastOnline = data[ORG_ORG_LAST_ONLINE];
  ent_rating = data[ORG_ORG_RATING];
  ent_ratingTimes = data[ORG_ORG_RATING_TIMES];
  ent_ratingFinal = data[ORG_ORG_RATING_FINAL];
  ent_accountStatus = data[ORG_ORG_STATUS];
  ent_name = data[ORG_ORG_NAME];
  ent_phone = data[ORG_ORG_PHONE];
  ent_email = data[ORG_ORG_EMAIL];
  ent_addr = data[ORG_ORG_ADDRESS];
  ent_areaId = data[ORG_ORG_AREA];
  ent_stateId = data[ORG_ORG_STATE];
  ent_imgUrl = data[ORG_ORG_IMG_URL];
  ent_coverImgUrl = data[ORG_ORG_COVER_IMG_URL];
  ent_oneLiner = data[ORG_ORG_ONE_LINER];
  ent_intro = data[ORG_ORG_INTRO];
  ent_lan = data[ORG_ORG_LAN];
  ent_timeSlotArr = data[ORG_ORG_TIME_SLOT_ARR];
  ent_preferredSubArr = data[ORG_ORG_PREFERRED_SUBJECT_ARR];
  ent_corp = data[ORG_ORG_CORP];
  ent_corpId = data[ORG_ORG_CORP_ID];
  ent_adminStatus = data[ORG_ORG_ADMIN_STATUS]

  var dataObj = {
    [ORG_ORG_ID] : data[ORG_ORG_ID],
    [ORG_ORG_URL] : data[ORG_ORG_URL],
    [ORG_ORG_ORG_ID] : data[ORG_ORG_ORG_ID],
    [ORG_ORG_ACC_ID_ARR] : data[ORG_ORG_ACC_ID_ARR],
    [ORG_ORG_OID] :data[ORG_ORG_OID],
    [ORG_ORG_AID] :data[ORG_ORG_AID],
    [ORG_ORG_TYPE] :data[ORG_ORG_TYPE],
    [ORG_ORG_LAST_ONLINE] :data[ORG_ORG_LAST_ONLINE],
    [ORG_ORG_RATING] :data[ORG_ORG_RATING],
    [ORG_ORG_RATING_TIMES] : data[ORG_ORG_RATING_TIMES],
    [ORG_ORG_RATING_FINAL] : data[ORG_ORG_RATING_FINAL],
    [ORG_ORG_STATUS] : data[ORG_ORG_STATUS],
    [ORG_ORG_NAME] : data[ORG_ORG_NAME],
    [ORG_ORG_PHONE] :data[ORG_ORG_PHONE],
    [ORG_ORG_EMAIL] :data[ORG_ORG_EMAIL],
    [ORG_ORG_ADDRESS] :data[ORG_ORG_ADDRESS],
    [ORG_ORG_AREA] :data[ORG_ORG_AREA],
    [ORG_ORG_STATE] :data[ORG_ORG_STATE],
    [ORG_ORG_IMG_URL] : data[ORG_ORG_IMG_URL],
    [ORG_ORG_COVER_IMG_URL] : data[ORG_ORG_COVER_IMG_URL],
    [ORG_ORG_ONE_LINER] : data[ORG_ORG_ONE_LINER],
    [ORG_ORG_INTRO] : data[ORG_ORG_INTRO],
    [ORG_ORG_LAN] :data[ORG_ORG_LAN],
    [ORG_ORG_TIME_SLOT_ARR] :data[ORG_ORG_TIME_SLOT_ARR],
    [ORG_ORG_PREFERRED_SUBJECT_ARR] :data[ORG_ORG_PREFERRED_SUBJECT_ARR],
    [ORG_ORG_CORP] :data[ORG_ORG_CORP],
    [ORG_ORG_CORP_ID] :data[ORG_ORG_CORP_ID],
    [ORG_ORG_ADMIN_STATUS] : data[ORG_ORG_ADMIN_STATUS],

  }
  // console.log(dataObj)
  var allDataObj = [];

  // var testArr = [];
  if (sessionStorage.getItem(SESSION_STORAGE_ORG_ENTITY) == null ){

    allDataObj.push(dataObj)

    // testArr = JSON.parse(sessionStorage.getItem('item'))
    // testArr.push({'a': 1, 'b': 123})
  }
  else{
    allDataObj = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_ORG_ENTITY))
    // console.log(allDataObj)

    // Update the item sessionStorage if already existed
    let pushNew = true;
    allDataObj.forEach((item, index) => {
      if (item.id === data[ORG_ORG_ID]){
        allDataObj[index] = dataObj;
        pushNew = false;
      }
    })

    if (pushNew)
      allDataObj.push(dataObj)

    // testArr = JSON.parse(sessionStorage.getItem('item'))
    // testArr.push({'c': 1, 'd': 123})

  }

  sessionStorage.setItem(SESSION_STORAGE_ORG_ENTITY, JSON.stringify(allDataObj));
  // sessionStorage.setItem('item', JSON.stringify(testArr));
}


// Sign out
function signOutFunction(){
  // $('#signOutModal').modal('show');
  $("#signOutModal").appendTo("body");
}

// Append Modal to Body
// Note: This hack is to (1) make sure the long model scrollable on open &
//       (2) signout Modal open normally.
function appendModal(modalId){
  $("#"+modalId).appendTo("body");
}

// Generate avatar for invalid img
function generateAvatar(text, foregroundColor, backgroundColor, fontSize) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 200;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = "bold "+fontSize+" Arial";
  context.fillStyle = foregroundColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL("image/png");
}

// ------ Notification ------//
func = {
  showNotification: function(from, align, type, material_icon, message) {
    // type = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];
    // color = Math.floor((Math.random() * 6) + 1);
    $.notify({
      icon: material_icon,
      message: message

    }, {
      type: type,
      timer: 3000,
      placement: {
        from: from,
        align: align
      }
    });
  },
}

// This function checks some exception cases for domain that dont show correct img when used with
// http://www.google.com/s2/favicons?domain=domain.com
function checkDomainNameException(url){
  // const str = 'hello world!';
  let result_web_wa = /web.whatsapp.com/.test(url);
  let result_chat_wa = /chat.whatsapp.com/.test(url);
  let result_us04web_zoom = /us04web.zoom.us/.test(url);
  let result_us05web_zoom = /us05web.zoom.us/.test(url);
  let result_us06web_zoom = /us04web.zoom.us/.test(url);
  let result_us07web_zoom = /us05web.zoom.us/.test(url);
  let result_us08web_zoom = /us04web.zoom.us/.test(url);
  let result_us09web_zoom = /us05web.zoom.us/.test(url);
  let result_teams_microsoft = /teams.microsoft.com/.test(url);
  let result_classroom_google = /classroom.google.com/.test(url);

  // console.log(url)
  // console.log(result_web_wa, result_chat_wa);

  if (result_web_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_chat_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_us04web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us05web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us06web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us07web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us08web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us09web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_teams_microsoft) return "https://org.golearn.com.my/assets/img/favicon-teams-32x32.png";
  else if (result_classroom_google) return "https://org.golearn.com.my/assets/img/favicon-googleclassroom-32x32.png";
  else return "http://www.google.com/s2/favicons?domain="+url;
}

// Report: Update General Report
async function updateGeneralReportNum(adminId, type, dir, value){
  // Note:
  // adminId = adminId of a document at Report > v1 > General > [docId]
  // type = NUM_TYPE_CLASS, NUM_TYPE_TEACHER, NUM_TYPE_STUDENT, ...
  // dir = 'asc' = increment or 'desc' = decrement.
  // value = a positive value to be increased / decreased
  // Example  updateGeneralReportNum(adminId, NUM_TYPE_CLASS, 'asc', 1)

  let docRef = db.collection("dev")
    .doc("v2")
    .collection("General")
    .where(NUM_ADMIN_ID, "==", adminId)
    .where(NUM_TYPE, "==", type);

  let promiseGeneralReport = docRef.get()

  const promise = Promise.resolve(promiseGeneralReport)
  .then((snapshot)=> {


    var promiseAllLayer2 = []
    console.log(snapshot)

    if(snapshot.size == 0 ) {
      console.log("Empty report. Create a new one ");
      let reportDocRef = db.collection("dev")
        .doc("v2")
        .collection("General")
        .doc();

      let numValue = 0;
      if (dir === 'asc') // Only accept increment
        numValue = 1
      else
        numValue = 0

      let reportData ={
        [NUM_ID]: reportDocRef.id,
        [NUM_ADMIN_ID]: adminId,
        [NUM_TYPE]: type,
        [NUM_VALUE]: numValue,
        [NUM_DATE_EDIT]: new Date(),
      }
      console.log(reportData)
      promiseAllLayer2.push( reportDocRef.set(reportData, { merge: true }))
    }
    else if (snapshot.size > 1) {
      console.log("More than 1 teacher number reports. Report Admin ");
      alert('More than 1 teacher number reports. Report Admin')

      snapshot.forEach((doc) => {
        // console.log(doc.data());
        let reportDocRef = db.collection("dev")
          .doc("v2")
          .collection("General")
          .doc(doc.data()[NUM_ID]);

        let numValue = 0;
        if (doc.data()[NUM_VALUE] == null || doc.data()[NUM_VALUE] == "" || doc.data()[NUM_VALUE] == 0 || isNaN(doc.data()[NUM_VALUE])){
          numValue = 1;
        }
        else {
          if (dir === 'asc')
            numValue = parseInt(doc.data()[NUM_VALUE]) + parseInt(value)
          else if (dir === 'desc')
            numValue = parseInt(doc.data()[NUM_VALUE]) - parseInt(value)
          else
            numValue = parseInt(doc.data()[NUM_VALUE])
        }

        let reportData ={
          [NUM_VALUE]: numValue,
          [NUM_DATE_EDIT]: new Date(),
        }
        console.log(reportData)
        promiseAllLayer2.push( reportDocRef.set(reportData, { merge: true }))

      });

    }
    // snapshot == 1
    else {
      snapshot.forEach((doc) => {
        // console.log(doc.data());
        let reportDocRef = db.collection("dev")
          .doc("v2")
          .collection("General")
          .doc(doc.data()[NUM_ID]);

        let numValue = 0;
        if (doc.data()[NUM_VALUE] == null || doc.data()[NUM_VALUE] == "" || doc.data()[NUM_VALUE] == 0 || isNaN(doc.data()[NUM_VALUE])){
          numValue = 1;
        }
        else {
          if (dir === 'asc')
            numValue = parseInt(doc.data()[NUM_VALUE]) + parseInt(value)
          else if (dir === 'desc')
            numValue = parseInt(doc.data()[NUM_VALUE]) - parseInt(value)
          else
            numValue = parseInt(doc.data()[NUM_VALUE])
        }

        let reportData ={
          [NUM_VALUE]: numValue,
          [NUM_DATE_EDIT]: new Date(),
        }
        console.log(reportData)
        promiseAllLayer2.push( reportDocRef.update(reportData))

      });

    }

  })

  await promise;
}
