
window.addEventListener('load', function() {

  if(document.querySelector('body').classList.contains("hp")){
    window.onscroll = function() {
      if (document.documentElement.scrollTop > window.innerHeight*0.9 ) {
        document.querySelector('.stes__number--position').innerHTML = "02";
        document.querySelector('.steps__scala--position').style.height = "50%";
  
        if (document.documentElement.scrollTop > window.innerHeight*1.9 ) {
          document.querySelector('.stes__number--position').innerHTML = "03";
          document.querySelector('.steps__scala--position').style.height = "75%";
  
          if (document.documentElement.scrollTop > window.innerHeight*2.9 ) {
            document.querySelector('.stes__number--position').innerHTML = "04";
            document.querySelector('.steps__scala--position').style.height = "100%";
          }
        }
      }
      else{
        document.querySelector('.stes__number--position').innerHTML = "01";
        document.querySelector('.steps__scala--position').style.height = "25%";
      }
    }
  }

  function scaleNumbre(){
    if(document.querySelector('.stes__number--position').classList.contains("active")){
      document.querySelector('.stes__number--position').classList.remove("active");
      console.log("remove active")
    }
    document.querySelector('.stes__number--position').classList.add("active");
  }

  if(document.querySelector('body').classList.contains("project")){

    var slides = document.querySelectorAll(".slider > .slider__item");
    var currentSlide = 0;

    let elementHeight = document.querySelector('.slider__item--current').clientHeight;
    let windowtHeight = window.innerHeight;
    let topSlider = windowtHeight*0.5 - elementHeight*0.5;

    document.querySelector(".slider__item--current").style.marginTop = topSlider + "px";

    function nextSlide() {
      goToSlide(currentSlide+1);
    }
    function prevSlide(){
      goToSlide(currentSlide-1);
    }
    function goToSlide(n){
      slides[currentSlide].className = 'slider__item';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slider__item slider__item--current';

      let elementHeight = document.querySelector('.slider__item--current').clientHeight;
      let windowtHeight = window.innerHeight;
      let topSlider = windowtHeight*0.5 - elementHeight*0.5;

      document.querySelector(".slider__item--current").style.marginTop = topSlider + "px";

    }
    var prev = document.querySelector('.controls__btn--prev'),
        next = document.querySelector('.controls__btn--next');

    next.onclick = function(){
      nextSlide();
    }
    prev.onclick = function(){
      prevSlide();
    }



    //scroll

    window.onscroll = function() {
      if (document.documentElement.scrollTop > window.innerHeight*0.0 ) {
        document.querySelector('section:first-of-type').style.position = "fixed";
        document.querySelector('.project__description').style.position = "absolute";
        document.querySelector('.project__description').style.marginTop = "100vh";
        if (document.documentElement.scrollTop > window.innerHeight*1.0 ) {
          document.querySelector('.project__description').style.position = "fixed";
          document.querySelector('.project__description').style.marginTop = "0vh";
          document.querySelector('section:last-of-type').style.position = "absolute";
          if (document.documentElement.scrollTop > window.innerHeight*2.0 ){ 
            document.querySelector('section:last-of-type').style.position = "fixed";
          }
        }
      }
    }


  }


  
});





//slider

