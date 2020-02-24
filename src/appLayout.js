import React from 'react'
import {View,Text,StyleSheet,Button, TextInput,Alert} from 'react-native';

function AppLayout(props){
    //mensaje = () => {Alert.alert('Bienvenido')};
    return(
        <View style={styles.container}>   
            <Text>{props.saludo}</Text>
            <Text>Usuario:{props.user}</Text>
            <Text>Contraseña:{props.pass}</Text>
            <TextInput placeholder='Llena este campo'/>
            <Button title='Iniciar sesion'
                    onPress={() => {Alert.alert('Bienvenido ')}} ></Button>

        </View>

    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',


    }
});



export default AppLayout