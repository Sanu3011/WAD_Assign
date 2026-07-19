const API_URL = "http://localhost:3000/users";

/* =========================
   GET USERS (REAL AJAX)
========================= */
function getUsers(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", API_URL, true);

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    callback(data);
  };

  xhr.send();
}

/* =========================
   ADD USER (REAL AJAX POST)
========================= */
function addUser(user, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", API_URL, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    callback(data);
  };

  xhr.send(JSON.stringify(user));
}

/* =========================
   DISPLAY USERS
========================= */
function display() {
  let tbody = document.getElementById("tbody");

  getUsers(users => {
    tbody.innerHTML = users.length
      ? users.map((u, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${u.name}</td>
          <td>${u.username}</td>
          <td>${u.email}</td>
          <td>${u.phone}</td>
          <td>${u.city}</td>
        </tr>
      `).join("")
      : `<tr><td colspan="6" class="text-danger text-center">No Data</td></tr>`;
  });
}

display();

/* =========================
   FORM SUBMIT
========================= */
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let user = {
    name: document.getElementById("name").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value
  };

  let password = document.getElementById("password").value;

  // VALIDATION
  let emailP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let userP = /^[A-Za-z]{1,8}$/;
  let phoneP = /^[0-9]{10}$/;
  let passP = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  if (!emailP.test(user.email)) return alert("Invalid Email");
  if (!userP.test(user.username)) return alert("Username max 8 letters");
  if (!phoneP.test(user.phone)) return alert("Phone must be 10 digits");
  if (!passP.test(password)) return alert("Weak Password");

  addUser(user, function () {
    display();
    document.getElementById("userForm").reset();
    $("#addNewUser").modal("hide");
  });
});

//PS E:\WAD_Assign_1b> npm install -g json-server
//PS E:\WAD_Assign_1b> json-server --watch dummy.json --port 3000