import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import HeaderTabs from '../Components/HeaderTabs';
import Search1 from '../Components/Search1';
import Ingredients, { TastyIngredients } from '../Components/Ingredients';
import Recipes, { TastyRecipes } from '../Components/Recipes';
import React from 'react'
import BottomTabs from '../Components/BottomTabs';
import { NavigationRouteContext } from '@react-navigation/native';


export default function Home({ navigation }) {
  const [recipeData, setRecipeData] = React.useState(TastyRecipes);
  const [ingredientData, setIngredientData] = React.useState(TastyIngredients);
  const [activeTab, setActiveTab] = useState("Ingredients");
  const [myArray, setMyArray] = useState([]);

  const joinedArray = myArray.map(str => {
    return str.split(' ').join('%20');
  }).join('%20');
  const count = joinedArray.length;

  const getRecipesFromEdamam = () => { 
    const appID = "f3f7db6d"
    const appKey = "08c1467c38972194fbef32f7c1f4e624"
    const edamamUrl = `https://api.edamam.com/api/recipes/v2?type=any&q=chicken&app_id=${appID}&app_key=${appKey}`

    return fetch(edamamUrl)
    .then((res) => res.json())
    .then((json) => setRecipeData(json.hits));
  };

  useEffect(() => {
    getRecipesFromEdamam();
  }, [])

  return (
    <SafeAreaView style = {{backgroundColor: "#eee", flex: 1}}>
      <View style = {{backgroundColor: "white", padding: 15}}>
        <Search1 />
        <HeaderTabs activeTab = {activeTab} setActiveTab = {setActiveTab} navigation = {navigation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        {/* <Recipes recipeData = {recipeData}/> */}
        <Ingredients ingredientData = {ingredientData} myArray={myArray} setMyArray={setMyArray}/>
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
  }