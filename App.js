import React, {Component} from 'react';
import  AppLayout from'./src/appLayout';
import {View,Text,StyleSheet} from 'react-native';



class usoComponentes extends Component{
  constructor(props){
    super(props);
    this.state={

      user:'Dulce',
      pass:'1234',
      entrar:1,
    };
  }

 //const App: () => React$Node = () => {
 render(){
    return (

      <>
      <View style={styles.container}>   

        {
          this.state.entrar== 0
          ?
            <Text> Usuario no ha sido iniciado sesion</Text>
          :
               <AppLayout saludo = 'Hola mundo'
              
                user ={this.state.user}
                pass ={this.state.pass}/>
               
        }
      
      </View>
      
      </>
    );//end return
  }; //end render
}//end class

const styles=StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'white'


  }
});

export default usoComponentes;
