import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../theme/Colors';

export const BottomTabs = () => (
  <View style={styles.tabBar}>
    <TabItem icon="🏠" label="Home" active />
    <TabItem icon="📊" label="Insights" />
    <TabItem icon="🔊" label="Sounds" />
    <TabItem icon="👤" label="Profile" />
  </View>
);

const TabItem = ({ icon, label, active }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={{ fontSize: 20, opacity: active ? 1 : 0.5 }}>{icon}</Text>
    <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#051126', 
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#1d3557'
  },
  item: { alignItems: 'center' },
  label: { color: Colors.textSecondary, fontSize: 12, marginTop: 4 },
  activeLabel: { color: '#4A90E2', fontWeight: 'bold' }
});