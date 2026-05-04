import {biigctsandbyonndsttgsAppVersion} from '../Biigctsandbyonnddata/Biigctsandbyonndsttgsmeta';
import {useStore} from '../Biigctsandbyonndstrg/Biigctsandbyonndcntxt';

import Toast from 'react-native-toast-message';

import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';
import {
  biigctsandbyonndPrefsClearAll,
  biigctsandbyonndPrefsLoadNotifications,
  biigctsandbyonndPrefsSaveNotifications,
} from '../Biigctsandbyonnddata/Biigctsandbyonndprefs';

const biigctsandbyonndsttgsRateUrl =
  'https://apps.apple.com/us/app/t%D1%96ger-b%D1%96g-cats/id6766299368';

const Biigctsandbyonndsttgs = () => {
  const biigctsandbyonndsttgsNavigation = useNavigation();
  const biigctsandbyonndsttgsInsets = useSafeAreaInsets();

  const {biigctsandbyonndNotifs, setBiigctsandbyonndNotifs} = useStore();

  const biigctsandbyonndsttgsNav = useCallback(
    (name: string) => {
      (
        biigctsandbyonndsttgsNavigation as {navigate: (n: string) => void}
      ).navigate(name);
    },
    [biigctsandbyonndsttgsNavigation],
  );

  const biigctsandbyonndsttgsRate = async () => {
    const biigctsandbyonndsttgsCan = await Linking.canOpenURL(
      biigctsandbyonndsttgsRateUrl,
    );
    if (biigctsandbyonndsttgsCan) {
      await Linking.openURL(biigctsandbyonndsttgsRateUrl);
    }
  };

  const biigctsandbyonndsttgsClear = async () => {
    try {
      await biigctsandbyonndPrefsClearAll();
      const biigctsandbyonndsttgsNext =
        await biigctsandbyonndPrefsLoadNotifications();
      setBiigctsandbyonndNotifs(false);
      if (biigctsandbyonndNotifs) {
        Toast.show({
          type: 'success',
          text1: 'All data cleared',
          text2: 'Favorites, sketches & progress were removed.',
        });
      }
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Could not clear data',
        text2: 'Please try again.',
      });
    }
  };

  return (
    <Biigctsandbyonndlay>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.biigctsandbyonndsttgsScroll,
          styles.biigctsandbyonndsttgsScrollPad,
          {paddingTop: biigctsandbyonndsttgsInsets.top + 12},
        ]}>
        <Text style={styles.biigctsandbyonndsttgsScreenTitle}>Settings</Text>

        <Text style={styles.biigctsandbyonndsttgsSection}>APP SETTINGS</Text>
        <View style={styles.biigctsandbyonndsttgsCard}>
          <View style={styles.biigctsandbyonndsttgsRow}>
            <View style={styles.biigctsandbyonndsttgsIconWrap}>
              <Image source={require('../../assets/i/biigctsandbenotf.png')} />
            </View>
            <View style={styles.biigctsandbyonndsttgsRowMid}>
              <Text style={styles.biigctsandbyonndsttgsRowTitle}>
                Notifications
              </Text>
              <Text style={styles.biigctsandbyonndsttgsRowSub}>
                Daily facts & reminders
              </Text>
            </View>
            <Switch
              value={biigctsandbyonndNotifs}
              onValueChange={v => {
                setBiigctsandbyonndNotifs(v);
                biigctsandbyonndPrefsSaveNotifications(v).catch(() => {});
                Toast.show({
                  type: 'success',
                  text1: v ? 'Notifications enabled' : 'Notifications disabled',
                });
              }}
              trackColor={{false: '#3A2824', true: '#C45A1A'}}
              thumbColor="#FFFFFF"
            />
          </View>
          <View style={styles.biigctsandbyonndsttgsSep} />
          {Platform.OS === 'ios' && (
            <Pressable
              onPress={() => {
                biigctsandbyonndsttgsRate().catch(() => {});
              }}
              style={({pressed}) => [
                styles.biigctsandbyonndsttgsRow,
                pressed && styles.biigctsandbyonndsttgsRowPress,
              ]}>
              <View style={styles.biigctsandbyonndsttgsIconWrap}>
                <Image
                  source={require('../../assets/i/biigctsandberate.png')}
                />
              </View>
              <View style={styles.biigctsandbyonndsttgsRowMid}>
                <Text style={styles.biigctsandbyonndsttgsRowTitle}>
                  Rate the App
                </Text>
                <Text style={styles.biigctsandbyonndsttgsRowSub}>
                  Love big cats? Share the love!
                </Text>
              </View>
              <Image source={require('../../assets/i/biigctsandbenxt.png')} />
            </Pressable>
          )}
        </View>

        <Text style={styles.biigctsandbyonndsttgsSection}>ABOUT</Text>
        <View style={styles.biigctsandbyonndsttgsCard}>
          <Pressable
            onPress={() =>
              biigctsandbyonndsttgsNav('Biigctsandbyonndsttgsabout')
            }
            style={({pressed}) => [
              styles.biigctsandbyonndsttgsRow,
              pressed && styles.biigctsandbyonndsttgsRowPress,
            ]}>
            <View style={styles.biigctsandbyonndsttgsIconWrap}>
              <Image source={require('../../assets/i/biigctsandbabt.png')} />
            </View>
            <View style={styles.biigctsandbyonndsttgsRowMid}>
              <Text style={styles.biigctsandbyonndsttgsRowTitle}>
                About App
              </Text>
              <Text style={styles.biigctsandbyonndsttgsRowSub}>
                Version {biigctsandbyonndsttgsAppVersion}
              </Text>
            </View>
            <Image source={require('../../assets/i/biigctsandbenxt.png')} />
          </Pressable>
          <View style={styles.biigctsandbyonndsttgsSep} />
          {Platform.OS === 'ios' ? (
            <Pressable
              onPress={() =>
                Linking.openURL(
                  'https://www.termsfeed.com/live/ce32064e-6d8c-4f02-b392-8abafe8f813e',
                )
              }
              style={({pressed}) => [
                styles.biigctsandbyonndsttgsRow,
                pressed && styles.biigctsandbyonndsttgsRowPress,
              ]}>
              <View style={styles.biigctsandbyonndsttgsIconWrap}>
                <Image
                  source={require('../../assets/i/biigctsandbempriv.png')}
                />
              </View>
              <View style={styles.biigctsandbyonndsttgsRowMid}>
                <Text style={styles.biigctsandbyonndsttgsRowTitle}>
                  Privacy Policy
                </Text>
              </View>
              <Image source={require('../../assets/i/biigctsandbenxt.png')} />
            </Pressable>
          ) : null}
        </View>

        <Text style={styles.biigctsandbyonndsttgsSection}>DANGER ZONE</Text>
        <View style={styles.biigctsandbyonndsttgsCard}>
          <Pressable
            onPress={biigctsandbyonndsttgsClear}
            style={({pressed}) => [
              styles.biigctsandbyonndsttgsRow,
              pressed && styles.biigctsandbyonndsttgsRowPress,
            ]}>
            <View
              style={[
                styles.biigctsandbyonndsttgsIconWrap,
                styles.biigctsandbyonndsttgsIconDanger,
              ]}>
              <Image source={require('../../assets/i/biigctsandbedel.png')} />
            </View>
            <View style={styles.biigctsandbyonndsttgsRowMid}>
              <Text style={styles.biigctsandbyonndsttgsRowTitleDanger}>
                Clear All Data
              </Text>
              <Text
                style={[styles.biigctsandbyonndsttgsRowSub, {color: '#fff'}]}>
                Delete favorites, sketches & progress
              </Text>
            </View>
            <Image source={require('../../assets/i/biigctsandbenxt.png')} />
          </Pressable>
        </View>
      </ScrollView>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndsttgs;

