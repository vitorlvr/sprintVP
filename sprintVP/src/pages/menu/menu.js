import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeBaseProvider, Switch, Text, ScrollView } from 'native-base';
import { ListItem } from '@rneui/themed';
import { MotiView } from 'moti';

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
        <MotiView
          from={{
            translateY: -1000,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            translateY: 0
          }}
          transition={{
            type:'timing',
            duration: 800,
            delay: 200,
          }}
        >
          <Image
            style={styles.userPhoto}
            contentFit="cover"
            source={require("../../../assets/imgUser.png")}
          />
        </MotiView>
       
        <MotiView
          from={{
            translateX: -1000,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            type:'timing',
            duration: 800,
            delay: 200,
          }}
        >
          <Text style={styles.userName}>
            Igor Max
          </Text>
          <Text style={styles.userEmail}>
            igormaxnunes@gmail.com
          </Text>
        </MotiView>

      </LinearGradient>

      <MotiView
        from={{
          translateY: 1000,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          type:'timing',
          duration: 1000,
          delay: 300,
        }}
      >
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
      </MotiView>
      
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
    fontSize: 14,
    left: 20,
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
    fontSize: 14,
    right: 20,
  },
  pageHeader: {
    height: 370,
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
    marginVertical: 20,
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
  userEmail: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  switchButton: {
    alignItems: 'flex-end'
  },
  confMenu: {
    backgroundColor: '#f3f6f9',
  },
});

export default ProfilePosts;
