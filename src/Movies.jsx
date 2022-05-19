import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Movies extends Component{
  render(){
    const {nome, foto, sinopse} = this.props.data;
    return(
      <View>
        
        <View style={styles.card}>
          <Text style={styles.title}>{nome}</Text>
          <Image
          source={{ uri: foto }}
          style={styles.cover}
          />

          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={()=> alert(sinopse)}>
              <Text style={styles.buttonText}>READ MORE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  title:{
    fontSize: 18,
    padding: 15,
  },
  cover:{
    height: 250,
    zIndex: 2,
  },
  buttonArea:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  button:{
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

  },
  buttonText:{
    textAlign: 'center',
    color: '#FFF'
  }
});

export default Movies;