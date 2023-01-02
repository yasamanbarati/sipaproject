import {
  FooterLinksType,
  NavbarLinksType,
  NewsType,
  TokenApplicationsType,
  TokenIntroductionType,
} from 'scenes/_slice/type'
import token_introduction01 from 'setup/assets/image/IntroductionImage01.png'
import token_introduction02 from 'setup/assets/image/IntroductionImage02.png'
import token_introduction03 from 'setup/assets/image/IntroductionImage03.png'

import slider_introduction_investmentImage01 from 'setup/assets/image/Group 1000002571.png'
import slider_introduction_investmentImage02 from 'setup/assets/image/Group 1000002572.png'
import slider_introduction_investmentImage03 from 'setup/assets/image/Group 1000002573.png'
import token_applications1 from 'setup/assets/image/TokenApplications (4).png'
import token_applications2 from 'setup/assets/image/TokenApplications (2).png'
import token_applications3 from 'setup/assets/image/TokenApplications (3).png'
import token_applications4 from 'setup/assets/image/TokenApplications (1).png'

export const links: NavbarLinksType[] = [
  {
    id: 1,
    name: 'خانه',
    path: '/',
  },
  {
    id: 2,
    name: 'خدمات ما',
    path: '/services',
  },
  {
    id: 3,
    name: 'نمونه کارها',
    path: '/',
  },
  {
    id: 4,
    name: 'درباره ما',
    path: '/',
  },
  {
    id: 5,
    name: 'تماس با ما',
    path: '/',
  },
  {
    id: 6,
    name: 'بلاگ',
    path: '/blog',
  },
]
export const cover: TokenIntroductionType = {
  title: 'آژانس دیجیتال مارکتینگ',
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ',
  contentButton: 'سیپا در یک نگاه',
  playButton: 'مشاهده ویدیو',
  src: '',
  imageAlt: 'Digital marketing agency',
}
export const token_introduction: TokenIntroductionType = {
  title: 'معرفی توکن',
  text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای ',
  contentButton: 'وایت پیپر',
  playButton: 'ویدیوی معرفی توکن',
  src: token_introduction01,
  imageAlt: 'Token introduction',
}
export const token_applications: TokenApplicationsType[] = [
  {
    id: 1,
    title: 'ییلد فارمینگ',
    src: token_applications1,
  },
  {
    id: 2,
    title: 'پرداخت بین الملل',
    src: token_applications2,
  },
  {
    id: 3,
    title: 'کاربرد های توکن',
    src: token_applications3,
  },
  {
    id: 4,
    title: 'خرید از فروشگاه های بین المللی',
    src: token_applications4,
  },
]
export const introduction_investment: TokenIntroductionType = {
  title: 'معرفی صندوق سرمایه گذاری',
  text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای  ',
  contentButton: 'مشاوره رایگان',
  src: token_introduction02,
  imageAlt: 'Introduction of investment fund',
}
export const slider_introduction_investment: TokenApplicationsType[] = [
  {
    id: 1,
    title: 'صندوق سرمایه گذاری املاک و مستغلات سیپا',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
    src: slider_introduction_investmentImage01,
  },
  {
    id: 2,
    title: 'پصندوق سرمایه گذاری درآمد ثابت',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
    src: slider_introduction_investmentImage02,
  },
  {
    id: 3,
    title: 'صندوق سرمایه گذاری ارز دیجیتال سیپا',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
    src: slider_introduction_investmentImage03,
  },
  {
    id: 4,
    title: 'پصندوق سرمایه گذاری درآمد ثابت',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
    src: slider_introduction_investmentImage02,
  },
]
export const introducing_application: TokenApplicationsType = {
  title: 'معرفی اپلیکیشن',
  text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه وکتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
  src: token_introduction03,
}
export const roadMap: TokenApplicationsType[] = [
  {
    id: 1,
    title: 'پرداخت دانشجویی',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
  },
  {
    id: 2,
    title: 'پرداخت دانشجویی',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
  },
  {
    id: 3,
    title: 'پرداخت دانشجویی',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت ',
  },
]
export const news: NewsType[] = [
  {
    id: 1,
    src: '',
    title: 'صندوق سرمایه گذاری درآمد ثابتصندوق سرمایه گذاری درآمد ثابت',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناختکتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت',
    pretext: 'درامد',
    date: 'پنجشنبه 12 فروردین',
    writer: 'سینا پناهدار',
    avatarwriter: '',
  },
  {
    id: 2,
    src: '',
    title: 'صندوق سرمایه گذاری درآمد ثابتصندوق سرمایه گذاری درآمد ثابت',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناختکتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت',
    pretext: 'درامد',
    date: 'پنجشنبه 12 فروردین',
    writer: 'سینا پناهدار',
    avatarwriter: '',
  },
  {
    id: 3,
    src: '',
    title: 'صندوق سرمایه گذاری درآمد ثابتصندوق سرمایه گذاری درآمد ثابت',
    text: 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناختکتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت',
    pretext: 'درامد',
    date: 'پنجشنبه 12 فروردین',
    writer: 'سینا پناهدار',
    avatarwriter: '',
  },
]
export const footerLinks: FooterLinksType[] = [
  {
    id: 1,
    title: 'آموزش',
    links: ['سیپا چیست؟', 'صندوق سرمایه گزاری چیست'],
  },
  {
    id: 2,
    title: 'کاربرد توکن سیپا',
    links: ['لورم ایپسوم', 'متن ساختگی', 'با تولید', 'سادگی', 'نامفهوم از'],
  },
  {
    id: 3,
    title: 'درباره ما',
    links: ['لورم ایپسوم', 'متن ساختگی', 'با تولید', 'سادگی', 'نامفهوم از'],
  },
]
