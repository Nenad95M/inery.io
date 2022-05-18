//google recaptcha, dugme je iskljuceno dok se recaptcha ne potvrdi
//tek nakon toga moze da se submituje forma
function recaptchaCallback() {
    document.getElementById("submitFormBTN").removeAttribute("disabled");
  }
(function () {
    //pravim niz elemenata od node liste inputa koji nose klasu required
    //prolazim kroz njih i proveravam da li su oni mozda prazni
    //ako jesu upisujem obavestenje korisniku da ih popuni u placeholder
    const form = document.getElementById("application-form");
    const requiredFormInputs = Array.from(
      document.getElementsByClassName("required")
    );
    form.addEventListener("submit", function (e) {
      requiredFormInputs.forEach((element) => {
        if (element.value.trim() === "") {
          element.placeholder = "This field must not be blank!";
          element.style="border: 3px solid red";
          e.preventDefault();
        }
        
      });
    });
  })();
  




