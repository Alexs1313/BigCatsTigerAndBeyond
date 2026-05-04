import {biigctsandbyonnddrwStorAppend} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwstor';
import {useStore} from '../Biigctsandbyonndstrg/Biigctsandbyonndcntxt';

import Orientation from 'react-native-orientation-locker';

import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';
import BiigctsandbyonnddrwCnvs, {
  biigctsandbyonnddrwScaleStrokes,
} from '../Biigctsandbyonndcpnt/Biigctsandbyonnddrwcnvs';
import {
  biigctsandbyonnddrwPromptLine,
  biigctsandbyonnddrwPromptTitles,
  biigctsandbyonnddrwRandomTitle,
} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwprompts';

import type {
  BiigctsandbyonnddrwSavedSketch,
  BiigctsandbyonnddrwStroke,
} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwstor';

const biigctsandbyonnddrwColors = [
  '#FFFFFF',
  '#FFD54F',
  '#4DD0E1',
  '#F48FB1',
  '#81C784',
  '#FF9800',
  '#BA68C8',
  '#3949AB',
] as const;

const biigctsandbyonnddrwBrushSizes = [4, 8, 14] as const;

const biigctsandbyonnddrwHasInk = (strokes: BiigctsandbyonnddrwStroke[]) =>
  strokes.some(s => s.points.length >= 2);

