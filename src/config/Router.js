import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import { Animated, Easing } from 'react-native';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

export const HOME = "Home";
export const DETAILS = "Details";

const AppNavigator = createStackNavigator(
    {
        [HOME]: HomeScreen,
        [DETAILS]: DetailsScreen
    },
    {
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

const Navigator = FluidNavigator({
    [HOME]: { screen: HomeScreen },
    [DETAILS]: { screen: DetailsScreen }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
