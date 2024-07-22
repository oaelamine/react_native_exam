import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

import books from "./../Data/books";
import style from "./../styles/styles";
import * as Animatable from "react-native-animatable";

const renderItem = ({ item, index }) => (
  <Animatable.View
    animation={"fadeInRightBig"}
    duration={1000}
    delay={index * 3}
  >
    <View style={[style.bookCard]}>
      <Image source={item.image} style={[style.book, style.elevationLow]} />
    </View>
  </Animatable.View>
);

const App = () => {
  return (
    <View style={style.index_container}>
      <ImageBackground source={require("@/assets/bg.jpg")} style={style.bg}>
        <View style={[style.title_sec]}>
          <Text style={style.main_title}>Welcome to our bookstore</Text>
          <Text style={style.sec_title}>
            Find your next favorite book here and enjoy reading!
          </Text>
          <Link href="/books" style={style.start_btn}>
            <Text>Get Started</Text>
          </Link>
        </View>
      </ImageBackground>
      <View style={style.books_view}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={[style.sec_title, { color: "#000000", fontWeight: "600" }]}
          >
            Our Collection
          </Text>
          <Animatable.View animation={"fadeInUp"} duration={1000} delay={3}>
            <Link href="/books" style={style.start_link}>
              <Text>View more</Text>
            </Link>
          </Animatable.View>
        </View>
        <FlatList
          horizontal
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          sc
        />
      </View>
    </View>
  );
};

export default App;
