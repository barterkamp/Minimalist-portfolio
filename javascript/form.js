const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  name.value = "";
  email.value = "";
  message.value = "";
});

const setError = (input, message) => {
  // selecteert alleen de specifieke input
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (input) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    setError(message, "This field is required");
  } else {
    setSuccess(message);
  }
};
