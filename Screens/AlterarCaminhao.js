import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, FontAwesome5, FontAwesome6, FontAwesome, Entypo } from '@expo/vector-icons';
import axios from 'axios';



export default function AlterarCaminhao({ navigation }) {
    const [codigo, setCodigo] = useState('');
    const [marca, setMarca] = useState('');
    const [kmrodados, setKmrodados] = useState('');
    const [codmotorista, setCodMotorista] = useState('');
    const [capacidade, setCapacidade] = useState('');

    function putData() {
        if (codigo, marca, kmrodados, codmotorista, capacidade !== ''){
          try{
            axios.put('http://localhost:3000/caminhao', 
            {
              codigo: codigo,  
              marca: marca,
              kmrodados: kmrodados,
              codmotorista: codmotorista,
              capacidade: capacidade,
            },
            alert('Caminhão alterado'),
            setCodigo(''),
            setKmrodados(''),
            setCodMotorista(''),
            setCapacidade(''),
    
            navigation.navigate('Menuadm')
            );
          } 
            catch (e) {
            console.log(e);
            alert('Erro ao alterar caminhão')
          }
        }
        else{
          alert('Insira os dados nos campos')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.txt}>Insira os dados!</Text>
            </View>
            <View style={styles.square}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="code" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="codigo: "
                        placeholderTextColor="gray"
                        value={codigo}
                        onChangeText={setCodigo}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="business" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="Marca: "
                        placeholderTextColor="gray"
                        value={marca}
                        onChangeText={setMarca}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="truck-monster" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="km rodados: "
                        placeholderTextColor="gray"
                        value={kmrodados}
                        onChangeText={setKmrodados}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome6 name="drivers-license" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="código do motorista: "
                        placeholderTextColor="gray"
                        value={codmotorista}
                        onChangeText={setCodMotorista}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="weight-hanging" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="capacidade: "
                        placeholderTextColor="gray"
                        value={capacidade}
                        onChangeText={setCapacidade}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.botom}
                    onPress={putData}>
                        <Text style={styles.txtbotom}>Alterar caminhão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    square: {
        width: 370,
        height: 270,
        borderRadius: 15,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white', // Para garantir que a sombra seja visível
        shadowColor: 'gray',  // Cor da sombra
        shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
        shadowOpacity: 1.25,  // Opacidade da sombra
        shadowRadius: 3.84,  // Raio da sombra
        elevation: 5,  // Para Android, adiciona elevação
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginTop: 6,
        marginBottom: 6,
        width: '85%',
        height: 45,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    top: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 30,
        fontStyle: 'italic',
    },
    botom: {
        width: 180,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'red',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtbotom: {
        fontSize: 20,
        color: 'white',
    },
});
