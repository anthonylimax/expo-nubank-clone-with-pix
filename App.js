
import Home from './src/screens/home/index'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LockScreen from './src/screens/LockScreen'
import Profile from './src/screens/profile';
import Pix from './src/screens/Pix/index';
import { StatusBar } from 'expo-status-bar';
import ChoosePix from './src/screens/Pix/ChoosePix'


const header = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
}
const Nav = createStackNavigator();
export default function App() {
  
  return (<>
    <StatusBar hidden/>
    <NavigationContainer>
      <Nav.Navigator
      initialRouteName='LockScreen'
      >
        <Nav.Screen
        options={header} 
        component={Home} 
        name="Home"
        />
        <Nav.Screen
        component={Profile}
        options={header}
        name="Profile"
        />
        <Nav.Screen
        component={LockScreen}
        options={header}
        name="LockScreen"
        />
        <Nav.Screen
        component={Pix}
        options={
        {
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          presentation:'transparentModal' 
        }
        }
        name="PixScreen"/>
        <Nav.Screen
        component={ChoosePix}
        options={
          {
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
            presentation:'transparentModal' 
          }}
        name='ChoosePix'
        />
      </Nav.Navigator>
    </NavigationContainer>
    </>
  );
  
}
