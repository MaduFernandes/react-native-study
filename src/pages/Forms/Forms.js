import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Forms = ({ route }) => {
   
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [editing, setEditing] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        if(route.params === undefined) {
            setName('');
            setAuthor('');
            setDescription('');
            setYear('');
        } else {
            setEditing(true)
            const { data } = route.params

            setName(data.item.name);
            setAuthor(data.item.author);
            setDescription(data.item.description);
            setYear(data.item.year);
        }
    }, [])

    const handleNavigateToHome = () => {
        navigation.navigate('Home');
    }

    const handleSaveForm = async () => {
        const form = {
            name: name,
            author: author,
            year: year,
            description: description
        }

        if(editing === true) {
            const { data } = route.params
            await axios.put(`http://localhost:3000/livros/${data.item.id}`, form);
            handleNavigateToHome();
            console.log('Livro editado com sucesso');
        } else {
            await axios.post('http://localhost:3000/livros', form);
            handleNavigateToHome();
            console.log('Livro cadastrado com sucesso');
        }
    }

    return (
        <>
        <Header />
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Autor"
                    value = {author}
                    onChangeText={text => setAuthor(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Ano"
                    value={year}
                    onChangeText={text => setYear(text)}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={4}
                />
                <TextInput
                    placeholder="Descrição"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    style={styles.input}
                    multiline={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSaveForm}
                    style={styles.button}
                >
                <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleNavigateToHome}  
                    style={[styles.button, styles.buttonOutline]}
                >
                <Text style={styles.buttonOutlineText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
        </>
    )
}

export default Forms

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    inputContainer: {
        marginTop: -50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor:'#FFF',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: '80%',
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#233974',
        width: '35%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        marginLeft: 10,
        backgroundColor: '#FFF',
        borderColor: '#233974',
        borderWidth: 2,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#233974',
        fontWeight: '700',
        fontSize: 16,
    },
})