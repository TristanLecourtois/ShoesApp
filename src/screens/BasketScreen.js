import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { useItemContext } from "../data/ItemContext.js";
import Context from "../data/ItemContext";
import "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import CachedImage from "react-native-expo-cached-image";
import Svg, { Path } from "react-native-svg";

const FoodScreen = ({ navigation }) => {
  const { item, setItem } = useItemContext(Context);

  const deleteItem = (index) => {
    let newItem = [...item];
    newItem.splice(index, 1);
    setItem(newItem);
  };

  const ItemBox = (props) => {
    const [count, setCount] = React.useState(1);

    const rightSwipe = () => {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
            width: 80,
            borderTopRightRadius: 15,
            marginBottom: 20,
            borderBottomRightRadius: 15,
          }}
          onPress={props.handleDelete}
        >
          <Animated.Image
            resizeMode="contain"
            style={{ width: 32, height: 32, tintColor: "red" }}
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/ui-user-interface-outline/32/user-interface-ui-01-512.png",
            }}
          />
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={{
            backgroundColor: "rgb(33,35,45)",
            borderRadius: 15,
            width: Dimensions.get("window").width - 25,
            height: 115,
            marginBottom: 20,
            flexDirection: "row",
          }}
        >
          <CachedImage
            source={{ uri: props.data.image }}
            resizeMode="contain"
            style={{ width: 100, height: 100, marginLeft: 10 }}
          />
          <View>
            <Text
              style={{
                color: "#FFF",
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              {props.data.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 9,
                marginLeft: 20,
                color: "#FFF",
              }}
            >
              {props.data.category} Shoes
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              ${props.data.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              marginTop: 15,
              marginLeft: 320,
            }}
          >
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                backgroundColor: "rgb(244,245,247)",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 0,
              }}
              onPress={() => setCount(count - 1)}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginTop: -5,
                  color: "#000",
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, color: "#FFF" }}>{count}</Text>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                backgroundColor: "#000",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
              onPress={() => setCount(count + 1)}
            >
              <Text style={{ fontSize: 20, marginTop: -5, color: "white" }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swipeable>
    );
  };

  function renderSVG() {
    if (item.length === 0) {
      return (
        <View
          style={{
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No item in the basket </Text>
        </View>
      );
    } else {
      let totalAmount = 0;
      item.forEach((element) => {
        totalAmount += parseInt(element.price);
      });

      let deliveryCharges = 30;
      let priceTotalShoes = totalAmount;
      let totalPrice = deliveryCharges + priceTotalShoes;

      return (
        <View>
          <View
            style={{
              backgroundColor: "transparent",
              marginLeft: 30,
              marginTop: -30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                marginTop: 35,
                marginLeft: 135,
                position: "absolute",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 45,
                  marginLeft: 2,
                  marginTop: -4,
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <Svg
              width={390}
              height={100}
              viewBox="-35 -60 390 100"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.4,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Path
                d="M -28 0 L 124 0 A 20 20 0 0 0 195 0 L 320 0"
                fill={"transparent"}
                stroke={"black"}
                strokeWidth={2}
              />
            </Svg>
          </View>
          <View style={{ width: Dimensions.get("window").width }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                fontSize: 18,
                color: "#FFF",
              }}
            >
              Transaction details
            </Text>
            <View style={{ flex: 1, marginTop: 5, marginLeft: 170 }}>
              <Text style={{ marginTop: 15, fontSize: 18, color: "#FFF" }}>
                Total Amount: ${priceTotalShoes}
              </Text>
              <Text style={{ marginTop: 15, fontSize: 18, color: "#FFF" }}>
                Delivery Charges: ${deliveryCharges}
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFF",
                }}
              >
                Total: ${totalPrice}
              </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <TouchableOpacity
                style={{
                  width: 270,
                  height: 60,
                  backgroundColor: "#ff4b36",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                  shadowColor: "#ff4b36",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}
                >
                  Proceed to pay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 115 }}></View>
        </View>
      );
    }
  }

  return (
    <ScrollView
      alwaysBounceVertical={true}
      bounces={true}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "rgb(69, 73, 89)" }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 45,
          width: Dimensions.get("window").width,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 32,
            marginLeft: 20,
          }}
        >
          My Basket
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",
            width: Dimensions.get("window").width,
            marginTop: 20,
          }}
        >
          <FlatList
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            data={item}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ItemBox data={item} handleDelete={() => deleteItem(index)} />
            )}
          />
        </View>
        {renderSVG()}
      </View>
    </ScrollView>
  );
};

export default FoodScreen;
