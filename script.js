
// Source credit: http://thenewcode.com/279/Rotate-Elements-on-Scroll-with-JavaScript

(function(){
    var throttle = function(type, name, obj){
        var obj = obj || window;
        var running = false;
        var func = function(){
            if (running){
                return;
            }
            running = true;
            requestAnimationFrame(function(){
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
  
    throttle("scroll", "optimizedScroll");
})();

// Roadmap Image rotation
const rotate_image = document.querySelector('.roadmap__content-left');

window.addEventListener("optimizedScroll", function(){
    rotate_image.style.transform = "rotate(" + (window.pageYOffset)/95 + "deg)";
})

// Sliders images
const slider_img_1 = document.querySelector('.slider-1');
const slider_img_2 = document.querySelector('.slider-2');
const slider_img_3 = document.querySelector('.slider-3');

window.addEventListener("optimizedScroll", function(){
    slider_img_1.style.transform = "translateX(" + (-window.pageYOffset/7) + "px)";
    slider_img_3.style.transform = "translateX(" + (-window.pageYOffset/7) + "px)";

    slider_img_2.style.transform = "translateX(" + (window.pageYOffset/7) + "px)";
})

// FAQs accordions
const accItems = document.querySelectorAll('.accordion__item');

for (let i=0; i<accItems.length; i++) {
    accItems[i].addEventListener('click', () => {
        accItems[i].classList.toggle('open');
    })
}

