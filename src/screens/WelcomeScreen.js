// src/screens/WelcomeScreen.js
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../theme/Colors';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        {/* Placeholder para el Logo */}
        <View style={styles.logoCircle} /> 
        <Text style={styles.brandName}>SOMNUS</Text>
        
        <View style={styles.textGroup}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.brandBig}>SOMNUS</Text>
          <Text style={styles.sub}>Improve your sleep without wearables</Text>
        </View>
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in or create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip this step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  centerContent: { flex: 2, justifyContent: 'center', alignItems: 'center' },
  logoCircle: { width: 120, height: 120, backgroundColor: 'white', borderRadius: 60, opacity: 0.2 },
  brandName: { color: 'white', fontSize: 32, letterSpacing: 5, marginTop: 20 },
  textGroup: { alignItems: 'center', marginTop: 50 },
  welcome: { color: 'white', fontSize: 20 },
  brandBig: { color: 'white', fontSize: 36, fontWeight: 'bold' },
  sub: { color: Colors.textSecondary, marginTop: 10 },
  bottomContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: Colors.buttonBg, paddingVertical: 18, paddingHorizontal: 40, borderRadius: 10, width: '85%' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  skip: { color: Colors.textSecondary, marginTop: 20, textDecorationLine: 'underline' }
});