import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LottieView
        source={require("./assets/animation.lottie")}
        style={{width: "100%", height: "100%"}}
        autoPlay
        loop
        onAnimationFailure={(e) => {
          console.log(e)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});
