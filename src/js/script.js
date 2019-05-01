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
});
