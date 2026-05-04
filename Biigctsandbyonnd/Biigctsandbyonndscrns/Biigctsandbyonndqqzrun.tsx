import {
  biigctsandbyonndqqzCorrectIndices,
  biigctsandbyonndqqzPointsMax,
  biigctsandbyonndqqzQuestions,
} from '../Biigctsandbyonnddata/Biigctsandbyonndqqz';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

type BiigctsandbyonndqqzrunPhase = 'quiz' | 'results';

type BiigctsandbyonndqqzrunQItem =
  (typeof biigctsandbyonndqqzQuestions)[number];

const biigctsandbyonndqqzrunPerSession = 4;

const biigctsandbyonndqqzrunPickSession = (): BiigctsandbyonndqqzrunQItem[] => {
  const biigctsandbyonndqqzrunPool = [...biigctsandbyonndqqzQuestions];
  for (
    let biigctsandbyonndqqzrunI = biigctsandbyonndqqzrunPool.length - 1;
    biigctsandbyonndqqzrunI > 0;
    biigctsandbyonndqqzrunI--
  ) {
    const biigctsandbyonndqqzrunJ = Math.floor(
      Math.random() * (biigctsandbyonndqqzrunI + 1),
    );
    const biigctsandbyonndqqzrunTmp =
      biigctsandbyonndqqzrunPool[biigctsandbyonndqqzrunI];
    biigctsandbyonndqqzrunPool[biigctsandbyonndqqzrunI] =
      biigctsandbyonndqqzrunPool[biigctsandbyonndqqzrunJ];
    biigctsandbyonndqqzrunPool[biigctsandbyonndqqzrunJ] =
      biigctsandbyonndqqzrunTmp;
  }
  return biigctsandbyonndqqzrunPool.slice(0, biigctsandbyonndqqzrunPerSession);
};

