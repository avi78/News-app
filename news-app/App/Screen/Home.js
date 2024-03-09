import React,{useState,useEffect} from 'react'
import { ActivityIndicator,Dimensions,ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color';
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';


function Home() {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      //getTopHeadlines();
      getNewsByCategory("latest");
    }, []);

    const getNewsByCategory = async (category) => {
        setLoading(true);
      const result = (await GlobalApi.getByCategory(category)).data;
      setNewsList(result.articles);
      setLoading(false);
    };
    const getTopHeadlines = async () => {
      const result = (await GlobalApi.getTopHeadlines).data;
      setNewsList(result.articles);
    };
  return (
    <ScrollView style={{ backgroundColor: Color.white }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Text style={styles.appName}>News App</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>

      {/* CategoryList */}
      <CategoryTextSlider
        selectCategory={(category) => getNewsByCategory(category)}
      />
      {loading ? (
        <ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={"large"} color={Color.primary} />
      ) : (
        <View>
          {/* TopHeadlineSlider */}
          <TopHeadlineSlider newsList={newsList} />

          {/* HeadlineList */}
          <HeadlineList newsList={newsList} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 25,
    fontWeight: "bold",
    color: Color.primary
  },
});


export default Home
