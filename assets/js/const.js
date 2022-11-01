// This file declare global constants
const MYAllState = ["Kuala Lumpur", "Selangor", "Penang", "Johor", "Melaka",
    "Negeri Sembilan", "Pahang", "Perak", "Terengganu", "Kelantan", "Kedah", "Sabah", "Sarawak",
    "Perlis", "Putrajaya", "Labuan"];
// const MYAllStateId = ["kuala lumpur","selangor","penang","johor","melaka",
//     "negeri sembilan", "pahang","perak", "terengganu","kelantan","kedah","sabah","sarawak",
//     "perlis", "putrajaya", "labuan"];
const MYAllStateId = ["kl", "sg", "pn", "jh", "mk",
    "ns", "ph", "pk", "tr", "kt", "kd", "sb", "sw",
    "pl", "pj", "lb"];

// Total place: 631
// const cityJohor = ["Gelang Patah","Kluang","Kota Tinggi","Kulai","Mersing",
//     "Muar","Nusajaya","Pasir Gudang","Permas Jaya","Pontian","Segamat","Senai",
//     "Skudai","Tampoi","Ulu Tiram"]; // 15

const cityJohor = [
    "Austin Heights","Bandar Baru Uda", "Bandar Dato Onn", "Bandar Seri Alam", "Batu Pahat", "Bukit Indah", "Gelang Patah", "Johor Bahru",
    "Johor Jaya", "Kangkar Pulai", "Kluang", "Kota Tinggi", "Kulai", "Larkin", "Masai", "Mersing", "Mount Austin", "Muar", "Mutiara Rini",
    "Nusajaya", "Pasir Gudang", "Permas Jaya", "Pontian", "Pulai Indah", "Segamat", "Senai", "Setia Tropika", "Skudai", "Taman Abad",
    "Taman Bukit Dahlia", "Taman Daya", "Taman Impian Emas", "Taman Molek", "Taman Johor Jaya", "Taman Pelangi", "Taman Perling", "Taman Puteri Wangsa",
    "Taman Rinting", "Taman Sri Tebrau", "Taman Setia Indah", "Taman Sutera Utama", "Taman Ungku Tun Aminah",
    "Taman University", "Tangkak", "Ulu Tiram"]; //45
const cityJohorId = [
    "jhAustinHeights", "jhBBUda", "jhBDOnn", "jhSAlm", "jhBPhat", "jhBIndah", "jhGelngPatah", "jhJB",
    "jhJJaya", "jhKngkarPulai", "jhKluang", "jhKTggi", "jhKlai", "jhLarkin", "jhMsai", "jhMrsg", "jhMAstin", "jhMuar", "jhMRni",
    "jhNsaJ", "jhPGdg", "jhPrmsJ", "jhPntian", "jhPulaiIndah", "jhSgmat", "jhSnai", "jhSTrpka", "jhSkdai", "jhTAbd",
    "jhTBDhlia", "jhTDya", "jhTIEmas", "jhTMlek", "jhTJJ", "jhTPlgi", "jhTPrlg", "jhTPtrWgsa",
    "jhTRntg", "jhTSTbrau", "jhTStiaIndah", "jhTSUtm", "jhTUTAminah",
    "jhTU", "jhTgkak", "jhUlTram"]; //45

// const cityKL = ["Bandar Tun Razak","Bangsar","Bukit Bintang","Kepong","Lembah Pantai",
//     "Nilai","Serdang","Seputeh","Wangsa Maju"]; //9

// const cityKL = [
//     "", "Ampang", "Bandar Sg Long", "Bandar Tun Razak", "Bangsar", "Bangsar South", "Brickfields", "Bukit Antarabangsa",
//     "Bukit Bintang", "Bukit Damansara", "Bukit Jalil", "Cheras", "Desa Park City", "Jalan Ipoh", "Kepong",
//     "Kerinchi", "KL Town", "Kuchai Lama", "Lembah Pantai", "Mont Kiara", "Selayang", "Sentul", "Setapak",
//     "Setiawangsa", "Sri Hartamas", "Sri Petaling", "Sungai Besi", "Taman Desa", "Taman Tun Dr Ismail",
//     "Wangsa Maju", "Taman Melawati"]; //29
// const cityKLId = [
//     "klAmpg", "klSgLg", "klBTRzk", "klBgsr", "klBSouth", "klBfields", "klBAnt",
//     "klBBntg", "klBDman", "klBJlil", "klChras", "klDPCity", "klJIph", "klKpg",
//     "klKrnchi", "klTwn", "klKLma", "klLPntai", "klMKiara", "klSlyg", "klSntul", "klStpk",
//     "klStiawgsa", "klSHtmas", "klSPtl", "klSgBs", "klTDsa", "klTTDI",
//     "klWMju", "klTMlwti"]; //29

const cityKL = [
    "Alam Damai", "Ampang, KL", "Bandar Sg Long", "Bandar Tun Razak", "Bangsar", "Bangsar South", "Brickfields", "Bukit Bintang", "Bukit Damansara", "Bukit Jalil",
    "Cheras, KL", "Chow Kit", "City Center (KLCC)", "Desa Pandan", "Desa Park City", "Jalan Ipoh", "Kepong, KL", "Kerinchi", "KL Town", "Kuchai Lama", "Lembah Keramat",
    "Lembah Pantai", "Menjalara", "Mont Kiara", "Oug", "Segambut", "Selayang, KL", "Sentul", "Seputeh", "Setapak", "Setiawangsa", "Sri Hartamas", "Sri Permaisuri",
    "Sri Petaling", "Sungai Besi", "Taman Bukit Segar", "Taman Connaught", "Taman Desa", "Taman Len Seng", "Taman Maluri", "Taman Melawati", "Taman Tun Dr Ismail (TDDI)",
    "Wangsa Maju"] //43

const cityKLId = [
    "klAlamDamai", "klAmpg", "klSgLg", "klBTRzk", "klBgsr", "klBSouth", "klBfields", "klBBntg", "klBDman", "klBJlil",
    "klChras", "klChowKit", "klKLCC", "klDesaPandan", "klDPCity", "klJIph", "klKpg", "klKrnchi", "klTwn", "klKLma", "klLKeramat",
    "klLPntai", "klMenjalara", "klMKiara", "klOug", "klSegambut", "klSlyg", "klSntul", "klSeputeh", "klStpk", "klStiawgsa", "klSHtmas", "klSPermaisuri",
    "klSPtl", "klSgBs", "klTBktSegar", "klTConnaught", "klTDsa", "klTLenSeng", "klTMaluri", "klTMlwti", "klTTDI",
    "klWMju"]


// const cityPenang = ["Air Itam","Bayan Lepas","Balik Pulau","Batu Ferringhi",
//     "Bukit Mertajam","Butterworth","Georgetown","Jelutong","Kulim","Nibong Tebal",
//     "Perai","Tasek Gelugor"];  //12

const cityPenang = [
    "Air Itam", "Balik Pulau", "Batu Ferringhi", "Batu Kawan", "Batu Lanchang", "Batu Maung", "Bayan Baru", "Bayan Lepas", "Bukit Mertajam",
    "Butterworth", "Gelugor", "Georgetown", "Jelutong", "Kepala Batas", "Kulim", "Nibong Tebal", "Perai",
    "Permatang Pauh", "Pulau Tikus", "Simpang Ampat", "Sungai Ara", "Sungai Jawi", "Tasek Gelugor", "Tanjung Bungah",
    "Tanjung Tokong", "Teluk Kumbar"]; //26

const cityPenangId = [
    "pnAItam", "pnBPulau", "pnBFerr", "pnBKwn", "pnBLnchg", "pnBMaung", "pnBBaru", "pnBLpas", "pnBMtjm",
    "pnBW", "pnGelugor", "pnGT", "pnJltg", "pnKBtas", "pnKlim", "pnNTbal", "pnPrai",
    "pnPPauh", "pnPTkus", "pnSAmpat", "pnSgAra", "pnSgJwi", "pnTGlgor", "pnTBgah",
    "pnTTkg", "pnTKmbar"]; //26

// const citySelangor = ["Ampang","Cheras","Damansara","Kajang","Kuala Selangor",
//     "Petaling Jaya","Puchong", "Putrajaya","Sabak Bernam","Shah Alam","Subang Jaya",
//     "Setapak"]; //12

// const citySelangor = [
//     "Ampang", "Bandar Baru Bangi", "Bangi", "Banting", "Batu Arang", "Batu Caves", "Cheras", "Cyberjaya",
//     "Damansara", "Dengkil", "Gombak", "Hulu Klang", "Hulu Langat", "Kajang", "Kapar", "Kepong", "Kelana Jaya",
//     "Klang", "Kota Kemuning", "Kuala Selangor", "Kuang", "Kundang", "Pandan", "Petaling Jaya", "Port Klang",
//     "Puchong", "Putra Heights", "Putrajaya", "Rawang", "Sabak Bernam", "Selayang", "Semenyih", "Seri Kembangan",
//     "Setia Alam", "Shah Alam", "Subang", "Subang Jaya", "Sungai Buloh", "Telok Panglima Garang"];//37

// const citySelangorId = [
//     "sgAmpg", "sgBBBgi", "sgBgi", "sgBntg", "sgBArg", "sgBCv", "sgChs", "sgCJ",
//     "sgDman", "sgDngkl", "sgGmbk", "sgHKlg", "sgHLgt", "sgKjg", "sgKpar", "sgKepg", "sgKJ",
//     "sgKlg", "sgKKmng", "sgKSlg", "sgKuang", "sgKndg", "sgPndan", "sgPJ", "sgPKlg",
//     "sgPchg", "sgPHeights", "sgPtraJ", "sgRwg", "sgSBrnm", "sgSlyg", "sgSmyh", "sgSKmbg",
//     "sgStiaA", "sgShA", "sgSbg", "sgSbgJ", "sgSgBloh", "sgTPGrg"];//37

