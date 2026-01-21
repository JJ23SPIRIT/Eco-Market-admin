import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtPxmJUBCweFBswJVflEVuc4jp6-m0BVM",
    authDomain: "prime-dusk.firebaseapp.com",
    projectId: "prime-dusk"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tableBody = document.getElementById("ordersTable");

onSnapshot(collection(db, "purchases"), (snapshot) => {
  tableBody.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();

    const row = `
      <tr>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.item}</td>
        <td>GH₵ ${data.price}</td>
        <td>${data.hostel}</td>
        <td>${new Date(data.timestamp?.seconds * 1000).toLocaleString()}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
});
