import { Fragment, useEffect } from 'react'
import { Navbar } from 'scenes/header/navbar/navbar'
import { CoverSlider } from 'scenes/body/homePage/cover_slider/cover_slider'
import { TokenIntroduction } from 'scenes/body/homePage/token_introduction/token_introduction'
import { TokenApplications } from 'scenes/body/homePage/token_applications/token_applications'
import { IntroductionInvestment } from 'scenes/body/homePage/introduction_investment/introduction_investment'
import { IntroductionInvestmentSlider } from 'scenes/body/homePage/slider/introduction_investment/introduction_investment'
import { IntroducingApplication } from 'scenes/body/homePage/introducing_application/introducing_application'
import { initializeAppData } from 'services/server/service'
import { Footer } from 'scenes/footer/footer'

export const Home = () => {
  // const title = useAppSelector(state => state.home.homeInfo.title)
  // const dispatch = useAppDispatch()

  useEffect(() => { initializeAppData() }, [])

  // const setTitle = (title: string) => { }
  return (
    <Fragment>
      <Navbar />
      <CoverSlider />
      <TokenIntroduction />
      <TokenApplications />
      <IntroductionInvestment />
      <IntroductionInvestmentSlider />
      <IntroducingApplication />
      <Footer />
    </Fragment>
  )
}
