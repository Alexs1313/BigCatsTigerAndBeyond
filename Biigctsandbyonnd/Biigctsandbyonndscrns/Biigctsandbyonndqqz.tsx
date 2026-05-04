import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';
import {
  biigctsandbyonndqqzDailyFact,
  biigctsandbyonndqqzFacts,
} from '../Biigctsandbyonnddata/Biigctsandbyonndqqz';

const Biigctsandbyonndqqz = () => {
  const biigctsandbyonndqqzNavigation = useNavigation();

  const biigctsandbyonndqqzOpenQuiz = () => {
    (biigctsandbyonndqqzNavigation as {navigate: (n: string) => void}).navigate(
      'Biigctsandbyonndqqzrun',
    );
  };

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndqqzHomeRoot}>
        <Text style={styles.biigctsandbyonndqqzHomeOverline}>
          BRAIN CHALLENGE
        </Text>
        <Text style={styles.biigctsandbyonndqqzHomeTitle}>Quiz & Facts</Text>

        <LinearGradient
          colors={['#C04040', '#1B0606']}
          start={{x: 0.2, y: 0}}
          end={{x: 1.1, y: 0.9}}
          style={styles.biigctsandbyonndqqzDailyCard}>
          <View style={{padding: 16}}>
            <Text style={styles.biigctsandbyonndqqzDailyLabel}>
              DAILY ROAR FACT
            </Text>
            <Text style={styles.biigctsandbyonndqqzDailyQuote}>
              {biigctsandbyonndqqzDailyFact.quote}
            </Text>
            <View style={styles.biigctsandbyonndqqzDailyTag}>
              <Text style={styles.biigctsandbyonndqqzDailyTagText}>
                🐾 {biigctsandbyonndqqzDailyFact.tag}
              </Text>
            </View>
          </View>
        </LinearGradient>

        <Pressable onPress={biigctsandbyonndqqzOpenQuiz}>
          <LinearGradient
            colors={['#D4621A', '#D4621ACC']}
            style={styles.biigctsandbyonndqqzStartBtn}>
            <Text style={styles.biigctsandbyonndqqzStartBtnText}>
              🧠 Start Quiz
            </Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.biigctsandbyonndqqzFactsHeader}>
          <Text style={styles.biigctsandbyonndqqzFactsHeaderIcon}>🌿</Text>
          <Text style={styles.biigctsandbyonndqqzFactsHeaderTitle}>
            Wild Facts
          </Text>
        </View>

        {biigctsandbyonndqqzFacts.map(f => (
          <View key={f.id} style={styles.biigctsandbyonndqqzFactCard}>
            <View
              style={{
                width: 36,
                height: 36,
                backgroundColor: '#D4621A22',
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.biigctsandbyonndqqzFactPaw}>🐾</Text>
            </View>
            <View style={styles.biigctsandbyonndqqzFactBody}>
              <Text
                style={[
                  styles.biigctsandbyonndqqzFactTag,
                  {color: f.tagColor},
                ]}>
                {f.tag.toUpperCase()}
              </Text>
              <Text style={styles.biigctsandbyonndqqzFactText}>{f.body}</Text>
            </View>
          </View>
        ))}
        <View style={styles.biigctsandbyonndqqzHomeSpacer} />
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndqqz;

const styles = StyleSheet.create({
  biigctsandbyonndqqzHomeRoot: {
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 24,
  },
  biigctsandbyonndqqzHomeOverline: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  biigctsandbyonndqqzHomeTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 26,
    lineHeight: 32,
    marginBottom: 14,
  },
  biigctsandbyonndqqzDailyCard: {
    borderRadius: 22,
    marginBottom: 14,
    minHeight: 150,
    justifyContent: 'center',
  },
  biigctsandbyonndqqzDailyLabel: {
    color: '#FFD36A',
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  biigctsandbyonndqqzDailyQuote: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  biigctsandbyonndqqzDailyTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#1B0C0CCC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  biigctsandbyonndqqzDailyTagText: {
    color: '#FFB28A',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
  },
  biigctsandbyonndqqzStartBtn: {
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  biigctsandbyonndqqzStartBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  biigctsandbyonndqqzFactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  biigctsandbyonndqqzFactsHeaderIcon: {
    fontSize: 18,
  },
  biigctsandbyonndqqzFactsHeaderTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
  },
  biigctsandbyonndqqzFactCard: {
    flexDirection: 'row',
    backgroundColor: '#2A1313B3',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  biigctsandbyonndqqzFactPaw: {
    fontSize: 16,
  },
  biigctsandbyonndqqzFactBody: {
    flex: 1,
  },
  biigctsandbyonndqqzFactTag: {
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  biigctsandbyonndqqzFactText: {
    color: '#FFFFFFCC',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  biigctsandbyonndqqzHomeSpacer: {
    height: 100,
  },
});
