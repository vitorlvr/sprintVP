import { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

export default function Animation() {

    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
       animation.current?.play();
    }, []);
  
    return (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 450,
            height: 450,
            backgroundColor: '#f3f6f9',
          }}
          source={require('../assets/smartphone-animation.json')}
        />
    );
}