import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { useColorScheme } from 'react-native';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const bg = colorScheme === 'dark' ? '#111' : '#f5f5f5';
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const cardBg = colorScheme === 'dark' ? '#1e1e1e' : '#fff';

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <Text style={[styles.title, { color: textColor }]}>⚙️ Ayarlar</Text>
        <View style={styles.row}>
          <Text style={[styles.item, { color: textColor }]}>Karanlık Mod</Text>
          <Switch
            value={colorScheme === 'dark'}
            onValueChange={() => {}}
            disabled
          />
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: cardBg, marginTop: 16 }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Bilgi</Text>
        <Text style={[styles.item, { color: textColor }]}>Sürüm: 1.0.0</Text>
        <Text style={[styles.item, { color: textColor }]}>Expo SDK: 57</Text>
        <Text style={[styles.item, { color: textColor }]}>React Native: 0.86</Text>
      </View>
      <View style={[styles.card, { backgroundColor: cardBg, marginTop: 16 }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>GitHub Entegrasyonu</Text>
        <Text style={[styles.item, { color: textColor }]}>Repo: github.com/togo2o/SMART-MANAGER</Text>
        <Text style={[styles.item, { color: textColor }]}>Diğer repolar entegrasyonu bekliyor...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  item: { fontSize: 15, marginVertical: 4, opacity: 0.8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
});