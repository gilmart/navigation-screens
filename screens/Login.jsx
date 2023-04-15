
import { Text, View } from 'react-native';
import {styles} from '../assets/styles/styles';
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button } from 'react-native-paper';


 function Login({navigation}){
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          email: '',
          password:'',
       
        }
      });

    const onSubmit = (dataform) =>{
        console.log(dataform)
        const {email,password} = dataform;
        console.log(email)
        console.log(password)
      }  

      return(
      <View style={styles.container}>
        <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength:5,
         pattern:  /^([a-z0-9_\.-]+)@([\da-z-]+)\.([a-z\.]{2,6})$/

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="email"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type=='required' && <Text style={{color:'red'}}>El email es obligatorio</Text>}
      {errors.email?.type=='maxLength' && <Text style={{color:'red'}}>El email tiene un maximo de 30 chars</Text>}
      {errors.email?.type=='minLength' && <Text style={{color:'red'}}>El email  tiene un minimo de 5 chars</Text>}
      {errors.email?.type=='pattern' && <Text style={{color:'red'}}>El nombre completo debe tener letras y no espacios</Text>}
      
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:12,
         minLength:1,
         pattern:  /^[A-Za-zÑñÁÉÍÓÚáéíóú ]+$/g

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="password"
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.type=='required' && <Text style={{color:'red'}}>El password es obligatorio</Text>}
      

      <Button 
      icon="send" 
      mode="contained" 
      onPress={()=>{
        navigation.navigate('Home')
      }}>
      Enviar
    </Button> 


        </View>
      );
}

export default Login