const styles = StyleSheet.create({
  biigctsandbyonndsttgsRowPress: {
    backgroundColor: '#FFFFFF08',
  },

  biigctsandbyonndsttgsIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#E8A82E20',
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndsttgsScroll: {
    paddingHorizontal: 16,
  },
  biigctsandbyonndsttgsScrollPad: {
    paddingBottom: 110,
  },
  biigctsandbyonndsttgsScreenTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 28,
    marginBottom: 22,
  },
  biigctsandbyonndsttgsSection: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 11,
    letterSpacing: 1.1,
    marginBottom: 10,
    marginTop: 4,
  },
  biigctsandbyonndsttgsCard: {
    backgroundColor: '#2A1A18',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    marginBottom: 20,
    overflow: 'hidden',
  },
  biigctsandbyonndsttgsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    gap: 12,
  },

  biigctsandbyonndsttgsIconDanger: {
    backgroundColor: '#3D2222',
  },
  biigctsandbyonndsttgsIcon: {
    fontSize: 18,
  },
  biigctsandbyonndsttgsRowMid: {
    flex: 1,
    minWidth: 0,
  },
  biigctsandbyonndsttgsRowTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  biigctsandbyonndsttgsRowTitleDanger: {
    color: '#C04040',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  biigctsandbyonndsttgsRowSub: {
    color: '#B07040',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    marginTop: 3,
  },
  biigctsandbyonndsttgsChev: {
    color: '#E8B565',
    fontSize: 22,
    fontWeight: '300',
    marginTop: -2,
  },
  biigctsandbyonndsttgsChevDanger: {
    color: '#E57373',
    fontSize: 22,
    fontWeight: '300',
    marginTop: -2,
  },
  biigctsandbyonndsttgsSep: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#FFFFFF18',
    marginLeft: 66,
  },
});
