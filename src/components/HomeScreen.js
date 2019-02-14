import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import personalities from '../personalities.json';

/** 
 * 0. Import data from personalities.json - DONE
 * 
 * 1. Setup a Flat list
 *      - data
 *      - renderItem
 *      - keyExtractor
 *      - styles
 *      - item onPress
 * 
 * 2. TODO list all personalities
 *      - List personality types of Object.keys(personalities)
 *  
 * 3. Map onPress Text to showDetails and pass params using lambda
 * 
 * 4. On Click go to Details Screen and pass data to display in params
*/

class HomeScreen extends Component {

    showDetails(item) {
        console.log(item);
    }

    _keyExtractor = ({ item }, index) => {
        return index.toString();
    }

    _renderItem = ({ item }, index) => {
        const { textStyle } = styles;

        return <Text
            style={textStyle}
            onPress={() => this.showDetails(item)}>
            {item}
        </Text>;
    }

    render() {
        const data = Object.keys(personalities);
        const { buttonStyle } = styles;

        return (
            <View>
                <FlatList
                    style={buttonStyle}
                    data={data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                >
                </FlatList>
            </View>
        );
    }
}

export default HomeScreen;

const styles = {
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
    }
}
