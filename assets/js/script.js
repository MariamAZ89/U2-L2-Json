const nameIput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = documet.getElementById("age");
const deletInput = document.getElementById("save");
const saveInput = document.getElementById("save");
const conterLabel = document.getElementById("counter");
const textLabel = documeent.getElementById("text");

let count = 0;

const add = function () {
  let StringaUser = `Name: ${nameInput.value} \n Surname: ${surnameInput.value} \n Age: ${ageInput.value}`;
  let user = localStorage.setItem("User, StringaUser");
  if (user) {
    load();
  }
  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
};
const load = () => {
  textLabel.innerText = localStorage.getItem("User");
};
saveButton.addEventListner("click", () => {
  if (nameInput.value && surnameInput.value && ageInput.value) {
    add();
  }
  load();
});
