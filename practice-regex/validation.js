const inputs = document.querySelectorAll("input");

const pattern = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

function validate(field, regex) {
  //   console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, pattern[e.target.attributes.name.value]);
  });
});
