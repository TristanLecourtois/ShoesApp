import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from './HomeScreen'
import BasketScreen from './BasketScreen'
import ProfileScreen from './ProfileScreen'
import {createBottomTabNavigator,BottomTabBar} from "@react-navigation/bottom-tabs"
import {image} from "../constants"
import Svg, {Path} from "react-native-svg"
import {isIphoneX} from "react-native-iphone-x-helper"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
          <View style={{ flex: 1, alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                top: 0,
              }}
            >
              <View
                style={{ flex: 1, backgroundColor: "rgb(105,107,118)" }}
              ></View>
              <Svg width={75} height={61} viewBox="0 0 75 61">
                <Path
                  d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                  fill={"rgb(105,107,118)"}
                />
              </Svg>
              <View
                style={{ flex: 1, backgroundColor: "rgb(105,107,118)" }}
              ></View>
            </View>

            <TouchableOpacity
              style={{
                top: -22.5,
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#ff4b36",
                ...styles.shadow,
              }}
              onPress={onPress}
            >
              {children}
            </TouchableOpacity>
          </View>
        );
  } else {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            backgroundColor: "rgb(105,107,118)",
          }}
          activeOpacity={1}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      );
  }
}

const CustomTabBar = (props) => {
    if(isIphoneX()) {
        return (
          <View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 30,
                backgroundColor: "rgb(105,107,118)",
              }}
            ></View>
            <BottomTabBar {...props.props} />
          </View>
        );
    } else {
        return (
            <BottomTabBar {...props.props} />
        )
    }
}

const Tabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
          },
        }}
        tabBar={(props) => <CustomTabBar props={props} />}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={image.home}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#FFF",
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
        <Tab.Screen
          name="BasketScreen"
          component={BasketScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={image.basket}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#FFF",
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={image.profile}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "#FFF",
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create ({
    shadow: { 
        shadowColor:"#ff4b36",
        shadowOffset:{ 
            width:0,
            height: 10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    }
})


export default Tabs;