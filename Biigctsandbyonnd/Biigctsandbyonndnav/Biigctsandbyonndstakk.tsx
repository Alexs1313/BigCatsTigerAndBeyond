import {createStackNavigator} from '@react-navigation/stack';

import Biigctsandbyonndtabbs from '../../Biigctsandbyonndtabbs.tsx';
import Biigctsandbyonndonb from '../Biigctsandbyonndscrns/Biigctsandbyonndonb.tsx';
import Biigctsandbyonndload from '../Biigctsandbyonndcpnt/Biigctsandbyonndload.tsx';

import Biigctsandbyonndctdet from '../Biigctsandbyonndscrns/Biigctsandbyonndctdet.tsx';

import Biigctsandbyonndzoodet from '../Biigctsandbyonndscrns/Biigctsandbyonndzoodet.tsx';
import Biigctsandbyonndqqzrun from '../Biigctsandbyonndscrns/Biigctsandbyonndqqzrun.tsx';
import Biigctsandbyonnddrwgalry from '../Biigctsandbyonndscrns/Biigctsandbyonnddrwgalry.tsx';
import Biigctsandbyonndsttgsabout from '../Biigctsandbyonndscrns/Biigctsandbyonndsttgsabout.tsx';

const Stack = createStackNavigator();

const Biigctsandbyonndstakk = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Biigctsandbyonndload"
        component={Biigctsandbyonndload}
      />
      <Stack.Screen
        name="Biigctsandbyonndonb"
        component={Biigctsandbyonndonb}
      />
      <Stack.Screen
        name="Biigctsandbyonndtabbs"
        component={Biigctsandbyonndtabbs}
      />
      <Stack.Screen
        name="Biigctsandbyonndctdet"
        component={Biigctsandbyonndctdet}
      />
      <Stack.Screen
        name="Biigctsandbyonndzoodet"
        component={Biigctsandbyonndzoodet}
      />
      <Stack.Screen
        name="Biigctsandbyonndqqzrun"
        component={Biigctsandbyonndqqzrun}
      />
      <Stack.Screen
        name="Biigctsandbyonnddrwgalry"
        component={Biigctsandbyonnddrwgalry}
      />
      <Stack.Screen
        name="Biigctsandbyonndsttgsabout"
        component={Biigctsandbyonndsttgsabout}
      />
    </Stack.Navigator>
  );
};

export default Biigctsandbyonndstakk;
