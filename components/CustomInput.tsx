import { Image,SafeAreaView,StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'
import VectorIcon from './VectorIcon'

const CustomInput = (props) => {
  return (
        <View style={{flexDirection: 'row',alignItems: 'center',padding: 10}}>
            <VectorIcon icon={props.icon} />
            <TextInput
                style={styles.input}
                placeholder={props.name}
                placeholderTextColor={'#FFFFFF'}
            />
        </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 60,
    backgroundColor: '#474474',
    marginTop: 8,
    borderTopRightRadius: '25%',
    borderBottomRightRadius: '25%',
    color: 'white'
  }
});

export default CustomInput