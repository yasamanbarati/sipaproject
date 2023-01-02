import { Grid } from "@mui/material"
import { useAppSelector } from "setup/redux/react-hooks"
import { FooterContentLinkItem } from "./footer_content_link_Item"

const ContentGridStyle = {
    ":first-child": {
        flexBasis: "100%",
        maxWidth: "100%",
    }
}
export const FooterContentLinks = () => {
    const ContentLinksItem = useAppSelector(state => state.home.FooterLinks)
    return (
        <Grid container md={8} xs={10} sx={{ ContentGridStyle }}>
            {ContentLinksItem.map((item) => {
                return <Grid
                    item
                    sm={4}
                    xs={6}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    mt={5}>
                    <FooterContentLinkItem
                        id={item.id}
                        title={item.title}
                        links={item.links} />
                </Grid>
            })}
        </Grid>
    )
}
