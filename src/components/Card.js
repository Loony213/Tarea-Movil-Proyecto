import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../theme/Colors';

export const RecommendationCard = ({ title, description }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.star}>★</Text>
    </View>
    <Text style={styles.desc}>{description}</Text>
    <TouchableOpacity>
      <Text style={styles.why}>Why? ▾</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBg,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { color: Colors.textPrimary, fontSize: 18, fontWeight: 'bold' },
  star: { color: Colors.accent },
  desc: { color: Colors.textSecondary, marginTop: 8, fontSize: 14 },
  why: { color: Colors.textSecondary, marginTop: 12, fontWeight: '600' },
});