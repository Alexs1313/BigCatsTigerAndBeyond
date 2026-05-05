import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

import LinearGradient from 'react-native-linear-gradient';

import React, {useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Biigctsandbyonndonb = () => {
  const biigctsandbyonndonbNavigation = useNavigation();
  const [biigctsandbyonndonbStep, setBiigctsandbyonndonbStep] = useState(0);

  const biigctsandbyonndonbSlides = useMemo<
    Array<{
      id: string;
      badge: string;
      title: string;
      description: string;
      image: ImageSourcePropType | null;
      iconText: string;
    }>
  >(
    () => [
      {
        id: 'meet',
        badge: '🐯 Discover 8 magnificent species',
        title: 'Meet the Big Cats',
        description:
          "Explore detailed profiles of the world's most powerful felines — from the mighty Bengal tiger to the elusive snow leopard.",
        image: require('../../assets/i/biigctsandbyonlon1.png'),
        iconText: require('../../assets/i/biigctsandbyicn1.png'),
        iconBgColor: '#FDE8C8',
      },
      {
        id: 'draw',
        badge: '🗺️ Plan your wildlife adventure',
        title: 'Visit Different Zoos',
        description:
          'Find the best zoos and wildlife parks worldwide to see big cats up close. Browse detailed info and build your route.',
        image: require('../../assets/i/biigctsandbyonlon2.png'),
        iconText: require('../../assets/i/biigctsandbyicn2.png'),
        iconBgColor: '#E0F0DC',
      },
      {
        id: 'quiz',
        badge: '🧠 Quiz & daily wild facts',
        title: 'Test Your Knowledge',
        description:
          'Challenge yourself with ordering puzzles about big cat behavior. Earn points, read daily roar facts, and track your progress.',
        image: require('../../assets/i/biigctsandbyonlon3.png'),
        iconText: require('../../assets/i/biigctsandbyicn3.png'),
        iconBgColor: '#EDE0F5',
      },
      {
        id: 'zoos',
        badge: '🎨 Creative big cat challenges',
        title: 'Draw with a Friend',
        description:
          'Get a drawing theme and sketch your version alongside a friend. Compare your big cat artworks and save your favorites.',
        image: require('../../assets/i/biigctsandbyonlon4.png'),
        iconText: require('../../assets/i/biigctsandbyicn4.png'),
        iconBgColor: '#F5E0B0',
      },
    ],
    [],
  );

  const biigctsandbyonndonbSlide =
    biigctsandbyonndonbSlides[biigctsandbyonndonbStep] ??
    biigctsandbyonndonbSlides[0];

  const biigctsandbyonndonbGoToApp = () => {
    biigctsandbyonndonbNavigation.replace('Biigctsandbyonndtabbs' as never);
  };

  const biigctsandbyonndonbHandleSkip = () => {
    biigctsandbyonndonbGoToApp();
  };

  const biigctsandbyonndonbHandleBack = () => {
    setBiigctsandbyonndonbStep(prev => Math.max(0, prev - 1));
  };

  const biigctsandbyonndonbHandleNext = () => {
    if (biigctsandbyonndonbStep >= biigctsandbyonndonbSlides.length - 1) {
      biigctsandbyonndonbGoToApp();
      return;
    }
    setBiigctsandbyonndonbStep(prev =>
      Math.min(biigctsandbyonndonbSlides.length - 1, prev + 1),
    );
  };

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndonbRoot}>
        <View style={styles.biigctsandbyonndonbTopBar}>
          <View style={styles.biigctsandbyonndonbTopBarLeft} />
          <Pressable
            onPress={biigctsandbyonndonbHandleSkip}
            hitSlop={10}
            style={styles.biigctsandbyonndonbSkipBtn}>
            <Text style={styles.biigctsandbyonndonbSkipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.biigctsandbyonndonbImageCard}>
          {biigctsandbyonndonbSlide.image ? (
            <Image
              source={biigctsandbyonndonbSlide.image}
              style={styles.biigctsandbyonndonbImage}
            />
          ) : (
            <View style={styles.biigctsandbyonndonbImagePlaceholder}>
              <Text style={styles.biigctsandbyonndonbImagePlaceholderText}>
                add image
              </Text>
            </View>
          )}

          <View
            style={[
              styles.biigctsandbyonndonbImageIconWrap,
              {backgroundColor: biigctsandbyonndonbSlide.iconBgColor},
            ]}>
            <Image source={biigctsandbyonndonbSlide.iconText} />
          </View>
        </View>

        <View style={styles.biigctsandbyonndonbContent}>
          <View style={styles.biigctsandbyonndonbBadge}>
            <Text style={styles.biigctsandbyonndonbBadgeText}>
              {biigctsandbyonndonbSlide.badge}
            </Text>
          </View>

          <Text style={styles.biigctsandbyonndonbTitle}>
            {biigctsandbyonndonbSlide.title}
          </Text>
          <Text style={styles.biigctsandbyonndonbDesc}>
            {biigctsandbyonndonbSlide.description}
          </Text>
        </View>

        <View style={styles.biigctsandbyonndonbBottom}>
          <View style={styles.biigctsandbyonndonbDotsWrap}>
            {biigctsandbyonndonbSlides.map((s, idx) => {
              const biigctsandbyonndonbActive = idx === biigctsandbyonndonbStep;
              return (
                <View
                  key={s.id}
                  style={[
                    styles.biigctsandbyonndonbDot,
                    biigctsandbyonndonbActive
                      ? styles.biigctsandbyonndonbDotActive
                      : styles.biigctsandbyonndonbDotIdle,
                  ]}
                />
              );
            })}
          </View>

          <View style={styles.biigctsandbyonndonbButtonsRow}>
            <Pressable
              onPress={biigctsandbyonndonbHandleBack}
              disabled={biigctsandbyonndonbStep === 0}
              hitSlop={10}
              style={[
                styles.biigctsandbyonndonbBackBtn,
                biigctsandbyonndonbStep === 0
                  ? styles.biigctsandbyonndonbBackBtnDisabled
                  : null,
              ]}>
              <Image source={require('../../assets/i/biigctsandbyobck.png')} />
            </Pressable>

            <Pressable
              onPress={biigctsandbyonndonbHandleNext}
              style={{flex: 1}}>
              <LinearGradient
                colors={['#D4621A', '#D4621ACC']}
                style={styles.biigctsandbyonndonbNextBtn}>
                <Text style={styles.biigctsandbyonndonbNextText}>
                  {biigctsandbyonndonbStep >=
                  biigctsandbyonndonbSlides.length - 1
                    ? 'Start Exploring'
                    : 'Next'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndonb;

const styles = StyleSheet.create({
  biigctsandbyonndonbImageIconWrap: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#E9D6C8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndonbRoot: {
    flex: 1,
    paddingHorizontal: 18,
    paddingBottom: 35,
    paddingTop: 65,
  },

  biigctsandbyonndonbTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 12,
  },
  biigctsandbyonndonbTopBarLeft: {
    width: 60,
    height: 1,
  },
  biigctsandbyonndonbSkipBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  biigctsandbyonndonbSkipText: {
    color: '#8A6040',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },

  biigctsandbyonndonbImageCard: {
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#2B1715',
    height: 250,
    width: '100%',
    alignSelf: 'center',
  },
  biigctsandbyonndonbImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  biigctsandbyonndonbImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndonbImagePlaceholderText: {
    color: '#D6C8BD80',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },

  biigctsandbyonndonbImageIconText: {
    fontSize: 22,
  },

  biigctsandbyonndonbContent: {
    paddingTop: 16,
  },
  biigctsandbyonndonbBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FDE8C8',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
    marginBottom: 10,
    marginTop: 5,
  },
  biigctsandbyonndonbBadgeText: {
    color: '#CB5A00',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    lineHeight: 18,
  },
  biigctsandbyonndonbTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 28,
    marginBottom: 10,
  },
  biigctsandbyonndonbDesc: {
    color: '#FDE8C8',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    lineHeight: 24,
  },

  biigctsandbyonndonbBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 18,
  },
  biigctsandbyonndonbDotsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    gap: 8,
  },
  biigctsandbyonndonbDot: {
    height: 8,
    borderRadius: 12,
    width: 8,
  },
  biigctsandbyonndonbDotActive: {
    backgroundColor: '#D4621A',
    width: 24,
  },
  biigctsandbyonndonbDotIdle: {
    backgroundColor: '#F9CAA8',
  },

  biigctsandbyonndonbButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  biigctsandbyonndonbBackBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFDABE',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#D4621A22',
  },
  biigctsandbyonndonbBackBtnDisabled: {
    opacity: 0.7,
  },
  biigctsandbyonndonbBackText: {
    color: '#CB5A00',
    fontSize: 28,
    lineHeight: 28,
    marginTop: -2,
    fontFamily: 'Nunito-Bold',
  },
  biigctsandbyonndonbNextBtn: {
    flex: 1,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#FF6A00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndonbNextText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
});
