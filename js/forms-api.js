/** @format */

const users = [];

const tableBody = document.getElementById("table-body");

const addUser = (username, age, city) => {
  if (!username || !age || !city) {
    return;
  }
  const user = { username, age, city };
  users.push(user);
  updateTable();
};

const updateTable = () => {
  tableBody.innerHTML = "";

  users.map((user) => {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${user.username}</td>
    <td>${user.age}</td>
    <td>${user.city}</td>
    `;

    tableBody.appendChild(newRow);
  });
};

const toggleSpinner = (showSpinner) => {
  const spinner = document.getElementById("spinner");
  const buttonText = document.getElementById("buttonText");
  const submitButton = document.getElementById("submitButton");

  if (showSpinner) {
    spinner.style.display = "inline-block";
    buttonText.style.display = "none";
    submitButton.disabled = true;
  } else {
    spinner.style.display = "none";
    buttonText.style.display = "inline-block";
    submitButton.disabled = false;
  }
};

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  toggleSpinner(true);

  setTimeout(() => {
    toggleSpinner(false);

    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;

    addUser(username, age, city);

    document.getElementById("userForm").reset();
  }, 4000);
});
