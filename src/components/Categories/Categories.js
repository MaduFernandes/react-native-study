import {
    Text,
    StyleSheet,
    TouchableOpacity, 
    View
} from 'react-native'
import React from 'react'

export default function Categories() {

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { borderColor: generateColor()}]}>
                <Text style={styles.title}>ROMANCE</Text>
            </TouchableOpacity>
            <TouchableOpacity TouchableOpacity style = {[styles.button, {borderColor: generateColor()}]}>
                <Text style={styles.title}>FICÇÃO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: generateColor()}]}>
                <Text style={styles.title}>DRAMA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { borderColor: generateColor()}]}>
                <Text style={styles.title}>TERROR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 12,
    },
    button: {
        padding: 4,
        borderRadius: 15,
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#fff',
        marginTop: 7,
        borderWidth: 2,
    },
})