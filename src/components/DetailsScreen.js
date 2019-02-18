import React, { Component } from 'react';
import { Text, View, Flatlist, StyleSheet, Image } from 'react-native';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const LogoImage = (props) => (
    <Image source={{ uri: 'https://picsum.photos/100/100?image=56' }} style={props.style} />
);

class DetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Default Details')
        }
    };

    render() {
        const { navigation } = this.props;
        const personalityType = navigation.getParam('personalityType');

        return (
            <View>
                <Transition shared="logo">
                    <LogoImage style={styles.largeLogo} />
                </Transition>
                <Text>{personalityType}</Text>
            </View>
        );
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
    },
    buttonStyle: {
        margin: 12
    },
    textStyle: {
        padding: 16,
        marginBottom: 12,
        backgroundColor: 'lightblue',
        fontSize: 16,
        color: 'white',
        borderRadius: 8
    },
    largeLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    largeLogo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    smallLogo: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    paragraph: {
        margin: 24,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
