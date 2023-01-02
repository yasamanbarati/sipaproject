import { CarouselDots } from '../../../../helpers/carousel-dots'

export const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  dots: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  placeholders: false,
  ...CarouselDots({}),
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}
