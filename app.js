// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "oyunsanaa-burtgel.firebaseapp.com",
  projectId: "oyunsanaa-burtgel",
  storageBucket: "oyunsanaa-burtgel.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase init
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("App initialized");

// Бүртгэлийн код үүсгэгч
function generateRegCode() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `OS-${random}`;
}

// Форм илгээх
document.getElementById("registration-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const birthYear = document.getElementById("birthYear").value;
  const zodiac = document.getElementById("zodiac").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const ageGroup = document.getElementById("ageGroup").value;
  const password = document.getElementById("password").value;
  const regCode = generateRegCode();

  // хөнгөлөлт = дунд нас бол 10%, ахмад бол 15% гэж үзэх жишээ
  let discount = "";
  if (ageGroup === "Дунд нас") discount = "10%";
  else if (ageGroup === "Ахмад") discount = "15%";

  // Form дээр харагдуулах
  document.getElementById("discount").value = discount;
  document.getElementById("regCode").value = regCode;

  // Firestore-д хадгалах
  try {
    await db.collection("registrations").add({
      name, gender, birthYear, zodiac, phone, email,
      ageGroup, discount, password, regCode,
      timestamp: new Date()
    });
    alert("Бүртгэл амжилттай!");
  } catch (err) {
    alert("Бүртгэл амжилтгүй: " + err.message);
  }
});
