import AsyncStorage from '@react-native-async-storage/async-storage';

export type BiigctsandbyonnddrwPoint = {x: number; y: number};

export type BiigctsandbyonnddrwStroke = {
  color: string;
  width: number;
  points: BiigctsandbyonnddrwPoint[];
};

export type BiigctsandbyonnddrwSavedSketch = {
  id: string;
  promptLine: string;
  side: 'mine' | 'partner';
  createdAt: number;
  canvasW: number;
  canvasH: number;
  strokes: BiigctsandbyonnddrwStroke[];
};

export const biigctsandbyonnddrwStorStorageKey =
  'biigctsandbyonnddrwgalry_v1';

export const biigctsandbyonnddrwStorLoad = async (): Promise<
  BiigctsandbyonnddrwSavedSketch[]
> => {
  try {
    const biigctsandbyonnddrwRaw = await AsyncStorage.getItem(
      biigctsandbyonnddrwStorStorageKey,
    );
    if (!biigctsandbyonnddrwRaw) {
      return [];
    }
    const biigctsandbyonnddrwParsed = JSON.parse(
      biigctsandbyonnddrwRaw,
    ) as BiigctsandbyonnddrwSavedSketch[];
    return Array.isArray(biigctsandbyonnddrwParsed)
      ? biigctsandbyonnddrwParsed
      : [];
  } catch {
    return [];
  }
};

export const biigctsandbyonnddrwStorSave = async (
  biigctsandbyonnddrwList: BiigctsandbyonnddrwSavedSketch[],
) => {
  await AsyncStorage.setItem(
    biigctsandbyonnddrwStorStorageKey,
    JSON.stringify(biigctsandbyonnddrwList),
  );
};

export const biigctsandbyonnddrwStorClear = async () => {
  await AsyncStorage.removeItem(biigctsandbyonnddrwStorStorageKey);
};

export const biigctsandbyonnddrwStorAppend = async (
  biigctsandbyonnddrwItems: BiigctsandbyonnddrwSavedSketch[],
) => {
  const biigctsandbyonnddrwPrev = await biigctsandbyonnddrwStorLoad();
  await biigctsandbyonnddrwStorSave([
    ...biigctsandbyonnddrwItems,
    ...biigctsandbyonnddrwPrev,
  ]);
};
