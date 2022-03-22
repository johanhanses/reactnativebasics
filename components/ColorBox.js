import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  }

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
    fontWeight: 'bold',
  }

  return (
    <View style={[styles.container, boxColor, styles.box]}>
      <Text style={textColor}>
        {colorName} {hexCode}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ColorBox
