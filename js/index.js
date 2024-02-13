
new Swiper('.swiper', {
    loop: true,
    // Navigation arrows

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    // navigation: {
    //   nextEl: ".next",
    //   prevEl: ".prev"
    // },
        // включення/відключення перемикання слайду захватом картинки на пк
  simulateTouch: true,

  // чутливість свайпу
  touchRatio: 1,

  // кут зпрацьовування свайпу/перетягування
  touchAngle: 45,

  // курсор перетягування
  grabCursor: true,

  // перемикання при кліку на слайд
slideToClickedSlide: true,
  });