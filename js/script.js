//JavaScript

   //Tabs

   const tabsTitle = document.querySelectorAll('.tabs__switcher');
   const tabsContent = document.querySelectorAll('.tabs__content');
   
   tabsTitle.forEach(item => item.addEventListener('click', event => {
      const tabsTitleTarget = event.target.getAttribute('data-tab');
   
      tabsTitle.forEach(element => element.classList.remove('active-tab'));
      tabsContent.forEach(element => element.classList.add('hidden-tab-content'));
   
      item.classList.add('active-tab');
      document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
   }));
   
   document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
   document.querySelector('#tab-1').classList.remove('hidden-tab-content');

//JQuery

   //Scroll animations
   
   $('.main__info').addClass('animation');
   $('.main__form').addClass('animation');
   $('.header__link.first').addClass('activeLink');
   
   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 100) {
         $('.social__info').addClass('animation');
         $('.social__icons').addClass('animation');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 400) {
         $('.tabs').addClass('animation');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 500) {
         $('.header__link.first').addClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 600) {
         $('.header__link.first').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 850) {
         $('.section__img').addClass('animation');
         $('.section__info').addClass('animation');
         $('.header__link.second').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 950) {
         $('.header__link.second').addClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1500) {
         $('.standart__img').addClass('animation');
         $('.standart__info').addClass('animation');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1700) {

         $('.header__link.second').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2100) {
         $('.reason__info').addClass('animation');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2500) {
         $('.header__link.third').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2600) {
         $('.pricing__info').addClass('animation');
         $('.header__link.third').addClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 3400) {
         $('.header__link.forth').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 3500) {
         $('.reviews__info').addClass('animation');
         $('.header__link.third').removeClass('activeLink');
         $('.header__link.forth').addClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4300) {
         $('.contact__form-1').addClass('animation');
         $('.contact__form-2').addClass('animation');
         $('.header__link.forth').removeClass('activeLink');
         $('.header__link.fifth').removeClass('activeLink');
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4500) {
         $('.contact__form-1').addClass('animation');
         $('.contact__form-2').addClass('animation');
         $('.header__link.fifth').addClass('activeLink');
      }
   });


   //Smooth Scroll
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;
      
      $("html, body").animate({
         scrollTop: blockOffset
      }, 500);
      });