import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image,SafeAreaView,StyleSheet, Text, View, TextInput,TouchableOpacity, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { TextInput } from 'react-native-paper';
import CustomInput from './../components/CustomInput';

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image
      source={require("./../deskLight.png")}
      style={{width:"100%",height: "50%",resizeMode: 'stretch'}}
      />
      <View style={styles.rectangle}>
      <Text style={{color: 'white',fontSize: 24,fontWeight: 'bold',marginTop: 20}}>Welcome Back! 👋</Text>
      <Text style={{color: 'white',fontSize: 12,marginTop: 5}}>
      You don't have account yet
      <Text style={{color: '#EB00FF'}}> Sign Up</Text>
      </Text>

      <CustomInput name="email" icon="user" />
      <CustomInput name="password" icon="lock" />

      <Text style={{width: '45%',color: 'white',textDecorationLine: 'underline',alignSelf: 'flex-end'}}>Recovery Password</Text>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{color:'white'}}>Sign in</Text>
      </TouchableOpacity>

      <View style={{flex:1,flexDirection: 'row',marginTop: 10}}>
      <View
        style={{
          width: 80,
          height: 10,
          borderBottomWidth: .5,
          color: "black",
        }}
      />
        <Text> Or Continue With </Text>
        <View
        style={{
          width: 80,
          height: 10,
          borderBottomWidth: .5,
          color: "black",
        }}
      />
      </View>
  
      <SafeAreaView style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{padding: 8,backgroundColor: '#464571',borderRadius: '10%'}}>
        <Image
        source={require("./../google.png")}
        style={{width:40,height: 40}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 8,backgroundColor: '#464571',marginLeft: 20,borderRadius: '10%'}}>
        <Image
        source={require("./../apple.png")}
        style={{width:40,height: 40}}/>
        </TouchableOpacity>
      </SafeAreaView>


      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
      height: '100%',
      width: '100%',
      zIndex: 0,
      elevation: 0
    },
    rectangle: {
      width: "100%",
      height: "55%",
      backgroundColor: '#9B90C3',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: "25%",
      borderTopRightRadius: "25%",
      alignItems: 'center',
      zIndex: 1,
      elevation: 1
    },
    button: {
      width: 250,
      height: 55,
      alignItems: "center",
      backgroundColor: "#E030FC", 
      padding: 20,
      borderRadius: '25%',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default LoginScreen