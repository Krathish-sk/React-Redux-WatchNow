export const Settings = {
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 5,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
