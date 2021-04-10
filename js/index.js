const animationDuration = 4000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);


  $(document).ready(function(){
    var navbar =$('.navbar');
    $(window).scroll(function(){
      if($(window).scrollTop() <=40){
        navbar.removeClass('navbar-scroll');
      }else{
        navbar.addClass('navbar-scroll');
      }
    });
  });

                  // Select all links with hashes
                  $('a[href*="#"]')
                  // Remove links that don't actually link to anything
                  .not('[href="#"]')
                  .not('[href="#0"]')
                  .click(function(event) {
                      // On-page links
                      if (
                      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                      && 
                      location.hostname == this.hostname
                      ) {
                      // Figure out element to scroll to
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                      // Does a scroll target exist?
                      if (target.length) {
                          // Only prevent default if animation is actually gonna happen
                          event.preventDefault();
                          $('html, body').animate({
                          scrollTop: target.offset().top
                          }, 1000, function() {
                          // Callback after animation
                          // Must change focus!
                          var $target = $(target);
                          $target.focus();
                          if ($target.is(":focus")) { // Checking if the target was focused
                              return false;
                          } else {
                              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                              $target.focus(); // Set focus again
                          };
                          });
                      }
                      }
                  });
