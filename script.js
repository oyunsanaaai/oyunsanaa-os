
import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

document.getElementById("registration-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    gender: document.getElementById("gender").value,
    birthYear: document.getElementById("birthYear").value,
    zodiac: document.getElementById("zodiac").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    ageGroup: document.getElementById("ageGroup").value,
    discount: document.getElementById("discount").value,
    password: document.getElementById("password").value,
    regCode: document.getElementById("regCode").value,
  };

  try {
    await addDoc(collection(db, "registrations"), data);
    alert("Бүртгэл амжилттай хадгалагдлаа!");
  } catch (err) {
    alert("Алдаа гарлаа: " + err);
  }
});
