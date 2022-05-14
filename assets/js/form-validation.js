//pristupam inputima koji nose klasu required i proveravam da li je korisnik uneo nesto 
const form = document.getElementById("application-form");
const requiredFormInputs = Array.from(
  document.getElementsByClassName("required")
);
form.addEventListener("submit", function (e) {
  requiredFormInputs.forEach((element) => {
    if (element.value.trim() === "") {
      element.placeholder = "This field must not be blank!";
      e.preventDefault();
    }
  });
});
