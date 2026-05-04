export type BiigctsandbyonndqqzOptionLetter = 'A' | 'B' | 'C' | 'D';

export type BiigctsandbyonndqqzQuestion = {
  id: string;
  titleEmoji: string;
  title: string;
  question: string;
  options: Array<{letter: BiigctsandbyonndqqzOptionLetter; text: string}>;
  correctLetters: BiigctsandbyonndqqzOptionLetter[];
};

export type BiigctsandbyonndqqzFact = {
  id: string;
  tag: string;
  tagColor: string;
  body: string;
};

export const biigctsandbyonndqqzDailyFact = {
  quote:
    "A lion's roar can be heard from 8 km away — it's one of the loudest calls in the animal kingdom!",
  tag: 'Lion',
};

export const biigctsandbyonndqqzQuestions: BiigctsandbyonndqqzQuestion[] = [
  {
    id: 'tiger_hunt',
    titleEmoji: '🐯',
    title: 'Tiger Hunt Sequence',
    question: "Arrange the steps of a tiger's typical ambush hunt.",
    options: [
      {letter: 'A', text: 'Launches a short powerful attack'},
      {letter: 'B', text: 'Watches and follows the prey silently'},
      {letter: 'C', text: 'Moves closer using grass, trees, or shadows as cover'},
      {letter: 'D', text: 'Delivers the final bite and drags the prey away'},
    ],
    correctLetters: ['B', 'C', 'A', 'D'],
  },
  {
    id: 'lion_pride',
    titleEmoji: '🦁',
    title: 'Lion Pride Life',
    question: 'Arrange the usual social routine inside a lion pride.',
    options: [
      {letter: 'A', text: 'Cubs learn by watching adults'},
      {letter: 'B', text: 'Lionesses cooperate during hunting'},
      {letter: 'C', text: 'The pride rests together after feeding'},
      {letter: 'D', text: 'Adult males defend the territory'},
    ],
    correctLetters: ['D', 'B', 'C', 'A'],
  },
  {
    id: 'cheetah_sprint',
    titleEmoji: '🐆',
    title: 'Cheetah Sprint Attack',
    question: "Arrange the steps of a cheetah's high-speed hunt.",
    options: [
      {letter: 'A', text: 'Accelerates rapidly across open ground'},
      {letter: 'B', text: 'Spots prey from a distance'},
      {letter: 'C', text: 'Trips or knocks down the target'},
      {letter: 'D', text: 'Rests after the chase to cool down'},
    ],
    correctLetters: ['B', 'A', 'C', 'D'],
  },
  {
    id: 'leopard_tree',
    titleEmoji: '🐆',
    title: 'Leopard Tree Strategy',
    question: 'Arrange how a leopard protects its meal from scavengers.',
    options: [
      {letter: 'A', text: 'Climbs a tree with the prey'},
      {letter: 'B', text: 'Hunts or ambushes a suitable animal'},
      {letter: 'C', text: 'Feeds safely away from many competitors'},
      {letter: 'D', text: 'Drags the prey away from the kill site'},
    ],
    correctLetters: ['B', 'D', 'A', 'C'],
  },
  {
    id: 'jaguar_river',
    titleEmoji: '🐆',
    title: 'Jaguar River Hunt',
    question: 'Arrange the hunting sequence of a jaguar near water.',
    options: [
      {letter: 'A', text: 'Uses its powerful bite to finish the hunt'},
      {letter: 'B', text: 'Waits quietly near a riverbank'},
      {letter: 'C', text: 'Pulls the prey away from the water'},
      {letter: 'D', text: 'Strikes at fish, caiman, turtle, or drinking prey'},
    ],
    correctLetters: ['B', 'D', 'A', 'C'],
  },
  {
    id: 'snow_mountain',
    titleEmoji: '❄️',
    title: 'Snow Leopard Mountain Move',
    question:
      'Arrange how a snow leopard moves through steep mountain terrain.',
    options: [
      {letter: 'A', text: 'Uses its long tail for balance'},
      {letter: 'B', text: 'Lands on a rocky ledge'},
      {letter: 'C', text: 'Watches the path from above'},
      {letter: 'D', text: 'Leaps across a gap or slope'},
    ],
    correctLetters: ['C', 'A', 'D', 'B'],
  },
  {
    id: 'big_cat_growth',
    titleEmoji: '🐾',
    title: 'Big Cat Growth',
    question: 'Arrange the life stages of a big cat from birth to adulthood.',
    options: [
      {letter: 'A', text: 'Young cat learns to hunt'},
      {letter: 'B', text: 'Cub stays close to its mother'},
      {letter: 'C', text: 'Adult cat establishes territory'},
      {letter: 'D', text: 'Newborn cub is hidden in a safe den'},
    ],
    correctLetters: ['D', 'B', 'A', 'C'],
  },
  {
    id: 'tiger_territory',
    titleEmoji: '🐅',
    title: 'Tiger Territory Patrol',
    question: 'Arrange the steps of how a tiger marks and checks its territory.',
    options: [
      {letter: 'A', text: 'Leaves scent marks on trees or rocks'},
      {letter: 'B', text: 'Walks along familiar paths'},
      {letter: 'C', text: 'Detects signs of other animals'},
      {letter: 'D', text: 'Returns to hunting or resting areas'},
    ],
    correctLetters: ['B', 'A', 'C', 'D'],
  },
  {
    id: 'lion_roar',
    titleEmoji: '🦁',
    title: 'Lion Roar Message',
    question: "Arrange how a lion's roar works as a territory signal.",
    options: [
      {letter: 'A', text: 'Rival lions hear the warning'},
      {letter: 'B', text: 'The lion takes a strong position'},
      {letter: 'C', text: "The pride's presence is announced"},
      {letter: 'D', text: 'The lion releases a deep roar'},
    ],
    correctLetters: ['B', 'D', 'C', 'A'],
  },
  {
    id: 'clouded_climb',
    titleEmoji: '🐆',
    title: 'Clouded Leopard Climb',
    question: 'Arrange the movement of a clouded leopard climbing in trees.',
    options: [
      {letter: 'A', text: 'Balances with its long tail'},
      {letter: 'B', text: 'Grips the bark with strong paws'},
      {letter: 'C', text: 'Climbs down headfirst'},
      {letter: 'D', text: 'Moves onto a branch above the ground'},
    ],
    correctLetters: ['B', 'D', 'A', 'C'],
  },
  {
    id: 'tiger_swim',
    titleEmoji: '🐯',
    title: 'Tiger Swimming Path',
    question: 'Arrange how a tiger crosses a river or flooded area.',
    options: [
      {letter: 'A', text: 'Enters the water carefully'},
      {letter: 'B', text: 'Reaches the opposite bank'},
      {letter: 'C', text: 'Chooses a safe crossing point'},
      {letter: 'D', text: 'Swims steadily using powerful limbs'},
    ],
    correctLetters: ['C', 'A', 'D', 'B'],
  },
  {
    id: 'cheetah_cool',
    titleEmoji: '🐆',
    title: 'Cheetah Cooling Down',
    question: 'Arrange what happens after a cheetah makes a high-speed chase.',
    options: [
      {letter: 'A', text: 'The cheetah breathes heavily and rests'},
      {letter: 'B', text: 'The cheetah checks if the prey is secure'},
      {letter: 'C', text: 'The cheetah begins eating quickly'},
      {letter: 'D', text: 'The sprint ends after a short distance'},
    ],
    correctLetters: ['D', 'A', 'B', 'C'],
  },
  {
    id: 'zoo_visit',
    titleEmoji: '🐾',
    title: 'Zoo Visit Flow',
    question: 'Arrange the best order for visiting a big cat exhibit at a zoo.',
    options: [
      {letter: 'A', text: 'Read the information sign'},
      {letter: 'B', text: 'Observe the animal quietly'},
      {letter: 'C', text: 'Take photos without disturbing it'},
      {letter: 'D', text: 'Find the big cat habitat on the map'},
    ],
    correctLetters: ['D', 'A', 'B', 'C'],
  },
  {
    id: 'spot_diff',
    titleEmoji: '🐆',
    title: 'Spot the Difference',
    question:
      'Arrange the steps to identify whether a spotted big cat is a jaguar or leopard.',
    options: [
      {letter: 'A', text: 'Check the body shape'},
      {letter: 'B', text: 'Look at the rosette pattern'},
      {letter: 'C', text: 'Notice if the cat looks stockier or slimmer'},
      {letter: 'D', text: 'Compare the habitat clue if provided'},
    ],
    correctLetters: ['B', 'A', 'C', 'D'],
  },
  {
    id: 'tiger_conservation',
    titleEmoji: '🐯',
    title: 'Tiger Conservation Chain',
    question:
      'Arrange the basic conservation process for protecting wild tigers.',
    options: [
      {letter: 'A', text: 'Protect large forest habitats'},
      {letter: 'B', text: 'Monitor tiger populations'},
      {letter: 'C', text: 'Reduce poaching and illegal trade'},
      {letter: 'D', text: 'Support stable prey populations'},
    ],
    correctLetters: ['A', 'D', 'C', 'B'],
  },
  {
    id: 'lion_cub',
    titleEmoji: '🦁',
    title: 'Lion Cub Learning',
    question: 'Arrange how young lion cubs gradually learn survival skills.',
    options: [
      {letter: 'A', text: 'Cubs begin playing with siblings'},
      {letter: 'B', text: 'Cubs watch adult hunters'},
      {letter: 'C', text: 'Cubs practice stalking and pouncing'},
      {letter: 'D', text: 'Cubs follow the pride during movement'},
    ],
    correctLetters: ['A', 'B', 'C', 'D'],
  },
  {
    id: 'snow_hunt',
    titleEmoji: '🐆',
    title: 'Snow Leopard Hunt',
    question: 'Arrange the steps of a snow leopard hunting in the mountains.',
    options: [
      {letter: 'A', text: 'Uses rocks and slopes as cover'},
      {letter: 'B', text: 'Spots prey from a high position'},
      {letter: 'C', text: 'Makes a sudden downhill chase'},
      {letter: 'D', text: 'Grips the prey on steep terrain'},
    ],
    correctLetters: ['B', 'A', 'C', 'D'],
  },
  {
    id: 'photo_gallery',
    titleEmoji: '🐾',
    title: 'Photo Gallery Moment',
    question: 'Arrange the steps for adding a zoo photo to the app gallery.',
    options: [
      {letter: 'A', text: 'Add the zoo name and date'},
      {letter: 'B', text: 'Save it to the gallery'},
      {letter: 'C', text: 'Choose a photo from the device'},
      {letter: 'D', text: 'Add a short note or species name'},
    ],
    correctLetters: ['C', 'A', 'D', 'B'],
  },
  {
    id: 'food_chain',
    titleEmoji: '🐅',
    title: 'Big Cat Food Chain',
    question: 'Arrange this simple predator-prey chain.',
    options: [
      {letter: 'A', text: 'Deer eats plants'},
      {letter: 'B', text: 'Tiger hunts deer'},
      {letter: 'C', text: 'Plants grow using sunlight and water'},
      {letter: 'D', text: 'The tiger helps balance the ecosystem'},
    ],
    correctLetters: ['C', 'A', 'B', 'D'],
  },
  {
    id: 'cheetah_body',
    titleEmoji: '🐆',
    title: 'Cheetah Body Design',
    question:
      'Arrange the features that help explain why a cheetah can run so fast.',
    options: [
      {letter: 'A', text: 'Long legs create a longer stride'},
      {letter: 'B', text: 'Flexible spine stretches and contracts'},
      {letter: 'C', text: 'Semi-retractable claws improve grip'},
      {letter: 'D', text: 'Deep chest supports intense breathing'},
    ],
    correctLetters: ['D', 'B', 'A', 'C'],
  },
  {
    id: 'tiger_stripe',
    titleEmoji: '🐯',
    title: 'Tiger Stripe Logic',
    question: 'Arrange the logic behind why tiger stripes are useful.',
    options: [
      {letter: 'A', text: 'The tiger becomes harder to notice'},
      {letter: 'B', text: 'Forest light creates broken shadows'},
      {letter: 'C', text: 'The tiger moves closer to prey'},
      {letter: 'D', text: 'Stripes break up the body outline'},
    ],
    correctLetters: ['B', 'D', 'A', 'C'],
  },
  {
    id: 'pride_teamwork',
    titleEmoji: '🦁',
    title: 'Pride Hunt Teamwork',
    question: 'Arrange the teamwork steps in a lion pride hunt.',
    options: [
      {letter: 'A', text: 'Some lionesses move around the prey'},
      {letter: 'B', text: 'The prey is pushed toward waiting hunters'},
      {letter: 'C', text: 'The pride identifies a target'},
      {letter: 'D', text: 'The hunters attack together'},
    ],
    correctLetters: ['C', 'A', 'B', 'D'],
  },
  {
    id: 'black_panther',
    titleEmoji: '🐆',
    title: 'Black Panther Reveal',
    question: 'Arrange the explanation of what a black panther actually is.',
    options: [
      {letter: 'A', text: 'The cat is usually a leopard or jaguar'},
      {letter: 'B', text: 'A genetic trait causes a dark coat'},
      {letter: 'C', text: 'It is called a black panther'},
      {letter: 'D', text: 'Its spots may still be visible in bright light'},
    ],
    correctLetters: ['A', 'B', 'C', 'D'],
  },
  {
    id: 'quiz_progress',
    titleEmoji: '🐾',
    title: 'Big Cat Quiz Progress',
    question: 'Arrange the user flow for completing one sequence quiz round.',
    options: [
      {letter: 'A', text: 'Drag the answers into order'},
      {letter: 'B', text: 'Read the question carefully'},
      {letter: 'C', text: 'Tap Check Order'},
      {letter: 'D', text: 'See feedback and score'},
    ],
    correctLetters: ['B', 'A', 'C', 'D'],
  },
];

