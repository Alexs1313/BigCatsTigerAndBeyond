import {
  type BiigctsandbyonndZoo,
  biigctsandbyonndZoos,
} from '../Biigctsandbyonnddata/Biigctsandbyonndzoos';

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

type BiigctsandbyonndzoosRouteParams = {
  mapZooId?: string;
};

const Biigctsandbyonndzoos = () => {
  const biigctsandbyonndzoosNavigation = useNavigation();
  const biigctsandbyonndzoosRoute = useRoute();
  const biigctsandbyonndzoosMapRef =
    useRef<React.ElementRef<typeof MapView>>(null);
  const [biigctsandbyonndzoosQuery, setBiigctsandbyonndzoosQuery] =
    useState('');
  const [biigctsandbyonndzoosMode, setBiigctsandbyonndzoosMode] = useState<
    'cards' | 'map'
  >('cards');
  const [biigctsandbyonndzoosSelected, setBiigctsandbyonndzoosSelected] =
    useState<BiigctsandbyonndZoo | null>(biigctsandbyonndZoos[0] ?? null);

  const biigctsandbyonndzoosFiltered = useMemo(() => {
    const biigctsandbyonndzoosNeedle = biigctsandbyonndzoosQuery
      .trim()
      .toLowerCase();
    if (!biigctsandbyonndzoosNeedle) {
      return biigctsandbyonndZoos;
    }
    return biigctsandbyonndZoos.filter(z => {
      const hay = `${z.name} ${z.location} ${z.country} ${z.bigCats.join(
        ' ',
      )}`.toLowerCase();
      return hay.includes(biigctsandbyonndzoosNeedle);
    });
  }, [biigctsandbyonndzoosQuery]);

  useFocusEffect(
    useCallback(() => {
      const biigctsandbyonndzoosParams =
        biigctsandbyonndzoosRoute.params as BiigctsandbyonndzoosRouteParams;
      const biigctsandbyonndzoosMapId = biigctsandbyonndzoosParams?.mapZooId;
      if (!biigctsandbyonndzoosMapId) {
        return;
      }
      const biigctsandbyonndzoosZ = biigctsandbyonndZoos.find(
        z => z.id === biigctsandbyonndzoosMapId,
      );
      if (biigctsandbyonndzoosZ) {
        setBiigctsandbyonndzoosMode('map');
        setBiigctsandbyonndzoosSelected(biigctsandbyonndzoosZ);
      }
      (
        biigctsandbyonndzoosNavigation as unknown as {
          setParams: (p: {mapZooId?: string}) => void;
        }
      ).setParams({mapZooId: undefined});
    }, [biigctsandbyonndzoosNavigation, biigctsandbyonndzoosRoute.params]),
  );

  useEffect(() => {
    if (biigctsandbyonndzoosMode !== 'map' || !biigctsandbyonndzoosSelected) {
      return;
    }
    const {latitude, longitude} = biigctsandbyonndzoosSelected;
    const biigctsandbyonndzoosT = setTimeout(() => {
      biigctsandbyonndzoosMapRef.current?.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
        },
        400,
      );
    }, 120);
    return () => clearTimeout(biigctsandbyonndzoosT);
  }, [biigctsandbyonndzoosMode, biigctsandbyonndzoosSelected]);

  const biigctsandbyonndzoosOpenDetails = (zoo: BiigctsandbyonndZoo) => {
    (biigctsandbyonndzoosNavigation as any).navigate('Biigctsandbyonndzoodet', {
      zoo,
    });
  };

  const biigctsandbyonndzoosRenderCard = ({
    item,
  }: {
    item: BiigctsandbyonndZoo;
  }) => {
    return (
      <View style={styles.biigctsandbyonndzoosCard}>
        <View style={styles.biigctsandbyonndzoosCardHero}>
          <View>
            <Image
              source={item.image}
              style={styles.biigctsandbyonndzoosHeroImg}
            />

            <LinearGradient
              colors={['#00000000', '#00000080']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 120,
              }}
            />
          </View>

          <View style={styles.biigctsandbyonndzoosCardHeroText}>
            <Text style={styles.biigctsandbyonndzoosCardTitle}>
              {item.name}
            </Text>
            <Text style={styles.biigctsandbyonndzoosCardSubtitle}>
              {item.flag} {item.location}
            </Text>
          </View>
        </View>

        <View style={styles.biigctsandbyonndzoosCardBody}>
          <Text numberOfLines={3} style={styles.biigctsandbyonndzoosCardDesc}>
            {item.description}
          </Text>

          <Pressable onPress={() => biigctsandbyonndzoosOpenDetails(item)}>
            <LinearGradient
              colors={['#4A7856', '#3A6046']}
              style={styles.biigctsandbyonndzoosDetailsBtn}>
              <Text style={styles.biigctsandbyonndzoosDetailsBtnText}>
                View Details
              </Text>
              <Image
                source={require('../../assets/i/biigctsandbcfznext.png')}
                style={{
                  tintColor: '#FFFFFF',
                }}
              />
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndzoosRoot}>
        <View style={styles.biigctsandbyonndzoosHeader}>
          <Text style={styles.biigctsandbyonndzoosOverline}>
            EXPLORE WORLDWIDE
          </Text>
          <Text style={styles.biigctsandbyonndzoosTitle}>Zoos & Reserves</Text>
        </View>

        <View style={styles.biigctsandbyonndzoosSearchWrap}>
          <Image
            source={require('../../assets/i/biigctsandbcsear.png')}
            style={styles.biigctsandbyonndzoosSearchIcon}
          />
          <TextInput
            value={biigctsandbyonndzoosQuery}
            onChangeText={setBiigctsandbyonndzoosQuery}
            placeholder="Search zoos, cities, or big cats"
            placeholderTextColor="#FFFFFF80"
            style={styles.biigctsandbyonndzoosSearchInput}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

        <View style={styles.biigctsandbyonndzoosSeg}>
          <Pressable
            onPress={() => setBiigctsandbyonndzoosMode('cards')}
            style={[
              styles.biigctsandbyonndzoosSegBtn,
              biigctsandbyonndzoosMode === 'cards' &&
                styles.biigctsandbyonndzoosSegOn,
            ]}>
            <Text style={styles.biigctsandbyonndzoosSegIcon}>📋</Text>
            <Text
              style={[
                styles.biigctsandbyonndzoosSegTxt,
                biigctsandbyonndzoosMode === 'cards' &&
                  styles.biigctsandbyonndzoosSegTxtOn,
              ]}>
              Zoo Cards
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setBiigctsandbyonndzoosMode('map')}
            style={[
              styles.biigctsandbyonndzoosSegBtn,
              biigctsandbyonndzoosMode === 'map' &&
                styles.biigctsandbyonndzoosSegOn,
            ]}>
            <Text style={styles.biigctsandbyonndzoosSegIcon}>🗺️</Text>
            <Text
              style={[
                styles.biigctsandbyonndzoosSegTxt,
                biigctsandbyonndzoosMode === 'map' &&
                  styles.biigctsandbyonndzoosSegTxtOn,
              ]}>
              Map View
            </Text>
          </Pressable>
        </View>

        {biigctsandbyonndzoosMode === 'cards' ? (
          <FlatList
            data={biigctsandbyonndzoosFiltered}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            renderItem={biigctsandbyonndzoosRenderCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.biigctsandbyonndzoosListContent}
          />
        ) : (
          <View>
            <View style={styles.biigctsandbyonndzoosMapWrap}>
              <MapView
                ref={biigctsandbyonndzoosMapRef}
                provider={PROVIDER_DEFAULT}
                style={styles.biigctsandbyonndzoosMap}
                initialRegion={{
                  latitude: biigctsandbyonndzoosSelected?.latitude ?? 20,
                  longitude: biigctsandbyonndzoosSelected?.longitude ?? 0,
                  latitudeDelta: 120,
                  longitudeDelta: 120,
                }}>
                {biigctsandbyonndzoosFiltered.map(z => (
                  <Marker
                    key={z.id}
                    coordinate={{latitude: z.latitude, longitude: z.longitude}}
                    onPress={() => setBiigctsandbyonndzoosSelected(z)}>
                    <Image
                      source={require('../../assets/i/biigctsandbcfznemarkr.png')}
                      style={
                        z.id === biigctsandbyonndzoosSelected?.id
                          ? {width: 36, height: 36}
                          : {width: 28, height: 28}
                      }
                    />
                  </Marker>
                ))}
              </MapView>
            </View>
            {biigctsandbyonndzoosSelected ? (
              <View style={styles.biigctsandbyonndzoosMapCard}>
                <View style={styles.biigctsandbyonndzoosMapCardImgWrap}>
                  {biigctsandbyonndzoosSelected.image ? (
                    <Image
                      source={biigctsandbyonndzoosSelected.image}
                      style={styles.biigctsandbyonndzoosMapCardImg}
                    />
                  ) : (
                    <View
                      style={styles.biigctsandbyonndzoosMapCardImgPlaceholder}
                    />
                  )}
                </View>
                <View style={styles.biigctsandbyonndzoosMapCardBody}>
                  <Text style={styles.biigctsandbyonndzoosMapCardTitle}>
                    {biigctsandbyonndzoosSelected.name}
                  </Text>
                  <Text style={styles.biigctsandbyonndzoosMapCardSub}>
                    {biigctsandbyonndzoosSelected.flag}{' '}
                    {biigctsandbyonndzoosSelected.location}
                  </Text>
                  <View style={styles.biigctsandbyonndzoosMapCatsRow}>
                    {biigctsandbyonndzoosSelected.bigCats
                      .slice(0, 2)
                      .map(cat => (
                        <View
                          key={cat}
                          style={styles.biigctsandbyonndzoosMapCatChip}>
                          <Text style={styles.biigctsandbyonndzoosMapCatText}>
                            {cat}
                          </Text>
                        </View>
                      ))}
                  </View>
                </View>

                <Pressable
                  onPress={() =>
                    biigctsandbyonndzoosOpenDetails(
                      biigctsandbyonndzoosSelected,
                    )
                  }
                  style={styles.biigctsandbyonndzoosMapViewBtn}>
                  <Text style={styles.biigctsandbyonndzoosMapViewBtnText}>
                    View
                  </Text>
                </Pressable>
              </View>
            ) : null}
          </View>
        )}
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndzoos;

