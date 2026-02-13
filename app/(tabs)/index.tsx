import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Contenedor Principal con fondo oscuro */}
      <View style={styles.overlay}>
        
        {/* Sección del Logo y Título Superior */}
        <View style={styles.topSection}>
          <View style={styles.logoPlaceholder}>
            <Text style={{ fontSize: 40 }}>☁️</Text> {/* Sustituir por <Image /> del logo real */}
          </View>
          <Text style={styles.brandTitle}>SOMNUS</Text>
        </View>

        {/* Sección Central de Bienvenida */}
        <View style={styles.middleSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandBig}>SOMNUS</Text>
          <Text style={styles.tagline}>Improve your sleep without wearables</Text>
        </View>

        {/* Sección de Botones Inferiores */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Sign in or create an account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip this step</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051126', // Color oscuro de fondo según la imagen
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  brandTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    letterSpacing: 8,
    fontWeight: '300',
  },
  middleSection: {
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '400',
  },
  brandBig: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  tagline: {
    color: '#A0A0A0',
    fontSize: 14,
    textAlign: 'center',
  },
  bottomSection: {
    alignItems: 'center',
    gap: 20,
  },
  mainButton: {
    backgroundColor: '#1F1F1F', // Botón gris oscuro
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    marginTop: 5,
  },
  skipText: {
    color: '#A0A0A0',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});