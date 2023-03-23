import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const logoDisney = 'https:/logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-1.png';

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#050627', 'transparent']}
        style={styles.background}
      />
      <Image 
      style={styles.logo}
      source={{uri: logoDisney}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f469a'
  },

  logo: {
    width: 200,
    height: 110
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400
  }
});
