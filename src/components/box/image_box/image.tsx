import React from "react"
import { CardMedia } from "@mui/material"
import { ImageMadia } from "../../../services/type/type"

export const Image = ({ src, alt, Imagestyle }: ImageMadia) => {
  return (
    <CardMedia component="img" image={src} alt={alt} sx={{ ...Imagestyle }} />
  )
}
