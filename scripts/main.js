$( document ).ready(function() {

  // header
  const header = document.querySelector("#header");
  const toggleClass = "scroll-head";

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  });

  // slider
  $('.single-item').slick({
    arrows: true,
            prevArrow:"<div type='button' class='slick-prev arrows pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>",
            nextArrow:"<div type='button' class='slick-next arrows pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>"
  });

});