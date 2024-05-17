(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');
    $('.menuShadow').toggleClass('show');
  }); 

  // password show hide
  function PassShowHide() {
    if (document.querySelectorAll(".passShowHide").length > 0) { 
      let btn = document.querySelector(".passShowHide")
      let inp = btn.parentElement.querySelector('input')
      btn.addEventListener('click', () => {
          btn.classList.toggle('show')
          if (inp.type === "password") {
              inp.type = "text"
          }else{
              inp.type = "password"
          }
      })
    }
  }
  PassShowHide()

  
function IncreamentDecreament() { 
  const btns = document.querySelectorAll('.increament_decreament button')
  if (btns.length > 0) { 
      btns.forEach(btn => {
          btn.addEventListener('click', () => {
              const inp = btn.parentElement.querySelector('input')
              const val = Number(inp.value)
              if (btn.dataset.type == "increase") {
                  inp.value = val + 1
              }else if (btn.dataset.type == "decrease") {
                  if (val > 0) {
                      inp.value = val - 1
                  }
              }
              
              
          })
      }); 
  }
}
IncreamentDecreament()
 
})(jQuery);
