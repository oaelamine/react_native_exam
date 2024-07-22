import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

import books from "./../Data/books";
import Cart from "../components/Cart";
import useCart from "../hook/useCart";
import style from "./../styles/styles";

//import BookCard from "./../components/BookCard";
import * as Animatable from "react-native-animatable";

const col = 2;
const Books = () => {
  const { addToCart, cart } = useCart();
  return (
    <View style={{ width: "100%" }}>
      <Text
        style={[
          {
            textAlign: "center",
            fontSize: 40,
            borderTopEndRadius: 10,
            padding: 5,
            marginBottom: 20,
            height: "auto",
            backgroundColor: "#EECEB9",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
          },
          style.elevationLow,
        ]}
      >
        Books
      </Text>

      <View
        className=" gap-4 "
        style={{
          paddingHorizontal: 30,
        }}
      >
        <FlatList
          numColumns={col}
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animatable.View
              animation={"fadeInRightBig"}
              duration={1000}
              delay={index * 3}
            >
              <View
                style={[
                  {
                    marginHorizontal: 10,
                    margin: 20,
                    backgroundColor: "transparent",
                    flex: 1,
                  },
                ]}
              >
                <View>
                  <View style={[style.elevationLow, { marginBottom: 10 }]}>
                    <Image
                      source={item.image}
                      style={[style.book, style.elevationLow]}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 5,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginVertical: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Price: ${item.price}
                  </Text>
                  <Button
                    style={style.start_btn}
                    title="Add to Cart"
                    onPress={() => {
                      addToCart(item);
                    }}
                  ></Button>
                </View>
              </View>
            </Animatable.View>
          )}
        />
      </View>
    </View>
  );
};

export default Books;
