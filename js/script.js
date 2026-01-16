document.addEventListener("DOMContentLoaded", function () {
  const usernameSpan = document.getElementById("username");

      // Bisa diganti dengan prompt jika mau dinamis
  const username = "Abdul Latif";

  if (usernameSpan) {
    usernameSpan.textContent = username;
  }
});

// ===============================
// Form Validation & Show Result
// ===============================
const form = document.getElementById("messageForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("rName").textContent = name;
  document.getElementById("rEmail").textContent = email;
  document.getElementById("rPhone").textContent = phone;
  document.getElementById("rMessage").textContent = message;

  form.reset();
});
