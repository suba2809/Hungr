import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const TastyRecipes = [
    {
        name: "Chicken Parmesan",
        image_url:
        "https://www.thespruceeats.com/thmb/D2I1ggg4MA96RbPmqK_XGAqwPrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-chicken-parmesan-3052878-hero-03-e85b89a8cc454a1080cbc89367ab08b3.jpg",
        time: "45-60 min",
    },
    {
        name: "Tuna Nigiri",
        image_url:
        "https://juliesfamilykitchen.com/wp-content/uploads/2021/08/Tuna-Nigiri-Recipe.jpg",
        time: "15-20 min",
    },
    {
        name: "Tres Leches Cake",
        image_url:
        "https://www.pbs.org/food/wp-content/blogs.dir/2/files/2022/05/TresLeches.jpg",
        time: "120-150 min",
    },
];

export default function Recipes(props) {
  return (
    <>
    {props.recipeData.map((Recipes, index) => (
        <TouchableOpacity activeOpacity={1} style = {{marginBottom: 30}}>
            <View key = {index} style = {{marginTop: 10, padding: 15, backgroundColor: "white"}}>
                <RecipeImage image = {Recipes.image}/>
                <RecipeInfo name = {Recipes.label} time = {Recipes.totalTime}/>
            </View>
         </TouchableOpacity>
    ))}
    </>
  );
}

const RecipeImage = (props) => (
    <>
        <Image source = {{uri: props.image}}
        style = {{width: '100%', height: 180}}
        />
        <TouchableOpacity style = {{ position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name = "heart-outline" size = {25} color = "white" />
        </TouchableOpacity>
    </>
);

const RecipeInfo = (props) => (
    <View style = {{justifyContent: "space-between", marginTop: 10}}>
        <Text style = {{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
        <Text style = {{fontSize: 13, color: "gray"}}>{props.time} min</Text>
    </View>
)