const citySelangor = [
    "Alam Budiman", "Alam Impian", "Ampang", "Ampang Jaya", "Ampang Point", "Ara Damansara", "Balakong", "Bandar 16 Sierra",
    "Bandar Baru Bangi", "Bandar Baru Kajang", "Bandar Botanik", "Bandar Bukit Puchong", "Bandar Kinrara", "Bandar Mahkota Cheras", "Bandar Puchong Jaya",
    "Bandar Puteri", "Bandar Puteri Puchong", "Bandar Putra Permai", "Bandar Sunway", "Bandar Tasik Kesuma", "Bandar Teknologi Kajang",
    "Bandar Tun Hussein Onn", "Bandar Utama", "Bangi", "Banting", "Batang Kali", "Batu 9", "Batu Arang", "Batu Caves", "Beranang", "Bestari Jaya",
    "Broga", "Bukit Antarabangsa", "Bukit Jelutong", "Bukit Makhota", "Bukit Raja", "Bukit Rotan", "Bukit Serdang", "Bukit Tinggi", "Cheras", "Cyberjaya",
    "Damansara", "Damansara Damai", "Damansara Jaya", "Damansara Perdana", "Dengkil", "Gombak", "Hulu Klang", "Hulu Langat", "Jenjarom", "Jeram",
    "Kajang", "Kajang Perdana", "Kajang Utama", "Kampung Tunku", "Kapar", "Kelana Jaya", "Kepong", "Kerling", "Klang", "Klang Jaya", "Klang Utama",
    "KLIA", "Kota Damansara", "Kota Kemuning", "Kuala Kubu Baru", "Kuala Selangor", "Kuang", "Kundang", "Meru", "Mutiara Damansara",
    "Pandan Indah", "Petaling Jaya", "Port Klang", "Puchong", "Pulau Carey", "Pulau Indah", "Pulau Ketam", "Puncak Alam", "Puncak Jalil",
    "Puncak Perdana", "Putra Heights", "Putrajaya, Selangor", "Rasa", "Rawang", "Sabak Bernam", "Saujana Impian", "U16, Shah Alam", "Sekinchan", "Seksyen 17, Petaling Jaya",
    "Seksyen 19, Shah Alam", "Seksyen 7, Shah Alam", "Seksyen 9, Shah Alam", "Selayang", "Semenyih", "Sepang", "Serdang", "Serendah", "Seri Kembangan", "Setia Alam", "Shah Alam",
    "Sri Damansara", "SS 19", "SS 2", "Subang", "Subang Jaya", "Sungai Ayer Tawar", "Sungai Besar", "Sungai Buloh", "Sungai Chua", "Sungai Long",
    "Sungai Pelek", "Taman Alam Megah", "Taman Bukit Mewah", "Taman Gembira", "Taman Kinrara", "Taman Putra Perdana", "Taman Sentosa", "Taman Sri Andalas",
    "Taman Sri Serdang", "Taman Subang Mewah", "Tanjong Karang", "Tanjung Sepat", "Telok Panglima Garang", "Tropicana", "Ukay Perdana", "USJ"] //127

const citySelangorId = [
    "sgSAU10AlamBudiman", "sgSASec35", "sgAmpg", "sgAmpgJ", "sgAmpgPoint", "sgPJU1A", "sgBalakong", "sgB16Sierra",
    "sgBBBgi", "sgBBKjg", "sgBBotanik", "sgBBktPchg", "sgBKinrara", "sgBMakhotaCheras", "sgBPchgJ",
    "sgBPuteri", "sgBPuteriPchg", "sgBPutraPermai", "sgPJS7891011", "sgBTKesuma", "sgBTekKjg",
    "sgBTHusseinOnn", "sgPJU6", "sgBgi", "sgBntg", "sgBtgKali", "sgBatu9", "sgBArg", "sgBCv", "sgBerang", "sgBestariJ",
    "sgBroga", "sgBktAntarabangsa", "sgSAU8", "sgBktMakhota", "sgBktRaja", "sgBktRotan", "sgBSerdang", "sgBktTinggi", "sgChs", "sgCJ",
    "sgDman", "sgPJU10", "sgSS22", "sgPJU8", "sgDngkl", "sgGmbk", "sgHKlg", "sgHLgt", "sgJenjarom", "sgJeram",
    "sgKjg", "sgKjgPerdana", "sgKjgUtama", "sgSS1", "sgKpar", "sgKJ", "sgKepg", "sgKerling", "sgKlg", "sgKlgJaya", "sgKlgUtama",
    "sgKLIA", "sgPJU5", "sgKKmng", "sgKKubuBaru", "sgKSlg", "sgKuang", "sgKundang", "sgMeru", "sgPJU7",
    "sgPandanIndah", "sgPJ", "sgPKlg", "sgPchg", "sgPCarey", "sgPIndah", "sgPKetam", "sgSAU15", "sgPuncakJalil",
    "sgSAU10PuncakPerdana", "sgPHeights", "sgPtraJ", "sgRasa", "sgRwg", "sgSBrnm", "sgSaujImp", "sgSAU16", "sgSekinchan", "sgSek17",
    "sgSASec19", "sgSASec7", "sgSASec9", "sgSlyg", "sgSmyh", "sgSepang", "sgsSerdang", "sgSerendah", "sgSKmbg", "sgStiaA", "sgShA",
    "sgPJU9", "sgSS19", "sgSS2", "sgSbg", "sgSbgJ", "sgSgAyerTawar", "sgSgBesar", "sgSgBloh", "sgSgChua", "sgSgLong",
    "sgSgPelek", "sgSASec27", "sgTBMewah", "sgTGembira", "sgTKinrara", "sgTPutraPerdana", "sgTSentosa", "sgTSAndalas",
    "sgTSriSerdang", "sgUSJ1", "sgTnjKarang", "sgTnjSepat", "sgTPGrg", "sgPJU3", "sgUkay", "sgUSJ"]

// const cityKedah = ["Baling", "Bandar Baharu", "Kota Setar", "Kuala Muda",
//     "Kubang Pasu", "Kulim", "Langkawi", "Padang Terap", "Pendang", "Pokok Sena",
//     "Sik", "Yan"]; //12
const cityKedah = ["Alor Setar","Ayer Hitam","Baling","Bandar Baharu", "Bandar Puteri Jaya, Sungai Petani", "Bedong", "Bukit Kayu Hitam",
    "Changloon", "Gurun","Jeniang", "Jitra", "Karangan", "Kepala Batas, Kedah", "Kodiang", "Kota Kuala Muda",
    "Kota Sarang Semut", "Kuala Kedah", "Kuala Ketil", "Kuala Nerang", "Kuala Pegang", "Kulim, Kedah",
    "Kupang", "Langgar", "Langkawi", "Lunas", "Merbok", "Padang Serai", "Pendang", "Pokok Sena",
    "Serdang, Kedah", "Sik", "Simpang Empat", "Sungai Petani", "Taman Ria, Sungai Petani", "Taman Sejati Indah, Sungai Petani", "Universiti Utara Malaysia", "Yan"]; // 37

// const cityKedahId = ["kdBalg", "kdBBhr", "kdKStar", "kdKMda",
//     "kdKPsu", "kdKlim", "kdLgkawi", "kdPTrap", "kdPndg", "kdPSna",
//     "kdSik", "kdYan"]; //12
const cityKedahId = ["ktASetar","ktAHitam","kdBalg","kdBBhr", "kdBPtrJ", "ktBdg", "ktBKHitam",
    "ktChngln", "ktGerun","ktJniang", "ktJitra", "ktKrgn", "ktKplBatas", "ktKodiang", "ktKKMuda",
    "ktKSSemut", "ktKKedah", "ktKKetil", "ktKMerg", "ktKPegng", "kdKlim",
    "ktKpg", "ktLanggar", "kdLgkawi", "ktLunas", "ktMrbk", "ktPSerai", "kdPndg", "kdPSna",
    "ktSerdg", "kdSik", "ktSEmpat", "ktSgPetani", "ktTRia", "ktTSjtIndh", "ktUUM", "kdYan"];

// const cityKelantan = ["Bachok", "Gua Musang", "Jeli", "Kota Bharu",
//     "Kuala Krai", "Machang", "Pasir Mas", "Pasir Puteh", "Tanah Merah", "Tumpat"]; //10
const cityKelantan = ["Ayer Lanas", "Bachok", "Cherang Ruku", "Dabong",
    "Gua Musang", "Jeli", "Kem Desa Pahlawan", "Ketereh", "Kota Bharu", "Kuala Balah",
    "Kuala Krai", "Machang", "Melor", "Pasir Mas", "Pasir Puteh", "Pulai Chondong",
    "Rantau Panjang, Kelantan", "Selising", "Tanah Merah", "Temangan", "Tumpat", "Wakaf Bharu"]; //22

// const cityKelantanId = ["ktBchok", "ktGMusg", "ktJli", "ktKBhru",
//     "ktKKrai", "ktMachg", "ktPMas", "ktPPuteh", "ktTMrah", "ktTmpat"]; //10
const cityKelantanId = ["ktALnas", "ktBchok", "ktCherngRk", "ktDbg",
    "ktGMusg", "ktJli", "ktKDsPahlawn", "ktKtr", "ktKBhru", "ktKBlah",
    "ktKKrai", "ktMachg", "ktMelor", "ktPMas", "ktPPuteh", "ktPChndng",
    "ktRantPjng", "ktSelisg", "ktTMrah", "ktTmgan", "ktTmpat", "ktWkfBharu"];

// const cityMelaka = ["Alor Gajah", "Kota Melaka", "Jasin"]; //3
const cityMelaka = ["Alai", "Alor Gajah","Asahan", "Ayer Keroh", "Ayer Molek",
    "Bachang", "Batu Berendam", "Bemban", "Bukit Baru", "Bukit Beruang", "Bukit Katil", "Bukit Rambai", "Cheng",
    "Durian Tunggal", "Jasin","Kem Trendak", "Klebang", "Krubong",
    "Kuala Sungai Baru", "Lendu", "Lubok China", "Machap Baru", "Malim Jaya", "Masjid Tanah",
    "Melaka Raya", "Merlimau", "Nyalas", "Selandar", "Serkam", "Simpang Ampat, Melaka",
    "Sungai Rambai", "Sungai Udang", "Tanjung Bidara", "Tanjong Kling",
    "Telok Mas", "Ujong Pasir"]; //36
// const cityMelakaId = ["mkAGjh", "mkKMlka", "mkJsn"]; //3
const cityMelakaId = ["mkAlai", "mkAGjh","mkAshn", "mkAKerh", "mkAMolk",
    "mkBchg", "mkBBrdm", "mkBmbn", "mkBBru", "mkBBruang", "mkBKtil", "mkBRmbi", "mkChg",
    "mkDTggal", "mkJsn","mkKTrndk", "mkKlebg", "mkKrubg",
    "mkKSgBru", "mkLndu", "mkLChina", "mkMchpBru", "mkMlmJ", "mkMasjTnh",
    "mkMRaya", "mkMlimau", "mkNyals", "mkSldar", "mkSkam", "mkSAmpat",
    "mkSgRmbai", "mkSgUdg", "mkTBdr", "mkTKlng",
    "mkTlkMas", "mkUjgPasir"];

// const cityNegeriSembilan = ["Jelebu", "Jempol", "Kuala Pilah", "Port Dickson",
//     "Rembau", "Seremban", "Tampin"]; //7
const cityNegeriSembilan = ["Ampangan", "Bahau", "Bandar Ainsdale","Bandar Baru Nilai",
    "Bandar Enstek", "Bandar Seri Jempol", "Bandar Springhill", "Bandar Sri Sendayan",
    "Batu Kikir", "Gemas", "Gemencheh", "Johol", "Kota", "Kuala Klawang", "Kuala Pilah",
    "Labu", "Lavender Heights", "Linggi", "Lukut", "Mambau", "Mantin", "Nilai", "Paroi", "Port Dickson",
    "Pusat Bandar Palong", "Rantau", "Rasah Jaya", "Rembau", "Rompin", "S2 Heights", "Senawang", "Seremban", "Seremban 2",
    "Seremban 3", "Si Rusa", "Sikamat", "Simpang Durian", "Simpang Pertang",
    "Tampin", "Tanjong Ipoh", "Teluk Kemang"]; // 41

