// This is client core js
// Check if user logged on
function AuthCheck(){
  firebase.auth().onAuthStateChanged(function(user){
    if(!user){
      // Return to login if user does not exist.
      window.location.href = "https://app.golearn.com.my/"
    }else{
      // if the displayName is null, it means user register using Phone
      if (firebase.auth().currentUser.displayName == null )
        userId = firebase.auth().currentUser.phoneNumber;
      else
        userId = firebase.auth().currentUser.email.replace("[^a-zA-Z0-9]", "_").toLowerCase();
  
      loadClientInfoObj(userId); // client-core.js
  
    }
  });
}

// Set the nav name and global var, if user already login and have session Storage 
var clientInfoObj = null;
// Check If clientInfoObj exist
function loadClientInfoObj(userId){
  
  if (JSON.parse(sessionStorage.getItem(PROFILE_CLIENT_INFO)) == null ){
    // Although user exist, but the storage is null. Reload.
    loadUserInfo(userId);
  }
  else{
    // Set the nav user name
    clientInfoObj = JSON.parse(sessionStorage.getItem(PROFILE_CLIENT_INFO));
    current_id = (clientInfoObj.id == null || clientInfoObj.id == "") ? "NO_ID" : clientInfoObj.id; // This was added to check if different user is logged in on the same browser.
    current_name = (clientInfoObj.name == null || clientInfoObj.name == "")? "New Tutor" : clientInfoObj.name;
    current_email = (clientInfoObj.email == null || clientInfoObj.email == "")? "" : clientInfoObj.email; 
    current_phone = (clientInfoObj.phone == null || clientInfoObj.phone == "")? "New Tutor" : clientInfoObj.phone; 
    current_age = (clientInfoObj.age == null || clientInfoObj.age == "")? "18" : clientInfoObj.age; 
    current_gender= (clientInfoObj.gender == 0)? "Male" : "Female"; 
    current_imgUri = (clientInfoObj.imgUrl == null || clientInfoObj.imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : clientInfoObj.imgUrl;
    current_accountStatus = clientInfoObj.accountStatus; // bool
    current_address1= (clientInfoObj.address1 == null || clientInfoObj.address1 == "")? '' : clientInfoObj.address1 + ', ';
    current_address2= (clientInfoObj.address2 == null || clientInfoObj.address2 == "")? '' : clientInfoObj.address2 + ', '; 
    current_addressPostCode= (clientInfoObj.addressPostCode == null || clientInfoObj.addressPostCode == "")? '' : clientInfoObj.addressPostCode + ', ';
    current_addressState= (clientInfoObj.addressState == null || clientInfoObj.addressState == "")? '' : clientInfoObj.addressState;
    current_address = current_address1 + current_address2 + current_addressPostCode + current_addressState;
    current_uLastOnline = clientInfoObj.uLastOnline;

    // Check if user logged in with other number. If true, logout
    if (current_id != userId){
      // console.log("Stored userId in session storage is equal to latest tutorId. ")
      window.location.href = "https://app.golearn.com.my/client/login.html";
    }

    // let secondLastOnline = current_uLastOnline.seconds;
    // let secondCurrent = new Date().getTime() / 1000;
    // let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
    // let reload = hoursEllapsed > 6;
    // console.log(secondLastOnline, secondCurrent, hoursEllapsed, reload)

    // Check last online. If > 6hr, reload
    if (current_uLastOnline == null || current_uLastOnline == ""){
      // console.log("current_uLastOnline == null, loadUserInfo "+userId )
      loadUserInfo(userId);
    }else{
      let secondLastOnline = current_uLastOnline.seconds;
      let secondCurrent = new Date().getTime() / 1000;
      let hoursEllapsed = (secondCurrent - secondLastOnline) / 60 / 60;
      let reload = hoursEllapsed > 6;
      
      if (reload){
        // console.log("reload, loadUserInfo "+userId )
        loadUserInfo(userId);
      }
      else {
        // console.log("local storage found "+userId )
        // Update the general view
        updateGeneralView();
        // Finally, load page specific view.
        // This function will be declared separately in each page
        loadPageInitFunc(); 

        // Update last online 
        let docLastOnlineRef = db.collection("Users").doc(userId);
        docLastOnlineRef.set({
          [SYSTEM_LAST_ONLINE_KEY] : new Date() //firebase.firestore.Timestamp.fromDate(new Date())
          },{ merge: true }
        );

      }
    }


  }
}

function loadUserInfo(userId){
  // Tutor Id must be a phone with +60, no spacing or other chars
  var docRef = db.collection("Users").doc(userId);
  
  docRef.get().then((doc) => {
    if (doc.exists) {
      current_name = (doc.data().name == null || doc.data().name == "")? "New User" : doc.data().name;
      current_email = (doc.data().email == null || doc.data().email == "")? "" : doc.data().email;
      current_phone = (doc.data().phone == null || doc.data().phone == "")? "" : doc.data().phone; 
      current_imgUri = (doc.data().imgUrl == null || doc.data().imgUrl == "")? "https://app.golearn.com.my/assets/img/hello.gif" : doc.data().imgUrl;
      current_address1= (doc.data().address1 == null || doc.data().address1 == "")? '' : doc.data().address1 + ', ';
      current_address2= (doc.data().address2 == null || doc.data().address2 == "")? '' : doc.data().address2 + ', '; 
      current_addressPostCode= (doc.data().addressPostCode == null || doc.data().addressPostCode == "")? '' : doc.data().addressPostCode + ', ';
      current_addressState= (doc.data().addressState == null || doc.data().addressState == "")? '' : doc.data().addressState;
      current_address = current_address1 + current_address2 + current_addressPostCode + current_addressState;
      current_uLastOnline = doc.data()[SYSTEM_LAST_ONLINE_KEY]

      // Store data to sessionStorage
      var clientDataObj = {
        [ID_KEY] : userId, // This was added to check if different user is logged in on the same browser.
        [NAME_KEY] : doc.data()[NAME_KEY],
        [EMAIL_KEY] : doc.data()[EMAIL_KEY],
        [PHONE_KEY] : doc.data()[PHONE_KEY],
        [ADDRESS_1_KEY] :doc.data().address1,
        [ADDRESS_2_KEY] :doc.data().address2,
        [ADDRESS_POSTCODE_KEY] :doc.data().addressPostCode,
        [ADDRESS_STATE_KEY] :doc.data().addressState,
        [IMAGE_KEY] : doc.data().imgUrl,
        [SYSTEM_LAST_ONLINE_KEY] : doc.data()[SYSTEM_LAST_ONLINE_KEY],
      }

      // Set clientInfoObj as sessionStorage
      sessionStorage.setItem(PROFILE_CLIENT_INFO, JSON.stringify(clientDataObj));

      // Update the general view
      updateGeneralView();
      // Finally, load page specific view.
      // This function will be declared separately in each page
      loadPageInitFunc(); 

      // Update last online 
      let docLastOnlineRef = db.collection("Users").doc(userId);
      docLastOnlineRef.set({
        [SYSTEM_LAST_ONLINE_KEY] : new Date() //firebase.firestore.Timestamp.fromDate(new Date())
        },{ merge: true }
      );


    } 
    else {
      window.location = "https://app.golearn.com.my/"
    }
  });

};

// Update General View
function updateGeneralView(){
  // Set the nav user name and public profile link
  document.getElementById("user").textContent = current_name;

}


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

// Sign out
function signOutFunction(){
  // $('#signOutModal').modal('show');
  $("#signOutModal").appendTo("body");
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

// Function to show notification
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
  let result_teams_microsoft = /teams.microsoft.com/.test(url);
  let result_classroom_google = /classroom.google.com/.test(url);
  
  // console.log(url)
  // console.log(result_web_wa, result_chat_wa);

  if (result_web_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_chat_wa) return "http://www.google.com/s2/favicons?domain=https://whatsapp.com";
  else if (result_us04web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_us05web_zoom) return "http://www.google.com/s2/favicons?domain=https://zoom.us";
  else if (result_teams_microsoft) return "https://app.golearn.com.my/assets/img/favicon-teams-32x32.png";
  else if (result_classroom_google) return "https://app.golearn.com.my/assets/img/favicon-googleclassroom-32x32.png";
  else return "http://www.google.com/s2/favicons?domain="+url;
}