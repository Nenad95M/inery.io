const jobFilter= function(){
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
}

const moreJobs=function(){
 let called=false
  function callApi() {
    fetch('/databaseSimulation/data.json').then(response => response.json()).then(data => {
     if (called==false){
      makeUI(data['jobs'])
    jobFilter();
    called=true;
     }
      });
    
 }
 const ui=document.getElementById("jobs-container");

 function makeUI(data){
   data.forEach(element => {
  ui.innerHTML+= `<article class="job-card" data-category="${element.category}">
  <div class="meta-info">
    <div class="category ${element.category}">${element.job}</div>
    <div class="long-time-ago">22h ago</div>
  </div>
  <div class="text-block">
    <h3>${element.title}</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat.</p>
  </div>
  <div class="spacetime">
    <div class="info-group">
      <img src="/assets/img/jobs-article/time.png" alt="time">
      <p class="info-group-text">${element.time}</p>
    </div>
    <div class="info-group">
      <img src="/assets/img/jobs-article/location.png" alt="location">
      <p class="info-group-text">${element.location}</p>
    </div>
  </div>
  <a class="apply-btn" href="/application.html#application-form">Apply now</a>

</article>`
});

}

document.getElementById("show-all-jobs").addEventListener('click', callApi)
}

if(document.getElementById("jobs-container")){
    jobFilter();
    moreJobs();
}