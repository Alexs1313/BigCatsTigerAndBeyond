import {useStore} from '../Biigctsandbyonndstrg/Biigctsandbyonndcntxt';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';

import React, {useEffect, useMemo, useState} from 'react';
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
import {
  biigctsandbyonndPrefsLoadFavCats,
  biigctsandbyonndPrefsSaveFavCats,
} from '../Biigctsandbyonnddata/Biigctsandbyonndprefs';

type BiigctsandbyonndctdetRouteParams = {
  catId?: string;
  cat?: {
    id: string;
    name: string;
    scientificName: string;
    status: string;
    tag: string;
    description: string;
    speed: string;
    weight: string;
    size: string;
    diet: string;
    naturalHabitat: string;
    conservationStatus: string;
    conservationNote: string;
    facts: string[];
    image: ImageSourcePropType | null;
  };
};

const Biigctsandbyonndctdet = () => {
  const biigctsandbyonndctdetNavigation = useNavigation();
  const biigctsandbyonndctdetRoute = useRoute();
  const {catId, cat} = (biigctsandbyonndctdetRoute.params ??
    {}) as BiigctsandbyonndctdetRouteParams;

  const {biigctsandbyonndNotifs} = useStore();

  const [biigctsandbyonndctdetFav, setBiigctsandbyonndctdetFav] =
    useState(false);

  const biigctsandbyonndctdetCat = useMemo(() => {
    if (cat) {
      return cat;
    }
    return {
      id: catId ?? 'unknown',
      scientificName: 'Unknown',
      name: 'Unknown',
      status: 'Unknown',
      tag: 'Unknown',
      description: 'No data provided.',
      speed: '-',
      weight: '-',
      size: '-',
      diet: '-',
      naturalHabitat: '-',
      conservationStatus: '-',
      conservationNote: '-',
      facts: [],
      image: null,
    } as const;
  }, [cat, catId]);

  useEffect(() => {
    let biigctsandbyonndctdetLive = true;
    biigctsandbyonndPrefsLoadFavCats().then(rows => {
      if (biigctsandbyonndctdetLive) {
        setBiigctsandbyonndctdetFav(!!rows[biigctsandbyonndctdetCat.id]);
      }
    });
    return () => {
      biigctsandbyonndctdetLive = false;
    };
  }, [biigctsandbyonndctdetCat.id]);

  const biigctsandbyonndctdetToggleFav = async () => {
    const biigctsandbyonndctdetId = biigctsandbyonndctdetCat.id;
    const biigctsandbyonndctdetWasFav = biigctsandbyonndctdetFav;
    const biigctsandbyonndctdetRows = await biigctsandbyonndPrefsLoadFavCats();
    const biigctsandbyonndctdetNext: Record<string, true> = {
      ...biigctsandbyonndctdetRows,
    };
    if (biigctsandbyonndctdetWasFav) {
      delete biigctsandbyonndctdetNext[biigctsandbyonndctdetId];
    } else {
      biigctsandbyonndctdetNext[biigctsandbyonndctdetId] = true;
    }
    await biigctsandbyonndPrefsSaveFavCats(biigctsandbyonndctdetNext);
    setBiigctsandbyonndctdetFav(!biigctsandbyonndctdetWasFav);
    if (biigctsandbyonndNotifs) {
      Toast.show({
        type: 'success',
        text1: biigctsandbyonndctdetWasFav
          ? 'Card removed from favorites.'
          : 'Card saved to favorites.',
      });
    }
  };

  const biigctsandbyonndctdetImage: ImageSourcePropType | null =
    biigctsandbyonndctdetCat.image ?? null;

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndctdetRoot}>
        <View style={styles.biigctsandbyonndctdetHeroWrap}>
          <Image
            source={
              biigctsandbyonndctdetImage ??
              require('../../assets/i/biigctsandbybg.png')
            }
            style={styles.biigctsandbyonndctdetHeroImg}
          />

          <LinearGradient
            colors={['#35212100', '#352121']}
            style={styles.biigctsandbyonndctdetHeroOverlay}
          />

          <Pressable
            hitSlop={10}
            onPress={() => biigctsandbyonndctdetNavigation.goBack()}
            style={styles.biigctsandbyonndctdetNavBtn}>
            <Image
              source={require('../../assets/i/biigctsandbyobck.png')}
              style={styles.biigctsandbyonndctdetNavBtnText}
            />
          </Pressable>

          <Pressable
            hitSlop={10}
            onPress={() => {
              biigctsandbyonndctdetToggleFav().catch(() => {});
            }}
            style={[
              styles.biigctsandbyonndctdetNavBtn,
              styles.biigctsandbyonndctdetFavBtn,
            ]}>
            <Image
              source={
                biigctsandbyonndctdetFav
                  ? require('../../assets/i/biigctsandbcsvd.png')
                  : require('../../assets/i/biigctsandbsv.png')
              }
              style={styles.biigctsandbyonndctdetFavText}
            />
          </Pressable>

          <View style={styles.biigctsandbyonndctdetHeroTextWrap}>
            <Text style={styles.biigctsandbyonndctdetScientific}>
              {biigctsandbyonndctdetCat.scientificName}
            </Text>
            <View style={styles.biigctsandbyonndctdetTitleRow}>
              <Text style={styles.biigctsandbyonndctdetTitle}>
                {biigctsandbyonndctdetCat.name}
              </Text>
              <View style={styles.biigctsandbyonndctdetStatusPill}>
                <Text style={styles.biigctsandbyonndctdetStatusText}>
                  {biigctsandbyonndctdetCat.status}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.biigctsandbyonndctdetBody}>
          <View style={styles.biigctsandbyonndctdetTagPill}>
            <Text style={styles.biigctsandbyonndctdetTagText}>
              {biigctsandbyonndctdetCat.tag}
            </Text>
          </View>

          <Text style={styles.biigctsandbyonndctdetDesc}>
            {biigctsandbyonndctdetCat.description}
          </Text>

          <View style={styles.biigctsandbyonndctdetStatsGrid}>
            <View style={styles.biigctsandbyonndctdetStatCard}>
              <Image
                source={require('../../assets/i/biigctsandbcspd.png')}
                style={{marginBottom: 8}}
              />
              <Text style={styles.biigctsandbyonndctdetStatLabel}>SPEED</Text>
              <Text style={styles.biigctsandbyonndctdetStatValue}>
                {biigctsandbyonndctdetCat.speed}
              </Text>
            </View>
            <View style={styles.biigctsandbyonndctdetStatCard}>
              <Image
                source={require('../../assets/i/biigctsandbcawei.png')}
                style={{marginBottom: 8}}
              />
              <Text style={styles.biigctsandbyonndctdetStatLabel}>WEIGHT</Text>
              <Text style={styles.biigctsandbyonndctdetStatValue}>
                {biigctsandbyonndctdetCat.weight}
              </Text>
            </View>
            <View style={styles.biigctsandbyonndctdetStatCard}>
              <Image
                source={require('../../assets/i/biigctsandbcasz.png')}
                style={{marginBottom: 8}}
              />
              <Text style={styles.biigctsandbyonndctdetStatLabel}>SIZE</Text>
              <Text style={styles.biigctsandbyonndctdetStatValue}>
                {biigctsandbyonndctdetCat.size}
              </Text>
            </View>
            <View style={styles.biigctsandbyonndctdetStatCard}>
              <Image
                source={require('../../assets/i/biigctsandbcadiet.png')}
                style={{marginBottom: 8}}
              />
              <Text style={styles.biigctsandbyonndctdetStatLabel}>DIET</Text>
              <Text style={styles.biigctsandbyonndctdetStatValue}>
                {biigctsandbyonndctdetCat.diet}
              </Text>
            </View>
          </View>

          <View style={styles.biigctsandbyonndctdetSection}>
            <Image source={require('../../assets/i/biigctsandbchab.png')} />
            <View>
              <Text style={styles.biigctsandbyonndctdetSectionTitle}>
                NATURAL HABITAT
              </Text>
              <Text style={styles.biigctsandbyonndctdetSectionBody}>
                {biigctsandbyonndctdetCat.naturalHabitat}
              </Text>
            </View>
          </View>

          <View style={styles.biigctsandbyonndctdetSection}>
            <Image source={require('../../assets/i/biigctsandbcsta.png')} />
            <View>
              <Text style={styles.biigctsandbyonndctdetSectionTitle}>
                CONSERVATION STATUS
              </Text>
              <Text style={styles.biigctsandbyonndctdetSectionBody}>
                {biigctsandbyonndctdetCat.conservationStatus}
              </Text>
              <Text style={styles.biigctsandbyonndctdetSectionSub}>
                {biigctsandbyonndctdetCat.conservationNote}
              </Text>
            </View>
          </View>

          <View style={styles.biigctsandbyonndctdetFactsHeader}>
            <Image source={require('../../assets/i/biigctsandbcfacts.png')} />

            <Text style={styles.biigctsandbyonndctdetFactsTitle}>
              Fascinating Facts
            </Text>
          </View>

          <View style={styles.biigctsandbyonndctdetFactsList}>
            {biigctsandbyonndctdetCat.facts.map((fact, idx) => (
              <View
                key={`${biigctsandbyonndctdetCat.id}_${idx}`}
                style={styles.biigctsandbyonndctdetFactRow}>
                <View style={styles.biigctsandbyonndctdetFactNum}>
                  <Text style={styles.biigctsandbyonndctdetFactNumText}>
                    {idx + 1}
                  </Text>
                </View>
                <Text style={styles.biigctsandbyonndctdetFactText}>{fact}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndctdet;

const styles = StyleSheet.create({
  biigctsandbyonndctdetNavBtn: {
    position: 'absolute',
    top: 54,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#FFFFFFD9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndctdetNavBtnText: {
    color: '#2B1715',
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    lineHeight: 24,
    marginTop: -2,
  },

  biigctsandbyonndctdetRoot: {
    flex: 1,
  },

  biigctsandbyonndctdetHeroWrap: {
    height: 300,

    overflow: 'hidden',
  },
  biigctsandbyonndctdetHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  biigctsandbyonndctdetHeroPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndctdetHeroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -4,
    height: 150,
  },

  biigctsandbyonndctdetFavBtn: {
    left: undefined,
    right: 14,
  },
  biigctsandbyonndctdetFavText: {
    width: 20,
    height: 20,
  },

  biigctsandbyonndctdetHeroTextWrap: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 18,
  },
  biigctsandbyonndctdetScientific: {
    color: '#FFFFFFB5',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginBottom: 4,
  },
  biigctsandbyonndctdetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  biigctsandbyonndctdetTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 28,
    flex: 1,
  },
  biigctsandbyonndctdetStatusPill: {
    backgroundColor: '#D4621A22',
    borderWidth: 1,
    borderColor: '#D4621A44',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  biigctsandbyonndctdetStatusText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
  },

  biigctsandbyonndctdetBody: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
  },
  biigctsandbyonndctdetTagPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#D4621A18',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 16,
  },
  biigctsandbyonndctdetTagText: {
    color: '#D4621A',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
  },
  biigctsandbyonndctdetDesc: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 20,
  },

  biigctsandbyonndctdetStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 14,
  },
  biigctsandbyonndctdetStatCard: {
    width: '48%',
    backgroundColor: '#2A1313B3',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 12,
    minHeight: 78,
  },
  biigctsandbyonndctdetStatLabel: {
    color: '#B07040',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  biigctsandbyonndctdetStatValue: {
    color: '#F2DDB0',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 13,
    lineHeight: 18,
  },

  biigctsandbyonndctdetSection: {
    backgroundColor: '#2A1313B3',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  biigctsandbyonndctdetSectionTitle: {
    color: '#B07040',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
    marginBottom: 5,
  },
  biigctsandbyonndctdetSectionBody: {
    color: '#F2DDB0',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 13,
    lineHeight: 18,
    width: '80%',
  },
  biigctsandbyonndctdetSectionSub: {
    color: '#D4621A',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    marginTop: 4,
  },

  biigctsandbyonndctdetFactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
    marginBottom: 10,
  },
  biigctsandbyonndctdetFactsQ: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
  },
  biigctsandbyonndctdetFactsTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
  },
  biigctsandbyonndctdetFactsList: {
    gap: 10,
    paddingBottom: 20,
  },
  biigctsandbyonndctdetFactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#2A1313B3',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 12,
  },
  biigctsandbyonndctdetFactNum: {
    width: 24,
    height: 24,
    borderRadius: 14,
    backgroundColor: '#D4621A',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  biigctsandbyonndctdetFactNumText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 12,
  },
  biigctsandbyonndctdetFactText: {
    flex: 1,
    color: '#F2DDB0',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    lineHeight: 18,
  },
});
