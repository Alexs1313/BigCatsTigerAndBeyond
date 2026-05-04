import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const biigctsandbyonndloadhtmlloader = `  <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .loader {
            width: 64px;
            height: 64px;
            position: relative;
            background: #FFF;
            border-radius: 4px;
            overflow: hidden;
          }

          .loader:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 40px;
            transform: rotate(45deg) translate(30%, 40%);
            background: #ff9371;
            box-shadow: 32px -34px 0 5px #ff3d00;
            animation: slide 2s infinite ease-in-out alternate;
          }

          .loader:after {
            content: "";
            position: absolute;
            left: 10px;
            top: 10px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #ff3d00;
            transform: rotate(0deg);
            transform-origin: 35px 145px;
            animation: rotate 2s infinite ease-in-out;
          }

          @keyframes slide {
            0%, 100% {
              bottom: -35px;
            }

            25%, 75% {
              bottom: -2px;
            }

            20%, 80% {
              bottom: 2px;
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(-15deg);
            }

            25%, 75% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(25deg);
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
