import React,{useEffect, useState} from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'
import Color from '../../Shared/Color';
import { useNavigation } from '@react-navigation/native';


function TopHeadlineSlider({ newsList }) {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("read-news",{news:item})}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.75,
                borderRadius: 20,
              }}
            />
            <Text
              numberOfLines={4}
              style={{ marginTop: 10, fontSize: 20, fontWeight: "900" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Color.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal={true}
        showHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default TopHeadlineSlider
