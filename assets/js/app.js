//filtriranje poslova po kategorijama
const jobFilter = function () {
  const filterButtons = Array.from(
    document.querySelector(".job-filter").querySelectorAll('button')
  );

  const jobsContainer = Array.from(document
    .getElementById("jobs-container").getElementsByClassName("job-card"));

  filterButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
      buttonAndContent(e);
      jobCategoryFilter(button.id);
    })
 });
  //za filtriranje koristim atribut data-category koji sam napravio u HTML-u
  function jobCategoryFilter(buttonID) {
    jobsContainer.forEach(job => {
      if(buttonID=="all-jobs"){
        job.style.display = "flex";

      }
      else{
      if (job.getAttribute("data-category") !== buttonID) {
        job.style.display = "none";
      }}
    });
  }

  function buttonAndContent(e) {
    function removeActive() {
      filterButtons.forEach(button => {
        button.classList.remove("active");
      })};
    function addActive(e) {
      e.target.classList.add("active");
    }
    function displayAll() {
      jobsContainer.forEach((job) => {
        job.style="display: flex";
      });
    }
    removeActive();
    addActive(e);
    displayAll();
  }

}



//Simulacija fecovanja dodatnih poslova iz neke baze
const moreJobs = function () {
  let called = false;
  //da bi se api samo jednom pozvao
  //nakon prvog poziva ce biti true
  function callApi() {
    if (called == false) {
      fetch("/databaseSimulation/data.json")
        .then((response) => response.json())
        .then((data) => {
          makeUI(data["jobs"]);
          jobFilter();
          called = true;
        });
    }
  }
  const ui = document.getElementById("jobs-container");

  function makeUI(data) {
    data.forEach((element) => {
      ui.innerHTML += `<article class="job-card" data-category="${element.category}">
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

</article>`;
    });
  }

  document.getElementById("show-all-jobs").addEventListener("click", callApi);
  document
    .getElementById("touchCircle")
    .addEventListener("touchstart", callApi);
};

// ponovo simulacija sa baze za job-description stranu
const showEvenMoreJobs = function () {
  let called = false;
  //da bi se api samo jednom pozvao
  //nakon prvog poziva ce biti true
  function callApi() {
    if (called == false) {
      fetch("/databaseSimulation/data.json")
        .then((response) => response.json())
        .then((data) => {
          makeUI(data["jobs"]);
          called = true;
        });
    }
  }
  const ui = document.getElementById("job-table");
  function makeUI(data) {
    data.forEach((element) => {
      ui.innerHTML += `<div class="row">
      <div class="job-avatar">
          <div class="${element.language}-img"></div>
          <div class="job-title">
              <h3>${element.title}</h3>
              <small>${element.job}</small>
          </div>
      </div>
      <div class="location"><img draggable="false" src="/assets/img/similarOffers/location-remote.png"
              alt="remote location"></div>
      <div class="level"><img draggable="false" src="/assets/img/similarOffers/level-medior.png"
              alt="medior level"></div>
      <div class="department"><img draggable="false"
              src="/assets/img/similarOffers/department-development.png" alt="development department">
      </div>
  </div>`;
    });
  }

  document.getElementById("all-jobs").addEventListener("click", callApi);
};

//proveravam da li html fajl sadrzi elemente sa kojima rade selektori
//ako sadrzi funkcije se inicijalizuju,
// ovo koristim kako bih izbegao greske u konzoli zbog id selektora koji ne postoje na drugim stranama
if (document.getElementById("jobs-container")) {
  jobFilter();
  moreJobs();
}
if (document.getElementById("job-table")) {
  showEvenMoreJobs();
}
