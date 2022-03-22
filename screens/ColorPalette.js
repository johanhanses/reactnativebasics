import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import ColorBox from '../components/ColorBox'

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<Text style={styles.boldText}>{paletteName}</Text>}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'white',
  },
})

export default ColorPalette
