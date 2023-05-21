import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, ListItem } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

const MenuPage = () => {
  // Dados fictícios do usuário
  const user = {
    //name: 'John Doe',
    //photo: require('../caminho/para/a/imagem/foto-usuario.png'),
  };

  const handleActionPress = (action) => {
    // Implemente a lógica para lidar com o clique no botão de ação aqui
    console.log(`Botão ${action} pressionado.`);
  };

  return (
      <View style={styles.container}>
        <LinearGradient
            colors={['#42007F', '#6600C7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.33, 1]}
            style={styles.botaoUser}
        >
          <ListItem containerStyle={{ backgroundColor: 'transparent' }}>
            <Avatar rounded source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs46fIKd8hYeUZRJ4Q9rFA016EVkt4NhF_lCzkBLFhdQ&s' }} />
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
    flex: 99,
    paddingTop: 0,
  },
  botaoUser: {
    margin: 0,
    paddingTop: 100,
    paddingBottom: 20,
  },
});

export default MenuPage;