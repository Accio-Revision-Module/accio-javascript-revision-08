const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.setAttribute("src", img.getAttribute("data-src"));
        observer.disconnect();
      }
    });
  });
  observer.observe(img);
});
