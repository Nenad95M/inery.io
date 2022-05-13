//filtriranje poslova po kategorijama
const jobFilter= function(){
const allJobsBtn = document.getElementById("all-jobs");
const blockchainJobs = document.getElementById("blockchain-jobs");
const frontEndJobs = document.getElementById("front-end-jobs");
const backEndJobs = document.getElementById("back-end-jobs");
const filterButtons=Array.from(document.querySelector('.job-filter').children);
console.log(filterButtons);
let jobsContainer = document
  .getElementById("jobs-container")
  .getElementsByClassName("job-card");

jobsContainer = Array.from(jobsContainer);


function removeActive(){
  filterButtons.forEach(element => {
  if(element.classList.contains('active')){
    element.classList.remove('active');
  }
  });
}
function addActive(e){
  e.target.classList.add('active');
console.log(e.target.classList);
}

function displayAll() {
  jobsContainer.forEach((element) => {
    element.style.display = "flex";
  });
}
function takeCareOfDOM(e){
  removeActive();
  addActive(e);
  displayAll();
}
function jobCategoryFilter(jobCategory){
  jobsContainer.forEach((element) => {
    if (element.getAttribute("data-category") !== jobCategory) {
      element.style.display = "none";
    }
  });
}
allJobsBtn.addEventListener('click',function(e){
  takeCareOfDOM(e);
})

blockchainJobs.addEventListener("click", function (e) {
  takeCareOfDOM(e);
  let jobCategory="blockchain";
  jobCategoryFilter(jobCategory);

});

frontEndJobs.addEventListener("click", function (e) {
  takeCareOfDOM(e);
  let jobCategory="front-end";
  jobCategoryFilter(jobCategory);
});

backEndJobs.addEventListener("click", function (e) {
  takeCareOfDOM(e);
  let jobCategory="back-end";
  jobCategoryFilter(jobCategory);
});
}
//Simulacija fecovanja dodatnih poslova iz neke baze
const moreJobs=function(){
  //da bi se api samo jednom pozvao
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
// validacija subscribe inputa
const subscribeValidation=function(){
 const subscribeForm=document.getElementById('subscribe-form');
 subscribeForm.addEventListener('invalid', function(e){
   console.log('invalid');
   e.preventDefault;
 })
}

//proveravam da li html fajl sadrzi elemente sa kojima rade selektori
//ako sadrzi funkcije se inicijalizuju
if(document.getElementById("jobs-container")){
    jobFilter();
    moreJobs();
}

