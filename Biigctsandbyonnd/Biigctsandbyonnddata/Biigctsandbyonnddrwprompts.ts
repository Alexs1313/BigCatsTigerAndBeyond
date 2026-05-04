/** Short titles → full challenge lines shown in UI */
export const biigctsandbyonnddrwPromptTitles: readonly string[] = [
  'Sleeping Tiger',
  'Roaring Lion',
  'Fast Cheetah',
  'Snow Leopard Jump',
  'Jaguar in the Jungle',
  'Leopard on a Tree',
  'Tiger by the River',
  'Lion Pride',
  'Cheetah Chase',
  'Black Panther Shadow',
  'Cougar on a Rock',
  'Clouded Leopard Climb',
  'Tiger Face',
  'Lion Mane',
  'Big Cat Paw',
  'Jaguar Spots',
  'Leopard Tail',
  'Snowy Mountain Cat',
  'Tiger Cub',
  'Lion Cub',
  'Jungle Hunter',
  'Safari King',
  'Wild Cat Eyes',
  'Big Cat Nap',
  'Sunset Lion',
  'Rainforest Jaguar',
  'Tiger Stripes',
  'Cheetah Sprint',
  'Mountain Puma',
  'Zoo Big Cat',
  'Fierce Roar',
  'Hidden Leopard',
  'Playful Cub',
  'Cat on a Branch',
  'Golden Eyes',
  'Jungle Paws',
  'Big Cat Mask',
  'Tiger in Grass',
  'Lion at Sunrise',
  'Snow Leopard Tail',
] as const;

export const biigctsandbyonnddrwPromptLine = (title: string) => {
  const biigctsandbyonnddrwLower = title.toLowerCase();
  const biigctsandbyonnddrwVowel = /^[aeiou]/i.test(biigctsandbyonnddrwLower);
  return `Draw ${biigctsandbyonnddrwVowel ? 'an' : 'a'} ${biigctsandbyonnddrwLower}`;
};

export const biigctsandbyonnddrwRandomTitle = () => {
  const biigctsandbyonnddrwI = Math.floor(
    Math.random() * biigctsandbyonnddrwPromptTitles.length,
  );
  return biigctsandbyonnddrwPromptTitles[biigctsandbyonnddrwI] ?? 'Sleeping Tiger';
};
