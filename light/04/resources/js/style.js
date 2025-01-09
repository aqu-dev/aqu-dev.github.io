/* mediastock-N1 */
(function() {
  $(function() {
    $(".mediastock-N1[id=\'ucM5P45ocG\']").each(function() {
      const $block = $(this);
      // GNB 서브 리스트가 있을 경우, 링크의 href 속성을 비활성화
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
      // 헤더 상단과 GNB 리스트가 있는 경우, 'top-menu-active' 클래스 추가
      const $headerTop = $block.find(".header-top");
      const $gnbList = $block.find(".header-gnbitem");
      if ($headerTop.length && $gnbList.length) {
        $block.addClass("top-menu-active");
      }
      // 모바일 메뉴 버튼 클릭 이벤트 처리 (btn-allmenu 포함)
      $block.on("click", ".btn-momenu, .btn-allmenu", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").click(function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
        setTimeout(() => {
          $block.find(".fullmenu-gnbitem").removeClass("item-active");
          $block.find(".fullmenu-sublist").removeAttr("style");
        }, 500);
      });
      // GNB(대메뉴) 관련 이벤트를 처리하는 함수
      function handleGnbEvents() {
        $block.find(".fullmenu-gnbitem").each(function() {
          const $this = $(this);
          const $thislink = $this.find(".fullmenu-gnblink");
          const $sublist = $this.find(".fullmenu-sublist");
          $thislink.off("click");
          $thislink.on("click", function(e) {
            e.preventDefault();
            const $clickedItem = $(this).closest(".fullmenu-gnbitem");
            const $clickedSublist = $clickedItem.find(".fullmenu-sublist");
            // 같은 블록 내의 다른 메뉴 닫기
            $block
              .find(".fullmenu-gnbitem")
              .not($clickedItem)
              .removeClass("item-active");
            $block
              .find(".fullmenu-sublist")
              .not($clickedSublist)
              .stop()
              .slideUp(300);
            // 현재 메뉴 토글
            $clickedItem.toggleClass("item-active");
            $clickedSublist.stop().slideToggle(300);
          });
        });
      }
      // 초기 GNB 이벤트 처리 함수 실행 (초기화, 반응형 처리)
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      // 스크롤 이벤트 처리 (스크롤 시 헤더의 상태 변경)
      $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
          $block.removeClass("header-top-active");
        } else {
          $block.addClass("header-top-active");
        }
      });
    });
  });
})();
/* mediastock-N9 */
(function() {
  $(function() {
    $(".mediastock-N9[id=\'adm5p45OzK\']").each(function() {
      // Swiper
      const swiper = new Swiper(".mediastock-N9[id=\'adm5p45OzK\'] .swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".mediastock-N9[id=\'adm5p45OzK\'] .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".mediastock-N9[id=\'adm5p45OzK\'] .btn-next",
          prevEl: ".mediastock-N9[id=\'adm5p45OzK\'] .btn-prev",
        },
      });
    });
  });
})();
/* mediastock-N10 */
(function() {
  $(function() {
    $(".mediastock-N10[id=\'Dnm5P45P22\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".mediastock-N10[id=\'Dnm5P45P22\'] .swiper", {
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        speed: 8000,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        beakpoints: {
          992: {
            spaceBetween: 20,
          },
        },
      });
    });
  });
})();
/* campland-N1 */
(function() {
  $(function() {
    $(".campland-N1[id=\'KJm5p9meN9\']").each(function() {
      const $block = $(this);
      // 네비게이션 아이템에서 서브메뉴가 있을 경우 링크의 href를 비활성화
      if (window.innerWidth <= 992) {
        $block.find(".header-gnbitem").each(function() {
          const $gnblink = $(this).find(".header-gnblink");
          const $sublist = $(this).find(".header-sublist");
          if ($sublist.length) {
            $gnblink.attr("href", "javascript:void(0);");
          }
        });
      }
      // 상단 메뉴 존재 여부 확인
      const $headerTop = $block.find(".header-top");
      const $gnbList = $block.find(".header-gnbitem");
      if ($headerTop.length && $gnbList.length) {
        $block.addClass("top-menu-active");
      }
      // 모바일 메뉴 버튼 클릭 시 네비게이션 메뉴 활성화/비활성화
      $block.find(".btn-momenu").on("click", function() {
        $block.toggleClass("block-active");
        $block.find(".header-gnbitem").removeClass("item-active");
        $block.find(".header-sublist").removeAttr("style");
      });
      // 네비게이션 메뉴 이벤트 처리 함수
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
      // 초기 실행 및 리사이즈 시 GNB 이벤트 적용
      handleGnbEvents();
      $(window).on("resize", function() {
        handleGnbEvents();
      });
      // 스크롤 위치가 최상단일 경우에만 상단 메뉴 활성화
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
      // 전체 메뉴 버튼 클릭 시 전체 메뉴 활성화
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      // 전체 메뉴 닫기 버튼 클릭 시 전체 메뉴 비활성화
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // 전체 메뉴 아이템 마우스 오버/아웃 이벤트 (큰 화면에서만)
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
/* campland-N3 */
(function() {
  $(function() {
    $(".campland-N3[id=\'cxm5P9meqT\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".campland-N3[id=\'cxm5P9meqT\'] .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".campland-N3[id=\'cxm5P9meqT\'] .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".campland-N3[id=\'cxm5P9meqT\'] .swiper-button-next",
          prevEl: ".campland-N3[id=\'cxm5P9meqT\'] .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find(".swiper-button-pause");
      const playButton = $block.find(".swiper-button-play");
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
/* campland-N6 */
(function() {
  $(function() {
    $(".campland-N6[id=\'gjM5p9mF0t\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".campland-N6[id=\'gjM5p9mF0t\'] .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".campland-N6[id=\'gjM5p9mF0t\'] .swiper-button-next",
          prevEl: ".campland-N6[id=\'gjM5p9mF0t\'] .swiper-button-prev",
        },
      });
    });
  });
})();
/* butti-N1 */
(function() {
  $(function() {
    $(".butti-N1[id=\'AVm5P9MyyR\']").each(function() {
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
      const $headerTop = $block.find(".header-top");
      const $gnbList = $block.find(".header-gnbitem");
      if ($headerTop.length && $gnbList.length) {
        $block.addClass("top-menu-active");
      }
      // Mobile Lang
      $block.find(".header-langbtn").on("click", function() {
        $(this).parent().toggleClass("lang-active");
      });
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
      // 스크롤 위치가 최상단일 경우에만 상단 메뉴 활성화
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
      //Gnb Hover
      // GNB 전체 영역에 대한 호버 이벤트 처리
      $block.find(".header-gnb").hover(
        function() {
          $block.addClass("gnb-active");
        },
        function() {
          $block.removeClass("gnb-active");
        }
      );
    });
  });
})();
/* butti-N4 */
(function() {
  $(function() {
    $(".butti-N4[id=\'Qxm5P9mZ28\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".butti-N4[id=\'Qxm5P9mZ28\'] .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".butti-N4[id=\'Qxm5P9mZ28\'] .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".butti-N4[id=\'Qxm5P9mZ28\'] .swiper-button-next",
          prevEl: ".butti-N4[id=\'Qxm5P9mZ28\'] .swiper-button-prev",
        },
        breakpoints: {
          992: {
            threshold: 100,
          },
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find(".swiper-button-pause");
      const playButton = $block.find(".swiper-button-play");
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
/* butti-N7 */
(function() {
  $(function() {
    $(".butti-N7[id=\'Ckm5p9mZbk\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".butti-N7[id=\'Ckm5p9mZbk\'] .contents-swiper", {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loopedSlides: 8,
        spaceBetween: 40,
        pagination: {
          el: ".butti-N7[id=\'Ckm5p9mZbk\'] .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".butti-N7[id=\'Ckm5p9mZbk\'] .swiper-button-next",
          prevEl: ".butti-N7[id=\'Ckm5p9mZbk\'] .swiper-button-prev",
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        },
      });
    });
  });
})();
/* butti-N9 */
(function() {
  $(function() {
    $(".butti-N9[id=\'FWM5p9mzHy\']").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".butti-N9[id=\'FWM5p9mzHy\'] .swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          1200: {
            spaceBetween: 40,
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        },
        navigation: {
          nextEl: ".butti-N9[id=\'FWM5p9mzHy\'] .btn-next",
          prevEl: ".butti-N9[id=\'FWM5p9mzHy\'] .btn-prev",
        },
      });
    });
  });
})();
