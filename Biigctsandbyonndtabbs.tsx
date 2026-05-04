// tab navigation

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Biigctsandbyonndctlog from './Biigctsandbyonnd/Biigctsandbyonndscrns/Biigctsandbyonndctlog';
import Biigctsandbyonndzoos from './Biigctsandbyonnd/Biigctsandbyonndscrns/Biigctsandbyonndzoos';
import Biigctsandbyonndqqz from './Biigctsandbyonnd/Biigctsandbyonndscrns/Biigctsandbyonndqqz';

import Biigctsandbyonnddrw from './Biigctsandbyonnd/Biigctsandbyonndscrns/Biigctsandbyonnddrw';
import Biigctsandbyonndsttgs from './Biigctsandbyonnd/Biigctsandbyonndscrns/Biigctsandbyonndsttgs';

const Tab = createBottomTabNavigator();

const BiigctsandbyonndAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const biigctsandbyonndScale = useRef(new Animated.Value(1)).current;

  const biigctsandbyonndHandlePressIn = () => {
    Animated.spring(biigctsandbyonndScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const biigctsandbyonndav = new Animated.Value(0);
  biigctsandbyonndav.addListener(() => {
    return;
  });

  const biigctsandbyonndHandlePressOut = () => {
    Animated.spring(biigctsandbyonndScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={biigctsandbyonndHandlePressIn}
      onPressOut={biigctsandbyonndHandlePressOut}
      style={[style as ViewStyle, styles.biigctsandbyonndButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.biigctsandbyonndButtonInner,
          {transform: [{scale: biigctsandbyonndScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const BiigctsandbyonndIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.biigctsandbyonndIconWrap}>
      {focused ? (
        <Image
          source={require('./assets/i/biigctsandbyonnsel.png')}
          style={{position: 'absolute', top: -14, right: -4}}
        />
      ) : null}
      <View style={styles.biigctsandbyonndIconImageWrap}>
        <Image source={source} tintColor={focused ? '#7D3725' : '#FFB882'} />
      </View>
    </View>
  );
};

const biigctsandbyonndBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#7D3725', '#7D3725']}
    style={StyleSheet.absoluteFill}
  />
);

const biigctsandbyonndIconPlaces = ({focused}: {focused: boolean}) => (
  <BiigctsandbyonndIcon
    focused={focused}
    label="Home"
    source={require('./assets/i/biigctsandbyonndtb1.png')}
  />
);

const biigctsandbyonndIconSaved = ({focused}: {focused: boolean}) => (
  <BiigctsandbyonndIcon
    focused={focused}
    label="Map"
    source={require('./assets/i/biigctsandbyonndtb2.png')}
  />
);

const biigctsandbyonndIconMap = ({focused}: {focused: boolean}) => (
  <BiigctsandbyonndIcon
    focused={focused}
    label="Stories"
    source={require('./assets/i/biigctsandbyonndtb3.png')}
  />
);

const biigctsandbyonndIconBlog = ({focused}: {focused: boolean}) => (
  <BiigctsandbyonndIcon
    focused={focused}
    label="Quiz"
    source={require('./assets/i/biigctsandbyonndtb4.png')}
  />
);

const biigctsandbyonndIconQuiz = ({focused}: {focused: boolean}) => (
  <BiigctsandbyonndIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/biigctsandbyonndtb5.png')}
  />
);

const biigctsandbyonndButton = (props: Record<string, unknown>) => (
  <BiigctsandbyonndAnimatedButton {...props} />
);

const Biigctsandbyonndtabbs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.biigctsandbyonndBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: biigctsandbyonndButton,
        tabBarBackground: biigctsandbyonndBarBackground,
      }}>
      <Tab.Screen
        name="Biigctsandbyonndctlog"
        component={Biigctsandbyonndctlog}
        options={{
          tabBarIcon: biigctsandbyonndIconPlaces,
        }}
      />
      <Tab.Screen
        name="Biigctsandbyonndzoos"
        component={Biigctsandbyonndzoos}
        options={{
          tabBarIcon: biigctsandbyonndIconSaved,
        }}
      />
      <Tab.Screen
        name="Biigctsandbyonndqqz"
        component={Biigctsandbyonndqqz}
        options={{
          tabBarIcon: biigctsandbyonndIconMap,
        }}
      />
      <Tab.Screen
        name="Biigctsandbyonnddrw"
        component={Biigctsandbyonnddrw}
        options={{
          tabBarIcon: biigctsandbyonndIconBlog,
        }}
      />
      <Tab.Screen
        name="Biigctsandbyonndsttgs"
        component={Biigctsandbyonndsttgs}
        options={{
          tabBarIcon: biigctsandbyonndIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  biigctsandbyonndIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  biigctsandbyonndBar: {
    elevation: 0,
    paddingTop: 10,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 6,
    borderColor: '#FFFFFF14',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF14',
    backgroundColor: 'transparent',
    height: 84,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  biigctsandbyonndButton: {
    flex: 1,
  },
  biigctsandbyonndButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  biigctsandbyonndIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  biigctsandbyonndLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  biigctsandbyonndLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Biigctsandbyonndtabbs;
