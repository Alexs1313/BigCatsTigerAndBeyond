import BiigctsandbyonnddrwCnvs, {
  biigctsandbyonnddrwScaleStrokes,
} from '../Biigctsandbyonndcpnt/Biigctsandbyonnddrwcnvs';

import type {BiigctsandbyonnddrwSavedSketch} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwstor';
import {
  biigctsandbyonnddrwStorLoad,
  biigctsandbyonnddrwStorSave,
} from '../Biigctsandbyonnddata/Biigctsandbyonnddrwstor';
import {useStore} from '../Biigctsandbyonndstrg/Biigctsandbyonndcntxt';

import React, {useCallback, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';
import Orientation from 'react-native-orientation-locker';

const Biigctsandbyonnddrwgalry = () => {
  const biigctsandbyonnddrwgalryNavigation = useNavigation();
  const biigctsandbyonnddrwgalryInsets = useSafeAreaInsets();
  const [biigctsandbyonnddrwgalryList, setBiigctsandbyonnddrwgalryList] =
    useState<BiigctsandbyonnddrwSavedSketch[]>([]);
  const [biigctsandbyonnddrwgalryView, setBiigctsandbyonnddrwgalryView] =
    useState<BiigctsandbyonnddrwSavedSketch | null>(null);

  const biigctsandbyonnddrwgalryReload = useCallback(async () => {
    const biigctsandbyonnddrwgalryRows = await biigctsandbyonnddrwStorLoad();
    setBiigctsandbyonnddrwgalryList(biigctsandbyonnddrwgalryRows);
  }, []);
  const {biigctsandbyonndNotifs} = useStore();

  useFocusEffect(
    useCallback(() => {
      void biigctsandbyonnddrwgalryReload();
    }, [biigctsandbyonnddrwgalryReload]),
  );

  const biigctsandbyonnddrwgalryDelete = (id: string) => {
    Alert.alert('Delete sketch?', 'This cannot be undone.', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const biigctsandbyonnddrwgalryNext =
            biigctsandbyonnddrwgalryList.filter(r => r.id !== id);
          setBiigctsandbyonnddrwgalryList(biigctsandbyonnddrwgalryNext);
          await biigctsandbyonnddrwStorSave(biigctsandbyonnddrwgalryNext);
          setBiigctsandbyonnddrwgalryView(cur => (cur?.id === id ? null : cur));
          if (biigctsandbyonndNotifs) {
            Toast.show({
              type: 'success',
              text2: 'Sketch deleted successfully.',
            });
          }
        },
      },
    ]);
  };

  const biigctsandbyonnddrwgalryDate = (t: number) => {
    const biigctsandbyonnddrwgalryD = new Date(t);
    return biigctsandbyonnddrwgalryD.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const biigctsandbyonnddrwgalryThumb = (
    row: BiigctsandbyonnddrwSavedSketch,
  ) => {
    const cw = row.canvasW != null && row.canvasW > 0 ? row.canvasW : 300;
    const ch = row.canvasH != null && row.canvasH > 0 ? row.canvasH : 280;
    return biigctsandbyonnddrwScaleStrokes(row.strokes, 70 / cw, 70 / ch);
  };

  const biigctsandbyonnddrwgalryPreviewScaled = (
    row: BiigctsandbyonnddrwSavedSketch,
    tw: number,
    th: number,
  ) => {
    const cw = row.canvasW != null && row.canvasW > 0 ? row.canvasW : 300;
    const ch = row.canvasH != null && row.canvasH > 0 ? row.canvasH : 280;
    return biigctsandbyonnddrwScaleStrokes(row.strokes, tw / cw, th / ch);
  };

  return (
    <Biigctsandbyonndlay>
      <View
        style={[
          styles.biigctsandbyonnddrwgalryRoot,
          {paddingTop: biigctsandbyonnddrwgalryInsets.top + 12},
        ]}>
        <View style={styles.biigctsandbyonnddrwgalryHeader}>
          <Pressable
            hitSlop={12}
            onPress={() =>
              (
                biigctsandbyonnddrwgalryNavigation as {goBack: () => void}
              ).goBack()
            }
            style={styles.biigctsandbyonnddrwgalryBack}>
            <Image source={require('../../assets/i/biigctsandbyobck.png')} />
          </Pressable>
          <View style={styles.biigctsandbyonnddrwgalryHeaderText}>
            <Text style={styles.biigctsandbyonnddrwgalryOver}>GALLERY</Text>
            <Text style={styles.biigctsandbyonnddrwgalryTitle}>
              Saved Sketches
            </Text>
          </View>
        </View>

        {biigctsandbyonnddrwgalryList.length === 0 ? (
          <View style={styles.biigctsandbyonnddrwgalryEmpty}>
            <View style={styles.biigctsandbyonnddrwgalryEmptyIcon}>
              <Image source={require('../../assets/i/biigctsandbemptsk.png')} />
            </View>
            <Text style={styles.biigctsandbyonnddrwgalryEmptyTitle}>
              No sketches yet
            </Text>
            <Text style={styles.biigctsandbyonnddrwgalryEmptySub}>
              Start your first big cat drawing challenge.
            </Text>
            <Pressable
              onPress={() =>
                (
                  biigctsandbyonnddrwgalryNavigation as {goBack: () => void}
                ).goBack()
              }>
              <LinearGradient
                colors={['#E8A82E', '#D4621A']}
                style={styles.biigctsandbyonnddrwgalryCta}>
                <Text style={styles.biigctsandbyonnddrwgalryCtaTxt}>
                  + Start Drawing
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        ) : (
          <FlatList
            data={biigctsandbyonnddrwgalryList}
            keyExtractor={it => it.id}
            scrollEnabled={false}
            contentContainerStyle={styles.biigctsandbyonnddrwgalryListPad}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.biigctsandbyonnddrwgalryCard}>
                <View style={styles.biigctsandbyonnddrwgalryThumbWrap}>
                  <BiigctsandbyonnddrwCnvs
                    readOnly
                    rootStyle={styles.biigctsandbyonnddrwgalryThumbCnvs}
                    strokes={biigctsandbyonnddrwgalryThumb(item)}
                    strokeColor="#2C2416"
                    strokeWidth={2}
                    isErase={false}
                  />
                </View>
                <View style={styles.biigctsandbyonnddrwgalryCardMid}>
                  <Text style={styles.biigctsandbyonnddrwgalryCardTitle}>
                    {item.promptLine}
                  </Text>
                  <Text
                    style={[
                      styles.biigctsandbyonnddrwgalryCardSide,
                      item.side === 'partner'
                        ? styles.biigctsandbyonnddrwgalrySidePartner
                        : styles.biigctsandbyonnddrwgalrySideMine,
                    ]}>
                    {item.side === 'partner'
                      ? 'Partner Drawing'
                      : 'Your Drawing'}
                  </Text>
                  <Text style={styles.biigctsandbyonnddrwgalryCardDate}>
                    {biigctsandbyonnddrwgalryDate(item.createdAt)}
                  </Text>
                </View>
                <View style={styles.biigctsandbyonnddrwgalryCardActions}>
                  <Pressable
                    onPress={() => setBiigctsandbyonnddrwgalryView(item)}
                    style={styles.biigctsandbyonnddrwgalryActEye}>
                    <Image
                      source={require('../../assets/i/biigctsandbwatc.png')}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => biigctsandbyonnddrwgalryDelete(item.id)}
                    style={styles.biigctsandbyonnddrwgalryActDel}>
                    <Image
                      source={require('../../assets/i/biigctsandbdel.png')}
                    />
                  </Pressable>
                </View>
              </View>
            )}
          />
        )}

        <Modal
          visible={biigctsandbyonnddrwgalryView != null}
          transparent
          statusBarTranslucent={Platform.OS === 'android'}
          animationType="fade"
          onRequestClose={() => setBiigctsandbyonnddrwgalryView(null)}>
          <View style={styles.biigctsandbyonnddrwgalryModalOuter}>
            <Pressable
              style={styles.biigctsandbyonnddrwgalryModalBackdrop}
              onPress={() => setBiigctsandbyonnddrwgalryView(null)}
            />
            {biigctsandbyonnddrwgalryView ? (
              <View
                style={styles.biigctsandbyonnddrwgalryModalCenter}
                pointerEvents="box-none">
                <View style={styles.biigctsandbyonnddrwgalryModalCard}>
                  <View style={styles.biigctsandbyonnddrwgalryModalHead}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                        padding: 16,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.biigctsandbyonnddrwgalryModalTitle}>
                          {biigctsandbyonnddrwgalryView.promptLine}
                        </Text>
                        <Text
                          style={[
                            styles.biigctsandbyonnddrwgalryModalSide,
                            biigctsandbyonnddrwgalryView.side === 'partner'
                              ? styles.biigctsandbyonnddrwgalrySidePartner
                              : styles.biigctsandbyonnddrwgalrySideMine,
                          ]}>
                          {biigctsandbyonnddrwgalryView.side === 'partner'
                            ? 'Partner Drawing'
                            : 'Your Drawing'}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => setBiigctsandbyonnddrwgalryView(null)}
                        style={styles.biigctsandbyonnddrwgalryModalClose}>
                        <Image
                          source={require('../../assets/i/biigctsandbcls.png')}
                        />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.biigctsandbyonnddrwgalryModalCanvas}>
                    <BiigctsandbyonnddrwCnvs
                      readOnly
                      rootStyle={styles.biigctsandbyonnddrwgalryModalCnvs}
                      strokes={biigctsandbyonnddrwgalryPreviewScaled(
                        biigctsandbyonnddrwgalryView,
                        320,
                        320,
                      )}
                      strokeColor="#2C2416"
                      strokeWidth={2}
                      isErase={false}
                    />
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </Modal>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonnddrwgalry;

