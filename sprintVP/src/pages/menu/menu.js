import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeBaseProvider, Switch, Text, ScrollView } from 'native-base';
import { ListItem } from '@rneui/themed';

const ProfilePosts = () => {
  return (
    <NativeBaseProvider style={styles.container}>
      <LinearGradient
        colors={['#42007F', '#6600C7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.33, 1]}
        style={styles.pageHeader}
      >
        <View style={styles.userInfos}>
          <View style={styles.headerButtons}>
            <Text style={styles.logout}>Logout</Text>
            <Text style={styles.profile}>Profile</Text>
            <Text style={styles.settings}>Settings</Text>
          </View>
          <Image
            style={styles.iconHeader}
            contentFit="cover"
            source={require("../../../assets/iconx.png")}
          />
        </View>
        <Image
          style={styles.userPhoto}
          contentFit="cover"
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs46fIKd8hYeUZRJ4Q9rFA016EVkt4NhF_lCzkBLFhdQ&s' }}
        />
        <Text style={styles.userName}>
          Ednaldo Pereira
        </Text>
      </LinearGradient>
      <ScrollView style={styles.confMenu}>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Modo noturno</ListItem.Title>
          </ListItem.Content>
          <Switch
            style={styles.switchButton}
            thumbColor="#6600C7"
            trackColor={{
              false: '#6600C7',
              true: '#1ccbcb',
            }}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Autenticação de dois fatores</ListItem.Title>
          </ListItem.Content>
          <Switch
            style={styles.switchButton}
            thumbColor="#6600C7"
            trackColor={{
              false: '#6600C7',
              true: '#1ccbcb',
            }}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Notificações</ListItem.Title>
          </ListItem.Content>
          <Switch
            style={styles.switchButton}
            thumbColor="#6600C7"
            trackColor={{
              false: '#6600C7',
              true: '#1ccbcb',
            }}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Resgate sua senha</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Entre em contato (se conseguir)</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 0,
    margin: 0,
  },
  logout: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    left: 12,
  },
  profile: {
    fontWeight: "600",
    fontSize: 30,
    color: "#fff",
    paddingTop: 12,
  },
  headerButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: 55,
  },
  iconHeader: {
    top: 16,
    width: 16,
    height: 16,
    display: "none",
    left: 0,
  },
  settings: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    right: 12,
  },
  pageHeader: {
    height: 320,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "000",
    shadowOpacity: 0.75,
    shadowRadius: 50,
    elevation: 9,
  },
  userPhoto: {
    width: 165,
    height: 165,
    left: '50%',
    marginLeft: -82.5,
    borderRadius: 82.5,
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: 20,
  },
  userInfos: {
    width: "100%",
    alignItems: "center",
  },
  userName: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 20,
    zIndex: 999,
  },
  switchButton: {
    alignItems: 'flex-end'
  },
  confMenu: {
    backgroundColor: '##f3f6f9',
  },
});

export default ProfilePosts;