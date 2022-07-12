import React from 'react'
import { Button,View, Text,SafeAreaView } from 'react-native'

export default function HomeScreen ({ navigation }) {

  return (
    <SafeAreaView style={{padding: 50}}>
      <Text>a Screen</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Learn More"
          color="#841584"
        />
    </SafeAreaView>
  )
}