import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import {
    AntDesign
} from '@expo/vector-icons';

const Button = ({ navigate }) => {

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={navigate}
          style={styles.touchableOpacityStyle}>
            <AntDesign name="plus" size={26} color="#FFF" style={styles.floatingButtonStyle}/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#233974',
        borderRadius: 50,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
        marginTop: 20,
        marginLeft: 45,        
    }
    
})