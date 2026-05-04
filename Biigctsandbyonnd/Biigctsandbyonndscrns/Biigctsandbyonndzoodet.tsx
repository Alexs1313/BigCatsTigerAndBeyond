import type {BiigctsandbyonndZoo} from '../Biigctsandbyonnddata/Biigctsandbyonndzoos';
import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

type BiigctsandbyonndzoodetRouteParams = {
  zoo?: BiigctsandbyonndZoo;
};

const Biigctsandbyonndzoodet = () => {
  const biigctsandbyonndzoodetNavigation = useNavigation();
  const biigctsandbyonndzoodetRoute = useRoute();
  const {zoo} = (biigctsandbyonndzoodetRoute.params ??
    {}) as BiigctsandbyonndzoodetRouteParams;

  const biigctsandbyonndzoodetZoo = useMemo(() => {
    return (
      zoo ?? {
        id: 'unknown',
        flag: '🏳️',
        country: 'Unknown',
        name: 'Unknown Zoo',
        location: 'Unknown',
        latitude: 0,
        longitude: 0,
        description: 'No data provided.',
        bigCats: [],
        openingHours: '-',
        image: null,
      }
    );
  }, [zoo]);

  const biigctsandbyonndzoodetImage: ImageSourcePropType | null =
    biigctsandbyonndzoodetZoo.image ?? null;

  const biigctsandbyonndzoodetOpenRoute = () => {
    if (biigctsandbyonndzoodetZoo.id === 'unknown') {
      return;
    }
    (
      biigctsandbyonndzoodetNavigation as {
        replace: (
          name: string,
          params: {screen: string; params: {mapZooId: string}},
        ) => void;
      }
    ).replace('Biigctsandbyonndtabbs', {
      screen: 'Biigctsandbyonndzoos',
      params: {mapZooId: biigctsandbyonndzoodetZoo.id},
    });
  };

  return (
    <Biigctsandbyonndlay bounce={false}>
      <View style={styles.biigctsandbyonndzoodetRoot}>
        <View style={styles.biigctsandbyonndzoodetHero}>
          <Image
            source={biigctsandbyonndzoodetImage}
            style={styles.biigctsandbyonndzoodetHeroImg}
          />

          <LinearGradient
            colors={['#2C1A0E40', '#352121']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
            }}
          />

          <Pressable
            hitSlop={10}
            onPress={() => (biigctsandbyonndzoodetNavigation as any).goBack()}
            style={styles.biigctsandbyonndzoodetBackBtn}>
            <Image source={require('../../assets/i/biigctsandbyobck.png')} />
          </Pressable>

          <View style={styles.biigctsandbyonndzoodetCountryPill}>
            <Text style={styles.biigctsandbyonndzoodetCountryText}>
              {biigctsandbyonndzoodetZoo.flag}{' '}
              {biigctsandbyonndzoodetZoo.country}
            </Text>
          </View>

          <View style={styles.biigctsandbyonndzoodetHeroText}>
            <Text style={styles.biigctsandbyonndzoodetTitle}>
              {biigctsandbyonndzoodetZoo.name}
            </Text>
            <View style={styles.biigctsandbyonndzoodetLocationRow}>
              <Image
                source={require('../../assets/i/biigctsandbcfznempin.png')}
              />
              <Text style={styles.biigctsandbyonndzoodetLocationText}>
                {biigctsandbyonndzoodetZoo.location}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.biigctsandbyonndzoodetBody}>
          <Text style={styles.biigctsandbyonndzoodetDesc}>
            {biigctsandbyonndzoodetZoo.description}
          </Text>

          <Text style={styles.biigctsandbyonndzoodetSectionTitle}>
            🐾 {` `}Big Cats You May See
          </Text>
          <View style={styles.biigctsandbyonndzoodetChips}>
            {biigctsandbyonndzoodetZoo.bigCats.map(cat => (
              <View key={cat} style={styles.biigctsandbyonndzoodetChip}>
                <Text style={styles.biigctsandbyonndzoodetChipText}>{cat}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.biigctsandbyonndzoodetSectionTitle}>
            📋 {` `}Practical Information
          </Text>
          <View style={styles.biigctsandbyonndzoodetInfoCard}>
            <View style={styles.biigctsandbyonndzoodetInfoIcon}>
              <Image
                source={require('../../assets/i/biigctsandbcfznetime.png')}
              />
            </View>
            <View style={styles.biigctsandbyonndzoodetInfoBody}>
              <Text style={styles.biigctsandbyonndzoodetInfoLabel}>
                OPENING HOURS
              </Text>
              <Text style={styles.biigctsandbyonndzoodetInfoValue}>
                {biigctsandbyonndzoodetZoo.openingHours}
              </Text>
            </View>
          </View>

          <Pressable onPress={biigctsandbyonndzoodetOpenRoute}>
            <LinearGradient
              colors={['#D4621A', '#D4621ACC']}
              style={styles.biigctsandbyonndzoodetRouteBtn}>
              <Image
                source={require('../../assets/i/biigctsandbcfznrout.png')}
              />
              <Text style={styles.biigctsandbyonndzoodetRouteBtnText}>
                Build Route
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndzoodet;

const styles = StyleSheet.create({
  biigctsandbyonndzoodetBackBtn: {
    position: 'absolute',
    top: 48,
    left: 14,
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#FFFFFFE6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndzoodetBackText: {
    color: '#2B1715',
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    lineHeight: 24,
    marginTop: -2,
  },

  biigctsandbyonndzoodetRoot: {
    flex: 1,
  },
  biigctsandbyonndzoodetHero: {
    height: 280,
    overflow: 'hidden',
  },
  biigctsandbyonndzoodetHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  biigctsandbyonndzoodetHeroPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndzoodetHeroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000066',
  },

  biigctsandbyonndzoodetCountryPill: {
    position: 'absolute',
    top: 48,
    right: 14,
    borderRadius: 16,
    backgroundColor: '#FFFFFFE6',
    paddingHorizontal: 10,
    paddingVertical: 8,
    minHeight: 37,
  },
  biigctsandbyonndzoodetCountryText: {
    color: '#2B1715',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
  },
  biigctsandbyonndzoodetHeroText: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
  biigctsandbyonndzoodetTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 28,
    marginBottom: 8,
  },
  biigctsandbyonndzoodetLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  biigctsandbyonndzoodetLocationDot: {
    color: '#FF6A00',
    fontSize: 12,
  },
  biigctsandbyonndzoodetLocationText: {
    color: '#FFFFFFB3',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
  },

  biigctsandbyonndzoodetBody: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 26,
  },
  biigctsandbyonndzoodetDesc: {
    color: '#F2DDB0',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 14,
  },
  biigctsandbyonndzoodetSectionTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    marginTop: 6,
    marginBottom: 10,
  },
  biigctsandbyonndzoodetChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },
  biigctsandbyonndzoodetChip: {
    backgroundColor: '#D4621A',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  biigctsandbyonndzoodetChipText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
  },

  biigctsandbyonndzoodetInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#2A1313B3',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 14,
    marginBottom: 14,
    marginTop: 8,
  },
  biigctsandbyonndzoodetInfoIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: '#D4621A22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndzoodetInfoIconText: {
    fontSize: 18,
  },
  biigctsandbyonndzoodetInfoBody: {
    flex: 1,
  },
  biigctsandbyonndzoodetInfoLabel: {
    color: '#FFB28A',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    letterSpacing: 1.1,
    marginBottom: 4,
  },
  biigctsandbyonndzoodetInfoValue: {
    color: '#7D3725',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 13,
  },

  biigctsandbyonndzoodetRouteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#FF6A00',

    justifyContent: 'center',
  },
  biigctsandbyonndzoodetRouteBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});