const styles = StyleSheet.create({
  biigctsandbyonndzoosSearchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000033',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    marginBottom: 12,
  },

  biigctsandbyonndzoosRoot: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 110,
  },
  biigctsandbyonndzoosHeader: {
    paddingBottom: 10,
  },
  biigctsandbyonndzoosOverline: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  biigctsandbyonndzoosTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 26,
    lineHeight: 32,
  },

  biigctsandbyonndzoosSearchIcon: {
    marginRight: 8,
    opacity: 0.8,
  },
  biigctsandbyonndzoosSearchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    paddingVertical: 0,
  },

  biigctsandbyonndzoosSeg: {
    flexDirection: 'row',
    backgroundColor: '#2A1816',
    borderRadius: 16,
    padding: 4,
    marginBottom: 12,
    gap: 6,
  },
  biigctsandbyonndzoosSegBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 14,
    gap: 6,
  },
  biigctsandbyonndzoosSegOn: {
    backgroundColor: '#D4621A',
  },
  biigctsandbyonndzoosSegIcon: {
    fontSize: 14,
  },
  biigctsandbyonndzoosSegTxt: {
    color: '#E8B565',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  biigctsandbyonndzoosSegTxtOn: {
    color: '#FFFFFF',
  },

  biigctsandbyonndzoosListContent: {
    paddingBottom: 120,
  },

  biigctsandbyonndzoosCard: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#2A1313B3',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    marginBottom: 14,
  },
  biigctsandbyonndzoosCardHero: {
    height: 140,
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndzoosHeroImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  biigctsandbyonndzoosHeroPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndzoosHeroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000066',
  },
  biigctsandbyonndzoosCardHeroText: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 12,
  },
  biigctsandbyonndzoosCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    marginBottom: 4,
  },
  biigctsandbyonndzoosCardSubtitle: {
    color: '#FFFFFFB3',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
  biigctsandbyonndzoosCardBody: {
    padding: 14,
    gap: 12,
  },
  biigctsandbyonndzoosCardDesc: {
    color: '#FFFFFFB3',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  biigctsandbyonndzoosDetailsBtn: {
    height: 46,
    borderRadius: 16,
    backgroundColor: '#2B6A50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  biigctsandbyonndzoosDetailsBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },

  biigctsandbyonndzoosMapWrap: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    backgroundColor: '#0F0A0A',
    height: 380,
  },
  biigctsandbyonndzoosMap: {
    flex: 1,
  },
  biigctsandbyonndzoosMapCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A1313F2',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    padding: 12,
    gap: 12,
    marginTop: 20,
  },
  biigctsandbyonndzoosMapCardImgWrap: {
    width: 60,
    height: 60,
    borderRadius: 14,
    overflow: 'hidden',
  },
  biigctsandbyonndzoosMapCardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  biigctsandbyonndzoosMapCardImgPlaceholder: {
    flex: 1,
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndzoosMapCardBody: {
    flex: 1,
  },
  biigctsandbyonndzoosMapCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 14,
    marginBottom: 2,
  },
  biigctsandbyonndzoosMapCardSub: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-Regular',
    fontSize: 11,
    marginBottom: 8,
  },
  biigctsandbyonndzoosMapCatsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  biigctsandbyonndzoosMapCatChip: {
    backgroundColor: '#00000033',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  biigctsandbyonndzoosMapCatText: {
    color: '#FFB28A',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 10,
  },
  biigctsandbyonndzoosMapViewBtn: {
    width: 62,
    height: 34,
    borderRadius: 14,
    backgroundColor: '#FF6A00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndzoosMapViewBtnText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
  },
});