// const cityNegeriSembilanId = ["n9Jlb", "n9Jpl", "n9KPlah", "n9PD",
//     "n9Rbau", "n9Srmbn", "n9Tmpn"]; //7
const cityNegeriSembilanId = ["n9Ampgn", "n9Bhau", "n9BAinsd","n9BBNlai",
    "n9BEnstek", "n9BSJpl", "n9BSprghill", "n9BSSdyan",
    "n9BKkr", "n9Gmas", "n9Gmcheh", "n9Jhl", "n9Kota", "n9KKlwg", "n9KPlah",
    "n9Lbu", "n9LvndrH", "n9Lggi", "n9Lkut", "n9Mbau", "n9Mtn", "n9Nlai", "n9Proi", "n9PD",
    "n9PBPlg", "n9Rtau", "n9RshJ", "n9Rbau", "n9Rpin", "n9S2H", "n9Snwg", "n9Srmbn", "n9Srmbn2",
    "n9Srmbn3", "n9SRusa", "n9Skmt", "n9SDrian", "n9SPrtg",
    "n9Tmpn", "n9TIpoh", "n9TKmg"];

// const cityPahang = ["Pekan", "Kuantan", "Bera", "Cameron Highlands",
//     "Jerantut", "Bentong", "Lipis", "Maran", "Raub", "Rompin", "Temerloh"]; //11
const cityPahang = ["Balok", "Bandar Bera", "Bandar Indera Mahkota, Kuantan", "Bandar Pusat Jengka", "Bandar Tun Abdul Razak",
    "Benta", "Bentong", "Brinchang", "Bukit Fraser", "Bukit Goh", "Bukit Kuin", "Bukit Sekilau, Kuantan", "Cameron Highlands", "Chenor",
    "Chini", "Damak", "Dong", "Gambang", "Genting Highlands", "Jerantut", "Karak",
    "Kemayan", "Kuala Krau", "Kuala Lipis", "Kuala Rompin", "Kuantan", "Lanchang", "Lurah Bilut",
    "Maran", "Mentakab", "Muadzam Shah", "Padang Tengku", "Pekan", "Raub", "Ringlet",
    "Sega", "Sungai Koyan", "Sungai Lembing", "Tanah Rata", "Temerloh", "Triang"]; //41

// const cityPahangId = ["phPekn", "phKuantn", "phBra", "phCH",
//     "phJtut", "phBntg", "phLps", "phMrn", "phRaub", "phRmpn", "phTmrlh"]; //11
const cityPahangId = ["phBlok", "phBra", "phBIMahkota","phBPJgka", "phBTARazak",
    "phBnta", "phBntg", "phBrchg", "phBFrser", "phBGh", "phBKuin", "phBSkl", "phCH", "phChnr",
    "phChni", "phDmak", "phDg", "phGbg", "phGenting", "phJtut", "phKrak",
    "phKmyn", "phKKrau", "phKLps", "phKRpin", "phKuantn", "phLchg", "phLrhBlt",
    "phMrn", "phMtkb", "phMdzmSh", "phPTgku", "phPekn", "phRaub", "phRlt",
    "phSg", "phSgKyan", "phSgLbg", "phTRta", "phTmrlh", "phTrg"];

// const cityPerak = ["Batang Padang", "Hilir Perak", "Hulu Perak", "Ipoh", "Kerian",
//     "Kinta", "Kuala Kangsar", "Larut, Matang", "Selama", "Manjung", "Perak Tengah", "Kampar"]; //11
const cityPerak = ["Ayer Tawar","Bagan Datoh","Bagan Serai", "Bandar Seri Iskandar", "Batu Gajah",
    "Batu Kurau", "Bercham", "Behrang Stesen", "Bidor", "Bota", "Bruas", "Buntong, Ipoh", "Changkat Jering", "Changkat Keruing",
    "Chemor", "Chenderiang", "Chenderong Balai", "Chikus", "Enggor", "Gerik", "Gopeng", "Gunung Rapat", "Hutan Melintang",
    "Intan", "Ipoh", "Jelapang, Ipoh", "Jeram, Perak", "Kampar", "Kampung Gajah", "Kampung Kepayang", "Kamunting", "Klebang, Perak", "Kuala Kangsar",
    "Kuala Kurau", "Kuala Sepetang", "Lahat", "Lambor Kanan", "Langkap", "Lenggong", "Lumut", "Malim Nawar", "Manong",
    "Matang", "Menglembu", "Meru, Perak", "Padang Rengas", "Pangkor", "Pantai Remis", "Parit", "Parit Buntar", "Pasir Putih, Ipoh", "Pengkalan, Lahat", "Pengkalan Hulu", "Pusing",
    "Rantau Panjang", "Sauk", "Selama", "Selekoh", "Seri Manjong", "Silibin, Ipoh", "Simpang", "Simpang Ampat Semanggol",
    "Sitiawan", "Slim River", "Station 18, Ipoh", "Sungai Siput", "Sungai Sumun", "Sungkai", "Taiping", "Tambun", "Tanjong Malim",
    "Tanjong Piandang", "Tanjong Rambutan", "Tanjong Tualang", "Tapah", "Tapah Road", "Tasek, Ipoh", "Teluk Intan", "Temoh",
    "Trolak", "Trong", "Tronoh", "Ulu Bernam", "Ulu Kinta"]; // 70

// const cityPerakId = ["pkBPadg", "pkHiPrk", "pkHuPrk", "pkIph", "pkKrian",
//     "pkKnta", "pkKKgsar", "prLM", "pkSlama", "pkManjg", "pkPTngah", "pkKmpar"]; //11
const cityPerakId = ["pkATwr","pkBgnDth","pkBgnSr", "pkBSIskdr", "pkBGjah",
    "pkBKrau", "pkBrchm", "pkBhrgStn", "pkBdr", "pkBt", "pkBrs", "pkBntng", "pkChktJrg", "pkChktKrg",
    "pkChmr", "pkChdrg", "pkChdrgBl", "pkChks", "pkEgr", "pkGrk", "pkGpg", "pkGRpt", "pkHtnMltg",
    "pkItn", "pkIph", "pkJlpg", "pkJrm", "pkKmpar", "pkKpgGjah", "pkKpgKpyg", "pkKmntg", "pkKlbg", "pkKKgsar",
    "pkKKrau", "pkKSptng", "pkLht", "pkLmbrKn", "pkLgkp", "pkLggng", "pkLmt", "pkMlmNwr", "pkMng",
    "pkMtg", "pkMglmb", "pkMru", "pkPdgRngs", "pkPgkr", "pkPRmis", "pkPrit", "pkPritBntr", "pkPsrPth", "pkPeng", "pkPengHlu", "pkPsg",
    "pkRntPjg", "pkSauk", "pkSlama", "pkSlkh", "pkSMnjg", "pkSlbn", "pkSmpg", "pkSmpgAmptSmnggl",
    "pkStiawn", "pkSlmRvr", "pkS18", "pkSgSpt", "pkSgSmn", "pkSngkai", "pkTaipg", "pkTmbn", "pkTMlim",
    "pkTPiandg", "pkTRmbtn", "pkTTualg", "pkTpah", "pkTpahRoad", "pkTsk", "pkTlkIntn", "pkTmh",
    "pkTrlk", "pkTrng", "pkTrnh", "pkUluBrnm", "pkUluKnta"];

// const cityTerengganu = ["Kuala Terengganu", "Besut", "Dungun", "Hulu Terengganu",
//     "Kemaman", "Marang", "Setiu", "Kuala Nerus"]; //8
const cityTerengganu = ["Ajil", "Al Muktatfi Billah Shahu", "Ayer Puteh", "Bukit Besi", "Bukit Payong",
    "Ceneh", "Chalok", "Chukai", "Dungun", "Gong Badak", "Jerteh", "Kampung Raja", "Kemasek", "Kerteh",
    "Ketengah Jaya", "Kijal", "Kuala Berang", "Kuala Besut", "Kuala Terengganu",
    "Marang", "Paka", "Permaisuri", "Sungai Tong"]; //23

// const cityTerengganuId = ["trKTer", "trBsut", "trDngun", "trHuTer",
//     "trKmmn", "trMrg", "trStiu", "trKNrus"]; //8
const cityTerengganuId = ["trAjl", "trAlMkttfBlhShh", "trAPteh", "trBktBsi", "trBktPyng",
    "trCnh", "trChlk", "trCkai", "trDngun", "trGngBdk", "trJrth", "trKpgRja", "trKmsk", "trKrth",
    "trKtnghJ", "trKjl", "trKBrang", "trBsut", "trKTer",
    "trMrg", "trPka", "trPrmaisr", "trSgTng"];

const cityPutraJaya = ["Putrajaya"]; //1
const cityPutraJayaId = ["pj"]; //1

const cityLabuan = ["Labuan"]; //1
const cityLabuanId = ["lb"]; //1

// const cityPerlis = ["Perlis"];//1
const cityPerlis = ["Arau", "Kaki Bukit", "Kangar", "Kuala Perlis", "Padang Besar", "Simpang Ampat, Perlis"];//6
// const cityPerlisId = ["pl"];//1
const cityPerlisId = ["plArau", "plKBkt", "plKngr", "plKPrls", "plPdgBsr", "plSmpngAmpt"];

// const citySabah = ["Kota Kinabalu", "Sandakan", "Tawau", "Kota Marudu",
//     "Kudat", "Pitas", "Beluran", "Kinabatangan", "Tongod", "Kunak", "Lahad Datu", "Semporna",
//     "Kota Belud", "Papar", "Penampang", "Putatan", "Ranau", "Tuaran", "Beaufort", "Keningau",
//     "Kuala Penyu", "Nabawan", "Sipitang", "Tambunan", "Tenom"]; //25
const citySabah = ["Beaufort", "Beluran", "Beverly", "Bongawan", "Damai", "Inanam", "Keningau", "Kepayan",
    "Kingfisher", "Kota Belud", "Kota Kinabalu", "Kota Kinabatangan", "Kota Marudu", "Kuala Penyu", "Kudat",
    "Kunak", "Lahad Datu", "Likas", "Luyang", "Membakut", "Menumbok", "Nabawan", "Pamol", "Papar",
    "Penampang", "Pitas", "Putatan", "Ranau", "Sandakan", "Semporna", "Sipitang", "Tambunan", "Tamparuli",
    "Tanjung Aru", "Tawau", "Telipok", "Tenghilan", "Tenom", "Tongod", "Tuaran"];  //40

// const citySabahId = ["shKK", "shSndakan", "shTwau", "shMrudu",
//     "shKdat", "shPtas", "shBlurn", "shKnbtg", "shTngod", "shKnak", "shLDtu", "shSmpor",
//     "shKBelud", "shPpar", "shPnampg", "shPtatan", "shRnau", "shTuarn", "shBfort", "shKngau",
//     "shKPnyu", "shNbawan", "shSpitg", "shTmbunan", "shTnom"]; //25
const citySabahId = ["shBfort", "shBlurn", "shBvrly", "shBngwn", "shDmai", "shInnm", "shKngau", "shKpyn",
    "shKgfshr", "shKBelud", "shKK", "shKnbtg", "shMrudu", "shKPnyu", "shKdat",
    "shKnak", "shLDtu", "shLkas", "shLyg", "shMmbkt", "shMnmbk", "shNbawan", "shPml", "shPpar",
    "shPnampg", "shPtas", "shPtatan", "shRnau", "shSndakan", "shSmpor", "shSpitg", "shTmbunan", "shTmprli",
    "shTAru", "shTwau", "shTlpk", "shTnghln", "shTnom", "shTngod", "shTuarn"];

