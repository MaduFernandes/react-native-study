import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

import Categories from '../Categories/Categories'

import { auth } from '../../services/firebaseConnection'
import { useNavigation } from '@react-navigation/core'

export const ListItem = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then(() => {
        navigation.replace('Login')
         }).catch((error) => alert(error.message))
     }
      
    return (
        <View style={styles.container}>
           <View style={styles.item}>
                <TouchableOpacity onPress={handleSignOut} TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                     <Text style={styles.itemTitle}>M</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.userInformation}>
               <Text style={styles.user}>Maria Eduarda Alves</Text>

                <View>
                    <Categories />
                </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -70,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 44,
        paddingBottom: 44,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#fff',
    },
    item: {
        alignItems: 'center',
    },
    contentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginStart: 8,
        fontSize: 20,
    },
    buttonUser: {
        width: 88,
        height: 88,
        backgroundColor: '#BEBFC0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 88 / 2,
    },
    userInformation: {
        width: '70%',
    },
    user: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

