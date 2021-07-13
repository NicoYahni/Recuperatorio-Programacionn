import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  Image



} from 'react-native';


 class Screen_2 extends Component{
   constructor() {
     super ();
      this.state = {
        importedUsers: [],
      }
   }


   async getData() {
    try{
        const resultado = await AsyncStorage.getItem('Users');
        this.setState({importedUsers: JSON.parse(resultado)});
  
    }catch(e) {
        console.log(e);
    }
   }

   componentDidUpdate(){
     console.log(this.state.importedUsers)
     console.log("--------")
   };
   


renderItem= ({item}) =>{
  return(

     <View>
      <Text style={listNames}>
          {item.name}    
          {item.species} 
          {item.status}
      </Text>
  
       <Image style={cardImage} source={{uri: item.image}}/> 
     
   
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
        data={this.state.importedUsers}
        keyExtractor= {(item, idx)=> idx.toString()}
        renderItem={this.renderItem}>
        </FlatList> 

        <Button  onPress= {() => this.getData()} title="Recuperar datos" />

       
  </View>
    )
  }




}

const listNames ={
  fontSize:15, 
  alignSelf: 'center',
  flex: 1,
 
};

const cardImage ={
  width: 50, 
  height: 50, 
  alignSelf: 'center',
  borderRadius: 6,
};
export default Screen_2;