// const citySarawak = ["Kuching", "Bintulu", "Sibu", "Sri Aman", "Bau", "Lundu",
//     "Miri", "Marudi", "Samarahan", "Simunjan", "Asajaya", "Sarikei", "Siburan", "Tebedu", "Pakan",
//     "Kanowit", "Selangau", "Lubok Antu", "Limbang", "Lawas", "Kapit", "Song", "Belaga",
//     "Betong", "Saratok", "Tatau"]; //27
const citySarawak = ["Asajaya", "Balingian", "Baram", "Batu Kawa", "Bau", "BDC", "Bekenu", "Belaga",
    "Belawai", "Betong", "Bintangor", "Bintulu", "Dalat", "Daro", "Debak", "Engkilili", "Julau",
    "Kabong", "Kanowit", "Kapit", "Kota Samarahan", "Kuching", "Lawas", "Limbang", "Lingga", "Long Lama",
    "Lubok Antu", "Lundu", "Lutong", "Marudi", "Matang Jaya", "Matu", "Miri", "Mukah", "Nanga Medamit",
    "Niah", "Pakan", "Petra Jaya", "Pusa", "Roban", "Saratok", "Sarikei", "Sebauh", "Sebuyau", "Selangau", "Serian", "Sibu",
    "Siburan", "Simunjan", "Song", "Spaoh", "Sri Aman", "Stapok", "Stutong", "Sundar", "Tabuan Jaya", "Tatau", "Tebedu"]; //58

// const citySarawakId = ["swKch", "swBin", "swSbu", "swSAman", "swBau", "swLndu",
//     "swMri", "swMrdi", "swSmrhn", "swSmnjn", "swAJ", "swSrkei", "swSburn", "swTbdu", "swPkn",
//     "swKnwit", "swSlngau", "swLA", "swLmbg", "swLwas", "swKpit", "swSg", "swBlaga",
//     "swBtg", "swSrtok", "swTtau"]; //27
const citySarawakId = ["swAJ", "swBlngian", "swBrm", "swBKw", "swBau", "swBDC", "swBkn", "swBlaga",
    "swBlwai", "swBtg", "swBntngr", "swBin", "swDlt", "swDro", "swDbk", "swEngkll", "swJlau",
    "swKbng", "swKnwit", "swKpit", "swSmrhn", "swKch", "swLwas", "swLmbg", "swLngg", "swLgLma",
    "swLA", "swLndu", "swLtng", "swMrdi",  "swMtngJ", "swMtu", "swMri", "swMkh", "swNngaMdmt",
    "swNiah", "swPkn", "swPtrJ", "swPsa", "swRbn", "swSrtok", "swSrkei", "swSbauh", "swSbyau", "swSlngau", "swSrian", "swSbu",
    "swSburn", "swSmnjn", "swSg", "swSpaoh", "swSAman", "swStpk", "swSttg", "swSndr", "swTbnJ", "swTtau", "swTbdu"];

// This function select city based on State
function selectCityBasedOnState(selectedCity) {
    // List<AreaOfState> areaOfStateList = new ArrayList<>();
    switch (selectedCity) {
        case "Kuala Lumpur":
            return cityKL;
        case "Selangor":
            return citySelangor;
        case "Penang":
            return cityPenang;
        case "Johor":
            return cityJohor;
        case "Melaka":
            return cityMelaka;
        case "Negeri Sembilan":
            return cityNegeriSembilan;
        case "Pahang":
            return cityPahang;
        case "Perak":
            return cityPerak;
        case "Terengganu":
            return cityTerengganu;
        case "Kelantan":
            return cityKelantan;
        case "Kedah":
            return cityKedah;
        case "Sabah":
            return citySabah;
        case "Sarawak":
            return citySarawak;
        case "Perlis":
            return cityPerlis;
        case "Putrajaya":
            return cityPutraJaya;
        default:
            return null;
    }
}

// This function select city based on State
function selectCityBasedOnStateId(selectedStateId) {
    switch (selectedStateId) {
        case "kuala lumpur":
            return cityKL;
        case "selangor":
            return citySelangor;
        case "penang":
            return cityPenang;
        case "johor":
            return cityJohor;
        case "melaka":
            return cityMelaka;
        case "negeri sembilan":
            return cityNegeriSembilan;
        case "pahang":
            return cityPahang;
        case "perak":
            return cityPerak;
        case "terengganu":
            return cityTerengganu;
        case "kelantan":
            return cityKelantan;
        case "kedah":
            return cityKedah;
        case "sabah":
            return citySabah;
        case "sarawak":
            return citySarawak;
        case "perlis":
            return cityPerlis;
        case "putrajaya":
            return cityPutraJaya;
        default:
            return null;
    }
}

// Get the city and cityId list based on stateId
function selectCityListBasedOnStateId(selectedStateId) {
    var city;
    var cityId;
    switch (selectedStateId) {
        case "kl":
            city = cityKL;
            cityId = cityKLId;
            return [city, cityId];
        case "sg":
            city = citySelangor;
            cityId = citySelangorId;
            return [city, cityId];
        case "pn":
            city = cityPenang;
            cityId = cityPenangId;
            return [city, cityId];
        case "jh":
            city = cityJohor;
            cityId = cityJohorId;
            return [city, cityId];
        case "mk":
            city = cityMelaka;
            cityId = cityMelakaId;
            return [city, cityId];
        case "ns":
            city = cityNegeriSembilan;
            cityId = cityNegeriSembilanId;
            return [city, cityId];
        case "ph":
            city = cityPahang;
            cityId = cityPahangId;
            return [city, cityId];
        case "pk":
            city = cityPerak;
            cityId = cityPerakId;
            return [city, cityId];
        case "tr":
            city = cityTerengganu;
            cityId = cityTerengganuId;
            return [city, cityId];
        case "kt":
            city = cityKelantan;
            cityId = cityKelantanId;
            return [city, cityId];
        case "kd":
            city = cityKedah;
            cityId = cityKedahId;
            return [city, cityId];
        case "sb":
            city = citySabah;
            cityId = citySabahId;
            return [city, cityId];
        case "sw":
            city = citySarawak;
            cityId = citySarawakId;
            return [city, cityId];
        case "pl":
            city = cityPerlis;
            cityId = cityPerlisId;
            return [city, cityId];
        case "pj":
            city = cityPutraJaya;
            cityId = cityPutraJayaId;
            return [city, cityId];
        case "lb":
            city = cityLabuan;
            cityId = cityLabuanId;
            return [city, cityId];
        default:
            city = null;
            cityId = null;
            return [city, cityId];
    }
}

// This function select City based on City Id (same as City) and State Id
// Note: This is for tutor portal specific
// DEPRECIATED

function getCityNameBasedOnCityIdAndStateId(stateId, cityId) {
    switch (stateId) {
        case "kuala lumpur":
            return cityKL[cityKL.indexOf(cityId)];
        case "selangor":
            return citySelangor[citySelangor.indexOf(cityId)];
        case "penang":
            return cityPenang[cityPenang.indexOf(cityId)];
        case "johor":
            return cityJohor[cityJohor.indexOf(cityId)];
        case "melaka":
            return cityMelaka[cityMelaka.indexOf(cityId)];
        case "negeri sembilan":
            return cityNegeriSembilan[cityNegeriSembilan.indexOf(cityId)];
        case "pahang":
            return cityPahang[cityPahang.indexOf(cityId)];
        case "perak":
            return cityPerak[cityPerak.indexOf(cityId)];
        case "terengganu":
            return cityTerengganu[cityTerengganu.indexOf(cityId)];
        case "kelantan":
            return cityKelantan[cityKelantan.indexOf(cityId)];
        case "kedah":
            return cityKedah[cityKedah.indexOf(cityId)];
        case "sabah":
            return citySabah[citySabah.indexOf(cityId)];
        case "sarawak":
            return citySarawak[citySarawak.indexOf(cityId)];
        case "perlis":
            return cityPerlis[cityPerlis.indexOf(cityId)];
        case "putrajaya":
            return cityPutraJaya[cityPutraJaya.indexOf(cityId)];
        default:
            return null;
    }
}

// This function select City Name based on City Id and State Id.
// This is used in https://golearn.com.my/tutor/?aaaaaa
function getCityNameBasedOnCityIdAndStateId2(stateId, cityId) {
    switch (stateId) {
        case "kl":
            return cityKL[cityKLId.indexOf(cityId)];
        case "sg":
            return citySelangor[citySelangorId.indexOf(cityId)];
        case "pn":
            return cityPenang[cityPenangId.indexOf(cityId)];
        case "jh":
            return cityJohor[cityJohorId.indexOf(cityId)];
        case "mk":
            return cityMelaka[cityMelakaId.indexOf(cityId)];
        case "ns":
            return cityNegeriSembilan[cityNegeriSembilanId.indexOf(cityId)];
        case "ph":
            return cityPahang[cityPahangId.indexOf(cityId)];
        case "pk":
            return cityPerak[cityPerakId.indexOf(cityId)];
        case "tr":
            return cityTerengganu[cityTerengganuId.indexOf(cityId)];
        case "kt":
            return cityKelantan[cityKelantanId.indexOf(cityId)];
        case "kd":
            return cityKedah[cityKedahId.indexOf(cityId)];
        case "sb":
            return citySabah[citySabahId.indexOf(cityId)];
        case "sw":
            return citySarawak[citySarawakId.indexOf(cityId)];
        case "pl":
            return cityPerlis[cityPerlisId.indexOf(cityId)];
        case "pj":
            return cityPutraJaya[cityPutraJayaId.indexOf(cityId)];
        case "lb":
            return cityLabuan[cityLabuanId.indexOf(cityId)];
        default:
            return null;
    }
}

// This function select City Id based on City Name and State Name
function getCityIdBasedOnCityNameAndStateName(stateName, cityName) {
    switch (stateName) {
        case "Kuala Lumpur":
            return cityKLId[cityKL.indexOf(cityName)];
        case "Selangor":
            return citySelangorId[citySelangor.indexOf(cityName)];
        case "Penang":
            return cityPenangId[cityPenang.indexOf(cityName)];
        case "Johor":
            return cityJohorId[cityJohor.indexOf(cityName)];
        case "Melaka":
            return cityMelakaId[cityMelaka.indexOf(cityName)];
        case "Negeri Sembilan":
            return cityNegeriSembilanId[cityNegeriSembilan.indexOf(cityName)];
        case "Pahang":
            return cityPahangId[cityPahang.indexOf(cityName)];
        case "Perak":
            return cityPerakId[cityPerak.indexOf(cityName)];
        case "Terengganu":
            return cityTerengganuId[cityTerengganu.indexOf(cityName)];
        case "Kelantan":
            return cityKelantanId[cityKelantan.indexOf(cityName)];
        case "Kedah":
            return cityKedahId[cityKedah.indexOf(cityName)];
        case "Sabah":
            return citySabahId[citySabah.indexOf(cityName)];
        case "Sarawak":
            return citySarawakId[citySarawak.indexOf(cityName)];
        case "Perlis":
            return cityPerlisId[cityPerlis.indexOf(cityName)];
        case "Putrajaya":
            return cityPutraJayaId[cityPutraJaya.indexOf(cityName)];
        case "Labuan":
            return cityLabuanId[cityLabuan.indexOf(cityName)];
        default:
            return null;
    }
}

const Category = ["Kindergarten", "Primary", "PBS (Previously PT3)", "SPM", "STPM", "Reception/Nursery", "Cambridge Primary",
    "Cambridge Lower Secondary", "IGCSE", "A Level",
    "IB Early Years", "IB Primary (PYP)", "IB Middle (MYP)", "IB Diploma", "UEC Junior",
    "UEC Senior", "AUSMAT", "South Australian Certificate of Education (SACE)", "English Exam",
    "Adult Language", "Music", "Computer Programming"];
// NOTE. This CategorySEO is exact duplicate of Category above with minor changes, based on const.php
// It was used for url generation.
const CategorySEO = ["Kindergarten", "Primary", "PBS", "SPM", "STPM", "Reception", "Cambridge Primary",
"Cambridge Lower Secondary", "IGCSE", "A Level",
"IB Early Years", "IB Primary", "IB Middle", "IB Diploma", "UEC Junior",
"UEC Senior", "AUSMAT", "SACE", "English Exam",
"Adult Language", "Music", "Computer Programming"];

const CategoryId = ["kindergarten", "upsr", "pt3", "spm", "stpm", "recep", "camPri", "camLowerSec", "igcse", "alevel",
    "ibEyp", "ibPyp", "ibMyp", "ibDiploma", "uecJun", "uecSen", "ausmat", "sam",
    "engExam", "adultLanguage", "music", "computer"];

// NOTE: TOTAL 362 Total subjects
// NOTE: TOTAL 111 Restricted subjects

const SubjectKindergarten = ["Bahasa Melayu", "Bahasa Inggeris", "Bahasa Cina", "Bahasa Tamil", "Matematik", "Sains",
    "Phonics", "Suku Kata", "Pendidikan Islam", "Pendidikan Moral"];
const SubjectIdKindergarten = ["kinBm", "kinEnglish", "kinBc", "kinBt", "kinMath", "kinSains",
    "kinPhonics", "kinSukuKata", "kinPi", "kinPm"];  // 10
const SubjectRestrictedIdKindergarten = ["kinBm", "kinEnglish", "kinMath", "kinSains"]; // 4

// NOTE: Added second row subjects
// Source: https://www.ipendidikan.my/senarai-mata-pelajaran-sekolah-rendah-kssr.html
const SubjectUPSR = ["Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Bahasa Cina",
    "Bahasa Tamil", "Sejarah", "Reka Bentuk dan Teknologi", "Pendidikan Islam / Moral", "Bahasa Iban",
    "Bahasa Arab", "Bahasa Kadazandusun"];

const SubjectIdUPSR = ["priBm", "priEnglish", "priMath", "priScience", "priBc",
    "priBt", "priSej", "priRbk", "priPim", "priIban",
    "priArab", "priKadazandusun"];
const SubjectRestrictedIdUPSR = ["priBm", "priEnglish", "priBc", "priMath", "priScience"]; // 5

// Source: https://www.moe.gov.my/images/KPM/UKK/2019/03_Mac/Brochure_PT3-UPDATED-19March1.jpg
const SubjectPT3 = ["Bahasa Melayu", "Bahasa Inggeris", "Mathematics", "Science", "Bahasa Cina", "Bahasa Tamil",
    "Sejarah", "Geografi", "Asas Sains Komputer", "Reka Bentuk dan Teknologi",
    "Pendidikan Islam", "Bahasa Arab", "Bahasa Iban", "Bahasa Kadazandusun", "Bahasa Punjabi",
    "Maharat al-Quran (KBT)", "Usul al-Din (KBD)", "Al-Syariah (KBD)", "Al-Lughah Al-Arabiah Al-Muasirah (KBD)"];

const SubjectIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
    "pt3Sej", "pt3Geo", "pt3Ask", "pt3Rbk",
    "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
    "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"]; // 19

const SubjectRestrictedIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
    "pt3Sej", "pt3Geo"]; // 8

// Source: https://www.moe.gov.my/pekeliling/3054-spi-bil-6-tahun-2019-pelaksanaan-kssm-menengah-atas-dan-pakej-mata-pelajaran-tahun-2020/file
// Source2: https://www.moe.gov.my/muat-turun/laporan-dan-statistik/lp/3324-laporan-analisis-keputusan-spm-2019/file
const SubjectSPM = [
    // Core Subjects
    "Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Sejarah", "Pendidikan Islam", "Pendidikan Moral",
    // Science Stream
    "Additional Mathematics", "Chemistry", "Biology", "Physics",
    // Bahasa Stream
    "Bahasa Cina", "Bahasa Tamil", "Bahasa Iban",
    // Kemanusiaan dan Sastera Ikhtisas Stream
    "Ekonomi", "Perniagaan", "Prinsip Perakaunan", "Geografi", "Kesusasteraan Melayu", "Kesusasteraan Cina",
    "Kesusasteraan Tamil", "Pendidikan Seni Visual",
    // Sains Gunaan Dan Teknologi Stream
    "Grafik Komunikasi Teknikal", "Pertanian", "Sains Rumah Tangga", "Reka Cipta", "Sains Komputer", "Sains Sukan",
    "Asas Kelestarian", "Lukisan Kejuruteraan", "Sains Tambahan",
    // Pengajian Islam Stream
    "Pendidikan Syariah", "Pendidikan Al Quran dan Al Sunnah", "Tasawwur Islam", "Usul Al-Din", "Al-Syariah",
    "Al-Lughah Al-Arabiah Al-Muasirah", "Manahij Al-Ulum Al-Islamiah", "Al-Adab Wa Al-Balaghah"];

const SubjectIdSPM = [
    "spmBm", "spmEnglish", "spmMath", "spmSains", "spmSej", "spmPi", "spmPm",
    "spmAddmath", "spmChe", "spmBio", "spmPhy",
    "spmBc", "spmTamil", "spmIban",
    "spmEko", "spmPerniagaan", "spmPp", "spmGeo", "spmKesusasteraanMelayu", "spmKesusasteraanCina",
    "spmKesusasteraanTamil", "spmPsv",
    "spmGrafikKomTek", "spmPertanian", "spmSainsRumahTangga", "spmRekaCipta", "spmSainsKomputer", "spmSainsSukan",
    "spmAsasKelestarian", "spmLukisanKejuruteraan", "spmSainsTambahan",
    "spmSyariah", "spmAlQuranAlSunnah", "spmTasawwurIslam", "spmUsulAlDin", "spmAlSyariah",
    "spmAlLugAlArabAlMua", "spmManahijAlUlumAlIslamiah", "spmAlAdabWaAlBalaghah",
]; // 38
const SubjectRestrictedIdSPM = [
    "spmBm", "spmEnglish", "spmMath", "spmSains", "spmSej", "spmPi",
    "spmAddmath", "spmChe", "spmBio", "spmPhy",
    "spmBc", "spmTamil",
    "spmEko", "spmPerniagaan", "spmPp", "spmGeo"]; // 15

// Source: https://www.moe.gov.my/pendidikan/lepas-menengah/tingkatan-6/kurikulum
const SubjectPreU = ["Pengajian Am",
    "Mathematics (M)", "Mathematics (T)", "Physics", "Chemistry", "Biology",
    "Pengajian Perniagaan", "Ekonomi", "Perakaunan",
    "Sejarah", "Geografi", "Kesusasteraan Melayu",
    "Bahasa Melayu", "Bahasa Cina", "Bahasa Tamil",
    "Information and Communications Technology (ICT)", "Sains Sukan", "Seni Visual"];

const SubjectIdPreU = ["stpmPa",
    "stpmMathM", "stpmMathT", "stpmPhy", "stpmChe", "stpmBio",
    "stpmPp", "stpmEko", "stpmPerakaunan",
    "stpmSej", "stpmGeo", "stpmKesusasteraanMelayu",
    "stpmBm", "stpmBc", "stpmBt",
    "stpmIct", "stpmSainsSukan", "stpmSeniVisual"]; //18

const SubjectRestrictedIdPreU = ["stpmPa",
    "stpmMathM", "stpmMathT", "stpmPhy", "stpmChe", "stpmBio",
    "stpmPp", "stpmEko", "stpmPerakaunan"]; //9

const SubjectCambridgeNursery = ["Phonics", "Mandarin", "Malay", "Mathematics"];
const SubjectIdCambridgeNursery = ["camNurPhonics", "camNurMan", "camNurBm", "camNurMath"]; // 4
const SubjectRestrictedIdCambridgeNursery = ["camNurPhonics"]; // 1

const SubjectCambridgePrimary = ["English", "Mathematics", "Science", "Malay", "Mandarin",
    "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience", "camPriMalay", "camPriMandarin",
    "camPriArt", "camPriIct", "camPriMusic", "camPriDrama"]; // 9
const SubjectRestrictedIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience",
    "camPriMalay", "camPriMandarin"]; //5

const SubjectCambridgeSecondary = ["English", "Mathematics", "Science", "Humanities", "Malay",
    "Mandarin", "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgeSecondary = ["camSecEng", "camSecMath", "camSecScience", "camSecHuman", "camSecMalay",
    "camSecMandarin", "camSecArt", "camSecIct", "camSecMusic", "camSecDrama"]; // 10
const SubjectRestrictedIdCambridgeSecondary = ["camSecEng", "camSecMath", "camSecScience",
    "camSecMalay", "camSecMandarin"]; // 5

const SubjectIGCSE = ["Accounting", "Afrikaans - Second Language", "Agriculture", "Arabic - First Language",
    "Arabic - Foreign Language", "Art & Design", "Bahasa Indonesia", "Biology", "Business Studies", "Chemistry",
    "Chinese - First Language", "Chinese - Second Language", "Chinese (Mandarin) - Foreign Language",
    "Computer Science", "Design & Technology", "Development Studies", "Drama", "Economics",
    "English - First Language", "English - First Language (US)", "English - Literature (US)", "English - Literature in English",
    "English (as an Additional Language)", "English as a Second Language", "Enterprise", "Environmental Management", "Food & Nutrition",
    "French - First Language", "French - Foreign Language", "Geography", "German - First Language",
    "German - Foreign Language", "Global Perspectives", "Hindi as a Second Language", "History", "History - American (US)",
    "Information & Communication Technology", "IsiZulu as a Second Language", "Islamiyat", "Italian - Foreign Language",
    "Japanese - Foreign Language", "Latin", "Malay - First Language", "Malay - Foreign Language",
    "Marine Science", "Mathematics", "Mathematics - Additional", "Mathematics - International", "Mathematics (US)", "Music",
    "Pakistan Studies", "Physical Education", "Physical Science", "Physics", "Portuguese - First Language",
    "Religious Studies", "Sanskrit", "Science - Combined", "Sciences - Co-ordinated", "Sociology", "Spanish - First Language",
    "Spanish - Foreign Language", "Spanish - Literature", "Swahili", "Thai - First Language", "Travel & Tourism",
    "Turkish - First Language", "Urdu as a Second Language", "World Literature"
];

