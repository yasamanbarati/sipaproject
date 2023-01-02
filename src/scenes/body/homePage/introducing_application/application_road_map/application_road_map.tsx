import { Box, Container, Grid, styled } from '@mui/material'
import { useAppSelector } from 'setup/redux/react-hooks'
import { ApplicationRoadMapCard } from './application_road_map_card/application_road_map_card'
import vector from 'setup/assets/image/Vector 335.png'

const RoadMapBox = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("xs")]: {
        position: 'relative',
        minHeight: "600px",
        marginTop: "30px",
        "& .vectorImage": {
            display: "none",
        }
    },
    [theme.breakpoints.up("tabletL")]: {
        position: "absolute",
        "& .vectorImage": {
            display: "block",
            position: "absolute",
            left: "0",
            top: "-40px",
            [theme.breakpoints.up("tabletL")]: {
                width: "82%",
                height: "580px",
            },
            [theme.breakpoints.up("md")]: {
                width: "83%",
                height: "500px",
            },
            [theme.breakpoints.up("lg")]: {
                width: "80%",
            },
        }
    },
}))
const RoadMapContainer = styled(Container)(({ theme }) => ({
    height: 'auto',
    minHeight: 'inherit',
}))
const RoadMapGrid = styled(Grid)(({ theme }) => ({
    position: 'relative',
}))
const MapCardGrid = styled(Grid)(({ theme }) => ({
    ":nth-child(2)": {
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
            bottom: "-250px",
        },
        [theme.breakpoints.up("mobileM")]: {
            left: "auto",
            bottom: "-190px",
        },
        [theme.breakpoints.up("tabletL")]: {
            left: "40%",
            bottom: "-270px",
        },
    },
    ":nth-child(3)": {
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
            bottom: "-500px",
            "& .RoadMapCardBox::before": {
                display: "none",
            },
        },
        [theme.breakpoints.up("mobileM")]: {
            left: "auto",
            bottom: "-390px",
        },
        [theme.breakpoints.up("tabletL")]: {
            left: "0",
            bottom: "-470px",
        },
        "& .css-1dacuyv": {
            top: "0px",
            [theme.breakpoints.up("tabletL")]: {
                top: "-50px",
            },
            [theme.breakpoints.up("md")]: {
                top: "-90px",
            },
            [theme.breakpoints.up("laptop")]: {
                top: "-110px",
            },
        }
    }
}))

export const ApplicationRoadMap = () => {

    const MapData = useAppSelector(state => state.home.roadMap)

    return (
        <RoadMapBox sx={{
            bottom: { laptop: "120px", tabletL: '60px', xs: '0' },
        }}>
            <img src={vector} className='vectorImage' />
            <RoadMapContainer fixed>
                <RoadMapGrid container>
                    {MapData.map((item) => {
                        return <MapCardGrid
                            item
                            tabletL={4}
                            xs={12}>
                            <ApplicationRoadMapCard
                                CardId={item.id}
                                title={item.title}
                                text={item.text} />
                        </MapCardGrid>
                    })}
                </RoadMapGrid>
            </RoadMapContainer >
        </RoadMapBox>
    )
}
