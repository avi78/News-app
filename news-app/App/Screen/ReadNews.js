import React,{useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, Share, Button, ScrollView } from 'react-native'
import {useRoute} from '@react-navigation/native'
import Color from '../Shared/Color';
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";

function ReadNews() {
    const news = useRoute().params.news;
    const formattedDate = moment(news.publishedAt).format(
      "MMMM D, YYYY hh:mm A"
    );
    const navigation = useNavigation();
    useEffect(() => {    
        console.log(news);
    }, [])

    const shareNews = () => {
        Share.share({
          message: "Headline: "+news.title + "\nRead More:\n" + news.description + "\nSee News:\n" + news.url,
        });
    }
  return (
    <ScrollView style={{ backgroundColor: Color.white, flex: 1 }}>
      <View
        style={{
          margin: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <FontAwesome5 name="share-alt" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 20 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, marginTop: 10, color: Color.primary }}>
          {news?.source?.name}
        </Text>
        <Text style={{ fontSize: 14, marginTop: 10, color: Color.primary }}>
          {formattedDate}
        </Text>
      </View>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        {news.title}
      </Text>
      <Text
        numberOfLines={3}
        style={{
          fontSize: 18,
          marginTop: 15,
          marginBottom: 10,
          color: Color.gray,
        }}
      >
        {news.description}
      </Text>
      <Button
        onPress={() => WebBrowser.openBrowserAsync(news.url)}
        title="Read More"
      ></Button>
    </ScrollView>
  );
}

export default ReadNews