const SubjectIdIGCSE = ["igcseAccounting", "igcseAfrikaansSecondLan", "igcseAgri", "igcseArabicFirstLan",
    "igcseArabicForeignLan", "igcseArt", "igcseBIndon", "igcseBio", "igcseBusiness", "igcseChe",
    "igcseChineseFirstLan", "igcseChineseSecondLan", "igcseChineseForeignLan",
    "igcseCS", "igcseDesignTech", "igcseDevStu", "igcseDrama", "igcseEco",
    "igcseFirstEnglish", "igcseFirstEngUs", "igcseEngLitUs", "igcseEngLit",
    "igcseEngAddLan", "igcseSecondEnglish", "igcseEnt", "igcseEnvMan", "igcseFoodNut",
    "igcseFrenchFirstLan", "igcseFrenchForeignLan", "igcseGeo", "igcseGermanFirstLan",
    "igcseGermanForeignLan", "igcseGloPer", "igcseHindiSecondLan", "igcseHis", "igcseHisUs",
    "igcseICT", "igcseIsiZuluSecondLan", "igcseIslam", "igcseItalianForeignLan",
    "igcseJapForeignLan", "igcseLatin", "igcseBm", "igcseBmForeignLan",
    "igcseMarine", "igcseMath", "igcseAddmath", "igcseIntMath", "igcseMathUs", "igcseMusic",
    "igcsePakStu", "igcsePhyEdu", "igcsePhySc", "igcsePhy", "igcsePorFirstLan",
    "igcseRelStu", "igcseSans", "igcseCombinedScience", "igcseCoorSc", "igcseSocio", "igcseSpanFirstLan",
    "igcseSpanForeignLan", "igcseSpanLit", "igcseSwahili", "igcseThaiFirstLan", "igcseTravel",
    "igcseTurFirstLan", "igcseUrduSecondLan", "igcseWorldLit"
];
const SubjectRestrictedIdIGCSE = ["igcseFirstEnglish", "igcseSecondEnglish", "igcseMath",
    "igcseChe", "igcseBio", "igcsePhy", "igcseCombinedScience", "igcseBm", "igcseAddmath",
    "igcseAccounting", "igcseBusiness", "igcseCS", "igcseDesignTech",
    "igcseEco", "igcseEngLit", "igcseGeo", "igcseHis", "igcseGloPer",
    "igcseICT"]; //19
const SubjectALevel = ["Accounting", "Applied ICT", "Biology", "Business", "Chemistry",
    "Computer Science", "Economics", "English Literature", "Further Mathematics", "History", "Law",
    "Mathematics", "Physics", "Psychology", "Sociology"];

const SubjectIdALevel = ["aLevelAccounting", "aLevelAppliedICT", "aLevelBio", "aLevelBusiness", "aLevelChe",
    "aLevelCs", "aLevelEco", "aLevelEngLit", "aLevelFurmath", "aLevelHist", "aLevelLaw",
    "aLevelMath", "aLevelPhy", "aLevelPsy", "aLevelSocio"]; // 14
const SubjectRestrictedIdALevel = ["aLevelBio", "aLevelChe", "aLevelMath", "aLevelPhy"]; //4

const SubjectIBEarlyYears = ["Phonics", "Mandarin", "Malay", "Mathematics"];
const SubjectIdIBEarlyYears = ["ibEyPhonics", "ibEyMan", "ibEyBm", "ibEyMath"]; //4
const SubjectRestrictedIdIBEarlyYears = ["ibEyPhonics", "ibEyMath"]; //2

const SubjectIBPrimary = ["Language", "Social Studies", "Mathematics", "Science", "Art"];
const SubjectIdIBPrimary = ["ibPriLan", "ibPriSocialStudies", "ibPriMath", "ibPriScience", "ibPriArt"]; //5
const SubjectRestrictedIdIBPrimary = ["ibPriMath", "ibPriScience"]; // 2

const SubjectIBMiddle = ["Mathematics", "Sciences", "Language Acquisition", "Language and Literature",
    "Individuals and Societies", "Art"];
const SubjectIdIBMiddle = ["ibMidMath", "ibMidScience", "ibMidLanAcq", "ibMidLanLit",
    "ibMidIndSoc", "ibMidArt"]; //6
const SubjectRestrictedIdIBMiddle = ["ibMidMath", "ibMidScience"]; //2

const SubjectIBDiploma = ["Biology HL / SL", "Business and Management HL / SL", "Chemistry HL / SL", "Chinese B HL / SL",
    "Chinese Language and Literature SL", "Computer Science HL / SL", "Design and Technology HL / SL", "Economics HL / SL",
    "English B HL / SL", "English Language and Literature HL / SL", "English Literature and Performance SL",
    "English Literature HL / SL", "French Ab Initio SL", "French B HL / SL", "Geography HL / SL",
    "Global Politics HL / SL", "History HL / SL", "Malay Ab Initio SL", "Malay B SL",
    "Malay Literature HL / SL", "Mathematics HL / SL", "Music HL / SL", "Physics HL / SL",
    "Psychology HL / SL", "Spanish Ab Initio SL", "Spanish B HL / SL", "Sports Health and Exercise Science HL / SL",
    "Theatre Arts HL / SL", "Visual Arts HL / SL", "World Religions SL"];
const SubjectIdIBDiploma = ["ibDipBio", "ibDipBusMan", "ibDipChe", "ibDipChiB",
    "ibDipChiLanLit", "ibDipCs", "ibDipDesignTech", "ibDipEco",
    "ibDipEngB", "ibDipEngLanLit", "ibDipEngLitPer",
    "ibDipEngLit", "ibDipFrenchAbInitio", "ibDipFrenchB", "ibDipGeo",
    "ibDipGloPolitics", "ibDipHist", "ibDipMalayAbInitio", "ibDipMalayB",
    "ibDipMalayLit", "ibDipMath", "ibDipMusic", "ibDipPhy",
    "ibDipPsy", "ibDipSpanishAbInitio", "ibDipSpanishB", "ibDipSportHealthExerScience",
    "ibDipTheatreArt", "ibDipVisualArt", "ibDipWorldReligions"]; //31
const SubjectRestrictedIdIBDiploma = ["ibDipBio", "ibDipChe", "ibDipMath", "ibDipPhy",
    "ibDipEngB", "ibDipEngLanLit", "ibDipEngLitPer", "ibDipEngLit"]; // 8

const SubjectUecJunior = ["Chinese Language", "English Language", "Malay Language", "Mathematics",
    "Science", "Geography", "History", "Art"];
const SubjectIdUecJunior = ["uecJunChi", "uecJunEng", "uecJunMalay", "uecJunMath",
    "uecJunScience", "uecJunGeo", "uecJunHist", "uecJunArt"]; //8
const SubjectRestrictedIdUecJunior = ["uecJunChi", "uecJunEng", "uecJunMalay", "uecJunMath",
    "uecJunScience"]; //5

const SubjectUecSenior = ["Accounting", "Advanced Mathematics", "Advanced Mathematics (I)", "Advanced Mathematics (II)",
    "Art", "Basic Circuit Theory", "Biology", "Book-keeping and Accounts",
    "Business Studies", "Chemistry", "Chinese Language", "Computing and Information Technology",
    "Digital Logic", "Economics", "English Language", "Fundamentals of Electrical Engineering",
    "Geography", "History", "Malay Language (National)", "Mathematics", "Physics", "Principle Electronic"];
const SubjectIdUecSenior = ["uecSenAcc", "uecSenAdvMath", "uecSenAdvMathI", "uecSenAdvMathII",
    "uecSenArt", "uecSenBasicCirTheo", "uecSenBio", "uecSenBookKeepAcc",
    "uecSenBusStu", "uecSenChe", "uecSenChiLan", "uecSenIct",
    "uecSenDigLogic", "uecSenEco", "uecSenEngLan", "uecSenFunEnE",
    "uecSenGeo", "uecSenHist", "uecSenMalayLan", "uecSenMath", "uecSenPhy", "uecSenPrinE"]; //21
const SubjectRestrictedIdUecSenior = ["uecSenAdvMath", "uecSenAdvMathI", "uecSenAdvMathII",
    "uecSenBio", "uecSenChe", "uecSenChiLan", "uecSenEngLan", "uecSenMalayLan", "uecSenPhy"]; // 9

//    Source: https://home.scotch.wa.edu.au/courses/pathway/atar/
const SubjectAusmat = ["Accounting and Finance", "Applied Information Technology", "Biology", "Business Management & Enterprise",
    "Chemistry", "Chinese", "Design (Dimensional / Graphics / Photography)", "Drama", "Economics", "English",
    "English Additional Language or Dialect", "Food Studies", "French", "Geography", "Human Biology",
    "Indonesian", "Literature", "Marine and Maritime Studies", "Materials Design Technology (Metal)",
    "Mathematics Applications", "Mathematics Essential", "Mathematics Methods", "Mathematics Specialist",
    "Media Production & Analysis", "Modern History", "Music", "Outdoor Education", "Physical Education Studies",
    "Physics", "Politics & Law", "Psychology", "Visual Arts"]; //32
const SubjectIdAusmat = ["ausAccFin", "ausAppliedIT", "ausBio", "ausBusManNEnt",
    "ausChe", "ausChinese", "ausDesign", "ausDrama", "ausEco", "ausEng",
    "ausEngAdd", "ausFood Studies", "ausFrench", "ausGeography", "ausHuman Biology",
    "ausIndo", "ausLit", "ausMarine", "ausMatDesignTech",
    "ausMathApp", "ausMathEss", "ausMathMeth", "ausMathSpe",
    "ausMediaProd", "ausModHist", "ausMusic", "ausOutEdu", "ausPhyEdu",
    "ausPhysics", "ausPolitics", "ausPsy", "ausArt"]; //32
const SubjectRestrictedIdAusmat = ["ausAccFin", "ausAppliedIT", "ausBio", "ausBusManNEnt",
    "ausChe", "ausChinese", "ausDesign", "ausDrama", "ausEco", "ausEng",
    "ausEngAdd", "ausFood Studies", "ausFrench", "ausGeography", "ausHuman Biology",
    "ausIndo", "ausLit", "ausMarine", "ausMatDesignTech",
    "ausMathApp", "ausMathEss", "ausMathMeth", "ausMathSpe",
    "ausMediaProd", "ausModHist", "ausMusic", "ausOutEdu", "ausPhyEdu",
    "ausPhysics", "ausPolitics", "ausPsy", "ausArt"]; //332

// Source: https://www.studymalaysia.com/what/course/TAYLOR_SUBANG/0009016
const SubjectSam = ["Accounting", "Biology", "Chemistry", "Economics", "English as an Additional Language",
    "Legal Studies", "Mathematical Studies", "Nutrition", "Physics", "Psychology",
    "Research Project B", "Specialist Mathematics"]; //12
const SubjectIdSam = ["samAcc", "samBio", "samChe", "samEco", "samEngAdd",
    "samLegal", "samMath", "samNutri", "samPhy", "samPsy",
    "samResearchProjB", "samSpecialistMath"]; //12
