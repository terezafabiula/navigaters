import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params.name


  const handleHomeClick = () => {
    //quando for pra voltar para uma página anterior usa o GO BACK
    //se for para ir para uma páginapra frente usa o NAVIGATION
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Bem-Vindo:{name}</Text>
      <Button title='Voltar' onPress={handleHomeClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})