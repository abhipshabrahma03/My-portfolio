document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
});

function filterProjects(type) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach(project => {
    if (type === 'all' || project.dataset.type === type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