const Biigctsandbyonnddrw = () => {
  const biigctsandbyonnddrwNavigation = useNavigation();
  const biigctsandbyonnddrwInsets = useSafeAreaInsets();
  const {biigctsandbyonndNotifs} = useStore();

  const [biigctsandbyonnddrwTitle, setBiigctsandbyonnddrwTitle] = useState(() =>
    biigctsandbyonnddrwRandomTitle(),
  );
  const biigctsandbyonnddrwPrompt = useMemo(
    () => biigctsandbyonnddrwPromptLine(biigctsandbyonnddrwTitle),
    [biigctsandbyonnddrwTitle],
  );

  const [biigctsandbyonnddrwMine, setBiigctsandbyonnddrwMine] = useState<
    BiigctsandbyonnddrwStroke[]
  >([]);
  const [biigctsandbyonnddrwPartner, setBiigctsandbyonnddrwPartner] = useState<
    BiigctsandbyonnddrwStroke[]
  >([]);
  const [biigctsandbyonnddrwTab, setBiigctsandbyonnddrwTab] = useState<
    'mine' | 'partner'
  >('mine');
  const [biigctsandbyonnddrwColorIdx, setBiigctsandbyonnddrwColorIdx] =
    useState(7);
  const [biigctsandbyonnddrwSizeIdx, setBiigctsandbyonnddrwSizeIdx] =
    useState(1);
  const [biigctsandbyonnddrwErase, setBiigctsandbyonnddrwErase] =
    useState(false);
  const [biigctsandbyonnddrwCompare, setBiigctsandbyonnddrwCompare] =
    useState(false);
  const [biigctsandbyonnddrwCanvas, setBiigctsandbyonnddrwCanvas] = useState({
    w: 0,
    h: 0,
  });

  const biigctsandbyonnddrwStrokes =
    biigctsandbyonnddrwTab === 'mine'
      ? biigctsandbyonnddrwMine
      : biigctsandbyonnddrwPartner;

  const biigctsandbyonnddrwSetStrokes = useCallback(
    (fn: (p: BiigctsandbyonnddrwStroke[]) => BiigctsandbyonnddrwStroke[]) => {
      if (biigctsandbyonnddrwTab === 'mine') {
        setBiigctsandbyonnddrwMine(fn);
      } else {
        setBiigctsandbyonnddrwPartner(fn);
      }
    },
    [biigctsandbyonnddrwTab],
  );

  const biigctsandbyonnddrwCommit = useCallback(
    (s: BiigctsandbyonnddrwStroke) => {
      biigctsandbyonnddrwSetStrokes(prev => [...prev, s]);
    },
    [biigctsandbyonnddrwSetStrokes],
  );

  const biigctsandbyonnddrwStrokeColor =
    biigctsandbyonnddrwColors[biigctsandbyonnddrwColorIdx] ?? '#3949AB';
  const biigctsandbyonnddrwStrokeWidth =
    biigctsandbyonnddrwBrushSizes[biigctsandbyonnddrwSizeIdx] ?? 8;

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const biigctsandbyonnddrwOpenGalry = () => {
    (biigctsandbyonnddrwNavigation as {navigate: (n: string) => void}).navigate(
      'Biigctsandbyonnddrwgalry',
    );
  };

  const biigctsandbyonnddrwNewPrompt = useCallback(() => {
    let biigctsandbyonnddrwN = biigctsandbyonnddrwRandomTitle();
    let biigctsandbyonnddrwGuard = 0;
    while (
      biigctsandbyonnddrwN === biigctsandbyonnddrwTitle &&
      biigctsandbyonnddrwPromptTitles.length > 1 &&
      biigctsandbyonnddrwGuard++ < 24
    ) {
      biigctsandbyonnddrwN = biigctsandbyonnddrwRandomTitle();
    }
    setBiigctsandbyonnddrwTitle(biigctsandbyonnddrwN);
    setBiigctsandbyonnddrwMine([]);
    setBiigctsandbyonnddrwPartner([]);
    setBiigctsandbyonnddrwCompare(false);
  }, [biigctsandbyonnddrwTitle]);

  const biigctsandbyonnddrwClear = () => {
    biigctsandbyonnddrwSetStrokes(() => []);
  };

  const biigctsandbyonnddrwSaveGalry = async () => {
    const cw =
      biigctsandbyonnddrwCanvas.w > 0 ? biigctsandbyonnddrwCanvas.w : 300;
    const ch =
      biigctsandbyonnddrwCanvas.h > 0 ? biigctsandbyonnddrwCanvas.h : 280;
    const biigctsandbyonnddrwNow = Date.now();
    const biigctsandbyonnddrwOut: BiigctsandbyonnddrwSavedSketch[] = [];
    if (biigctsandbyonnddrwHasInk(biigctsandbyonnddrwMine)) {
      biigctsandbyonnddrwOut.push({
        id: `m_${biigctsandbyonnddrwNow}_${Math.random()
          .toString(36)
          .slice(2, 7)}`,
        promptLine: biigctsandbyonnddrwPrompt,
        side: 'mine',
        createdAt: biigctsandbyonnddrwNow,
        canvasW: cw,
        canvasH: ch,
        strokes: biigctsandbyonnddrwMine,
      });
    }
    if (biigctsandbyonnddrwHasInk(biigctsandbyonnddrwPartner)) {
      biigctsandbyonnddrwOut.push({
        id: `p_${biigctsandbyonnddrwNow}_${Math.random()
          .toString(36)
          .slice(2, 7)}`,
        promptLine: biigctsandbyonnddrwPrompt,
        side: 'partner',
        createdAt: biigctsandbyonnddrwNow,
        canvasW: cw,
        canvasH: ch,
        strokes: biigctsandbyonnddrwPartner,
      });
    }
    if (biigctsandbyonnddrwOut.length === 0) {
      Alert.alert('Nothing to save', 'Draw something on one or both canvases.');
      return;
    }
    await biigctsandbyonnddrwStorAppend(biigctsandbyonnddrwOut);
    if (biigctsandbyonndNotifs) {
      Toast.show({
        type: 'success',
        text1: 'Sketches were added to your gallery.',
      });
    } else {
      Alert.alert('Saved', 'Sketches were added to your gallery.');
    }
    setBiigctsandbyonnddrwCompare(false);
  };

  const biigctsandbyonnddrwPreview = (
    strokes: BiigctsandbyonnddrwStroke[],
    tw: number,
    th: number,
  ) => {
    const cw =
      biigctsandbyonnddrwCanvas.w > 0 ? biigctsandbyonnddrwCanvas.w : 1;
    const ch =
      biigctsandbyonnddrwCanvas.h > 0 ? biigctsandbyonnddrwCanvas.h : 1;
    return biigctsandbyonnddrwScaleStrokes(strokes, tw / cw, th / ch);
  };

  return (
    <Biigctsandbyonndlay biigctsandbyonndlayScroll={false} bounce={false}>
      <View
        style={[
          styles.biigctsandbyonnddrwPage,
          {paddingTop: biigctsandbyonnddrwInsets.top + 10},
        ]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.biigctsandbyonnddrwScrollTop}
          contentContainerStyle={styles.biigctsandbyonnddrwScrollTopIn}>
          <View style={styles.biigctsandbyonnddrwTopRow}>
            <View style={styles.biigctsandbyonnddrwTopRowText}>
              <Text style={styles.biigctsandbyonnddrwOver}>
                CREATIVE CHALLENGE
              </Text>
              <Text style={styles.biigctsandbyonnddrwScreenTitle}>
                Draw with a Friend
              </Text>
            </View>
            <Pressable
              onPress={biigctsandbyonnddrwOpenGalry}
              style={styles.biigctsandbyonnddrwGalryBtn}>
              <Image source={require('../../assets/i/biigctsandbgall.png')} />
              <Text style={styles.biigctsandbyonnddrwGalryTxt}>Gallery</Text>
            </Pressable>
          </View>

          <LinearGradient
            colors={['#C04040', '#1B0606']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.biigctsandbyonnddrwChallenge}>
            <View
              style={{
                padding: 12,
                borderRadius: 16,
                backgroundColor: '#FFFFFF1A',
              }}>
              <View style={styles.biigctsandbyonnddrwChallengeTop}>
                <Text style={styles.biigctsandbyonnddrwChallengeLabel}>
                  🎨 CURRENT CHALLENGE
                </Text>
                <Pressable
                  onPress={biigctsandbyonnddrwNewPrompt}
                  style={styles.biigctsandbyonnddrwNewChip}>
                  <Image
                    source={require('../../assets/i/biigctsandbrel.png')}
                  />
                  <Text style={styles.biigctsandbyonnddrwNewChipTxt}>New</Text>
                </Pressable>
              </View>
              <Text style={styles.biigctsandbyonnddrwChallengeText}>
                {biigctsandbyonnddrwPrompt}
              </Text>
            </View>
          </LinearGradient>

          <View style={styles.biigctsandbyonnddrwSeg}>
            <Pressable
              onPress={() => setBiigctsandbyonnddrwTab('mine')}
              style={[
                styles.biigctsandbyonnddrwSegBtn,
                biigctsandbyonnddrwTab === 'mine' &&
                  styles.biigctsandbyonnddrwSegOn,
              ]}>
              <Text style={styles.biigctsandbyonnddrwSegIcon}>👤</Text>
              <Text
                style={[
                  styles.biigctsandbyonnddrwSegTxt,
                  biigctsandbyonnddrwTab === 'mine' &&
                    styles.biigctsandbyonnddrwSegTxtOn,
                ]}>
                Mine
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setBiigctsandbyonnddrwTab('partner')}
              style={[
                styles.biigctsandbyonnddrwSegBtn,
                biigctsandbyonnddrwTab === 'partner' &&
                  styles.biigctsandbyonnddrwSegOn,
              ]}>
              <Text style={styles.biigctsandbyonnddrwSegIcon}>🤝</Text>
              <Text
                style={[
                  styles.biigctsandbyonnddrwSegTxt,
                  biigctsandbyonnddrwTab === 'partner' &&
                    styles.biigctsandbyonnddrwSegTxtOn,
                ]}>
                Partner
              </Text>
            </Pressable>
          </View>
        </ScrollView>

        <View
          style={styles.biigctsandbyonnddrwCanvasWrap}
          onLayout={e => {
            const {width, height} = e.nativeEvent.layout;
            setBiigctsandbyonnddrwCanvas({w: width, h: height});
          }}>
          <BiigctsandbyonnddrwCnvs
            strokes={biigctsandbyonnddrwStrokes}
            strokeColor={biigctsandbyonnddrwStrokeColor}
            strokeWidth={biigctsandbyonnddrwStrokeWidth}
            isErase={biigctsandbyonnddrwErase}
            onCommitStroke={biigctsandbyonnddrwCommit}
            rootStyle={styles.biigctsandbyonnddrwCnvsRoot}
          />
        </View>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.biigctsandbyonnddrwScrollBot}
          contentContainerStyle={styles.biigctsandbyonnddrwScrollBotIn}>
          <View
            style={{
              backgroundColor: '#1F0D0D',
              padding: 12,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#FFFFFF1C',
              marginBottom: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                marginBottom: 12,
              }}>
              <Text style={styles.biigctsandbyonnddrwToolLabel}>COLOR</Text>
              <View style={styles.biigctsandbyonnddrwColorRow}>
                {biigctsandbyonnddrwColors.map((c, i) => (
                  <Pressable
                    key={c}
                    onPress={() => {
                      setBiigctsandbyonnddrwColorIdx(i);
                      setBiigctsandbyonnddrwErase(false);
                    }}
                    style={[
                      styles.biigctsandbyonnddrwSwatch,
                      {backgroundColor: c},
                      biigctsandbyonnddrwColorIdx === i &&
                        !biigctsandbyonnddrwErase &&
                        styles.biigctsandbyonnddrwSwatchOn,
                    ]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.biigctsandbyonnddrwRow2}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  marginTop: 8,
                }}>
                <Text style={styles.biigctsandbyonnddrwToolLabel}>SIZE</Text>
                <View style={styles.biigctsandbyonnddrwSizeRow}>
                  {(['S', 'M', 'L'] as const).map((lbl, i) => (
                    <Pressable
                      key={lbl}
                      onPress={() => setBiigctsandbyonnddrwSizeIdx(i)}
                      style={[
                        styles.biigctsandbyonnddrwSizeBtn,
                        biigctsandbyonnddrwSizeIdx === i &&
                          styles.biigctsandbyonnddrwSizeOn,
                      ]}>
                      <Text
                        style={[
                          styles.biigctsandbyonnddrwSizeTxt,
                          biigctsandbyonnddrwSizeIdx === i &&
                            styles.biigctsandbyonnddrwSizeTxtOn,
                        ]}>
                        {lbl}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
              <Pressable
                onPress={() => setBiigctsandbyonnddrwErase(e => !e)}
                style={[
                  styles.biigctsandbyonnddrwEraseBtn,
                  biigctsandbyonnddrwErase && styles.biigctsandbyonnddrwEraseOn,
                ]}>
                <Image source={require('../../assets/i/biigctsandberas.png')} />
                <Text style={styles.biigctsandbyonnddrwEraseTxt}>Erase</Text>
              </Pressable>
              <Pressable
                onPress={biigctsandbyonnddrwClear}
                style={styles.biigctsandbyonnddrwClearBtn}>
                <Image source={require('../../assets/i/biigctsandbrel.png')} />
                <Text style={styles.biigctsandbyonnddrwClearTxt}>Clear</Text>
              </Pressable>
            </View>
          </View>

          <Pressable onPress={() => setBiigctsandbyonnddrwCompare(true)}>
            <LinearGradient
              colors={['#E86A1A', '#C44A10']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.biigctsandbyonnddrwReveal}>
              <Text style={styles.biigctsandbyonnddrwRevealTxt}>
                ✨ Reveal & Compare Drawings
              </Text>
            </LinearGradient>
          </Pressable>

          <View style={styles.biigctsandbyonnddrwBottomSpacer} />
        </ScrollView>
      </View>

      <Modal
        visible={biigctsandbyonnddrwCompare}
        transparent
        animationType="fade"
        onRequestClose={() => setBiigctsandbyonnddrwCompare(false)}>
        <View style={styles.biigctsandbyonnddrwModalRoot}>
          <Pressable
            style={styles.biigctsandbyonnddrwModalDim}
            onPress={() => setBiigctsandbyonnddrwCompare(false)}
          />
          <View
            style={[
              styles.biigctsandbyonnddrwModalSheet,
              {paddingBottom: biigctsandbyonnddrwInsets.bottom + 22},
            ]}>
            <View style={styles.biigctsandbyonnddrwModalGrab} />
            <Pressable
              style={styles.biigctsandbyonnddrwModalX}
              onPress={() => setBiigctsandbyonnddrwCompare(false)}>
              <Image source={require('../../assets/i/biigctsandbcls.png')} />
            </Pressable>
            <Text style={styles.biigctsandbyonnddrwModalTitle}>
              {biigctsandbyonnddrwPrompt}
            </Text>
            <Text style={styles.biigctsandbyonnddrwModalSub}>
              See how you both interpreted it!
            </Text>

            <View style={styles.biigctsandbyonnddrwModalPair}>
              <View style={styles.biigctsandbyonnddrwModalPane}>
                <Text style={styles.biigctsandbyonnddrwModalPaneLbl}>
                  Your Drawing
                </Text>
                <View style={styles.biigctsandbyonnddrwModalMini}>
                  <BiigctsandbyonnddrwCnvs
                    readOnly
                    rootStyle={styles.biigctsandbyonnddrwModalCnvs}
                    strokes={biigctsandbyonnddrwPreview(
                      biigctsandbyonnddrwMine,
                      160,
                      160,
                    )}
                    strokeColor="#2C2416"
                    strokeWidth={2}
                    isErase={false}
                  />
                </View>
              </View>
              <View style={styles.biigctsandbyonnddrwModalPane}>
                <Text style={styles.biigctsandbyonnddrwModalPaneLbl}>
                  {'Partner\u2019s Drawing'}
                </Text>
                <View style={styles.biigctsandbyonnddrwModalMini}>
                  <BiigctsandbyonnddrwCnvs
                    readOnly
                    rootStyle={styles.biigctsandbyonnddrwModalCnvs}
                    strokes={biigctsandbyonnddrwPreview(
                      biigctsandbyonnddrwPartner,
                      160,
                      160,
                    )}
                    strokeColor="#2C2416"
                    strokeWidth={2}
                    isErase={false}
                  />
                </View>
              </View>
            </View>

            <View style={styles.biigctsandbyonnddrwModalRowBtns}>
              <Pressable
                onPress={() => setBiigctsandbyonnddrwCompare(false)}
                style={styles.biigctsandbyonnddrwModalKeep}>
                <Text style={styles.biigctsandbyonnddrwModalKeepTxt}>
                  Keep Drawing
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  biigctsandbyonnddrwSaveGalry().catch(() => {});
                }}
                style={styles.biigctsandbyonnddrwModalSave}>
                <Image
                  source={require('../../assets/i/biigctsandbemsav.png')}
                />
                <Text style={styles.biigctsandbyonnddrwModalSaveTxt}>
                  Save to Gallery
                </Text>
              </Pressable>
            </View>

            <Pressable onPress={biigctsandbyonnddrwNewPrompt}>
              <LinearGradient
                colors={['#D4621A', '#D4621ACC']}
                style={styles.biigctsandbyonnddrwModalNew}>
                <Text style={styles.biigctsandbyonnddrwModalNewTxt}>
                  New Prompt ✨
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonnddrw;

const styles = StyleSheet.create({
  biigctsandbyonnddrwChallengeText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
    lineHeight: 26,
  },
  biigctsandbyonnddrwSeg: {
    flexDirection: 'row',
    backgroundColor: '#2A1816',
    borderRadius: 16,
    padding: 4,
    marginBottom: 12,
    gap: 6,
  },

  biigctsandbyonnddrwPage: {
    flex: 1,
    paddingHorizontal: 16,
  },
  biigctsandbyonnddrwTopRowText: {
    flex: 1,
  },
  biigctsandbyonnddrwCnvsRoot: {
    flex: 1,
    borderRadius: 18,
  },
  biigctsandbyonnddrwModalCnvs: {
    flex: 1,
  },

  biigctsandbyonnddrwScrollTop: {
    flexGrow: 0,
    flexShrink: 1,
    maxHeight: 320,
  },
  biigctsandbyonnddrwScrollTopIn: {
    paddingBottom: 4,
  },
  biigctsandbyonnddrwScrollBot: {
    flexGrow: 0,
    flexShrink: 1,
  },
  biigctsandbyonnddrwScrollBotIn: {
    paddingBottom: 100,
  },
  biigctsandbyonnddrwTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 12,
  },
  biigctsandbyonnddrwOver: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    letterSpacing: 1.1,
    marginBottom: 2,
  },
  biigctsandbyonnddrwScreenTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 26,
  },
  biigctsandbyonnddrwGalryBtn: {
    backgroundColor: '#F5F3F3',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  biigctsandbyonnddrwGalryIcon: {
    fontSize: 14,
  },
  biigctsandbyonnddrwGalryTxt: {
    color: '#4A3028',
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
  },
  biigctsandbyonnddrwChallenge: {
    borderRadius: 20,

    marginBottom: 14,
  },
  biigctsandbyonnddrwChallengeTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  biigctsandbyonnddrwChallengeLabel: {
    color: '#E8A82E',
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 0.8,
    flex: 1,
  },
  biigctsandbyonnddrwNewChip: {
    backgroundColor: '#E8A82E33',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  biigctsandbyonnddrwNewChipTxt: {
    color: '#FFE8C8',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
  },

  biigctsandbyonnddrwSegBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 14,
    gap: 6,
  },
  biigctsandbyonnddrwSegOn: {
    backgroundColor: '#D4621A',
  },
  biigctsandbyonnddrwSegIcon: {
    fontSize: 14,
  },
  biigctsandbyonnddrwSegTxt: {
    color: '#E8B565',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonnddrwSegTxtOn: {
    color: '#FFFFFF',
  },
  biigctsandbyonnddrwCanvasWrap: {
    flex: 1,
    minHeight: 220,
    marginBottom: 12,
  },
  biigctsandbyonnddrwToolLabel: {
    color: '#E8B565',
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 0.9,
  },
  biigctsandbyonnddrwColorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  biigctsandbyonnddrwSwatch: {
    width: 22,
    height: 22,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFFFFF22',
  },
  biigctsandbyonnddrwSwatchOn: {
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  biigctsandbyonnddrwRow2: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: 10,
  },
  biigctsandbyonnddrwSizeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  biigctsandbyonnddrwSizeBtn: {
    width: 32,
    height: 32,
    borderRadius: 14,
    backgroundColor: '#FFFFFF12',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#7D3725',
  },
  biigctsandbyonnddrwSizeOn: {
    backgroundColor: '#E86A1A',
    borderColor: '#E86A1A',
  },
  biigctsandbyonnddrwSizeTxt: {
    color: '#E8B565',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonnddrwSizeTxtOn: {
    color: '#FFFFFF',
  },
  biigctsandbyonnddrwEraseBtn: {
    paddingHorizontal: 14,
    minHeight: 32,
    borderRadius: 14,
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  biigctsandbyonnddrwEraseOn: {
    backgroundColor: '#5C3A28',
  },
  biigctsandbyonnddrwEraseTxt: {
    color: '#F0E0C8',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
  },
  biigctsandbyonnddrwClearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    minHeight: 32,
    borderRadius: 14,
    backgroundColor: '#F5D4D4',
  },
  biigctsandbyonnddrwClearTxt: {
    color: '#6B2A2A',
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
  },
  biigctsandbyonnddrwReveal: {
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwRevealTxt: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  biigctsandbyonnddrwBottomSpacer: {
    height: 8,
  },
  biigctsandbyonnddrwModalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  biigctsandbyonnddrwModalDim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000088',
  },
  biigctsandbyonnddrwModalSheet: {
    backgroundColor: '#241A18',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 28,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  biigctsandbyonnddrwModalGrab: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF22',
    marginBottom: 8,
  },
  biigctsandbyonnddrwModalX: {
    position: 'absolute',
    right: 14,
    top: 14,
    width: 32,
    height: 32,
    borderRadius: 14,
    backgroundColor: '#FFFFFF33',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  biigctsandbyonnddrwModalXT: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  biigctsandbyonnddrwModalTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 6,
    textAlign: 'center',
    marginTop: 8,
  },
  biigctsandbyonnddrwModalSub: {
    color: '#C4A990',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  biigctsandbyonnddrwModalPair: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  biigctsandbyonnddrwModalPane: {
    flex: 1,
  },
  biigctsandbyonnddrwModalPaneLbl: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  biigctsandbyonnddrwModalMini: {
    height: 160,
    borderRadius: 14,
    overflow: 'hidden',
  },
  biigctsandbyonnddrwModalRowBtns: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  biigctsandbyonnddrwModalKeep: {
    flex: 1,
    backgroundColor: '#D4621A22',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
  },
  biigctsandbyonnddrwModalKeepTxt: {
    color: '#F0E0C8',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonnddrwModalSave: {
    flex: 1,
    backgroundColor: '#34C759',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',

    flexDirection: 'row',

    gap: 6,
    justifyContent: 'center',
  },
  biigctsandbyonnddrwModalSaveTxt: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonnddrwModalNew: {
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwModalNewTxt: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});
