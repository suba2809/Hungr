import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';
import BottomTabs from '../Components/BottomTabs';
import HeaderTabs from '../Components/HeaderTabs';
import Search1 from '../Components/Search1';
import Recipes, { TastyRecipes } from '../Components/Recipes';
import { ScrollView } from 'react-native-gesture-handler';

export default function AllRecipes({ route, navigation }) {
    const [recipeData, setRecipeData] = React.useState(TastyRecipes);
    const [activeTab, setActiveTab] = useState("Ingredients");

    return (
        <SafeAreaView style = {{backgroundColor: "#eee", flex: 1}}>
      <View style = {{backgroundColor: "white", padding: 15}}>
        <Search1 />
        <HeaderTabs activeTab = {activeTab} setActiveTab = {setActiveTab} navigation = {navigation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Recipes recipeData = {recipeData}/>
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
    )
}