// window.setInterval(function(){
//   console.log("test");
//   console.log(document.documentElement.scrollTop);
//   if(document.documentElement.scrollTop = window.innerHeight*1){
//     document.querySelector('.stes__number--position').innerHTML = "02";
//     console.log("test5");
//     if(document.documentElement.scrollTop = window.innerHeight*2){
//       document.querySelector('.stes__number--position').innerHTML = "03";
//       console.log("test5");
//       if(document.documentElement.scrollTop = window.innerHeight*3){
//         document.querySelector('.stes__number--position').innerHTML = "04";
//         console.log("test5")
//       }
//     }
//   }
// }, 1000);


window.addEventListener('load', function() {

  if(document.querySelector('body').classList.contains("hp")){
    window.onscroll = function() {
      if (document.documentElement.scrollTop > window.innerHeight*0.9 ) {
        document.querySelector('.stes__number--position').innerHTML = "02";
  
        if (document.documentElement.scrollTop > window.innerHeight*1.9 ) {
          document.querySelector('.stes__number--position').innerHTML = "03";
  
          if (document.documentElement.scrollTop > window.innerHeight*2.9 ) {
            document.querySelector('.stes__number--position').innerHTML = "04";
     
          }
        }
      }
      else{
        document.querySelector('.stes__number--position').innerHTML = "01";
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

  }


  
});





//slider

