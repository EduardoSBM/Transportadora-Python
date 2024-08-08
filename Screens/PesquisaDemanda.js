import React, { useState, useContext }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { UserContext } from './UserContext';

export default function Pesquisa({ navigation }) {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const { userID } = useContext(UserContext);

    async function getDemanda() {
      try{
        console.log('pesquisa: ', search)
        const response = await axios.get('http://localhost:3000/demanda');
        const demandas = response.data.demandas.filter(demanda => {
          if (search !== '') {
            return demanda.codigo == search && demanda.codusuario === userID;
          } else {
            return demanda.codusuario === userID;
          }
        });
        setData(demandas);
        console.log(response.data)
      } catch (e) {
        console.log(e);
      }
    }

  return (
    
    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
        style={styles.inputContainer}
        placeholder='Pesquise a demanda pelo código:'
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={getDemanda}>
          <Image
            style={styles.lupa}
            source={require('../ft/lupa.png')}
          />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.resultadoPesquisa}>
        <ScrollView>
        <Text>
          Suas demandas
        </Text>
        {data.length <= 0 ? (
          <Text>Pesquisando...</Text>
        ) : (
          data.map((demanda) => {
            return(
              <View style={styles.valordemanda}>
            <View style={styles.valordemandacod}>
              <Text style={styles.valordemandacodtxt}>{demanda.codigo}</Text>
            </View>
            <View style={styles.valordemandaprodtsegrd}>
              <Text style={styles.valordemandaprodtsegrdtxt}>{demanda.carga}</Text>
            </View>
            <View style={styles.valor}>
              <Text style={styles.valortxt}>Valor: {demanda.valor}</Text>
            </View>
            <View style={styles.valordemandametdpendt}>
              <View style={styles.valordemandametd}>
                <Text style={styles.valordemandametdtxt}>Remetente: {demanda.remetente}</Text>
              </View>
              <View style={styles.valordemandapendt}>
                <Text style={styles.valordemandapendttext}>Endereço: {demanda.enderecoRemetente}</Text>
              </View>
            </View>
            <View style={styles.divisao}/>
            <View style={styles.valordemandabancoendereco}>
              <View style={styles.valordemandabanco}>
                <Text style={styles.valordemandabancotxt}>Destinatário: {demanda.destinatario}</Text>
              </View>
              <View style={styles.valordemandaendereco}>
                <Text style={styles.valordemandaenderecotxt}>Endereço: {demanda.enderecoDestinatario}</Text>
              </View>
            </View>
          </View>
            );
          })
        )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  campoPesquisa: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
    width: 20,
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.75,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },

  lupa: {
    width: 30,
    height: 30,
  },

  divisao: {
    width: 300,
    height: 1,
    backgroundColor: 'red',
  },

  square1: {
    width: 70, 
    height: 40, // Mantém a proporção quadrada
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  resultadoPesquisa: {
    width: 370, 
    height: 600,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    textAlign: 'center',
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  valordemanda: {
    margin: 20,
    width: 320,
    height: 190,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  valordemandacod: {
    width: '100%',
    height: '10%',
  },
  valordemandacodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  valordemandaprodtsegrd: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandaprodtsegrdtxt: {
    fontSize: 20,
  },
  valor: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valortxt: {
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic',
  },
  valordemandametdpendt: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valordemandametd: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandametdtxt: {
    fontSize: 16,
  },
  valordemandapendt: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandapendttext: {
    fontSize: 12,
  },
  valordemandabancoendereco: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valordemandabanco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandabancotxt: {
    fontSize: 16,
  },
  valordemandaendereco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandaenderecotxt: {
    fontSize: 15,
  },
});
