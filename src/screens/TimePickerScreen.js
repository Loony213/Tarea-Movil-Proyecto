import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../theme/Colors';

export const TimePickerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Getting started</Text>
      <Text style={styles.subHeader}>Select your wakeup time</Text>

      <View style={styles.digitalClock}>
        <View style={styles.timeBox}><Text style={styles.timeText}>12</Text></View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.timeBox}><Text style={styles.timeText}>00</Text></View>
        <View style={[styles.timeBox, {marginLeft: 15}]}><Text style={styles.timeText}>PM</Text></View>
      </View>

      <Text style={styles.label}>Select Hour</Text>

      {/* Círculo del Reloj */}
      <View style={styles.analogClock}>
        {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => (
          <Text key={num} style={[styles.clockNumber, getPosition(i)]}>{num}</Text>
        ))}
        <View style={styles.clockCenter} />
        <View style={styles.clockHand} />
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Función simple para posicionar números en el círculo
const getPosition = (index) => {
  const angle = (index * 30) * (Math.PI / 180);
  const r = 90;
  return {
    top: 100 - r * Math.cos(angle),
    left: 105 + r * Math.sin(angle),
  };
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, alignItems: 'center' },
  header: { color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 40 },
  subHeader: { color: Colors.textSecondary, fontSize: 16, marginTop: 10 },
  digitalClock: { flexDirection: 'row', alignItems: 'center', marginTop: 40 },
  timeBox: { backgroundColor: '#1d3557', padding: 15, borderRadius: 8, minWidth: 70, alignItems: 'center' },
  timeText: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  colon: { color: 'white', fontSize: 28, marginHorizontal: 10 },
  label: { color: Colors.textSecondary, marginTop: 30, fontSize: 16 },
  analogClock: { width: 240, height: 240, borderRadius: 120, backgroundColor: '#232d3a', marginTop: 30, position: 'relative' },
  clockNumber: { color: 'white', position: 'absolute', fontSize: 20 },
  clockCenter: { width: 10, height: 10, backgroundColor: 'white', borderRadius: 5, position: 'absolute', top: '48%', left: '48%' },
  clockHand: { width: 4, height: 80, backgroundColor: 'white', position: 'absolute', top: '15%', left: '49.5%', borderRadius: 2 },
  nextButton: { backgroundColor: '#1d3557', width: '90%', padding: 18, borderRadius: 12, position: 'absolute', bottom: 40 },
  nextButtonText: { color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});