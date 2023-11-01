window.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("nav-home");
  const projects = document.getElementById("nav-projects");
  const skills = document.getElementById("nav-skills");
  const education = document.getElementById("nav-education");
  const contact = document.getElementById("nav-contact");

  window.addEventListener("popstate", function (event) {
    let url = window.location.href;
    if (url.includes("#home")) {
      home.classList.add("selected");
    } else {
      home.classList.remove("selected");
    }
    if (url.includes("tokai") || url.includes("ramen")) {
      projects.classList.add("selected");
    } else {
      projects.classList.remove("selected");
    }

    if (url.includes("#skills")) {
      skills.classList.add("selected");
    } else {
      skills.classList.remove("selected");
    }
    if (url.includes("#education")) {
      education.classList.add("selected");
    } else {
      education.classList.remove("selected");
    }
    if (url.includes("#contact")) {
      contact.classList.add("selected");
    } else {
      contact.classList.remove("selected");
    }
  });
});
