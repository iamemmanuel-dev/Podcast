import { useFonts } from 'expo-font'
import HomeScreen from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400: require('./assets/fonts/Inter-Regular.ttf'),
    Inter_600: require('./assets/fonts/Inter-SemiBold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return <HomeScreen />
}
