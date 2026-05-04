import React, {createContext, useContext, useEffect, useState} from 'react';

import {biigctsandbyonndPrefsLoadNotifications} from '../Biigctsandbyonnddata/Biigctsandbyonndprefs';

type BiigctsandbyonndStore = {
  biigctsandbyonndNotifs: boolean;
  setBiigctsandbyonndNotifs: (next: boolean) => void;
};

export const StoreContext = createContext<BiigctsandbyonndStore | undefined>(
  undefined,
);

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error('err');
  }
  return ctx;
};

export const BiigctsandbyonndcntxtProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [biigctsandbyonndNotifs, setBiigctsandbyonndNotifs] = useState(false);

  useEffect(() => {
    let biigctsandbyonndcntxtLive = true;
    biigctsandbyonndPrefsLoadNotifications().then(v => {
      if (biigctsandbyonndcntxtLive) {
        setBiigctsandbyonndNotifs(v);
      }
    });
    return () => {
      biigctsandbyonndcntxtLive = false;
    };
  }, []);

  const contextValues = {
    biigctsandbyonndNotifs,
    setBiigctsandbyonndNotifs,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};
