import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GalleryRowModel from './Component/ListRowItem/GalleryRowModel';
import FlexBoxModel from './Component/FlexBoxItem/FlexBoxModel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listImage: []
    };
    this.loadPhotoList();
    appContext = this;
  }
  loadPhotoList() {
    fetch("https://testglostarsdevelopers.azurewebsites.net/api/images/competition/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Bearer W3Naf0IvGEUDyTQboBMNQnada6g6T4AzX4H717ar-dhx8xKCf6UXw6e0gOiR6Kii7rmXMaiY_Dp85vxEm7LmXFV3tGpZLJEXCkZMDHBvR39_ph3eCLfdppESoZaelFMvHQcvfWdW-CedBRkoGmBSsriiZ5ZvKxPX1zOyqb6emZCKMJlCjUi8HLj4tc9TYwVl4Bk0ZUakp_d8aMigWjjLs9ixkRCPstDZcjprwXoziEIhh0hHb2b45mNaI08XFi_vQ5zYL-acbQDk9HBh_FwEAb_z0aNgrDhmFWRA84XyaRxckzoJVT026HuuRneuYWfvYoVWGqk89WcOgc1FCu8OxBR0-L9PB6VDJS2HmsldnWdebvB4hQnGtV69WebFavC6S2UeRlLJWcfrQR51X5nOqavi2TjziQcgTnsKLjRekmuxp6e4xrIObfEwe0lXmNWNAi-Ca25zkdcfvBUaDHfAGNKys3VmXu3g3hiC-qwQLd5C4KoxJU2EBzNQ42OeDY77N8D6C_asMqJnSymbDDN8aifVJhm0gpuvWp1rw_QS5clYkosLrfBvizhd4CZzFNBAtZCsGzbhEfGFwrqe2laGCR4NiXgMTo5dZTRvny3SzQaFCGuaR9YFBzkpCIB9l6bi"
      }
    })
      .then(response => response.json())
      .then(function (picInfo) {
        console.log(picInfo);
        appContext.setState({
          listImage: picInfo.resultPayload
        });
      });
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.listImage}
          renderItem={({ item }) => <GalleryRowModel imageUrl={item.picUrl} />}
        />

      <FlexBoxModel/>  
      </View>
      
    );
  }
}

// const redcolor = StyleSheet.create({
//   object:{
//     color : red,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  red: {
    color: 'red',
  },


});
