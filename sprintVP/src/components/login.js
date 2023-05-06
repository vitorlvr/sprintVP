import { StyleSheet, SafeAreaView, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { useEffect } from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

// link: https://www.youtube.com/watch?v=yBJD4ply2k0

export default function Login() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // usuário cancelou o fluxo de login
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operação (por exemplo, o login) já está em andamento
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // serviços de execução não disponível ou desatualizado
      } else {
        // algum outro erro ocorreu
      }
    }
  };
    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['email'], // qual API você quer acessar em nome do usuário; o padrão é o email e o perfil
        webClientId:
          '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // o ID do client do tipo WEB para seu servidor (necessário para verificar o ID do usuário e o acesso off-line)
        offlineAccess: true, // se você deseja acessar a API do Google API em nome do usuário DE SEU SERVIDOR
      });
    }, []);
    signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setloggedIn(false);
        setuserInfo([]);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
  
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <GoogleSigninButton
                  style={{width: 192, height: 48}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                />
              </View>
              <View style={styles.buttonContainer}>
                {!loggedIn && <Text>You are currently logged out</Text>}
                {loggedIn && (
                  <Button
                    onPress={this.signOut}
                    title="LogOut"
                    color="red"></Button>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );  
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});