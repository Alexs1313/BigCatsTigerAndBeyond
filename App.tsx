import {NavigationContainer} from '@react-navigation/native';

import Biigctsandbyonndstakk from './Biigctsandbyonnd/Biigctsandbyonndnav/Biigctsandbyonndstakk.tsx';
import {BiigctsandbyonndcntxtProvider} from './Biigctsandbyonnd/Biigctsandbyonndstrg/Biigctsandbyonndcntxt.tsx';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <BiigctsandbyonndcntxtProvider>
        <Biigctsandbyonndstakk />
      </BiigctsandbyonndcntxtProvider>

      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
};

export default App;
