import {
    View,
    StatusBar,
    StyleSheet,
} from 'react-native'
import React from 'react'
import {
  useNavigation
} from '@react-navigation/core'


const statusbarHeight = StatusBar.currentHeight ? statusbarHeight + 22 : 64;

export const Header = () => {
  const navigation = useNavigation()

  // const handleSignOut = () => {
  //   auth.signOut().then(() => {
  //     navigation.replace('Login')
  //   }).catch((error) => alert(error.message))
  // }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text style={styles.user}>{data}</Text> */}

      {/* <View style={styles.contentIcon}>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <AntDesign name="user" size={27} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>  
      </View> */}
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#233974',
        paddingTop: statusbarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 30,
    },
    user: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentIcon: {
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold'
    }
})