import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, ListItem } from '@rneui/themed';
import { LinearGradient } from "expo-linear-gradient";

const MenuPage = () => {
  // Dados fictícios do usuário
  const user = {
    //name: 'John Doe',
    //photo: require('../caminho/para/a/imagem/foto-usuario.png'),
  };

  // Função para lidar com o clique em um botão de ação
  const handleActionPress = (action) => {
    // Implemente a lógica para lidar com o clique no botão de ação aqui
    console.log(`Botão ${action} pressionado.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      </View>
      <LinearGradient
      colors={['#460fc9', '#4dd9d6']}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 1 }}
      style={styles.botaoUser}
      >
        <ListItem containerStyle={{ backgroundColor: 'transparent' }}>
          <Avatar rounded source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs46fIKd8hYeUZRJ4Q9rFA016EVkt4NhF_lCzkBLFhdQ&s' }}
          />
          <ListItem.Content>
            <ListItem.Title style={{ color: '#fff', fontWeight: 'bold' }}>
              Ednaldo Pereira
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: '#fff' }}>
              Vice Chairman
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="#fff" />
        </ListItem>
      </LinearGradient>
      <ListItem bottomDivider>
           <ListItem.Content>
             <ListItem.Title>Resgate sua senha</ListItem.Title>
           </ListItem.Content>
           <ListItem.Chevron />
         </ListItem>
         <ListItem bottomDivider>
           <ListItem.Content>
             <ListItem.Title>Entre em contato</ListItem.Title>
           </ListItem.Content>
           <ListItem.Chevron />
         </ListItem>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f3f6f9'
  },
  headerContainer: {
    backgroundColor: '#460fc9',
    width: '100%',
    height: 90,
    margin: 0,
    padding: 0,
  },
});

export default MenuPage;