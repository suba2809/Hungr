import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'


export default function HeaderTabs(props) {
  const [activeTab, setActiveTab] = useState("Ingredients");
  return (
    <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
      <View style = {{flexDirection: "row"}}>
        <HeaderButton
          text = "Ingredients"
          btnColor = "black"
          textColor = "white"
          activeTab = {props.activeTab}
          setActiveTab = {props.setActiveTab}
          navigation={props.navigation}
        />
        <TouchableOpacity>
          <HeaderButton
            text = "Recipes"
            btnColor = "white"
            textColor = "black"
            activeTab = {props.activeTab}
            setActiveTab = {props.setActiveTab}
            navigation={props.navigation}
          />
        </TouchableOpacity>
      </View>
      <View>
        <HeaderButton
          text = "Filters"
          btnColor = "black"
          textColor = "white"
        />
      </View>
    </View>
  );
}


const HeaderButton = ({navigation, ...props}) => (
  <View>
    <TouchableOpacity style = {{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      }}
      onPress={() => navigation.navigate("AllRecipes")}
    >
      <Text style = {{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900"
      }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
)
