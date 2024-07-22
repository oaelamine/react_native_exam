import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import useCart from "../hook/useCart";
import styles from "./../styles/styles";

const Chackout = () => {
  const { cart, removeFromCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Button onPress={() => removeFromCart(item.id)} title="X"></Button>
    </View>
  );

  return (
    <View>
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
          styles.elevationLow,
        ]}
      >
        Checkout
      </Text>
      <View className="flex gap-4">
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Cart
          </Text>
          <View className="flex max-h-80 flex-col gap-4 overflow-auto">
            {cart.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </View>
          <View className="flex justify-between">
            <Text
              style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}
            >
              Total:
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}
            >
              ${cart.reduce((acc, book) => acc + book.price, 0)}
            </Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }} method="POST">
          <View className="flex flex-col gap-2">
            <Text htmlFor="name">Name</Text>
            <TextInput
              type="text"
              id="name"
              name="name"
              style={styles.inputFienld}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </View>
          <View className="flex flex-col gap-2">
            <Text htmlFor="address">Address</Text>
            <TextInput
              id="address"
              name="address"
              style={styles.inputFienld}
              className="input border-primary"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </View>
          <View className="flex flex-col gap-2">
            <Text htmlFor="phone">Phone</Text>
            <TextInput
              type="tel"
              id="phone"
              name="phone"
              style={[styles.inputFienld, { marginBottom: 30 }]}
              className="input border-primary"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </View>
          <Button title="Place Order" disabled={cart.length === 0}></Button>
        </View>
      </View>
    </View>
  );
};

export default Chackout;
