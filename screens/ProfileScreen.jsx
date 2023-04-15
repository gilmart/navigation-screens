import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

function ProfileScreen({navigation}){
  let email = "cosas@cosas.com";
  let phone = " 123-456-7890"   
  return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', marginBottom:10}}>Estamos en Perfil del Usuario</Text>
        <Button
          title="Ir a Contactenos"
          onPress={()=>{
            navigation.navigate('Contacts',{email:email, phone:phone})
          }}
        />
      </View>
    );
  }
 
 export default ProfileScreen 