import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import { Animated, Easing } from 'react-native';
import BSScreen from '../components/bottomsheet/BSScreen';

export const HOME = "Home";
export const DETAILS = "Details";
export const BSSHEET = "BottomSheet";

const AppNavigator = createStackNavigator(
    {
        [HOME]: HomeScreen,
        [DETAILS]: DetailsScreen,
        [BSSHEET]: BSScreen
    },
    {
        initialRouteName: BSSHEET,
        headerMode: 'float',
        mode: 'card',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 500,
                easing: Easing.out(Easing.cubic),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