const SubjectRestrictedIdSam = ["samAcc", "samBio", "samChe", "samEco", "samEngAdd",
    "samLegal", "samMath", "samNutri", "samPhy", "samPsy",
    "samResearchProjB", "samSpecialistMath"]; //12


const SubjectEnglishExam = ["MUET", "IELTS", "TOEFL", "TOEIC"];
const SubjectIdEnglishExam = ["muet", "ielts", "toefl", "toeic"]; //4
const SubjectRestrictedIdEnglishExam = ["muet", "ielts", "toefl", "toeic"]; //4

const SubjectAdultLanguage = ["English", "Mandarin", "Malay", "Tamil", "Arabic",
    "French", "German", "Indonesian", "Italian", "Japanese", "Korean", "Russian", "Spanish"];
const SubjectIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
    "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan", "adultKorean", "adultRussian", "adultSpanish"]; //13
const SubjectRestrictedIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
    "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan", "adultKorean", "adultRussian", "adultSpanish"]; //13

const SubjectMusic = ["Piano", "Violin", "Guitar", "Drums", "Saxophone"];
const SubjectIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"];  // 5
const SubjectRestrictedIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"]; //5

const SubjectComputer = ["Illustrator/PhotoShop", "Video Editing", "Web Design (HTML, CSS, JavaScript)",
    "Mobile App Development", "Microsoft Office", "macOS App Development", "Window App Development", "ASP.NET",
    "C++", "C#", "Flutter", "Java", "PHP", "Python", "React Native", "SQL", "Visual Basic"];
const SubjectIdComputer = ["compIllu", "compVideoEdit", "compWebDesign",
    "compMobileApp", "compMSOffice", "compMacApp", "compWinApp", "compAspNet",
    "compCplus2", "compSharp", "compFlutter", "compJava", "compPhp", "compPython", "compReact", "compSql", "compVb"];  //17
const SubjectRestrictedIdComputer = ["compIllu", "compVideoEdit", "compWebDesign",
    "compMobileApp", "compMSOffice"]; //5

// [DEPRECIATED] Get Subject Info based on Category Value
function selectSubjectBasedOnLevel(selectedLevel) {
    var subject;
    var subjectId;
    switch (selectedLevel) {
        case "UPSR":
            subject = SubjectUPSR;
            subjectId = SubjectIdUPSR;
            return { subject, subjectId };
        case "PT3":
            subject = SubjectPT3;
            subjectId = SubjectIdPT3;
            return { subject, subjectId };
        case "SPM":
            subject = SubjectSPM;
            subjectId = SubjectIdSPM;
            return { subject, subjectId };
        case "PreU":
            subject = SubjectPreU;
            subjectId = SubjectIdPreU;
            return { subject, subjectId };
        case "IGCSE":
            subject = SubjectIGCSE;
            subjectId = SubjectIdIGCSE;
            return { subject, subjectId };
        case "A Level":
            subject = SubjectALevel;
            subjectId = SubjectIdALevel;
            return { subject, subjectId };
        default:
            subject = null;
            subjectId = null;
            return { subject, subjectId };
    }
}


// Get the subject and subjectId list based on leveld
function selectSubjectListBasedOnLevelId(selectedLevelId) {
    var subject;
    var subjectId;
    switch (selectedLevelId) {
        case "kindergarten":
            subject = SubjectKindergarten;
            subjectId = SubjectIdKindergarten;
            return [subject, subjectId];
        case "upsr":
            subject = SubjectUPSR;
            subjectId = SubjectIdUPSR;
            return [subject, subjectId];
        case "pt3":
            subject = SubjectPT3;
            subjectId = SubjectIdPT3;
            return [subject, subjectId];
        case "spm":
            subject = SubjectSPM;
            subjectId = SubjectIdSPM;
            return [subject, subjectId];
        case "stpm":
            subject = SubjectPreU;
            subjectId = SubjectIdPreU;
            return [subject, subjectId];
        case "recep":
            subject = SubjectCambridgeNursery;
            subjectId = SubjectIdCambridgeNursery;
            return [subject, subjectId];
        case "camPri":
            subject = SubjectCambridgePrimary;
            subjectId = SubjectIdCambridgePrimary;
            return [subject, subjectId];
        case "camLowerSec":
            subject = SubjectCambridgeSecondary;
            subjectId = SubjectIdCambridgeSecondary;
            return [subject, subjectId];
        case "igcse":
            subject = SubjectIGCSE;
            subjectId = SubjectIdIGCSE;
            return [subject, subjectId];
        case "alevel":
            subject = SubjectALevel;
            subjectId = SubjectIdALevel;
            return [subject, subjectId];
        case "ibEyp":
            subject = SubjectIBEarlyYears;
            subjectId = SubjectIdIBEarlyYears;
            return [subject, subjectId];
        case "ibPyp":
            subject = SubjectIBPrimary;
            subjectId = SubjectIdIBPrimary;
            return [subject, subjectId];
        case "ibMyp":
            subject = SubjectIBMiddle;
            subjectId = SubjectIdIBMiddle;
            return [subject, subjectId];
        case "ibDiploma":
            subject = SubjectIBDiploma;
            subjectId = SubjectIdIBDiploma;
            return [subject, subjectId];
        case "uecJun":
            subject = SubjectUecJunior;
            subjectId = SubjectIdUecJunior;
            return [subject, subjectId];
        case "uecSen":
            subject = SubjectUecSenior;
            subjectId = SubjectIdUecSenior;
            return [subject, subjectId];
        case "ausmat":
            subject = SubjectAusmat;
            subjectId = SubjectIdAusmat;
            return [subject, subjectId];
        case "sam":
            subject = SubjectSam;
            subjectId = SubjectIdSam;
            return [subject, subjectId];
        case "engExam":
            subject = SubjectEnglishExam;
            subjectId = SubjectIdEnglishExam;
            return [subject, subjectId];
        case "adultLanguage":
            subject = SubjectAdultLanguage;
            subjectId = SubjectIdAdultLanguage;
            return [subject, subjectId];
        case "music":
            subject = SubjectMusic;
            subjectId = SubjectIdMusic;
            return [subject, subjectId];
        case "computer":
            subject = SubjectComputer;
            subjectId = SubjectIdComputer;
            return [subject, subjectId];
        default:
            subject = null;
            subjectId = null;
            return [subject, subjectId];
    }
}


// [DEPRECIATED] Return Subject Name based on subjectID and categoryId
function getSubjectInfo(subjectId, categoryId) {
    // Category tempCategory = new Category();
    switch (subjectId) {
        case "bm":
            switch (categoryId) {
                case "upsr": return "Bahasa Melayu";
                case "pt3": return "Bahasa Melayu";
                case "spm": return "Bahasa Melayu";
                case "preu": return "Bahasa Melayu";
                case "igcse": return "Malay";
                default: return null;
            }
        case "english": return "Bahasa Inggeris";
        case "math": tempCategory.setId("math");
            switch (categoryId) {
                case "upsr": return "Matematik";
                case "pt3": return "Mathematics";
                case "spm": return "Mathematics";
                case "igcse": return "Mathematics";
                default: return null;
            }
        case "science":
            switch (categoryId) {
                case "upsr": return "Sains";
                case "pt3": return "Science";
                default: return null;
            }
        case "bc": return "Bahasa Cina";
        case "bt": return "Bahasa Tamil";
        case "sej": return "Sejarah";
        case "geo": return "Geografi";
        case "ask": return "Asas Sains Komputer";
        case "rbk": return "Reka Bentuk dan Teknologi";
        case "addmath": return "Additional Mathematics";
        case "che": return "Chemistry";
        case "bio": return "Biology";
        case "phy": return "Physics";
        case "eko": return "Ekonomi";
        case "perniagaan": return "Perniagaan";
        case "pp": return "Prinsip Perakaunan";
        case "ppniaga": return "Pengajian Perniagaan";
        case "pa": return "Pengajian Am";
        case "math(M)": return "Mathematics(M)";
        case "math(T)": return "Mathematics(T)";
        case "perakaunan": return "Perakaunan";
        case "kesusasteraanMelayu": return "Kesusasteraan Melayu";
        case "firstEnglish": return "First Language English";
        case "secondEnglish": return "Second Language English";
        case "combinedScience": return "Combined Science";
        case "accounting": return "Accounting";
        case "business": return "Business Studies";
        case "eco": return "Economics";
        //Alevel
        case "accountingAlevel": return "Accounting";
        case "appliedICT": return "Applied ICT";
        case "bioAlevel": return "Biology";
        case "businessAlevel": return "Business";
        case "cheAlevel": return "Chemistry";
        case "cs": return "Computer Science";
        case "ecoAlevel": return "Economics";
        case "englishLiterature": return "English Literature";
        case "furmath": return "Further Mathematics";
        case "law": return "Law";
        case "mathAlevel": return "Mathematics";
        case "phyAlevel": return "Physics";
        case "psy": return "Psychology";
        case "socio": return "Sociology";
        default:
            return null;
    }
}


// Return Subject Id based on Category and Subject
// Note: This is for tutor portal specific
function getIdBasedOnCategoryAndSubject(category, subject) {

    // Step 1: Get category Id

    let categoryId = CategoryId[Category.indexOf(category)];

    // Step 2: Select the correct Subject Id List
    // Step 3: Select the Subject Id based on the index of Subject
    switch (categoryId) {
        case "kindergarten":
            return SubjectIdKindergarten[SubjectKindergarten.indexOf(subject)];
        case "upsr":
            return SubjectIdUPSR[SubjectUPSR.indexOf(subject)];
        case "pt3":
            return SubjectIdPT3[SubjectPT3.indexOf(subject)];
        case "spm":
            return SubjectIdSPM[SubjectSPM.indexOf(subject)];
        case "stpm":
            return SubjectIdPreU[SubjectPreU.indexOf(subject)];
        case "recep":
            return SubjectIdCambridgeNursery[SubjectCambridgeNursery.indexOf(subject)];
        case "camPri":
            return SubjectIdCambridgePrimary[SubjectCambridgePrimary.indexOf(subject)];
        case "camLowerSec":
            return SubjectIdCambridgeSecondary[SubjectCambridgeSecondary.indexOf(subject)];
        case "igcse":
            return SubjectIdIGCSE[SubjectIGCSE.indexOf(subject)];
        case "alevel":
            return SubjectIdALevel[SubjectALevel.indexOf(subject)];
        case "ibEyp":
            return SubjectIdIBEarlyYears[SubjectIBEarlyYears.indexOf(subject)];
        case "ibPyp":
            return SubjectIdIBPrimary[SubjectIBPrimary.indexOf(subject)];
        case "ibMyp":
            return SubjectIdIBMiddle[SubjectIBMiddle.indexOf(subject)];
        case "ibDiploma":
            return SubjectIdIBDiploma[SubjectIBDiploma.indexOf(subject)];
        case "uecJun":
            return SubjectIdUecJunior[SubjectUecJunior.indexOf(subject)];
        case "uecSen":
            return SubjectIdUecSenior[SubjectUecSenior.indexOf(subject)];
        case "ausmat":
            return SubjectIdAusmat[SubjectAusmat.indexOf(subject)];
        case "sam":
            return SubjectIdSam[SubjectSam.indexOf(subject)];
        case "engExam":
            return SubjectIdEnglishExam[SubjectEnglishExam.indexOf(subject)];
        case "adultLanguage":
            return SubjectIdAdultLanguage[SubjectAdultLanguage.indexOf(subject)];
        case "music":
            return SubjectIdMusic[SubjectMusic.indexOf(subject)];
        case "computer":
            return SubjectIdComputer[SubjectComputer.indexOf(subject)];
        default:
            return null;
    }

}

