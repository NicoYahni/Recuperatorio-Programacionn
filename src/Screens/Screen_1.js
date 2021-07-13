import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Button




} from 'react-native';

 class Screen_1 extends Component{
    constructor() {
        super();
        this.state = {
            users: [],
            tarjetasAGuardar: [],
        }
    }


    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/' + this.state.tarjetasAGuardar)
        .then (response => response.json())
        .then ((result) =>{
            this.setState ({users: result.results})
        })
    }

    async storeData() {
        try{
          const jsonUsers = JSON.stringify(this.state.users);
        await AsyncStorage.setItem("Users", jsonUsers);
        }catch(e) {
          console.log(e);
        }
       }
    

       descartarTarjeta(item){
        let resultado= this.state.users.filter(info=> info.id !== item.id)
        this.setState({users: resultado})
       }


    renderItem= ({item}) =>{
        return(
    
           <View >
            <Text style={listNames}>
                {item.name}
                {item.species} 
                {item.status}
            </Text>
        
             <Image style={cardImage} source={{uri: item.image}}/> 
           
             <Button onPress={()=> this.storeData(this)} title="Guardar" />
             <Button onPress={()=> this.descartarTarjeta(item)} title="Descartar" />
             </View>
       )
     
    }
   
  render () {
       

    return (
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Text style={{left:10, fontSize:50}}>
                    =
                </Text>
            </TouchableOpacity>
           
        <FlatList
        data={this.state.users}
        keyExtractor= {(item, idx)=> idx.toString()}
        renderItem={this.renderItem}>
          </FlatList> 

          
         </View>

      
    )
  }
}

const listNames ={
    fontSize:15, 
    alignSelf: 'center',
 
   
  };

const cardImage ={
    width: 50, 
    height: 50, 
    alignSelf: 'center',
    borderRadius: 6,
  };




export default Screen_1;