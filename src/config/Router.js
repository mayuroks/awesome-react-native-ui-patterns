import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

export const HOME = "Home";
export const DETAILS = "Details";

const AppNavigator = createStackNavigator(
    {
        [HOME]: HomeScreen,
        [DETAILS]: DetailsScreen
    },
    {
        initialRouteName: HOME
    }

);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
