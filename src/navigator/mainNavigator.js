import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113225Navigator from '../features/BlankScreen113225/navigator';
import BlankScreen213224Navigator from '../features/BlankScreen213224/navigator';
import BlankScreen113223Navigator from '../features/BlankScreen113223/navigator';
import BlankScreen013222Navigator from '../features/BlankScreen013222/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113225: { screen: BlankScreen113225Navigator },
BlankScreen213224: { screen: BlankScreen213224Navigator },
BlankScreen113223: { screen: BlankScreen113223Navigator },
BlankScreen013222: { screen: BlankScreen013222Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
