
import { Text, View } from 'react-native';
import {styles} from '../assets/styles/styles';
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button, FAB } from 'react-native-paper';
import { datosUser } from '../datosUser.js';

import { useState } from 'react';

const emailRegistrado =async(email)=>{
      
}  

 function Login({navigation}){
    const { control, handleSubmit, watch, formState: { errors } } = 
    useForm({
        defaultValues: {
          email: '',       
        }
      });

    const emailRegistrado =async(email)=>{

    }   
    const onSubmit = (dataform) =>{
        console.log(dataform)
        const {email} = dataform;
     /*   const resultado = datosUser.find(item => item.email ===email);
        if (!resultado){
      
      
        console.warn("no existe")

      return;
        }*/

        console.log(email), 
        console.log('hello')
        console.log(datosUser)
        //123@gmaiol.cpm
      }  
      const validarEmail =async(email)=>{
        const registrado = await emailRegistrado(email)
        if (emailRegistrado){
          return 'Este correo electrónico está registrado';
        }else{
          return 'Este correo electrónico NO está registrado';
        }

      }
      return(
      <View style={styles.container}>
        <Controller
        control={control}
        rules={{
         required: true,
         pattern:  /^([a-z0-9_\.-]+)@([\da-z-]+)\.([a-z\.]{2,6})$/ ,
         validate: validarEmail

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
        defaultValue=""

      />
      {errors.email?.type=='required' && <Text style={{color:'red'}}>El email es obligatorio</Text>}
      {errors.email?.type=='pattern' && <Text style={{color:'red'}}>El nombre completo debe tener letras y no espacios</Text>}
      {errors.email?.type=='validate' && <Text style={{color:'red'}}>
        USUARIO NO REGISTRADOOOO</Text>}
      

      <Button 
      icon="send" 
      mode="contained" 
      onPress={
        handleSubmit(onSubmit)}>
      Enviar
    </Button>



        </View>
      );
}

export default Login
