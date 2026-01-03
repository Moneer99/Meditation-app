import { StyleSheet, Image, View} from 'react-native'
import React from 'react'


const IntroScreen = () => {

 return (
 	<View>
 	<Image source={require("../assets/Logo.png")} 
 	style={{ marginTop: 80 }}
 	/>	
 	</View>
      )
   }

export default IntroScreen

const styles = StyleSheet.create({})
