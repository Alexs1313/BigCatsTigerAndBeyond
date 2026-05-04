import AsyncStorage from '@react-native-async-storage/async-storage';

import {biigctsandbyonnddrwStorClear} from './Biigctsandbyonnddrwstor';

export const biigctsandbyonndPrefsKeys = {
  notifications: 'biigctsandbyonnd_prefs_notifications_v1',
  favCats: 'biigctsandbyonnd_prefs_favcats_v1',
} as const;

export const biigctsandbyonndPrefsLoadNotifications =
  async (): Promise<boolean> => {
    try {
      const biigctsandbyonndPrefsRaw = await AsyncStorage.getItem(
        biigctsandbyonndPrefsKeys.notifications,
      );
      if (biigctsandbyonndPrefsRaw === null) {
        return true;
      }
      return biigctsandbyonndPrefsRaw === '1';
    } catch {
      return true;
    }
  };

export const biigctsandbyonndPrefsSaveNotifications = async (
  biigctsandbyonndPrefsOn: boolean,
) => {
  await AsyncStorage.setItem(
    biigctsandbyonndPrefsKeys.notifications,
    biigctsandbyonndPrefsOn ? '1' : '0',
  );
};

export const biigctsandbyonndPrefsLoadFavCats = async (): Promise<
  Record<string, true>
> => {
  try {
    const biigctsandbyonndPrefsRaw = await AsyncStorage.getItem(
      biigctsandbyonndPrefsKeys.favCats,
    );
    if (!biigctsandbyonndPrefsRaw) {
      return {};
    }
    const biigctsandbyonndPrefsParsed = JSON.parse(
      biigctsandbyonndPrefsRaw,
    ) as Record<string, true>;
    return biigctsandbyonndPrefsParsed &&
      typeof biigctsandbyonndPrefsParsed === 'object'
      ? biigctsandbyonndPrefsParsed
      : {};
  } catch {
    return {};
  }
};

export const biigctsandbyonndPrefsSaveFavCats = async (
  biigctsandbyonndPrefsFav: Record<string, true>,
) => {
  await AsyncStorage.setItem(
    biigctsandbyonndPrefsKeys.favCats,
    JSON.stringify(biigctsandbyonndPrefsFav),
  );
};

export const biigctsandbyonndPrefsClearAll = async () => {
  await AsyncStorage.multiRemove([
    biigctsandbyonndPrefsKeys.notifications,
    biigctsandbyonndPrefsKeys.favCats,
  ]);
  await biigctsandbyonnddrwStorClear();
};
