alert("Hello! I am an alert box!!");

const firstpageanimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const slidefromleftanimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-from-left-show");
    } else {
      entry.target.classList.remove("slide-from-left-show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => firstpageanimation.observe(el));

const hiddenElements1 = document.querySelectorAll(".slide-from-left-hidden");
hiddenElements1.forEach((el) => slidefromleftanimation.observe(el));
