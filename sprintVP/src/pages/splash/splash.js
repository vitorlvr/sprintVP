import React, { useEffect } from "react";
import AnimatedLottieView from "lottie-react-native";

import { View } from "react-native";

export function Splash({ navigation }) {
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      navigation.navigate('AuthScreen');
    }, 3000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AnimatedLottieView
        source={require('../../assets/splash.json')}
        autoPlay
        speed={0.75}
      />
    </View>
  );
}
