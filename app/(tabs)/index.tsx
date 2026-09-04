import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const bg = colorScheme === 'dark' ? '#111' : '#f5f5f5';
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const cardBg = colorScheme === 'dark' ? '#1e1e1e' : '#fff';

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <Text style={[styles.title, { color: textColor }]}>🏠 Smart Manager</Text>
        <Text style={[styles.subtitle, { color: textColor }]}>Hoş geldiniz! Uygulamanız hazır.</Text>
      </View>
      <View style={[styles.card, { backgroundColor: cardBg, marginTop: 16 }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Özellikler</Text>
        <Text style={[styles.item, { color: textColor }]}>• React Native + Expo Router</Text>
        <Text style={[styles.item, { color: textColor }]}>• TypeScript</Text>
        <Text style={[styles.item, { color: textColor }]}>• Web + Mobil (iOS/Android)</Text>
        <Text style={[styles.item, { color: textColor }]}>• Hermes JS Engine</Text>
        <Text style={[styles.item, { color: textColor }]}>• File-based Routing</Text>
      </View>
      <View style={[styles.card, { backgroundColor: cardBg, marginTop: 16 }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Kullanılabilir Repos</Text>
        <Text style={[styles.item, { color: textColor }]}>GitHub'dan entegre edilecek repoları</Text>
        <Text style={[styles.item, { color: textColor }]}>bekliyoruz...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, opacity: 0.7 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  item: { fontSize: 15, marginVertical: 4, opacity: 0.8 },
});