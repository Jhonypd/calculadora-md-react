/** @format */

const users = [];
const tableBody = document.getElementById("table-body");

const addUser = (username, city, gender, age) => {
  const user = {
    username,
    city,
    gender,
    age: age ? "Sim" : "Não",
  };
  users.push(user);
  updateTable();
};

const updateTable = () => {
  tableBody.innerHTML = "";

  users.forEach((user) => {
    console.log(user);
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td>${user.username}</td>
      <td>${user.city}</td>
      <td>${user.gender}</td>
      <td>${user.age}</td>
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
    const city = document.getElementById("city").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById("age").checked;

    addUser(username, city, gender, age);

    document.getElementById("userForm").reset();
  }, 4000);
});
