import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  index_container: {
    padding: 10,
    paddingTop: 40,
    width: "100%",
    height: "100%",
  },
  start_btn: {
    fontSize: 30,
    padding: 10,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 50,
    width: "50%",
    textAlign: "center",
    color: "#000000",
    backgroundColor: "#ffffff",
    shadowColor: "#ddd",
    shadowOffset: 10,
    fontWeight: "600",
  },
  title_sec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 150,
  },
  main_title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },
  sec_title: {
    color: "#fff",
    fontSize: 30,
  },
  bg: {
    borderRadius: 10,
  },
  books_view: {
    width: "100%",
  },
  bookCard: {
    margin: 10,
    shadowColor: "#ddd",
    shadowOffset: 10,
    shadowRadius: 10,
  },
  book: {
    width: 150,
    height: 250,
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor: "red",
  },
  start_link: {
    color: "#009FBD",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  androidShadow: {
    elevation: 10,
  },
  elevationLow: {
    backgroundColor: "#EECEB9",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
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
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginBottom: 10,
    borderColor: "#000000",
    borderWidth: 2,
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
    backgroundColor: "green",
    borderRadius: 50,
  },
  check: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "blue",
    color: "white",
  },
  inputFienld: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    padding: 10,
  },
});

export default styles;
