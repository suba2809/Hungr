import React, {useState} from 'react';
import { View, Text } from 'react-native';


export default function Addingrident(tmpingredient) {
  return (
    fetch('http://localhost:8000', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        ingredient: JSON.stringify(tmpingredient)
    }).then(() => {
        console.log('new ingredient added')
    })
  )
}
