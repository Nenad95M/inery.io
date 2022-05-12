(function(){
const allJobs = document.getElementById("all-jobs");
const blockchainJobs = document.getElementById("blockchain-jobs");
const frontEndJobs = document.getElementById("front-end-jobs");
const backEndJobs = document.getElementById("back-end-jobs");
let jobsContainer = document
  .getElementById("jobs-container")
  .getElementsByClassName("job-card");

jobsContainer = Array.from(jobsContainer);


allJobs.addEventListener("click", displayAll);

function displayAll() {
  jobsContainer.forEach((element) => {
    element.style.display = "flex";
  });
}

blockchainJobs.addEventListener("click", function () {
  displayAll();
  jobsContainer.forEach((element) => {
    if (element.getAttribute("data-category") !== "blockchain") {
      element.style.display = "none";
    }
  });
});

frontEndJobs.addEventListener("click", function () {
  displayAll();
  jobsContainer.forEach((element) => {
    if (element.getAttribute("data-category") !== "front-end") {
      element.style.display = "none";
    }
  });
});
backEndJobs.addEventListener("click", function () {
  displayAll();
  jobsContainer.forEach((element) => {
    if (element.getAttribute("data-category") !== "back-end") {
      element.style.display = "none";
    }
  });
});
})();