const styles = StyleSheet.create({
  biigctsandbyonnddrwgalryRoot: {
    flex: 1,
    paddingHorizontal: 16,
  },
  biigctsandbyonnddrwgalryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  biigctsandbyonnddrwgalryBack: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#E8D4B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwgalryHeaderText: {
    flex: 1,
  },
  biigctsandbyonnddrwgalryOver: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    letterSpacing: 1.2,
  },
  biigctsandbyonnddrwgalryTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
  },
  biigctsandbyonnddrwgalryEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  biigctsandbyonnddrwgalryEmptyIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 46,
  },
  biigctsandbyonnddrwgalryEmptyIconTxt: {
    fontSize: 28,
  },
  biigctsandbyonnddrwgalryEmptyTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    marginBottom: 8,
  },
  biigctsandbyonnddrwgalryEmptySub: {
    color: '#F2DDB0',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  biigctsandbyonnddrwgalryCta: {
    width: 164,
    height: 45,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwgalryCtaTxt: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  biigctsandbyonnddrwgalryListPad: {
    paddingBottom: 40,
  },
  biigctsandbyonnddrwgalryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A1A18',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  biigctsandbyonnddrwgalryThumbWrap: {
    width: 70,
    height: 70,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F5ECD8',
  },
  biigctsandbyonnddrwgalryThumbCnvs: {
    width: 70,
    height: 70,
    flex: 0,
    borderRadius: 0,
  },
  biigctsandbyonnddrwgalryCardMid: {
    flex: 1,
    minWidth: 0,
  },
  biigctsandbyonnddrwgalryCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    marginBottom: 4,
  },
  biigctsandbyonnddrwgalryCardSide: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    marginBottom: 4,
  },
  biigctsandbyonnddrwgalrySideMine: {
    color: '#FF9A3E',
  },
  biigctsandbyonnddrwgalrySidePartner: {
    color: '#6BCB8F',
  },
  biigctsandbyonnddrwgalryCardDate: {
    color: '#B07040',
    fontFamily: 'Nunito-Regular',
    fontSize: 11,
  },
  biigctsandbyonnddrwgalryCardActions: {
    flexDirection: 'row',
    gap: 8,
  },
  biigctsandbyonnddrwgalryActEye: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: '#E8D5A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwgalryActEyeTxt: {
    fontSize: 16,
  },
  biigctsandbyonnddrwgalryActDel: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: '#F5D8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwgalryActDelTxt: {
    fontSize: 16,
  },
  biigctsandbyonnddrwgalryModalOuter: {
    flex: 1,
  },
  biigctsandbyonnddrwgalryModalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000AA',
  },
  biigctsandbyonnddrwgalryModalCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  biigctsandbyonnddrwgalryModalCard: {
    backgroundColor: '#2C1F1C',
    borderRadius: 20,

    borderWidth: 1,
    borderColor: '#FFFFFF18',
  },
  biigctsandbyonnddrwgalryModalHead: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  biigctsandbyonnddrwgalryModalTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  biigctsandbyonnddrwgalryModalSide: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 13,
    marginTop: 4,
  },
  biigctsandbyonnddrwgalryModalClose: {
    width: 36,
    height: 36,
    borderRadius: 14,
    backgroundColor: '#FFFFFF33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonnddrwgalryModalCloseTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
  },
  biigctsandbyonnddrwgalryModalCanvas: {
    height: 320,
    overflow: 'hidden',
  },
  biigctsandbyonnddrwgalryModalCnvs: {
    flex: 1,
    borderRadius: 0,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    overflow: 'hidden',
  },
});
