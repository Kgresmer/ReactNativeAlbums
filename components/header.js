import {Text, View} from 'react-native';

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        textAlign: 'center',
        justifyContent: 'center'
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