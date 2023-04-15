import { Text, View, Button } from 'react-native';
import {styles} from '../assets/styles/styles'

function Contacts({route}){
  const {email, phone} = route.params
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en Contactenos</Text>
        <Text>Email: {route.params.email}</Text>
        <Text>Phone: {phone}</Text>
        <Button
          title="Ir a Inicio"
          onPress={()=>{
            navigation.navigate('Home')
          }}
        />


      </View>
    );
  }

export default Contacts
  
  