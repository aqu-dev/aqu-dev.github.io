/* tedu_light-N1 */
(function() {
  $(function() {
    $(".tedu_light-N1[id=\'OOM4mSRrn8\']").each(function() {
      const $block = $(this);
      // Header Mobile 1Depth Click
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
      // Header Top
      const $headerTop = $block.find(".header-top");
      const $gnbList = $block.find(".header-gnbitem");
      if ($headerTop.length && $gnbList.length) {
        $block.addClass("top-menu-active");
      }
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr("style");
      });
      // Mobile Gnb
      function handleGnbEvents() {
        $block.find(".header-gnbitem").each(function() {
          const $this = $(this);
          const $thislink = $this.find(".header-gnblink");
          const $sublist = $this.find(".header-sublist");
          $thislink.off("click");
          if (window.innerWidth < 992) {
            $thislink.on("click", function() {
              const $clickedItem = $(this).parents(".header-gnbitem");
              if (!$clickedItem.hasClass("item-active")) {
                $block.find(".header-gnbitem").removeClass("item-active");
                $block.find(".header-sublist").stop().slideUp(300);
              }
              $clickedItem.toggleClass("item-active");
              $sublist.stop().slideToggle(300);
            });
          } else {
            $sublist.removeAttr("style");
            $block.removeClass("block-active");
            $block.find(".header-gnbitem").removeClass("item-active");
          }
        });
      }
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      //Scroll Header
      if ($(window).scrollTop() === 0) {
        $block.addClass("header-top-active");
      }
      $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
          $block.removeClass("header-top-active");
        } else {
          $block.addClass("header-top-active");
        }
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);

        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
    });
  });
})();
/* tedu_light-N3 */
(function() {
  $(function() {
    $(".tedu_light-N3[id=\'ooM4mSRRsY\']").each(function() {
      const $block = $(this);
      const visualSwiper = new Swiper(".tedu_light-N3[id=\'ooM4mSRRsY\'] .contents-swiper", {
        speed: 600,
        parallax: true,
        loop: true,
        touchEventsTarget: "wrapper",
        slidesPerView: "auto",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".tedu_light-N3[id=\'ooM4mSRRsY\'] .contents-swiper .swiper-pagination",
          clickable: "true",
        },
        on: {
          slideChange: function() {
            var activeSlide = this.slides[this.activeIndex];
            if ($(activeSlide).hasClass("btype")) {
              $(this.$el).addClass("btype-swiper");
            } else {
              $(this.$el).removeClass("btype-swiper");
            }
          },
        },
      });

      // Swiper Play, Pause Button
      const pauseButton = $block.find(".swiper-button-pause");
      const playButton = $block.find(".swiper-button-play");
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function() {
        visualSwiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function() {
        visualSwiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
/* tedu_light-N4 */
(function() {
  $(function() {
    $(".tedu_light-N4[id=\'LGm4msRrwq\']").each(function() {
      const $block = $(this);
      var contSwiper = new Swiper(".tedu_light-N4[id=\'LGm4msRrwq\'] .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        speed: 500,
        navigation: {
          nextEl: ".tedu_light-N4[id=\'LGm4msRrwq\'] .swiper-button-next",
          prevEl: ".tedu_light-N4[id=\'LGm4msRrwq\'] .swiper-button-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
      // Bookmark Button
      $block.find(".ico-bookmark").on("click", function() {
        $(this).toggleClass("active");
      });
    });
  });
})();
/* tedu_light-N8 */
(function() {
  $(function() {
    $(".tedu_light-N8[id=\'fQm4MsrS7D\']").each(function() {
      const $block = $(this);
      const contSwiper = new Swiper(".tedu_light-N8[id=\'fQm4MsrS7D\'] .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 500,
        navigation: {
          nextEl: ".tedu_light-N8[id=\'fQm4MsrS7D\'] .swiper-button-next",
          prevEl: ".tedu_light-N8[id=\'fQm4MsrS7D\'] .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    });
  });
})();
