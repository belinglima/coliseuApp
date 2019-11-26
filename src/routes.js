import { createStackNavigator } from 'react-navigation'

import SignIn from './components/signIn'
import Home from './components/home'

const Routes = createStackNavigator(
  {
    SignIn,
    Home,
  },{
    header: null,
    headerMode: 'none'
  })

export default Routes
