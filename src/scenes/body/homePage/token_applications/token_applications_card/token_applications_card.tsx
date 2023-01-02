import { CustomCard } from "../../../../../components/custom_card/custom_card"
import { CustomCardProps } from "../../../../../services/type/type"

export const TokenApplicationsCard = ({
  cardStyle,
  title,
  titleStyle,
  ImageSrc,
  Imagestyle
}: CustomCardProps) => {
  return (
    <CustomCard
      cardStyle={cardStyle}
      ContentMode={false}
      title={title}
      titleStyle={titleStyle}
      ImageSrc={ImageSrc}
      Imagestyle={Imagestyle}
      ImageMode={true}
    />
  )
}
