
// API OBSERVER
const observer = new IntersectionObserver((entries) => {
  //OBSERVE ITEM
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });

});

// OBSERVE HVAD?
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
