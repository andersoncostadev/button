import React from "react";
import {
  TouchableOpacity, 
  TouchableOpacityProps,
  View,
  Text, 
  StyleSheet,  
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title:string;
  url?: string;
} 

const Button: React.FC<ButtonProps> = ({title, url, ...rest})=> {
  return(
    <View style={styles.container}>
      <TouchableOpacity 
      {...rest}
      style={styles.button}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
      </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  button:{
    alignItems: 'center',
    backgroundColor: 'purple',
    padding:20,
    borderRadius:5
   },
  txt:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  }
})

export default Button;