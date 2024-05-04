// Multiple ways to target any html element
// const nameInput2 = document.getElementsByClassName("nameInputClass");
// const nameInput3 = document.querySelector("#nameInput");
// const nameInput4 = document.querySelector(".nameInputClass");

const BASE_URL = "http://localhost:8080/";

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");

submitButton.onclick = async () => {
  console.log("submitButton clicked");
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  console.log({ nameInputValue, emailInputValue });

  // Need to hit the POST route
  const response = await axios.post(
    BASE_URL + "submitForm",
    { name: nameInputValue, email: emailInputValue },
    {
      "Access-Control-Allow-Origin": "*",
    }
  );

  const data = response.data.data;
  const tableElement = document.getElementById("table");

  const newTr = document.createElement("tr");

  const nameTh = document.createElement("th");
  const emailTh = document.createElement("th");
  nameTh.innerText = "Name";
  emailTh.innerText = "Email";
  newTr.appendChild(nameTh);
  newTr.appendChild(emailTh);

  tableElement.appendChild(newTr);

  for (let i = 0; i < data.length; i++) {
    const newTr = document.createElement("tr");

    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    nameTd.innerText = data[i].name;
    emailTd.innerText = data[i].email;

    newTr.appendChild(nameTd);
    newTr.appendChild(emailTd);

    tableElement.appendChild(newTr);
  }
};
// User Interaction Feedback
// On user action (e.g., button click)
//     Display loading indicator
//     Perform action
//     Remove loading indicator once action is complete
