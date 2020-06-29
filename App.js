import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from './src/screens/DetailsScreen';
import ImageList from './src/screens/ImageList';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details:DetailsScreen,
    ImageList:ImageList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "APP"
    }
  }
);

export default createAppContainer(navigator);
