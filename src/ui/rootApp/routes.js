import Home from 'ui/views/Home/Home'
import AboutUs from 'ui/views/AboutUs/AboutUs'
import NotFound from 'ui/views/NotFound/NotFound'

// const dynamicImporter = (modulePath) => {
//   console.log('module is', modulePath)
//   import(modulePath)
//     .then((module) => {
//       console.log('module is', module)
//       return module
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }
//
// const HomeComponent = dynamicImporter('../../views/Home/Home')

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
    component: NotFound,
  }
]