const biigctsandbyonndqqzFact = (
  id: string,
  tag: string,
  tagColor: string,
  body: string,
): BiigctsandbyonndqqzFact => ({id, tag, tagColor, body});

export const biigctsandbyonndqqzFacts: BiigctsandbyonndqqzFact[] = [
  biigctsandbyonndqqzFact(
    'f1',
    'Unique Tiger Stripes',
    '#FF8A4C',
    'Every tiger has its own stripe pattern. No two tigers look exactly the same, and their stripes continue onto the skin beneath the fur.',
  ),
  biigctsandbyonndqqzFact(
    'f2',
    'Lion Pride Life',
    '#FFD36A',
    'Lions are the most social big cats. They live in groups called prides, where lionesses often hunt together and males help defend the territory.',
  ),
  biigctsandbyonndqqzFact(
    'f3',
    'Cheetah Speed Burst',
    '#7AE0A8',
    'Cheetahs are the fastest land animals, but only for short distances. After a sprint, they need time to rest and cool down.',
  ),
  biigctsandbyonndqqzFact(
    'f4',
    'Jaguar Bite Power',
    '#FF8A4C',
    'Jaguars have one of the strongest bites among big cats. They can crush turtle shells and often hunt near rivers.',
  ),
  biigctsandbyonndqqzFact(
    'f5',
    'Leopard Tree Skills',
    '#7AE0A8',
    'Leopards are excellent climbers. They can drag prey into trees to keep it safe from lions, hyenas, and other scavengers.',
  ),
  biigctsandbyonndqqzFact(
    'f6',
    'Snow Leopard Tail Balance',
    '#9FE8FF',
    'Snow leopards use their long tails for balance on steep rocks. They also wrap the tail around their body to stay warm.',
  ),
  biigctsandbyonndqqzFact(
    'f7',
    'Tiger Swimming Talent',
    '#FF8A4C',
    'Unlike many cats, tigers enjoy water. They can swim across rivers and often cool off in lakes or pools.',
  ),
  biigctsandbyonndqqzFact(
    'f8',
    'Cheetah Tear Marks',
    '#FFD36A',
    "The black lines under a cheetah's eyes may help reduce sunlight glare. They also make the cheetah's face instantly recognizable.",
  ),
  biigctsandbyonndqqzFact(
    'f9',
    'Lion Roar Range',
    '#FFD36A',
    "A lion's roar can travel several kilometers. It helps the pride communicate and warns rivals to stay away.",
  ),
  biigctsandbyonndqqzFact(
    'f10',
    'Clouded Leopard Climb',
    '#7AE0A8',
    'Clouded leopards are amazing tree climbers. Their flexible ankles help them climb down trunks headfirst.',
  ),
  biigctsandbyonndqqzFact(
    'f11',
    'Black Panther Secret',
    '#C9A8FF',
    'A black panther is not a separate species. It is usually a melanistic leopard or jaguar with a dark coat.',
  ),
  biigctsandbyonndqqzFact(
    'f12',
    'Cougar Many Names',
    '#FF8A4C',
    'Cougars are also called pumas, mountain lions, panthers, and catamounts. They have one of the widest ranges of any wild cat in the Americas.',
  ),
  biigctsandbyonndqqzFact(
    'f13',
    'Serval Super Hearing',
    '#7AE0A8',
    'Servals have large ears that help them hear small animals moving in tall grass. They can leap high and pounce with great accuracy.',
  ),
  biigctsandbyonndqqzFact(
    'f14',
    'Caracal Air Jump',
    '#FFD36A',
    'Caracals can jump high into the air to catch birds. Their long black ear tufts make them easy to recognize.',
  ),
  biigctsandbyonndqqzFact(
    'f15',
    'Fishing Cat Water Hunter',
    '#9FE8FF',
    'Fishing cats live near wetlands and rivers. They can swim well and often hunt fish, frogs, and crabs.',
  ),
  biigctsandbyonndqqzFact(
    'f16',
    'Amur Tiger Winter Coat',
    '#9FE8FF',
    'Amur tigers have thick fur and a layer of fat that help them survive cold snowy forests.',
  ),
  biigctsandbyonndqqzFact(
    'f17',
    'Sumatran Tiger Dark Stripes',
    '#FF8A4C',
    'Sumatran tigers have dense, dark stripes that help them hide in rainforest shadows.',
  ),
  biigctsandbyonndqqzFact(
    'f18',
    'Lioness Hunting Team',
    '#FFD36A',
    'Lionesses often work together during hunts. Teamwork helps them surround prey and improve their chances of success.',
  ),
  biigctsandbyonndqqzFact(
    'f19',
    'Jaguar Rosette Clue',
    '#FF8A4C',
    'Jaguars and leopards both have rosettes, but jaguars often have small spots inside their rosette markings.',
  ),
  biigctsandbyonndqqzFact(
    'f20',
    'Snow Leopard Silent Life',
    '#9FE8FF',
    'Snow leopards are called “ghosts of the mountains” because they are very hard to see in the wild.',
  ),
  biigctsandbyonndqqzFact(
    'f21',
    'Cheetah Cannot Roar',
    '#FFD36A',
    'Cheetahs cannot roar like lions or tigers. They communicate with chirps, purrs, growls, and hisses.',
  ),
  biigctsandbyonndqqzFact(
    'f22',
    'Tiger Night Vision',
    '#FF8A4C',
    'Tigers can see well in low light. This helps them hunt at dusk, dawn, and during the night.',
  ),
  biigctsandbyonndqqzFact(
    'f23',
    'Leopard Adaptability',
    '#7AE0A8',
    'Leopards can live in forests, mountains, savannahs, and even dry regions. This makes them one of the most adaptable big cats.',
  ),
  biigctsandbyonndqqzFact(
    'f24',
    'Asiatic Lion Rarity',
    '#FFD36A',
    "Asiatic lions live mainly in and around India's Gir Forest. They are one of the rarest lion populations in the world.",
  ),
  biigctsandbyonndqqzFact(
    'f25',
    'Paw Prints Tell Stories',
    '#FFFFFFB3',
    'Big cat tracks can reveal size, direction, and movement. Wildlife experts use tracks to study animals without seeing them directly.',
  ),
  biigctsandbyonndqqzFact(
    'f26',
    'Tiger Whisker Sensors',
    '#FF8A4C',
    'Tigers use their whiskers to sense nearby objects, especially in darkness or dense vegetation.',
  ),
  biigctsandbyonndqqzFact(
    'f27',
    'Lion Mane Signal',
    '#FFD36A',
    "A male lion's mane can make him look larger and stronger. It may also signal age, health, and dominance.",
  ),
  biigctsandbyonndqqzFact(
    'f28',
    'Cheetah Flexible Spine',
    '#FFD36A',
    "A cheetah's flexible spine stretches and contracts while running, helping it take very long strides.",
  ),
  biigctsandbyonndqqzFact(
    'f29',
    'Jaguar Water Confidence',
    '#FF8A4C',
    'Jaguars are comfortable around water. They can swim across rivers and hunt aquatic animals.',
  ),
  biigctsandbyonndqqzFact(
    'f30',
    'Leopard Silent Walk',
    '#7AE0A8',
    'Leopards move with soft, careful steps. Their quiet movement helps them approach prey without being noticed.',
  ),
  biigctsandbyonndqqzFact(
    'f31',
    'Snow Leopard Wide Paws',
    '#9FE8FF',
    'Snow leopards have wide, furry paws that work like natural snowshoes on cold mountain slopes.',
  ),
  biigctsandbyonndqqzFact(
    'f32',
    'Tiger Scent Marks',
    '#FF8A4C',
    'Tigers mark trees, rocks, and paths with scent. This helps them claim territory and avoid unnecessary fights.',
  ),
  biigctsandbyonndqqzFact(
    'f33',
    'Lion Cub Play',
    '#FFD36A',
    'Lion cubs learn important survival skills through play. Chasing, pouncing, and wrestling prepare them for hunting later.',
  ),
  biigctsandbyonndqqzFact(
    'f34',
    'Cheetah Tail Steering',
    '#FFD36A',
    "A cheetah's long tail helps it balance and turn quickly during high-speed chases.",
  ),
  biigctsandbyonndqqzFact(
    'f35',
    'Jaguar Skull Bite',
    '#FF8A4C',
    'Jaguars often use a powerful bite to the skull or neck. This makes their hunting style different from many other big cats.',
  ),
  biigctsandbyonndqqzFact(
    'f36',
    'Leopard Night Hunter',
    '#7AE0A8',
    'Leopards are mostly active at night. Their sharp vision and quiet movement make them excellent nocturnal hunters.',
  ),
  biigctsandbyonndqqzFact(
    'f37',
    'Snow Leopard Long Jump',
    '#9FE8FF',
    'Snow leopards can leap across rocky gaps with impressive strength and control.',
  ),
  biigctsandbyonndqqzFact(
    'f38',
    'Tiger Fake Eyes',
    '#FF8A4C',
    'Some tigers have white spots on the back of their ears. These markings may help cubs follow their mother or confuse threats.',
  ),
  biigctsandbyonndqqzFact(
    'f39',
    'Lion Pride Territory',
    '#FFD36A',
    'A lion pride defends its territory from rival lions. Roaring, scent marking, and patrols help protect their space.',
  ),
  biigctsandbyonndqqzFact(
    'f40',
    'Cheetah Day Hunter',
    '#FFD36A',
    'Cheetahs often hunt during the day. This helps them avoid stronger night predators like lions and hyenas.',
  ),
  biigctsandbyonndqqzFact(
    'f41',
    'Clouded Leopard Teeth',
    '#7AE0A8',
    'Clouded leopards have unusually long canine teeth for their body size, giving them a very powerful bite.',
  ),
  biigctsandbyonndqqzFact(
    'f42',
    'Cougar High Leap',
    '#FF8A4C',
    'Cougars can jump great distances and heights. Their strong hind legs help them ambush prey from rocks or slopes.',
  ),
  biigctsandbyonndqqzFact(
    'f43',
    'Serval Pounce Accuracy',
    '#7AE0A8',
    'Servals are extremely accurate hunters. They often leap high and land directly on small prey hidden in grass.',
  ),
  biigctsandbyonndqqzFact(
    'f44',
    'Caracal Ear Tufts',
    '#FFD36A',
    'Caracals have long black ear tufts. These may help with communication and make their silhouette easy to recognize.',
  ),
  biigctsandbyonndqqzFact(
    'f45',
    'Fishing Cat Wetland Life',
    '#9FE8FF',
    'Fishing cats depend on wetlands. Healthy marshes, rivers, and mangroves are essential for their survival.',
  ),
  biigctsandbyonndqqzFact(
    'f46',
    'Amur Tiger Huge Territory',
    '#9FE8FF',
    'Amur tigers need very large territories because prey can be spread out across snowy forests.',
  ),
  biigctsandbyonndqqzFact(
    'f47',
    'Sumatran Tiger Dense Stripes',
    '#FF8A4C',
    'Sumatran tigers often have more closely spaced stripes than other tigers, helping them blend into rainforest shadows.',
  ),
  biigctsandbyonndqqzFact(
    'f48',
    'Malayan Tiger Forest Life',
    '#FF8A4C',
    'Malayan tigers live in dense tropical forests. Their smaller size helps them move through thick vegetation.',
  ),
  biigctsandbyonndqqzFact(
    'f49',
    'Indochinese Tiger Hidden Range',
    '#FF8A4C',
    'Indochinese tigers are very secretive. Scientists often rely on camera traps to confirm where they still live.',
  ),
  biigctsandbyonndqqzFact(
    'f50',
    'White Tiger Color Trait',
    '#FFFFFFB3',
    'White tigers are not a separate species. Their pale coat comes from a rare genetic color variation.',
  ),
  biigctsandbyonndqqzFact(
    'f51',
    'Black Panther Hidden Spots',
    '#C9A8FF',
    'Black panthers still have spots or rosettes. They are easiest to see when light hits the coat at the right angle.',
  ),
  biigctsandbyonndqqzFact(
    'f52',
    'Lynx Ear Tufts',
    '#9FE8FF',
    'Lynx have pointed ear tufts that may improve sound detection and help with visual communication.',
  ),
  biigctsandbyonndqqzFact(
    'f53',
    'Canada Lynx Snow Paws',
    '#9FE8FF',
    'Canada lynx have large paws that help them walk across deep snow while hunting snowshoe hares.',
  ),
  biigctsandbyonndqqzFact(
    'f54',
    'Asiatic Lion Belly Fold',
    '#FFD36A',
    'Asiatic lions often have a visible fold of skin along the belly, which helps distinguish them from many African lions.',
  ),
  biigctsandbyonndqqzFact(
    'f55',
    'Big Cat Rest Time',
    '#FFFFFFB3',
    'Large cats spend many hours resting. Saving energy is important because hunting requires sudden bursts of power.',
  ),
];

export const biigctsandbyonndqqzPointsMax = 400;

export const biigctsandbyonndqqzLetterToIndex = (
  letter: BiigctsandbyonndqqzOptionLetter,
): number => letter.charCodeAt(0) - 65;

export const biigctsandbyonndqqzCorrectIndices = (
  q: BiigctsandbyonndqqzQuestion,
): number[] => q.correctLetters.map(biigctsandbyonndqqzLetterToIndex);
