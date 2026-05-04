import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

const Biigctsandbyonndlay = ({
  children,
  biigctsandbyonndlayScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  biigctsandbyonndlayScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <ImageBackground
      source={require('../../assets/i/biigctsandbybg.png')}
      style={styles.biigctsandbyonndlayBackground}>
      {biigctsandbyonndlayScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.biigctsandbyonndlayScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.biigctsandbyonndlayFill}>{children}</View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  biigctsandbyonndlayBackground: {
    flex: 1,
    backgroundColor: '#1E1313',
  },
  biigctsandbyonndlayScrollContent: {
    flexGrow: 1,
  },
  biigctsandbyonndlayFill: {
    flex: 1,
  },
});

export default Biigctsandbyonndlay;
