const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert`Please fill in all the fields`;
  } else {
    const ident = {
      email: email.value,
      password: password.value,
    };
    // console.dir(ident);
  }
  evt.currentTarget.reset();
}
