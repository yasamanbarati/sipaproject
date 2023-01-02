import Slider from 'react-slick'
import { SlickSliderProps } from '../../services/type/type'

export const SlickSlider = ({ children, settings }: SlickSliderProps) => {
  return <Slider {...settings}>{children}</Slider>
}
