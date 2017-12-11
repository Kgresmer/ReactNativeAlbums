import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        height: '15%',
        paddingTop: 0,
        margin: 5,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 }, //IOS
        shadowOpacity: 0.9,
        elevation: 10, //Android
        position: 'relative'
    }
};

const Header = () => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    )
};

export default Header;