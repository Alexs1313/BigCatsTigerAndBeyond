import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const biigctsandbyonndloadhtmlloader = `    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .loader {
            width: 84px;
            aspect-ratio: 1;
            background:
              linear-gradient(#ff4500 0 0) left/50% 100% no-repeat,
              conic-gradient(
                from -90deg at 32px 9.47px,
                #fff8dc 135deg,
                #8b0000 0 270deg,
                #ffa500 0
              );
            background-blend-mode: multiply;
            -webkit-mask: linear-gradient(
                to bottom right,
                transparent 8px,
                black 0 52px,
                transparent 0
              ),
              conic-gradient(from -90deg at right 6px bottom 6px, black 90deg, transparent 0);
            mask: linear-gradient(to bottom right, transparent 8px, black 0 52px, transparent 0),
              conic-gradient(from -90deg at right 6px bottom 6px, black 90deg, transparent 0);
            background-size: 50% 50%;
            -webkit-mask-size: 50% 50%;
            mask-size: 50% 50%;
            -webkit-mask-composite: source-in;
            mask-composite: intersect;
            animation: l9 1.8s infinite cubic-bezier(0.5, 0.2, 0.5, 1);
            box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
            transform: perspective(1000px) rotateY(15deg);
          }

          @keyframes l9 {
            0% {
              background-position: 0% 0%, 0 0;
              transform: perspective(1000px) rotateY(15deg) scale(1);
              box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
            }
            25% {
              background-position: 100% 0%, 0 0;
            }
            50% {
              background-position: 100% 100%, 0 0;
              transform: perspective(1000px) rotateY(15deg) scale(1.08);
              box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
            }
            75% {
              background-position: 0% 100%, 0 0;
            }
            100% {
              background-position: 0% 0%, 0 0;
              transform: perspective(1000px) rotateY(15deg) scale(1);
              box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
            }
          }
        </style>
      </head>
      <body>
        <div class="loader"></div>
      </body>
    </html>`;

const Biigctsandbyonndload = () => {
  const biigctsandbyonndloadNavigation = useNavigation();

  useEffect(() => {
    const biigctsandbyonndloadTimer = setTimeout(() => {
      biigctsandbyonndloadNavigation.navigate('Biigctsandbyonndonb' as never);
    }, 6000);

    return () => {
      clearTimeout(biigctsandbyonndloadTimer);
    };
  }, [biigctsandbyonndloadNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/biigctsandbyonloadbg.png')}
      style={styles.biigctsandbyonndloadimageBg}>
      <ScrollView
        contentContainerStyle={styles.biigctsandbyonndloadscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.biigctsandbyonndloadbottomWrap}>
          <WebView
            source={{html: biigctsandbyonndloadhtmlloader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Biigctsandbyonndload;

const styles = StyleSheet.create({
  biigctsandbyonndloadimageBg: {
    flex: 1,
    backgroundColor: '#1A1E3D',
  },
  biigctsandbyonndloadscrollContent: {
    flexGrow: 1,
  },

  biigctsandbyonndloadbottomWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
