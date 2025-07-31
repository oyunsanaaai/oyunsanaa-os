
const firebaseConfig = {
  apiKey: "AIzaSyDQIYDk2MdXvVo0x_TMPG_XcMj6AVRSpig",
  authDomain: "oyunsanaa-burtgel.firebaseapp.com",
  projectId: "oyunsanaa-burtgel",
  storageBucket: "oyunsanaa-burtgel.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("registrationForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const birthYear = document.getElementById("birthYear").value;
  const zodiac = document.getElementById("zodiac").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const ageGroup = document.getElementById("ageGroup").value;
  const password = document.getElementById("password").value;

  const discount = "10%";
  const regCode = "OS-" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("discount").value = discount;
  document.getElementById("regCode").value = regCode;

  try {
    await db.collection("registration").add({
      name,
      gender,
      birthYear,
      zodiac,
      phone,
      email,
      ageGroup,
      password,
      discount,
      regCode,
      timestamp: new Date()
    });
    alert("Бүртгэл амжилттай!");
  } catch (error) {
    alert("Бүртгэл амжилтгүй: " + error.message);
  }
});
