// Firebase Config – өөрийн firebaseConfig-аар солино
const firebaseConfig = {
  apiKey: "ТАНЫ_API_KEY",
  authDomain: "oyunsanaa-burtgel.firebaseapp.com",
  projectId: "oyunsanaa-burtgel",
  storageBucket: "oyunsanaa-burtgel.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "1:XXXXXXXXXXXX:web:XXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXX"
};

// Firebase Init
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Бүртгэлийн дугаар үүсгэх
function generateRegCode() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `OS-${random}`;
}

// Насны ангиллаас хамаарч хөнгөлөлт тодорхойлох
function getDiscountByAgeGroup(ageGroup) {
  switch (ageGroup) {
    case "Бага нас": return "30% хөнгөлөлт";
    case "Өсвөр нас": return "25% хөнгөлөлт";
    case "Залуу нас": return "20% хөнгөлөлт";
    case "Дунд нас": return "10% хөнгөлөлт";
    default: return "Хөнгөлөлтгүй";
  }
}

// Form submit
document.getElementById("registration-form").addEventListener("submit", function(e) {
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
  const discount = getDiscountByAgeGroup(ageGroup);

  // Firebase-д хадгалах
  db.collection("registrations").add({
    name,
    gender,
    birthYear,
    zodiac,
    phone,
    email,
    ageGroup,
    password,
    regCode,
    discount,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert("Бүртгэл амжилттай!");
    document.getElementById("registration-form").reset();
  }).catch((error) => {
    alert("Бүртгэл амжилтгүй! Алдаа: " + error.message);
  });

  // UI дээр автоматаар бөглөх
  document.getElementById("discount").value = discount;
  document.getElementById("regCode").value = regCode;
});
