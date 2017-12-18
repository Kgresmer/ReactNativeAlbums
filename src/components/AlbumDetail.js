import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        thumbnailStyle,
        headerTextStyle,
        thumbnailContainerStyle,
        headerAlbumTextStyle,
        albumImageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle}
                           source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerTextStyle}>
                    <Text style={headerAlbumTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImageStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerAlbumTextStyle: {
        fontSize: 18
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
