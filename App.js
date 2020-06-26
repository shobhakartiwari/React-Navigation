import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details:DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "APP"
    }
  }
);

export default createAppContainer(navigator);
