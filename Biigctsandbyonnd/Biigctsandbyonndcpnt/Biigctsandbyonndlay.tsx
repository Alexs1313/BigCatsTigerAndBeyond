import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={['rgba(125, 55, 37, 1)', 'rgb(56, 23, 15)']}
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
    </LinearGradient>
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
