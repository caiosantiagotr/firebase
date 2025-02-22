import { db } from './src/firebaseconexão';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc } from 'firebase/firestore';
import { TextInput } from 'react-native-web';


export default function App() {
  const [nome, setNome] = useState("")
  const [login, setlogin] = useState("")
  const [senha, setsenha] = useState("")


 // useEffect(() => {

   // async function getDados(){
       //Snapshot = comando par realizar a busca das informaçoes e deixa la em memoria sempre 
       // necessario realizar a atualização de pagina para trazer os dados atualizados 
      // const docref = doc(db, "users", "15Eh8DvDNSVN8pTkqNUR")
      // getDoc(docref)
     // .then((snapshot) => {
     //   setNome(snapshot.data()?.login)
     //  })
     //  .catch((err) => {
    //    console.log("error: ")
    //     console.log(err);
    //  })
     // onSnapshot = comando que realiza a busca das 
     // informações em tempo real sempre atualizando os dados caso sofra alguma altração no banco de dados.
     // onSnapshot(doc(db, "users", "1"), (doc) => {
      //setNome(doc.data()?.nome)
    // })


 //  }

  //  getDados();

 // }, [])


  async function handleRegister(){

     
     await addDoc(collection(db, "users",), {
       nome: "nome",
       login: "login",
       senha: "senha"
     })
     .then(() => {
       console.log("CADASTRADO COM SUCESSO")
       setNome("");
       setlogin("");
       setsenha("");
     })
     .catch((erro) => {
       console.log(erro);
     })

  //  await addDoc(collection(db, "users"), {
//nome: "Fulano",
    //  idade: "12",
   //   cargo: "Estudante"
   // })

  }
function ocultarform(){
  setShowform(!Showform)
}
 return (
  <View style={styles.container}>
    {Showform && (
 <View>
    <Text style={{fontSize: 24}}>Nome:</Text>
    <TextInput
     placeholder='Digite o seu nome'
     value={nome}
     onChangeText={(text) => setNome(text)}    
    />
 <Text style={{fontSize: 24}}>Login:</Text>
    <TextInput
     placeholder='Digite o seu Login'
     value={login}
     onChangeText={(text) => setlogin(text)}    
    />
     <Text style={{fontSize: 24}}>senha:</Text>
    <TextInput
     placeholder='Digite o seu senha'
     value={senha}
     onChangeText={(text) => setsenha(text)}    
    />
    <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={styles.buttonText}>{Showform ?"escoder formulario": "mostrar formulario"}</Text>
    </TouchableOpacity>
   
    </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    paddingTop: 40
  },
  button:{
    backgroundColor: "#000",
    alignSelf: "flex-start"
  },
  buttonText:{
    padding: 8,
    color: "#FFF"
  }
})