import {
  biigctsandbyonndsttgsAboutBody,
  biigctsandbyonndsttgsAppName,
  biigctsandbyonndsttgsAppVersion,
} from '../Biigctsandbyonnddata/Biigctsandbyonndsttgsmeta';

import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

const Biigctsandbyonndsttgsabout = () => {
  const biigctsandbyonndsttgsaboutNavigation = useNavigation();
  const biigctsandbyonndsttgsaboutInsets = useSafeAreaInsets();

  return (
    <Biigctsandbyonndlay>
      <View
        style={[
          styles.biigctsandbyonndsttgsaboutRoot,
          {paddingTop: biigctsandbyonndsttgsaboutInsets.top + 12},
        ]}>
        <View style={styles.biigctsandbyonndsttgsaboutHeader}>
          <Pressable
            hitSlop={12}
            onPress={() =>
              (
                biigctsandbyonndsttgsaboutNavigation as {goBack: () => void}
              ).goBack()
            }
            style={styles.biigctsandbyonndsttgsaboutBack}>
            <Image source={require('../../assets/i/biigctsandbyobck.png')} />
          </Pressable>
          <Text style={styles.biigctsandbyonndsttgsaboutTitle}>About App</Text>
        </View>

        <View style={styles.biigctsandbyonndsttgsaboutScroll}>
          <Image
            source={require('../../assets/i/biigctsandbealog.png')}
            style={styles.biigctsandbyonndsttgsaboutIcon}
          />
          <Text style={styles.biigctsandbyonndsttgsaboutName}>
            {biigctsandbyonndsttgsAppName}
          </Text>
          <Text style={styles.biigctsandbyonndsttgsaboutVer}>
            Version {biigctsandbyonndsttgsAppVersion}
          </Text>
          <Text style={styles.biigctsandbyonndsttgsaboutBody}>
            {biigctsandbyonndsttgsAboutBody}
          </Text>
        </View>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndsttgsabout;

const styles = StyleSheet.create({
  biigctsandbyonndsttgsaboutVer: {
    color: '#B07040',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginBottom: 20,
  },

  biigctsandbyonndsttgsaboutRoot: {
    flex: 1,
    paddingHorizontal: 16,
  },
  biigctsandbyonndsttgsaboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  biigctsandbyonndsttgsaboutBack: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#F2DDB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndsttgsaboutTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 22,
    flex: 1,
  },
  biigctsandbyonndsttgsaboutScroll: {
    paddingBottom: 120,
    alignItems: 'center',
  },
  biigctsandbyonndsttgsaboutIcon: {
    width: 88,
    height: 88,
    borderRadius: 28,
    marginBottom: 20,
    marginTop: 18,
  },
  biigctsandbyonndsttgsaboutName: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
  },

  biigctsandbyonndsttgsaboutBody: {
    color: '#F2DDB0',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 360,
  },
});
