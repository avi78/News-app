import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color';
import { useNavigation } from "@react-navigation/native";


function HeadlineList({newsList}) {
    const navigation=useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                height: 2,
                backgroundColor: Color.lightGray,
                marginTop: 10,
              }}
            ></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("read-news", { news: item })}
              style={{ marginTop: 15, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 120, height: 120, borderRadius: 10 }}
              />
              <View style={{ marginRight: 135, marginLeft: 10 }}>
                <Text
                  numberOfLines={3}
                  style={{ fontSize: 16, fontWeight: "800" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Color.primary, marginTop: 5 }}>
                  {item?.source?.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadlineList
