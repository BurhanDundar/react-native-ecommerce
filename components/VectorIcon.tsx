import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const VectorIcon = (props) => {
  return (
    <View style={{width: 50,height: 60,backgroundColor: '#474474',alignItems: 'center',justifyContent: 'center',marginTop: 8,borderTopLeftRadius: '25%',
    borderBottomLeftRadius: '25%'}}>
      <Icon name={props.icon} size={30} color="white" />
    </View>
  )
}
export default VectorIcon