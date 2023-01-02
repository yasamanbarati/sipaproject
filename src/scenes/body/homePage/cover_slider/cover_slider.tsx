import { Fragment } from "react"
import { Cover } from "components/cover/cover"
import { cover } from "services/server/mock"

export const CoverSlider = () => {
  return (
    <Fragment>
      <Cover
        display={true}
        coverText={cover.text}
        coverTitle={cover.title}
        coverContentButton={cover.contentButton}
        coverPlayButton={cover.playButton}
      />
    </Fragment>
  )
}
