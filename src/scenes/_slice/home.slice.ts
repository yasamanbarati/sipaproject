import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IntroductionInvestmentEmpty,
  NavbarLinksType,
  NewsType,
  TokenApplicationsType,
  TokenIntroductionType,
  TokenIntroductionTypeEmpty,
  FooterLinksType,
} from './type'

interface ReduxBodyType {
  NavbarLinks: NavbarLinksType[]
  FooterLinks: FooterLinksType[]
  cover: TokenIntroductionType
  token_introduction: TokenIntroductionType
  token_applications: TokenApplicationsType[]
  introduction_investment: TokenIntroductionType
  slider_introduction_investment: TokenApplicationsType[]
  IntroducingApplication: TokenApplicationsType
  roadMap: TokenApplicationsType[]
  news: NewsType[]
}

const initialState: ReduxBodyType = {
  NavbarLinks: [],
  FooterLinks: [],
  cover: TokenIntroductionTypeEmpty,
  token_introduction: TokenIntroductionTypeEmpty,
  token_applications: [],
  introduction_investment: IntroductionInvestmentEmpty,
  slider_introduction_investment: [],
  IntroducingApplication: { title: '', text: '', src: '' },
  roadMap: [],
  news: [],
}

const setNavbarLinks = (
  state: ReduxBodyType,
  action: PayloadAction<NavbarLinksType[]>,
) => {
  state.NavbarLinks = action.payload
}

const setTokenIntroduction = (
  state: ReduxBodyType,
  action: PayloadAction<TokenIntroductionType>,
) => {
  state.token_introduction = action.payload
}

const setTokenApplications = (
  state: ReduxBodyType,
  action: PayloadAction<TokenApplicationsType[]>,
) => {
  state.token_applications = action.payload
}

// const setTokenIntroduction = (
//   state: ReduxBodyType,
//   action: PayloadAction<TokenIntroductionType>,
// ) => {
//   state.token_introduction = action.payload
// }

// const setTokenIntroduction = (
//   state: ReduxBodyType,
//   action: PayloadAction<TokenIntroductionType>,
// ) => {
//   state.token_introduction = action.payload
// }

const setIntroducingApplication = (
  state: ReduxBodyType,
  action: PayloadAction<TokenApplicationsType>,
) => {
  state.IntroducingApplication = action.payload
}

const setSliderIntroduction = (
  state: ReduxBodyType,
  action: PayloadAction<TokenApplicationsType[]>,
) => {
  state.slider_introduction_investment = action.payload
}

const setroadMap = (
  state: ReduxBodyType,
  action: PayloadAction<TokenApplicationsType[]>,
) => {
  state.roadMap = action.payload
}

const setFooterLinks = (
  state: ReduxBodyType,
  action: PayloadAction<FooterLinksType[]>,
) => {
  state.FooterLinks = action.payload
}


const homeSlice = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setNavbarLinks,
    setroadMap,
    setIntroducingApplication,
    setFooterLinks,
    setSliderIntroduction,
  },
})

export const {
  setNavbarLinks: setNavbarLinksAction,
  setroadMap: setroadMapAction,
  setIntroducingApplication: setIntroducingApplicationAction,
  setFooterLinks: setFooterLinksAction,
  setSliderIntroduction: setSliderIntroductionAction,
} = homeSlice.actions

export default homeSlice.reducer
