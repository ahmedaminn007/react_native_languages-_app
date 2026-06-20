import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { View, Text } from '@/tw';

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center gap-6 px-8">
        <Text className="text-[32px] font-bold text-center text-primary">
          Welcome to Langua
        </Text>
        <Text className="text-body-md text-text-secondary text-center">
          Your AI-powered language learning companion.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push('/onboarding')}
        >
          <Text style={styles.buttonLabel}>Go to Onboarding</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#6c4ef5',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#ffffff',
  },
});
