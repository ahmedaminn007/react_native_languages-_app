import { StyleSheet, TouchableOpacity, View as RNView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text } from '@/tw';
import { Image } from '@/tw/image';
import { images } from '@/constants/images';

export default function OnboardingScreen() {
  return (
    // SafeAreaView → StyleSheet exception (per AGENTS.md)
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

      {/* ── Header: mascot logo + app name ────────────────────────────── */}
      <View className="flex-row items-center justify-center gap-2 pt-6 pb-2">
        <Image
          source={images.mascotLogo}
          className="w-[42px] h-[42px]"
          contentFit="contain"
        />
        <Text className="text-[28px] font-bold text-text-primary tracking-[-0.5px]">
          langua
        </Text>
      </View>

      {/* ── Hero text ─────────────────────────────────────────────────── */}
      <View className="px-6 pt-8 pb-2">
        <Text className="text-[34px] font-bold text-text-primary leading-[42px]">
          Your AI language{'\n'}
          <Text className="text-[34px] font-bold text-primary leading-[42px]">teacher</Text>
          <Text className="text-[34px] font-bold text-text-primary leading-[42px]">.</Text>
        </Text>
        <Text className="text-[15px] text-text-secondary leading-[24px] mt-3">
          Real conversations, personalized{'\n'}lessons, anytime, anywhere.
        </Text>
      </View>

      {/* ── Illustration area with floating speech bubbles ────────────── */}
      <View className="flex-1 items-center justify-center">

        {/*
          Bubbles → StyleSheet exceptions:
          - position: 'absolute'   (dynamic layout)
          - shadow*                (platform-specific iOS/Android shadow props)
          - zIndex                 (sometimes needs explicit StyleSheet)
        */}
        <RNView style={[styles.bubble, styles.bubbleHello]}>
          <Text className="text-[15px] font-medium text-text-primary">Hello!</Text>
        </RNView>

        <RNView style={[styles.bubble, styles.bubbleHola]}>
          <Text className="text-[15px] font-medium text-primary">¡Hola!</Text>
        </RNView>

        <RNView style={[styles.bubble, styles.bubbleNihao]}>
          <Text className="text-[15px] font-medium text-[#e53e3e]">你好!</Text>
        </RNView>

        {/* Mascot — centered by parent flex container */}
        <Image
          source={images.mascotWelcome}
          className="w-[270px] h-[270px] self-center"
          contentFit="contain"
        />
      </View>

      {/* ── Get Started button ────────────────────────────────────────── */}
      <View className="px-6 pb-8 pt-4">
        {/*
          TouchableOpacity → StyleSheet exception (pressed states, per AGENTS.md)
        */}
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => console.log('Get Started pressed')}
          activeOpacity={0.85}
        >
          <Text className="text-[17px] font-semibold text-white tracking-[0.2px]">
            Get Started
          </Text>
          <Text className="text-[22px] font-bold text-white ml-1">›</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Bubble containers: absolute + platform-specific shadows + z-index → StyleSheet only
  bubble: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  bubbleHello: {
    left: 4,
    top: '24%',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  bubbleHola: {
    right: 0,
    top: '5%',
    borderWidth: 1,
    borderColor: '#ede9fe',
  },
  bubbleNihao: {
    right: 4,
    top: '48%',
    backgroundColor: '#fff5f5',
    borderWidth: 1,
    borderColor: '#ffe4e4',
  },

  // TouchableOpacity: pressed-state styling → StyleSheet exception (per AGENTS.md)
  ctaButton: {
    backgroundColor: '#6c4ef5',
    borderRadius: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
});
