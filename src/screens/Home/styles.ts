import { StyleSheet } from 'react-native'
import theme from '../../Theme'

export const styles = StyleSheet.create({
  screen: {
    marginTop: '20%',
    marginLeft: 40,
  },

  imageContainer: {
    height: 324,
    width: 274.78,
    borderRadius: 13.67,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },

  infoView: {
    height: '38%',
    backgroundColor: theme.grey1,
    borderRadius: 13.67,
    padding: 30,
  },

  text: {
    fontFamily: 'Inter_400',
    fontSize: 16.41,
    color: theme.white,
    lineHeight: 19.85,
  },

  boldText: {
    fontFamily: 'Inter_600',
  },

  centerText: {
    marginTop: 3,
    marginBottom: 6,
  },
})
