import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    useNavigation
} from '@react-navigation/core'

import { Header } from '../../components/Header/Header'
import { ListItem } from '../../components/List/ListItem'
import ListBooks from '../../components/List/ListBooks'
import Button from '../../components/Button/Button'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if(!isLoading){
            axios.get('http://localhost:3000/livros')
            .then(response => {
                setData(response.data)
                setIsLoading(false)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            }
            )
        }
    }, [])

    const navigation = useNavigation()

    const handleNavigateToForm = () => {
        navigation.navigate('Forms')
    }

    return (
        <View style={styles.container}>
            <Header />

            <ListItem />

            <Text style={styles.title}>Últimos Livros Lidos</Text>

            <FlatList 
                style={styles.list}
                data={data}
                keyExtractor={(item) => (item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => <ListBooks data={item}/>}
            />

            <Button navigate={handleNavigateToForm}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 10,
    }
})