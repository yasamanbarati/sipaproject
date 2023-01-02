import { CarouselDots } from '../../../../../helpers/carousel-dots'

export const settings = {
  infinite: true,
  dots: true,
  speed: 1000,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  ...CarouselDots({}),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}
