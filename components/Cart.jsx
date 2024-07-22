import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo
import useCart from "../hook/useCart";
import { Link, useRouter } from "expo-router";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRouter();

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: "white" }]}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Button onPress={() => removeFromCart(item.id)} title="X"></Button>
    </View>
  );

  return (
    <View style={{ position: "absolute", bottom: 10, right: 10 }}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.ca, styles.elevationLow]}
      >
        <Ionicons name="cart-outline" size={30} color="black" />
        {cart.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={cart.length > 0 ? styles.centeredView : styles.cartRmpty}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              {cart.length > 0 ? "Cart Items:" : "Cart is empty"}
            </Text>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
            {cart.length > 0 ? (
              <Button
                onPress={() => {
                  setModalVisible(false);
                  route.navigate("/Chackout");
                }}
                title="Checkout"
                style={styles.check}
              >
                <Text>Checkout</Text>
              </Button>
            ) : (
              ""
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#FFE9D0",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: -30,
    marginRight: -30,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "#000000",
  },
  ca: {
    position: "absolute",
    padding: 10,
    bottom: 0,
    right: 0,
    backgroundColor: "#FFA823",
    borderRadius: 50,
  },
  check: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    color: "#000000",
    padding: 15,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  cartRmpty: {
    height: "60%",
    top: "20%",
  },
});

export default Cart;
