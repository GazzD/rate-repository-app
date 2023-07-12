import React from 'react'
import StyledText from './StyledText'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { Link } from 'react-router-native'

const AppBarTab = ({ active, children, to }) => {
  <Link to={to}>
    <StyledText fontWeight='bold' style={styles.text}>
      {children}
    </StyledText>
  </Link>
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'> Repositories </AppBarTab>
      <AppBarTab active to='/signin'> Signin </AppBarTab>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.appBar.primary
  },
  text: {
    color: theme.colors.textPrimary
  }

})

export default AppBar
