import { Box, styled } from '@mui/material'
import { ReactComponent as IconPool } from 'setup/assets/image/Pool.svg'
import { ReactComponent as IconStake } from 'setup/assets/image/Stake.svg'
import { ReactComponent as IconFarm } from 'setup/assets/image/Farm.svg'
import { CoverButton } from './cover_button'

const CoverButtonBox = styled(Box)({
    width: "100%",
    height: "100%",
    position: "absolute",
})
const PoolButtonStyle = {
    left: { xs: "0", md: "-35px", laptop: "0" },
    top: { xs: "60px", md: "100px", laptop: "60px" },
}
const StakeButtonStyle = {
    left: "20px",
    bottom: "-20px",
}
const FarmButtonStyle = {
    right: "50px",
    bottom: "85px",
    backdropFilter: "blur(32px)",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0px 110.121px 88.0972px rgba(0, 0, 0, 0.03), 0px 71.375px 51.5939px rgba(0, 0, 0, 0.0227778), 0px 42.4172px 28.0606px rgba(0, 0, 0, 0.0182222), 0px 22.0243px 14.3158px rgba(0, 0, 0, 0.015), 0px 8.97286px 7.17829px rgba(0, 0, 0, 0.0117778), 0px 2.03929px 3.46679px rgba(0, 0, 0, 0.00722222)",
}
export const CoverBackgroundButton = () => {
    return (
        <CoverButtonBox>
            <CoverButton sxStyle={PoolButtonStyle} icon={<IconPool />} Text="Pool" />
            <CoverButton sxStyle={StakeButtonStyle} icon={<IconStake />} Text="Stake" />
            <CoverButton sxStyle={FarmButtonStyle} icon={<IconFarm />} Text="Farm" />
        </CoverButtonBox>
    )
}
