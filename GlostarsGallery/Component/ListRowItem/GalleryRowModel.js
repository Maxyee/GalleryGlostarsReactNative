import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class GalleryRowModel extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <View>
                <Image source={{ uri: this.props.imageUrl }}
                    style={{ width: 400, height: 400 }} />

                
            </View>
        );
    }
}