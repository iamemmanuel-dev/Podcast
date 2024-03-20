import React from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import { styles } from './styles'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <ImageBackground
          style={styles.imageContainer}
          source={require('../../../assets/images/img.jpeg')}
        >
          <View style={styles.infoView}>
            <Text style={[styles.text, styles.boldText]}>Sashimi Sushi</Text>
            <Text style={[styles.text, styles.boldText, styles.centerText]}>
              Korean
            </Text>
            <Text style={styles.text}>5 Ingredients | 25 mins</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