// Return Subject based on categoryId and subjectId
// Note: This is for tutor portal specific
function getSubjectBasedOnCategoryIdAndSubjectId(categoryId, subjectId) {

    // Step 1: Get category Id

    // let categoryId = CategoryId[Category.indexOf(category)];

    // Step 2: Select the correct Subject Id List
    // Step 3: Select the Subject Id based on the index of Subject
    switch (categoryId) {
        case "kindergarten":
            return SubjectKindergarten[SubjectIdKindergarten.indexOf(subjectId)];
        case "upsr":
            return SubjectUPSR[SubjectIdUPSR.indexOf(subjectId)];
        case "pt3":
            return SubjectPT3[SubjectIdPT3.indexOf(subjectId)];
        case "spm":
            return SubjectSPM[SubjectIdSPM.indexOf(subjectId)];
        case "stpm":
            return SubjectPreU[SubjectIdPreU.indexOf(subjectId)];
        case "recep":
            return SubjectCambridgeNursery[SubjectIdCambridgeNursery.indexOf(subjectId)];
        case "camPri":
            return SubjectCambridgePrimary[SubjectIdCambridgePrimary.indexOf(subjectId)];
        case "camLowerSec":
            return SubjectCambridgeSecondary[SubjectIdCambridgeSecondary.indexOf(subjectId)];
        case "igcse":
            return SubjectIGCSE[SubjectIdIGCSE.indexOf(subjectId)];
        case "alevel":
            return SubjectALevel[SubjectIdALevel.indexOf(subjectId)];
        case "ibEyp":
            return SubjectIBEarlyYears[SubjectIdIBEarlyYears.indexOf(subjectId)];
        case "ibPyp":
            return SubjectIBPrimary[SubjectIdIBPrimary.indexOf(subjectId)];
        case "ibMyp":
            return SubjectIBMiddle[SubjectIdIBMiddle.indexOf(subjectId)];
        case "ibDiploma":
            return SubjectIBDiploma[SubjectIdIBDiploma.indexOf(subjectId)];
        case "uecJun":
            return SubjectUecJunior[SubjectIdUecJunior.indexOf(subjectId)];
        case "uecSen":
            return SubjectUecSenior[SubjectIdUecSenior.indexOf(subjectId)];
        case "ausmat":
            return SubjectAusmat[SubjectIdAusmat.indexOf(subjectId)];
        case "sam":
            return SubjectSam[SubjectIdSam.indexOf(subjectId)];
        case "engExam":
            return SubjectEnglishExam[SubjectIdEnglishExam.indexOf(subjectId)];
        case "adultLanguage":
            return SubjectAdultLanguage[SubjectIdAdultLanguage.indexOf(subjectId)];
        case "music":
            return SubjectMusic[SubjectIdMusic.indexOf(subjectId)];
        case "computer":
            return SubjectComputer[SubjectIdComputer.indexOf(subjectId)];
        default:
            return null;
    }

}

// Return Bool to Check if a Subject is restricted based on Category Id and Subject Id
function getRestrictedSubjectForEachCategoryBasedOnId(categoryId, subjectId) {
    let found = false;
    switch (categoryId) {
        case "kindergarten":
            SubjectRestrictedIdKindergarten.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;

        case "upsr":
            SubjectRestrictedIdUPSR.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "pt3":
            SubjectRestrictedIdPT3.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "spm":
            SubjectRestrictedIdSPM.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "stpm":
            SubjectRestrictedIdPreU.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "recep":
            SubjectRestrictedIdCambridgeNursery.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
        case "camPri":
            SubjectRestrictedIdCambridgePrimary.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "camLowerSec":
            SubjectRestrictedIdCambridgeSecondary.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "igcse":
            SubjectRestrictedIdIGCSE.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "alevel":
            SubjectRestrictedIdALevel.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "ibEyp":
            SubjectRestrictedIdIBEarlyYears.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "ibPyp":
            SubjectRestrictedIdIBPrimary.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "ibMyp":
            SubjectRestrictedIdIBMiddle.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "ibDiploma":
            SubjectRestrictedIdIBDiploma.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "uecJun":
            SubjectRestrictedIdUecJunior.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "uecSen":
            SubjectRestrictedIdUecSenior.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "ausmat":
            SubjectRestrictedIdAusmat.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "sam":
            SubjectRestrictedIdSam.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "engExam":
            SubjectRestrictedIdEnglishExam.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "adultLanguage":
            SubjectRestrictedIdSPM.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "music":
            SubjectRestrictedIdMusic.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        case "computer":
            SubjectRestrictedIdComputer.some(function (item) {
                if (item == subjectId) {
                    found = true;
                }
            });
            return found;
        default:
            return false;
    }
}

const MyTime = ["8am - 12pm", "12pm - 3pm", "3pm - 6pm", "6pm Onwards"];
const MyTimeId = ["8to12", "12to3", "3to6", "6onwards"];

const MyDayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MyDayOfWeekAbr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MyDayOfWeekId = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const MyMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MyMonthAbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MyMonthId = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// Typeahead
const ClassTag = [
    // state
    'kl', 'selangor', 'penang', 'johor', 'perak', "melaka",
    "negerisembilan", "pahang", "terengganu", "kelantan", "kedah", "sabah", "sarawak",
    "perlis", "putrajaya", "labuan",
    // area
    'ipoh', 'seremban', 'johorbahru', 'pudu', 'lintas', 'johorjaya', 'kempas', 'kerinchi',
    'klang', 'puchong', 'petalingjaya', 'cheras', 'nusajaya', 'serikembangan',
    'oldklangroad', 'seremban2', 'mantin', 'batukawa', 'bayanlepas', 'butterworth', 'cyberjaya',
    'kotakinabalu', 'ampang', 'kotakemuning', 'shahalam', 'setiaalam', 'sungaipetani',
    'kulai', 'seberangperai', 'bangi', 'rawang', 'setiaindah', 'tanjongtokong',
    'semenyih', 'montkiara', 'setiawangsa', 'sentul', 'setapak',
    'desapandan', 'subangjaya', 'alamimpian', 'bukitjalil', 'balakong', 'ulukinta',
    'nibongtebal', 'kepong', 'sendayan', 'bukitmertajam', 'batucave', 'kajang',
    'skudai', 'sungailong', 'georgetown', 'taiping', 'jelutong', 'menglembu', 'brickfield',
    'serialam', 'alorsetar', 'jelapang', 'gelugor', 'titiwangsa', 'melawati',
    'bangsar', 'centralmelacca', 'meru', 'kotabahru', 'molek', 'kinrara', 'pasirgudang',
    'usj', 'bentong', 'wangsamaju', 'bukitraja', 'kluang', 'batuferringhi', 'miri',
    'perai', 'bayanbaru', 'desapark', 'srihartamas', 'segambut', 'connaught', 'temerloh',
    'bukitindah', 'tropicana', 'selayang', 'tampoi', 'airitam', 'sandakan', 'banting',
    'kulim', 'tawau', 'bukitantarabangsa', 'nilai', 'simpangampat', 'kuchailama', 'tanjongtokong',
    'danaukota', 'tambun', 'alamdamai', 'permas', 'sungaibuloh', 'kuantan', 'kualaterengganu',
    'tamanmaluri', 'bandartunrazak', 'bukitbintang', 'ttdi', 'dengkil', 'putraheights', 'sabakbernam',
    // grade
    'standard1', 'standard2', 'standard3', 'standard4', 'standard5', 'standard6',
    'year1', 'year2', 'year3', 'year4', 'year5', 'year6', 'year7', 'year8', 'year10',
    'year11', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8', 'grade10',
    'grade11', 'form1', 'form2', 'form3', 'form4', 'form5', 'form6',
    // level
    "kindergarten", "preschool", "tadika", "primary", "secondary", "upsr", "pt3", "spm", "stpm",
    "reception", "nursery", "cambridge", "cambridgeprimary", "cambridgesecondary", "igcse", "alevel", "olevel", "university",
    "internationalbaccalaureate", "ib", "diploma", "uec", "ausmat", "sam",
    "engExam", "adultlanguage", "music", "computer",
    // subject
    "bahasamelayu", "english", "math", "science", "history", "pendidikanislam", "moral",
    "addmath", "chemistry", "biology", "physics", "mandarin", "tamil", "combinedscience",
    "accounting", "art", "businessstudies", "computerscience", "drama",
    "economics", "englishliterature", "geography", "ict", "music",
    // type
    'hometuition', 'tuitioncenter', 'onlinetuition', 'grouptutoring'

];

const DefaultPermissions =
    ["addClass", "editClass", "delClass", "viewClass",
    "addLesson", "editLesson", "delLesson", "viewLesson",
    "addStudent", "editStudent", "delStudent", "viewStudent",
    "addTeacher", "editTeacher", "delTeacher", "viewTeacher",
    "addInv", "editInv", "recordPaymentInv", "delInv", "viewInv",
    "addPayroll", "editPayroll", "delPayroll", "viewPayroll",
    "addPayslip", "editPayslip", "recordPaymentPayslip", "delPayslip", "viewPayslip",
    "addAdmin", "editAdmin", "delAdmin", "viewAdmin",
    "addStaff", "editStaff", "delStaff", "viewStaff",
    "addAssistant", "editAssistant", "delAssistant", "viewAssistant",
    "addSuperAdmin", "editSuperAdmin", "delSuperAdmin", "viewSuperAdmin",
    "viewInsight", "editAccountProfile"
    ]

// Temporary Hard-coded settings
// TODO: To be move to Settings > v1 > Profile > ...
const ProfileSettings = ['aClassNum', 'aStudentNum', 'aTeacherNum', 'aPublicCourseNum'];
const ProfileSettingsValue_Deactivated = [5, 50, 1, 0];
const ProfileSettingsValue_Active = [5, 50, 1, 50];
const ProfileSettingsValue_Premium = [50, 500, 1, 50];
const ProfileSettingsValue_Org = [50, 500, 50, 50];

// Class number settings based on account status
const ClassNum_Deactivated = 10;
const ClassNum_Active = 10;
const ClassNum_Premium1 = 20;
const ClassNum_Premium2 = 500;
const ClassNum_Premium3 = 500;

// Teacher number settings based on account status
const TeacherNum_Deactivated = 0;
const TeacherNum_Active = 0;
const TeacherNum_Premium1 = 0;
const TeacherNum_Premium2 = 10;
const TeacherNum_Premium3 = 500;

// 1. A VERY Simple Encrypt and Decrypt
const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

// 2.Encode/decode a string in/from base-64 format
const encode64 = baseString => {
    return encoded = window.btoa(baseString);
}
const decode64 = baseString => {
    return encoded = window.atob(baseString);
}









