import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Addingrident from './addIngredient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const TastyIngredients = [
    {
        name: "Chicken Breast",
        image_url:
        "https://www.budgetbytes.com/wp-content/uploads/2021/12/Chicken-Breast-Pan-500x375.jpg",
    },
    {
        name: "Salt",
        image_url:
        "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/11/17/Production/LocalLiving/Images/we-salt1119.jpg?t=20170517",
    },
    {
        name: "Sugar",
        image_url:
        "https://www.cnet.com/a/img/resize/69fb3b1dec1708e68093cd3ff2cbf7a850a4d5ac/hub/2022/11/07/034458d7-c897-45d4-8e9e-4e3d62452521/gettyimages-473200382.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
    {
        name: "Flour",
        image_url:
        "https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Various-Flour-Alternatives-Almond-Seeds-Amaranth-Chickpeas-and-Rice.jpg"
    },
    {
        name: "Eggs",
        image_url:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg"
    },
    {
        name: "Milk",
        image_url:
        "https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1643983013/BW%20BLOG/Untitled-design---2022-02-04T192644.467_11zon.jpg"
    },
    {
        name: "Cheese",
        image_url:
        "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/12/Cheese-120990404-770x533-1-650x428.jpg"
    },
    {
        name: "Butter",
        image_url:
        "https://oliveoilmarketplace.com/wp-content/uploads/2013/04/Butter-olive-Oil-1.jpg"
    },
    {
        name: "Yogurt",
        image_url:
        "https://www.foodandwine.com/thmb/h9fQ6YDI_6QsrLQAO2LqYWvTT20=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vietnamese-Style-Homemade-Yogurt-FT-RECIPE0122-6010c1eb3b724cdf8e4ebe25fad6fadb.jpg"
    },
    {
        name: "Lemon",
        image_url:
        "https://www.tastingtable.com/img/gallery/31-types-of-lemons-and-what-makes-them-unique/l-intro-1656086555.jpg"
    },
    {
        name: "Lime",
        image_url:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/Fresh-Limes-and-Lime-Drink-1296x728-header.jpg?w=1155&h=1528"
    },
    {
        name: "Soy Sauce",
        image_url:
        "https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Soy-Sauce-in-a-Small-Container-with-Soy-Beans.jpg"
    },
    {
        name: "Tomatoes",
        image_url:
        "https://www.southernliving.com/thmb/fzDJTBewJ_OdqPeyeujh4rHh97E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-836318970-2000-d652c21e6f5842d4a8e8b1329d04b987.jpg"
    },
    {
        name: "Marinara Sauce",
        image_url:
        "https://static01.nyt.com/images/2014/01/29/dining/29SAUCE_SPAN/29SAUCE_SPAN-superJumbo-v2.jpg"
    },
    {
        name: "Cereal",
        image_url:
        "https://cdn.discordapp.com/attachments/1021944281130348666/1076800166419509278/image0.jpg"
    },
    {
        name: "Nuts",
        image_url:
        "https://cdn.discordapp.com/attachments/1021944281130348666/1076800628774420511/image0.jpg"
    },
    {
        name: "Carrots",
        image_url:
        "https://cdn.discordapp.com/attachments/1021944281130348666/1076801133567291423/image0.jpg"
    },
    {
        name: "Peppers",
        image_url:
        "https://cdn.discordapp.com/attachments/1021944281130348666/1076801258888900618/image0.jpg"
    },
    {
        name: "Beef",
        image_url:
        "https://cdn.discordapp.com/attachments/1021944281130348666/1076801920049631262/image0.jpg"
    },
    {
        name: "Pork",
        image_url:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/pork-1296x728-feature.jpg?w=1155&h=1528"
    },
    {
        name: "Onion",
        image_url:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/276/276714/red-and-white-onions.jpg"
    },
    {
        name: "Garlic",
        image_url:
        "https://cdn.britannica.com/37/174537-050-950EE618/Bulbs-cloves-garlic.jpg"
    },
    {
        name: "Broccoli",
        image_url:
        "https://www.southernliving.com/thmb/I1hA4Zpl1bhw_b2tWWnx5UXajvY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Roasted_Broccoli_012-632f5bb05b49406a8d301bd733ff4686.jpg"
    },
    {
        name: "Spinach",
        image_url:
        "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/03/nutritional_spinach_GettyImages585833313_Header-1024x575.jpg?w=1155&h=1528"
    },
];

// const [ingred, setIngred] = useState([]);

export default function Ingredients(props) {
  return (
    <>
    {props.ingredientData.map((ingredients, index) => (
        <View key = {index} style = {{marginTop: 10, backgroundColor: "white", padding: 15}}>
            <IngredientImage image = {ingredients.image_url}/>
            <IngredientInfo name = {ingredients.name}/>
        </View>
    ))}
    </>
  );
}

const IngredientImage = (props) => (
    [myArray, setMyArray] = React.useState([]),

    handlePress = (myString) => (
    setMyArray([...myArray, myString])
    ),
    <TouchableOpacity onPress={() => handlePress(props.name)}>
        <Image source = {{uri: props.image}}
        style = {{width: '100%', height: 180, borderWidth: 1, borderColor: "gray", borderRadius: 10}}
        />
    </TouchableOpacity>

);

const IngredientInfo = (props) => (
    <View style = {{flexDirection: "row", justifyContent: "center", marginTop: 10}}>
        <Text style = {{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
    </View>
);

// useEffect(() => {
//     fetch('http:/localhost:8000')
//         .then(res => {
//             res.json;
//         })
//         .then(data => {
//             ingred.push(data)
//         })
// })

// useEffect(() => {
//     fetch('http://localhost:8000', {
//         method: 'POST',
//         headers: {"Contenet-Type": "application/json"},
//         body: 
//         }).then(() => {
//         console.log('new blog added')
//     })
// })