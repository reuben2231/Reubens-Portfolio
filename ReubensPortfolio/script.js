const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        year: "2026",
        url: "https://example.com/project1",
        image: "SPOTIFYTRACKERIMG.png"
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        year: "2027",
        url: "https://example.com/project2",
        image: "images/project2.jpg"   
    },
    {
        title: "Project 3",
        description: "Description of Project 3",
        year: "2028",
        url: "https://example.com/project3",
        image: "images/project3.jpg"
    }
];

//assign an image to project box


let currentPosition = 0;

//element references for project box
const projectLink = document.getElementById("project-link");
const projectYear = document.getElementById("project-year");
const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-desc");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


function updateProjectCard() {
  const activeProject = projects[currentPosition];

  //update the project boxes attributes
  projectTitle.textContent = activeProject.title;
  projectDesc.textContent = activeProject.description;
  projectYear.textContent = activeProject.year;
  projectLink.href = activeProject.url;
}

//listens for button presses and updates the project card accordingly
nextBtn.addEventListener("click", () => {
  currentPosition++;
  //if end of array, loop back to the beginning
  if (currentPosition >= projects.length) {
    currentPosition = 0;
  }
  updateProjectCard();
});

//listens for button presses and updates the project card accordingly
prevBtn.addEventListener("click", () => {
  currentPosition--;
  //if beginning of array, loop back to the end
  if (currentPosition < 0) {
    currentPosition = projects.length - 1;
  }
  updateProjectCard();
});

//initisalises project box
updateProjectCard();

const darkmodeToggle = document.getElementById("dark-mode-toggle");
darkmodeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

});
