// Firebase SDK-г импортолно
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔐 Firebase тохиргоо (энэ хэсэгт өөрийн project config-ийг оруулна)
const firebaseConfig = {
  apiKey: "AIzaSyCF5f5gGTO3GLUpScC3p-F7DU4MGqzK13E",
  authDomain: "oyunsanaa-burtgel.firebaseapp.com",
  projectId: "oyunsanaa-burtgel",
  storageBucket: "oyunsanaa-burtgel.appspot.com",
  messagingSenderId: "278634674199",
  appId: "1:278634674199:web:7fc0d832e7f126f50d3ccf",
  measurementId: "G-KD5LVSEB8K"
};

// Firebase-г инициализацлах
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🎲 Бүртгэлийн дугаар автоматаар үүсгэх
function generateRegCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'OS-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Form дээр бүртгэлийн дугаарыг харуулах
document.getElementById("registrationCode").value = generateRegCode();

// 📩 Форм submit хийж Firestore руу хадгалах
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const birthYear = document.getElementById("birthYear").value;
  const zodiac = document.getElementById("zodiac").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const ageGroup = document.getElementById("ageGroup").value;
  const password = document.getElementById("password").value;
  const regCode = document.getElementById("registrationCode").value;

  try {
    await addDoc(collection(db, "registrations"), {
      name,
      gender,
      birthYear,
      zodiac,
      phone,
      email,
      ageGroup,
      password,
      regCode,
      createdAt: new Date()
    });

    alert("✅ Бүртгэл амжилттай хадгалагдлаа!");
    document.getElementById("registrationForm").reset();
    document.getElementById("registrationCode").value = generateRegCode(); // шинэ код гаргана
  } catch (error) {
    console.error("❌ Алдаа гарлаа:", error);
    alert("⚠️ Бүртгэл амжилтгүй. Дахин оролдоно уу.");
  }
});
