import { Box, styled } from "@mui/material"
import { FooterContent } from "./footer_content/footer_content"
import { FooterFootnote } from "./footer_footnote/footer_footnote"

const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.footerBG,
  minHeight: "500px",
  borderRadius: "33px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}))
export const Footer = () => {
  return (
    <FooterBox>
      <FooterContent />
      <FooterFootnote />
    </FooterBox>
  )
}
