import React, {useState} from 'react';
import { View, Text } from 'react-native';


export default function Getingrident(ingred) {
    const {ingried} = fetch('http://localhost:8000')
    .then (res => {
        return res.json()
    })
}