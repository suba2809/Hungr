import { Link } from '@react-navigation/native';
import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function RecipeDetail({navigation, recipe}) {

    return (
        <View>
            <Text>{recipe.label}</Text>
            <Text>{recipe.ingredient}</Text>
            <Link>{recipe.url}</Link>
        </View>
    )
}