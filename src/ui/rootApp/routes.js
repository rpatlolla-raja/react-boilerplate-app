import asyncImporter from './asyncImporter'

const Home = asyncImporter(() => import('ui/views/Home/Home'))
const AboutUs = asyncImporter(() => import('ui/views/AboutUs/AboutUs'))
const NotFound = asyncImporter(() => import('ui/views/NotFound/NotFound'))

export default [
  {
    path: '/',
    name: 'HOME',
    component: Home,
    exact: true
  },
  {
    path: '/about-us',
    name: 'ABOUT_US',
    component: AboutUs,
    exact: true
  },
  {
    path: '*',
    name: 'NOT_FOUND',
    component: NotFound
  }
]