const biigctsandbyonndqqzrunShuffleOrder = (
  biigctsandbyonndqqzrunCorrect: number[],
): number[] => {
  const biigctsandbyonndqqzrunBase = [0, 1, 2, 3];
  const biigctsandbyonndqqzrunSame = (a: number[], b: number[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  for (
    let biigctsandbyonndqqzrunI = 0;
    biigctsandbyonndqqzrunI < 60;
    biigctsandbyonndqqzrunI++
  ) {
    const biigctsandbyonndqqzrunArr = [...biigctsandbyonndqqzrunBase].sort(
      () => Math.random() - 0.5,
    );
    if (
      !biigctsandbyonndqqzrunSame(
        biigctsandbyonndqqzrunArr,
        biigctsandbyonndqqzrunCorrect,
      )
    ) {
      return biigctsandbyonndqqzrunArr;
    }
  }
  return [
    biigctsandbyonndqqzrunCorrect[1],
    biigctsandbyonndqqzrunCorrect[0],
    biigctsandbyonndqqzrunCorrect[3],
    biigctsandbyonndqqzrunCorrect[2],
  ];
};

const Biigctsandbyonndqqzrun = () => {
  const biigctsandbyonndqqzrunNavigation = useNavigation();

  const biigctsandbyonndqqzrunSessionRef = useRef<
    BiigctsandbyonndqqzrunQItem[]
  >(biigctsandbyonndqqzrunPickSession());
  const biigctsandbyonndqqzrunSession =
    biigctsandbyonndqqzrunSessionRef.current;

  const [biigctsandbyonndqqzrunPhase, setBiigctsandbyonndqqzrunPhase] =
    useState<BiigctsandbyonndqqzrunPhase>('quiz');
  const [biigctsandbyonndqqzrunQIndex, setBiigctsandbyonndqqzrunQIndex] =
    useState(0);
  const [biigctsandbyonndqqzrunOrder, setBiigctsandbyonndqqzrunOrder] =
    useState<number[]>(() =>
      biigctsandbyonndqqzrunShuffleOrder(
        biigctsandbyonndqqzCorrectIndices(
          biigctsandbyonndqqzrunSessionRef.current[0],
        ),
      ),
    );

  const [
    biigctsandbyonndqqzrunSelectedSlot,
    setBiigctsandbyonndqqzrunSelectedSlot,
  ] = useState<number | null>(null);
  const [biigctsandbyonndqqzrunChecked, setBiigctsandbyonndqqzrunChecked] =
    useState(false);
  const [biigctsandbyonndqqzrunScore, setBiigctsandbyonndqqzrunScore] =
    useState(0);
  const [
    biigctsandbyonndqqzrunCorrectCount,
    setBiigctsandbyonndqqzrunCorrectCount,
  ] = useState(0);

  const biigctsandbyonndqqzrunSessionTotal = biigctsandbyonndqqzrunPerSession;

  const biigctsandbyonndqqzrunActiveQuestion = useMemo(() => {
    return biigctsandbyonndqqzrunSession[
      Math.min(
        biigctsandbyonndqqzrunQIndex,
        biigctsandbyonndqqzrunSession.length - 1,
      )
    ];
  }, [biigctsandbyonndqqzrunSession, biigctsandbyonndqqzrunQIndex]);

  const biigctsandbyonndqqzrunCorrect = useMemo(
    () =>
      biigctsandbyonndqqzCorrectIndices(biigctsandbyonndqqzrunActiveQuestion),
    [biigctsandbyonndqqzrunActiveQuestion],
  );

  const biigctsandbyonndqqzrunPointsPerRound = useMemo(() => {
    const biigctsandbyonndqqzrunN = Math.max(
      1,
      biigctsandbyonndqqzrunSessionTotal,
    );
    return Math.round(biigctsandbyonndqqzPointsMax / biigctsandbyonndqqzrunN);
  }, [biigctsandbyonndqqzrunSessionTotal]);

  const biigctsandbyonndqqzrunGoBack = () => {
    (biigctsandbyonndqqzrunNavigation as {goBack: () => void}).goBack();
  };

  const biigctsandbyonndqqzrunSwapSlots = useCallback(
    (biigctsandbyonndqqzrunA: number, biigctsandbyonndqqzrunB: number) => {
      setBiigctsandbyonndqqzrunOrder(prev => {
        const biigctsandbyonndqqzrunNext = [...prev];
        const biigctsandbyonndqqzrunTmp =
          biigctsandbyonndqqzrunNext[biigctsandbyonndqqzrunA];
        biigctsandbyonndqqzrunNext[biigctsandbyonndqqzrunA] =
          biigctsandbyonndqqzrunNext[biigctsandbyonndqqzrunB];
        biigctsandbyonndqqzrunNext[biigctsandbyonndqqzrunB] =
          biigctsandbyonndqqzrunTmp;
        return biigctsandbyonndqqzrunNext;
      });
      setBiigctsandbyonndqqzrunChecked(false);
    },
    [],
  );

  const biigctsandbyonndqqzrunTapSlot = (
    biigctsandbyonndqqzrunSlot: number,
  ) => {
    if (biigctsandbyonndqqzrunChecked) {
      return;
    }
    if (biigctsandbyonndqqzrunSelectedSlot === null) {
      setBiigctsandbyonndqqzrunSelectedSlot(biigctsandbyonndqqzrunSlot);
      return;
    }
    if (biigctsandbyonndqqzrunSelectedSlot === biigctsandbyonndqqzrunSlot) {
      setBiigctsandbyonndqqzrunSelectedSlot(null);
      return;
    }
    biigctsandbyonndqqzrunSwapSlots(
      biigctsandbyonndqqzrunSelectedSlot,
      biigctsandbyonndqqzrunSlot,
    );
    setBiigctsandbyonndqqzrunSelectedSlot(null);
  };

  const biigctsandbyonndqqzrunMove = (
    biigctsandbyonndqqzrunFrom: number,
    biigctsandbyonndqqzrunDir: -1 | 1,
  ) => {
    if (biigctsandbyonndqqzrunChecked) {
      return;
    }
    const biigctsandbyonndqqzrunTo =
      biigctsandbyonndqqzrunFrom + biigctsandbyonndqqzrunDir;
    if (biigctsandbyonndqqzrunTo < 0 || biigctsandbyonndqqzrunTo > 3) {
      return;
    }
    biigctsandbyonndqqzrunSwapSlots(
      biigctsandbyonndqqzrunFrom,
      biigctsandbyonndqqzrunTo,
    );
    setBiigctsandbyonndqqzrunSelectedSlot(null);
  };

  const biigctsandbyonndqqzrunCheckOrder = () => {
    const biigctsandbyonndqqzrunOk = biigctsandbyonndqqzrunOrder.every(
      (biigctsandbyonndqqzrunV, biigctsandbyonndqqzrunI) =>
        biigctsandbyonndqqzrunV ===
        biigctsandbyonndqqzrunCorrect[biigctsandbyonndqqzrunI],
    );
    setBiigctsandbyonndqqzrunChecked(true);
    if (biigctsandbyonndqqzrunOk) {
      setBiigctsandbyonndqqzrunScore(s =>
        Math.min(
          biigctsandbyonndqqzPointsMax,
          s + biigctsandbyonndqqzrunPointsPerRound,
        ),
      );
      setBiigctsandbyonndqqzrunCorrectCount(c => c + 1);
    }
  };

  const biigctsandbyonndqqzrunNext = () => {
    if (!biigctsandbyonndqqzrunChecked) {
      biigctsandbyonndqqzrunCheckOrder();
      return;
    }
    if (
      biigctsandbyonndqqzrunQIndex >=
      biigctsandbyonndqqzrunSessionTotal - 1
    ) {
      setBiigctsandbyonndqqzrunPhase('results');
      return;
    }
    const biigctsandbyonndqqzrunNextIdx = biigctsandbyonndqqzrunQIndex + 1;
    const biigctsandbyonndqqzrunNextQ =
      biigctsandbyonndqqzrunSession[biigctsandbyonndqqzrunNextIdx];
    setBiigctsandbyonndqqzrunQIndex(biigctsandbyonndqqzrunNextIdx);
    setBiigctsandbyonndqqzrunOrder(
      biigctsandbyonndqqzrunShuffleOrder(
        biigctsandbyonndqqzCorrectIndices(biigctsandbyonndqqzrunNextQ),
      ),
    );
    setBiigctsandbyonndqqzrunSelectedSlot(null);
    setBiigctsandbyonndqqzrunChecked(false);
  };

  const biigctsandbyonndqqzrunFooterLabel = biigctsandbyonndqqzrunChecked
    ? biigctsandbyonndqqzrunQIndex >= biigctsandbyonndqqzrunSessionTotal - 1
      ? 'Finish'
      : 'Next'
    : 'Check Order';

  const biigctsandbyonndqqzrunProgress =
    biigctsandbyonndqqzrunPhase === 'quiz'
      ? (biigctsandbyonndqqzrunQIndex +
          (biigctsandbyonndqqzrunChecked ? 1 : 0)) /
        biigctsandbyonndqqzrunSessionTotal
      : 1;

  const biigctsandbyonndqqzrunAccuracyPct =
    biigctsandbyonndqqzrunSessionTotal > 0
      ? Math.round(
          (biigctsandbyonndqqzrunCorrectCount /
            biigctsandbyonndqqzrunSessionTotal) *
            100,
        )
      : 0;

  const biigctsandbyonndqqzrunStars = useMemo(() => {
    const biigctsandbyonndqqzrunP = biigctsandbyonndqqzrunAccuracyPct;
    if (biigctsandbyonndqqzrunP >= 90) {
      return 4;
    }
    if (biigctsandbyonndqqzrunP >= 70) {
      return 3;
    }
    if (biigctsandbyonndqqzrunP >= 45) {
      return 2;
    }
    if (biigctsandbyonndqqzrunP >= 20) {
      return 1;
    }
    return 0;
  }, [biigctsandbyonndqqzrunAccuracyPct]);

  if (biigctsandbyonndqqzrunPhase === 'results') {
    return (
      <Biigctsandbyonndlay>
        <View style={styles.biigctsandbyonndqqzrunResultsRoot}>
          <LinearGradient
            colors={['#C04040', '#1B0606']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.biigctsandbyonndqqzrunResultsCard}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                width: '100%',
              }}>
              <Text style={styles.biigctsandbyonndqqzrunResultsSprout}>🌱</Text>
              <Text style={styles.biigctsandbyonndqqzrunResultsTitle}>
                Quiz Complete!
              </Text>
              <Text style={styles.biigctsandbyonndqqzrunResultsSub}>
                Keep studying — the wild awaits!
              </Text>

              <View style={styles.biigctsandbyonndqqzrunResultsBox}>
                <Text style={styles.biigctsandbyonndqqzrunResultsScore}>
                  {biigctsandbyonndqqzrunScore}
                </Text>
                <Text style={styles.biigctsandbyonndqqzrunResultsScoreLabel}>
                  out of {biigctsandbyonndqqzPointsMax} points
                </Text>
                <View style={styles.biigctsandbyonndqqzrunResultsBarTrack}>
                  <View
                    style={[
                      styles.biigctsandbyonndqqzrunResultsBarFill,
                      {
                        width: `${Math.min(
                          100,
                          (biigctsandbyonndqqzrunScore /
                            biigctsandbyonndqqzPointsMax) *
                            100,
                        )}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.biigctsandbyonndqqzrunResultsAcc}>
                  {biigctsandbyonndqqzrunAccuracyPct}% accuracy
                </Text>
              </View>

              <View style={styles.biigctsandbyonndqqzrunStarsRow}>
                {[0, 1, 2, 3].map(i => (
                  <View
                    key={i}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFFFFF1A',
                    }}>
                    <Text
                      key={i}
                      style={[
                        styles.biigctsandbyonndqqzrunStar,
                        i < biigctsandbyonndqqzrunStars
                          ? styles.biigctsandbyonndqqzrunStarOn
                          : styles.biigctsandbyonndqqzrunStarOff,
                      ]}>
                      ★
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </LinearGradient>

          <Pressable onPress={biigctsandbyonndqqzrunGoBack}>
            <LinearGradient
              colors={['#D4621A', '#D4621ACC']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[
                styles.biigctsandbyonndqqzrunHomeOrangeBtn,
                {
                  width: '93%',
                  alignSelf: 'center',
                  marginTop: 10,
                  marginBottom: 30,
                },
              ]}>
              <Text style={styles.biigctsandbyonndqqzrunHomeOrangeBtnText}>
                Home
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </Biigctsandbyonndlay>
    );
  }

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndqqzrunQuizRoot}>
        <View style={styles.biigctsandbyonndqqzrunQuizTop}>
          <Text style={styles.biigctsandbyonndqqzrunQuizProgressLine}>
            Question {biigctsandbyonndqqzrunQIndex + 1} of{' '}
            {biigctsandbyonndqqzrunSessionTotal}
          </Text>
          <Text style={styles.biigctsandbyonndqqzrunQuizScoreText}>
            🏆 {biigctsandbyonndqqzrunScore} pts
          </Text>
        </View>

        <View style={styles.biigctsandbyonndqqzrunQuizBarTrack}>
          <View
            style={[
              styles.biigctsandbyonndqqzrunQuizBarFill,
              {
                width: `${Math.min(
                  100,
                  biigctsandbyonndqqzrunProgress * 100,
                )}%`,
              },
            ]}
          />
        </View>

        <LinearGradient
          colors={['#C04040', '#1B0606']}
          start={{x: 0, y: 0}}
          end={{x: 1.1, y: 0.9}}
          style={styles.biigctsandbyonndqqzrunPromptCard}>
          <View style={{padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 13,
                marginBottom: 8,
              }}>
              <Text style={styles.biigctsandbyonndqqzrunPromptEmoji}>
                {biigctsandbyonndqqzrunActiveQuestion.titleEmoji}
              </Text>
              <View>
                <Text style={styles.biigctsandbyonndqqzrunPromptLabel}>
                  ORDERING CHALLENGE
                </Text>
                <Text style={styles.biigctsandbyonndqqzrunPromptTitle}>
                  {biigctsandbyonndqqzrunActiveQuestion.title}
                </Text>
              </View>
            </View>
            <Text style={styles.biigctsandbyonndqqzrunPromptQ}>
              {biigctsandbyonndqqzrunActiveQuestion.question}
            </Text>
            <Text style={styles.biigctsandbyonndqqzrunPromptHint}>
              💡 Tap a card to select, then tap another to swap. Or use ↑↓
              arrows.
            </Text>
          </View>
        </LinearGradient>

        <View style={styles.biigctsandbyonndqqzrunList}>
          {biigctsandbyonndqqzrunOrder.map(
            (biigctsandbyonndqqzrunOptIdx, biigctsandbyonndqqzrunSlot) => {
              const biigctsandbyonndqqzrunOpt =
                biigctsandbyonndqqzrunActiveQuestion.options[
                  biigctsandbyonndqqzrunOptIdx
                ];
              const biigctsandbyonndqqzrunOk =
                biigctsandbyonndqqzrunChecked &&
                biigctsandbyonndqqzrunOptIdx ===
                  biigctsandbyonndqqzrunCorrect[biigctsandbyonndqqzrunSlot];
              const biigctsandbyonndqqzrunWrong =
                biigctsandbyonndqqzrunChecked && !biigctsandbyonndqqzrunOk;
              const biigctsandbyonndqqzrunSel =
                biigctsandbyonndqqzrunSelectedSlot ===
                biigctsandbyonndqqzrunSlot;

              return (
                <Pressable
                  key={`${biigctsandbyonndqqzrunActiveQuestion.id}_${biigctsandbyonndqqzrunSlot}`}
                  onPress={() =>
                    biigctsandbyonndqqzrunTapSlot(biigctsandbyonndqqzrunSlot)
                  }
                  style={[
                    styles.biigctsandbyonndqqzrunRow,
                    biigctsandbyonndqqzrunSel
                      ? styles.biigctsandbyonndqqzrunRowSelected
                      : null,
                    biigctsandbyonndqqzrunOk
                      ? styles.biigctsandbyonndqqzrunRowOk
                      : null,
                    biigctsandbyonndqqzrunWrong
                      ? styles.biigctsandbyonndqqzrunRowBad
                      : null,
                  ]}>
                  <View style={styles.biigctsandbyonndqqzrunRowLeft}>
                    <View
                      style={[
                        styles.biigctsandbyonndqqzrunNumCircle,
                        biigctsandbyonndqqzrunOk
                          ? {backgroundColor: '#4A7856'}
                          : null,
                        biigctsandbyonndqqzrunWrong
                          ? {backgroundColor: '#C04040'}
                          : null,
                      ]}>
                      <Text style={[styles.biigctsandbyonndqqzrunNumText]}>
                        {biigctsandbyonndqqzrunSlot + 1}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.biigctsandbyonndqqzrunRowText,
                        biigctsandbyonndqqzrunOk ? {color: '#7D3725'} : null,
                        biigctsandbyonndqqzrunWrong ? {color: '#7D3725'} : null,
                      ]}>
                      {biigctsandbyonndqqzrunOpt.text}
                    </Text>
                  </View>
                  <View style={styles.biigctsandbyonndqqzrunRowRight}>
                    {biigctsandbyonndqqzrunChecked ? (
                      <Image
                        source={
                          biigctsandbyonndqqzrunOk
                            ? require('../../assets/i/biigctsandbcok.png')
                            : require('../../assets/i/biigctsandbcfbad.png')
                        }
                      />
                    ) : (
                      <View style={styles.biigctsandbyonndqqzrunArrows}>
                        <Pressable
                          hitSlop={6}
                          onPress={() =>
                            biigctsandbyonndqqzrunMove(
                              biigctsandbyonndqqzrunSlot,
                              -1,
                            )
                          }
                          style={styles.biigctsandbyonndqqzrunArrowBtn}>
                          <Image
                            source={require('../../assets/i/biigctsandbcfznup.png')}
                          />
                        </Pressable>
                        <Pressable
                          hitSlop={6}
                          onPress={() =>
                            biigctsandbyonndqqzrunMove(
                              biigctsandbyonndqqzrunSlot,
                              1,
                            )
                          }
                          style={styles.biigctsandbyonndqqzrunArrowBtn}>
                          <Image
                            source={require('../../assets/i/biigctsandbcfznetdown.png')}
                          />
                        </Pressable>
                      </View>
                    )}
                  </View>
                </Pressable>
              );
            },
          )}
        </View>

        <View style={styles.biigctsandbyonndqqzrunFooter}>
          <Pressable
            onPress={biigctsandbyonndqqzrunNext}
            style={styles.biigctsandbyonndqqzrunFooterBtnWrap}>
            <LinearGradient
              colors={['#FF8A00', '#FF5A00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.biigctsandbyonndqqzrunFooterBtn}>
              <Text style={styles.biigctsandbyonndqqzrunFooterBtnText}>
                {biigctsandbyonndqqzrunFooterLabel}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndqqzrun;

const styles = StyleSheet.create({
  biigctsandbyonndqqzrunRowSelected: {
    borderColor: '#FF8A00',
    borderWidth: 2,
  },
  biigctsandbyonndqqzrunRowOk: {
    backgroundColor: '#D4F0DC',
    borderColor: '#4A7856',
  },
  biigctsandbyonndqqzrunRowBad: {
    backgroundColor: '#F5D8D8',
    borderColor: '#C04040',
  },

  biigctsandbyonndqqzrunRowLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingRight: 8,
  },

  biigctsandbyonndqqzrunQuizRoot: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 24,
  },
  biigctsandbyonndqqzrunQuizTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  biigctsandbyonndqqzrunClose: {
    color: '#FFFFFFCC',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
  biigctsandbyonndqqzrunQuizProgressLine: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
  },
  biigctsandbyonndqqzrunQuizScoreText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
  },
  biigctsandbyonndqqzrunQuizBarTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F2DDB0',
    overflow: 'hidden',
    marginBottom: 12,
  },
  biigctsandbyonndqqzrunQuizBarFill: {
    height: '100%',
    backgroundColor: '#D4621A',
    borderRadius: 3,
  },
  biigctsandbyonndqqzrunPromptCard: {
    borderRadius: 24,
    marginTop: 12,
    marginBottom: 12,
  },
  biigctsandbyonndqqzrunPromptEmoji: {
    fontSize: 28,
  },
  biigctsandbyonndqqzrunPromptLabel: {
    color: '#FFD36A',
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 1.2,
    marginBottom: 3,
  },
  biigctsandbyonndqqzrunPromptTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    width: '90%',
  },
  biigctsandbyonndqqzrunPromptQ: {
    color: '#FFFFFFE6',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  biigctsandbyonndqqzrunPromptHint: {
    color: '#FFFFFF99',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  biigctsandbyonndqqzrunList: {
    flex: 1,
    gap: 8,
  },
  biigctsandbyonndqqzrunRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2A1313CC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    paddingVertical: 10,
    paddingHorizontal: 10,
    minHeight: 78,
  },

  biigctsandbyonndqqzrunNumCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6A00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunNumText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 13,
  },
  biigctsandbyonndqqzrunRowText: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
    lineHeight: 18,
  },
  biigctsandbyonndqqzrunRowRight: {
    width: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunMarkOk: {
    color: '#66BB6A',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  biigctsandbyonndqqzrunMarkBad: {
    color: '#EF5350',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  biigctsandbyonndqqzrunArrows: {
    gap: 6,
  },
  biigctsandbyonndqqzrunArrowBtn: {
    width: 24,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#D4621A18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunArrowTxt: {
    color: '#FF8A00',
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
  },
  biigctsandbyonndqqzrunFooter: {
    paddingVertical: 14,
    paddingBottom: 28,
  },
  biigctsandbyonndqqzrunFooterBtnWrap: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  biigctsandbyonndqqzrunFooterBtn: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunFooterBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    lineHeight: 24,
  },

  biigctsandbyonndqqzrunResultsRoot: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 59,
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunResultsCard: {
    borderRadius: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF18',
    alignItems: 'center',
    width: '93%',
    alignSelf: 'center',
  },
  biigctsandbyonndqqzrunResultsSprout: {
    fontSize: 42,
    marginBottom: 20,
  },
  biigctsandbyonndqqzrunResultsTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 26,
    marginBottom: 8,
    textAlign: 'center',
  },
  biigctsandbyonndqqzrunResultsSub: {
    color: '#FFFFFFB3',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 16,
  },
  biigctsandbyonndqqzrunResultsBox: {
    width: '100%',
    backgroundColor: '#FFFFFF14',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 14,
  },
  biigctsandbyonndqqzrunResultsScore: {
    color: '#E8A82E',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 44,
  },
  biigctsandbyonndqqzrunResultsScoreLabel: {
    color: '#FFFFFF99',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    marginBottom: 12,
  },
  biigctsandbyonndqqzrunResultsBarTrack: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF22',
    overflow: 'hidden',
    marginBottom: 10,
  },
  biigctsandbyonndqqzrunResultsBarFill: {
    height: '100%',
    backgroundColor: '#E8A82E',
    borderRadius: 4,
  },
  biigctsandbyonndqqzrunResultsAcc: {
    color: '#E8A82E',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonndqqzrunStarsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  biigctsandbyonndqqzrunStar: {
    fontSize: 20,
  },
  biigctsandbyonndqqzrunStarOn: {
    color: '#E8A82E',
  },
  biigctsandbyonndqqzrunStarOff: {
    color: '#FFFFFF33',
  },
  biigctsandbyonndqqzrunHomeOrangeBtn: {
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndqqzrunHomeOrangeBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});
