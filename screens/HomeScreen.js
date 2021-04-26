import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Pressable,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { image } from "../constants";
import { BlurView } from "expo-blur";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CachedImage from "react-native-expo-cached-image";
import { DATA } from "../DATA.js";
import { categories } from "../categories.js";
import { useItemContext } from "../ItemContext.js";

const HomeScreen = ({ navigation }) => {
  const { item, setItem } = useItemContext();
  const [basketItem, setBasketItem] = React.useState([]);
  const [modaleVisible, setModalVisible] = React.useState(false);
  const [modaleVisibleFilter, setModalVisibleFilter] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedShoesSize, setSelectedShoesSize] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [categoriesList, setCategoriesList] = React.useState(null);
  const [selectedGender, setSelectedGender] = React.useState("Men");
  const [selectedBrand, setSelectedBrand] = React.useState("Nike");
  const [size, setSize] = React.useState(10);

  function renderShoesSize() {
    return selectedItem.shoesSize.map((item, index) => (
      <View style={{ position: "relative", left: 45, top: -75 }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 25,
            marginLeft: 5,
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              selectedItem.shoesSize[index] == selectedShoesSize
                ? "#FFF"
                : "transparent",
          }}
          onPress={() => setSelectedShoesSize(item)}
        >
          <Text
            style={{
              fontSize: 15,
              color:
                selectedItem.shoesSize[index] == selectedShoesSize
                  ? selectedItem.backgroundColor
                  : "#FFF",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    ));
  }

  function renderModalFilter() {
    const gender = [
      { id: 1, name: "Men" },
      { id: 2, name: "Women" },
      { id: 3, name: "Children" },
    ];
    const brand = [
      {
        id: 1,
        icon: "https://image.flaticon.com/icons/png/512/732/732084.png",
        name: "Nike",
      },
      {
        id: 2,
        icon: "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4f2.png",
        name: "Adidas",
      },
      {
        id: 3,
        icon:
          "https://cdn.freebiesupply.com/images/thumbs/2x/air-jordan-logo.png",
        name: "Jordan",
      },
      {
        id: 4,
        icon: "https://cdn.iconscout.com/icon/free/png-256/asics-282909.png",
        name: "Asics",
      },
      {
        id: 5,
        icon: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f8.png",
        name: "Puma",
      },
    ];

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modaleVisibleFilter}
          onRequestClose={() => {
            setModalVisibleFilter(!modaleVisibleFilter);
          }}
        >
          <View
            style={{
              flex: 1,
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
              position: "absolute",
              borderRadius: 10,
              borderBottomColor: "transparent",
              backgroundColor: "white",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  top: 50,
                  left: 25,
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "fbfbfb",
                  borderColor: "#eff0f7",
                }}
                onPress={() => setModalVisibleFilter(!modaleVisibleFilter)}
              >
                <CachedImage
                  source={{
                    uri:
                      "https://www.materialui.co/materialIcons/navigation/arrow_back_grey_192x192.png",
                  }}
                  style={{ tintColor: "#000", height: 30, width: 30 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  top: 56,
                  left: 100,
                  fontSize: 27,
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
              >
                Filters
              </Text>
            </View>
            <View style={{ width: 390, height: 160, top: 90 }}>
              <Text
                style={{ fontSize: 20, letterSpacing: 1.1, marginLeft: 25 }}
              >
                Gender :{" "}
              </Text>
              <FlatList
                horizontal={true}
                data={gender}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 70,
                      padding: 10,
                      marginLeft: 23,
                      borderWidth: 2,
                      borderColor:
                        selectedGender === item.name ? "#ff4b36" : "#e9e9f0",
                      marginTop: 20,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        selectedGender === item.name
                          ? "#ff4b36"
                          : "transparent",
                      shadowColor:
                        selectedGender == item.name ? "#ff4b36" : "transparent",
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 17,
                    }}
                    onPress={() => setSelectedGender(item.name)}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: selectedGender === item.name ? "#FFF" : "#000",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ width: 390, height: 160, top: 80, left: 25 }}>
              <Text style={{ fontSize: 20, letterSpacing: 1.1 }}>
                Price Range :
              </Text>
              <MultiSlider
                sliderLength={300}
                containerStyle={{ top: 30, left: 20 }}
                trackStyle={{
                  backgroundColor: "#ff4b36",
                  shadowColor: "#ff4b36",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 17,
                }}
                selectedStyle={{ backgroundColor: "#ff4b36" }}
                enabledOne={true}
                enabledTwo={true}
                enableLabel={true}
                step={1}
                min={1}
                max={300}
              />
            </View>
            <View style={{ width: 390, height: 160, top: 60 }}>
              <Text style={{ fontSize: 20, letterSpacing: 1.1, left: 25 }}>
                Brand :{" "}
              </Text>
              <FlatList
                horizontal={true}
                data={brand}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 70,
                      padding: 10,
                      marginLeft: 15,
                      borderWidth: 2,
                      borderColor:
                        selectedBrand === item.name ? "#ff4b36" : "#e9e9f0",
                      marginTop: 25,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        selectedBrand === item.name ? "#ff4b36" : "transparent",
                      shadowColor:
                        selectedBrand == item.name ? "#ff4b36" : "transparent",
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 17,
                    }}
                    onPress={() => {
                      {
                        setSelectedBrand(item.name);
                      }
                    }}
                  >
                    <CachedImage
                      source={{ uri: item.icon }}
                      resizeMode="contain"
                      style={{
                        width: 90,
                        height: 70,
                        tintColor:
                          selectedBrand === item.name ? "#FFF" : "#000",
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ width: 390, height: 160, top: 55 }}>
              <Text style={{ fontSize: 20, letterSpacing: 1.1, left: 25 }}>
                Size :{" "}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    width: 55,
                    height: 55,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                    marginLeft: 75,
                    borderRadius: 15,
                    borderColor: "#e9e9f0",
                  }}
                  onPress={() => setSize(size - 0.5)}
                >
                  <Text style={{ fontSize: 40 }}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginTop: 47,
                    marginLeft: 30,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  US {size}
                </Text>
                <TouchableOpacity
                  style={{
                    width: 55,
                    height: 55,
                    borderWidth: 1,
                    justifyContent: "center",
                    position: "absolute",
                    alignItems: "center",
                    top: 30,
                    left: 260,
                    borderRadius: 15,
                    borderColor: "#e9e9f0",
                  }}
                  onPress={() => setSize(size + 0.5)}
                >
                  <Text style={{ fontSize: 40 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 390,
                height: 160,
                top: 55,
                left: 50,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: "#e9e9f0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setModalVisibleFilter(!modaleVisibleFilter)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    letterSpacing: 1.1,
                  }}
                >
                  Clear All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 130,
                  height: 60,
                  borderWidth: 1,
                  borderRadius: 15,
                  borderColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                  backgroundColor: "#000",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 17,
                }}
                onPress={() => setModalVisibleFilter(!modaleVisibleFilter)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    letterSpacing: 1.1,
                    color: "white",
                  }}
                >
                  APPLY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function renderModal() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {selectedItem && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modaleVisible}
            onRequestClose={() => {
              setModalVisible(!modaleVisible);
            }}
          >
            <BlurView
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              blurType="light"
              intensity={100}
              reducedTransparencyFallbackColor="white"
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 320,
                  height: 520,
                  position: "absolute",
                  borderRadius: 10,
                  borderBottomColor: "transparent",
                  backgroundColor: selectedItem.backgroundColor,
                }}
              >
                <CachedImage
                  style={{
                    width: 280,
                    height: 280,
                    position: "absolute",
                    top: -25,
                  }}
                  resizeMode="contain"
                  source={{ uri: selectedItem.image }}
                />
                <Text
                  style={{
                    fontSize: 25,
                    position: "absolute",
                    top: 215,
                    left: 15,
                    color: "white",
                    letterSpacing: 1.5,
                    fontWeight: "bold",
                  }}
                >
                  {selectedItem.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    position: "absolute",
                    top: 255,
                    left: 15,
                    color: "white",
                    letterSpacing: 2,
                  }}
                >
                  {selectedItem.gender == "Men"
                    ? "Men's Basketball shoes"
                    : "Women's Basketball shoes"}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      position: "absolute",
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "white",
                      left: -140,
                      top: -125,
                    }}
                  >
                    ${selectedItem.price}{" "}
                  </Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: -120,
                      left: 60,
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 20,
                    }}
                  >
                    ⭐️ {selectedItem.star}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      position: "absolute",
                      top: -70,
                      left: -51,
                      fontSize: 15,
                      color: "#FFF",
                      letterSpacing: 1.1,
                    }}
                  >
                    Select size
                  </Text>
                  {renderShoesSize()}
                </View>

                <Pressable
                  style={{
                    width: 320,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: -414,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  onPress={() => {
                    setModalVisible(!modaleVisible);
                    setSelectedItem(selectedItem);
                    let newList = [...item, selectedItem];
                    setBasketItem(() => newList);
                    setItem(newList);
                  }}
                >
                  <Text style={{ fontSize: 27, color: "white" }}>
                    Add to Basket
                  </Text>
                </Pressable>
              </View>

              <TouchableOpacity
                style={{
                  width: 45,
                  position: "relative",
                  marginLeft: -250,
                  top: -230,
                }}
                onPress={() => {
                  setModalVisible(!modaleVisible);
                  setSelectedItem(null);
                }}
              >
                <CachedImage
                  source={{
                    uri:
                      "https://www.materialui.co/materialIcons/navigation/arrow_back_grey_192x192.png",
                  }}
                  style={{ tintColor: "#FFF", height: 45, width: 45 }}
                />
              </TouchableOpacity>
            </BlurView>
          </Modal>
        )}
      </View>
    );
  }

  function renderCategory() {
    function filterShoes(data) {
      if (
        data.category == categoriesList &&
        data.brand == selectedBrand &&
        data.gender == selectedGender
      ) {
        for (let i = 0; i < data.shoesSize.length; i++) {
          if (data.shoesSize[i] === size) {
            return data;
          }
        }
      }
    }
    let category = DATA.filter(filterShoes);
    return (
      <View
        style={{
          position: "absolute",
          top: 120,
          height: 400,
          width: Dimensions.get("window").width,
          shadowColor: "#bdbdbd",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 17,
          height: 900,
        }}
      >
        <FlatList
          data={category}
          scrollEnabled={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 340,
                  height: 80,
                  marginTop: 10,
                  paddingRight: 15,
                  opacity: 1,
                  flexDirection: "row",
                  borderRadius: 10,
                  paddingRight: 10,
                  backgroundColor: "#bdbdbd",
                }}
                onPress={() => {
                  setModalVisible(true);
                  setSelectedItem(item);
                }}
              >
                <CachedImage
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={{ width: 110, height: 110, top: -20, left: 10 }}
                />
                <Text
                  style={{
                    position: "relative",
                    fontSize: 16,
                    marginLeft: 20,
                    marginTop: 25,
                    color: "#FFF",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    position: "absolute",
                    top: 22,
                    left: 275,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 20, color: "#FFF" }}
                  >
                    ${item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  function renderCategories() {
    return (
      <View
        style={{
          marginTop: 5,
          width: Dimensions.get("window").width,
          justifyContent: "space-between",
          height: Dimensions.get("window").height,
        }}
      >
        <FlatList
          data={categories}
          horizontal={true}
          scrollEnabled={true}
          initialNumToRender={20}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              style={{
                alignItems: "center",
                width: Dimensions.get("window").width / 5.3,
                marginLeft: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategory(index);
                  setCategoriesList(item.category);
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 2,
                  borderRadius: 40,
                  borderColor: "#303030",
                  backgroundColor:
                    selectedCategory === index ? "#303030" : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 7,
                }}
              >
                <Text
                  resizeMode="contain"
                  style={{ fontSize: 30 }}
                  source={{ uri: item.icon }}
                >
                  {item.icon}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#303030",
                  marginTop: 5,
                  fontWeight: selectedCategory === index ? "bold" : "normal",
                }}
              >
                {item.category}
              </Text>
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }

  return (
    <ScrollView
      alwaysBounceVertical={true}
      bounces={true}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          marginTop: 45,
          width: Dimensions.get("window").width,
        }}
      >
        <View style={{ flexDirection: "row", height: 65 }}>
          <Text
            style={{
              color: "#000",
              fontSize: 32,
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Welcome
          </Text>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              marginVertical: -5,
              marginHorizontal: 170,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 25, tintColor: "#000" }}
              source={image.bell}
            />
            <View
              style={{
                position: "absolute",
                top: 1,
                right: 7,
                height: 17,
                width: 17,
                backgroundColor: "#ff4b36",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TextInput
            placeholderTextColor="#696969"
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 360,
              borderRadius: 10,
              marginLeft: 15,
              marginTop: -15,
              marginBottom: 15,
              fontSize: 18,
              padding: 10,
            }}
            placeholder="Ex : Nike AirMax 3"
          />
          <TouchableOpacity style={{ width: 30, height: 30 }}>
            <Image
              source={image.search2}
              resizeMode="contain"
              style={{
                width: 25,
                position: "absolute",
                top: -590,
                left: -35,
                tintColor: "#000",
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
            marginBottom: 10,
            color: "#000",
          }}
        >
          Top Offers
        </Text>

        {/* FlatList  */}

        <FlatList
          data={DATA}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setSelectedItem(item);
              }}
              style={{
                flex: 1,
                width: 160,
                height: 170,
                marginLeft: 15,
                marginBottom: 10,
                backgroundColor: item.backgroundColor,
                borderRadius: 20,
                borderColor: item.backgroundColor,
                borderWidth: 3,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 17,
              }}
            >
              <CachedImage
                source={{ uri: item.image }}
                style={{
                  width: 145,
                  height: 145,
                  marginLeft: 2,
                  marginTop: -25,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 10,
                  color: "white",
                  marginTop: -20,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 8,
                  color: "white",
                }}
              >
                ${item.price}
              </Text>
            </TouchableOpacity>
          )}
          // EndofFlatList

          keyExtractor={(item) => `${item.id}`}
          style={{ flex: 1 }}
        />

        {/* Here for the rest of the sreen component  */}

        {renderModal()}
        {renderModalFilter()}

        {/* 2nd FlatList with Categories  */}
        <View style={{ positive: "absolute" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 10,
                color: "#000",
              }}
            >
              Categories
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                borderWidth: 2,
                backgroundColor: "#303030",
                borderColor: "#303030",
                padding: 5,
                position: "relative",
                marginTop: 7,
                marginRight: 15,
              }}
              onPress={() => setModalVisibleFilter(true)}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                + Filters
              </Text>
            </TouchableOpacity>
          </View>
          {renderCategories()}
          {categoriesList ? renderCategory() : null}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
