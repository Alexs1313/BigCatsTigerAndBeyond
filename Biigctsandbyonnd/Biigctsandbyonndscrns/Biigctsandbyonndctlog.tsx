import {
  biigctsandbyonndPrefsLoadFavCats,
  biigctsandbyonndPrefsSaveFavCats,
} from '../Biigctsandbyonnddata/Biigctsandbyonndprefs';
import LinearGradient from 'react-native-linear-gradient';

import Toast from 'react-native-toast-message';
import {useStore} from '../Biigctsandbyonndstrg/Biigctsandbyonndcntxt';

import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type ImageSourcePropType,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Biigctsandbyonndlay from '../Biigctsandbyonndcpnt/Biigctsandbyonndlay';

type BiigctsandbyonndctlogCat = {
  id: string;
  name: string;
  scientificName: string;
  status: string;
  tag: string;
  description: string;
  speed: string;
  weight: string;
  size: string;
  diet: string;
  naturalHabitat: string;
  conservationStatus: string;
  conservationNote: string;
  facts: string[];
  image: ImageSourcePropType | null;
};

const Biigctsandbyonndctlog = () => {
  const biigctsandbyonndctlogNavigation = useNavigation();
  const [biigctsandbyonndctlogQuery, setBiigctsandbyonndctlogQuery] =
    useState('');
  const [biigctsandbyonndctlogFavIds, setBiigctsandbyonndctlogFavIds] =
    useState<Record<string, true>>({});
  const [biigctsandbyonndctlogFavOnly, setBiigctsandbyonndctlogFavOnly] =
    useState(false);

  const {biigctsandbyonndNotifs} = useStore();

  useFocusEffect(
    useCallback(() => {
      let biigctsandbyonndctlogActive = true;
      biigctsandbyonndPrefsLoadFavCats().then(rows => {
        if (biigctsandbyonndctlogActive) {
          setBiigctsandbyonndctlogFavIds(rows);
        }
      });
      return () => {
        biigctsandbyonndctlogActive = false;
      };
    }, []),
  );

  const biigctsandbyonndctlogCats = useMemo<BiigctsandbyonndctlogCat[]>(
    () => [
      {
        id: 'bengal_tiger',
        scientificName: 'Panthera tigris',
        name: 'Bengal Tiger',
        status: 'Endangered',
        tag: 'Apex Predator',
        description:
          'The Bengal tiger is one of the most iconic big cats in the world, known for its powerful body, deep orange coat, bold black stripes, and intense golden eyes. It is the most numerous tiger subspecies, yet it still faces serious threats from habitat loss, poaching, and conflict with humans.',
        speed: '49–65 km/h',
        weight: '140–300 kg',
        size: '270–310 cm body length',
        diet: 'Deer, wild boar, water buffalo, monkeys',
        naturalHabitat:
          'Tropical and subtropical forests, mangroves, grasslands',
        conservationStatus: 'Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'No two Bengal tigers have the same stripe pattern — each one is as unique as a human fingerprint.',
          'Bengal tigers are excellent swimmers and may cross rivers or flooded forest areas with ease.',
          'A tiger’s roar can be heard from several kilometers away.',
          'They usually hunt alone, most often at dusk, dawn, or during the night.',
          'The Sundarbans mangrove forest is one of the most famous places where Bengal tigers live.',
        ],
        image: require('../../assets/i/biigctsandbcatl1.png'),
      },
      {
        id: 'african_lion',
        scientificName: 'Panthera leo',
        name: 'African Lion',
        status: 'Vulnerable',
        tag: 'Pride Leader',
        description:
          'The African lion is one of the most recognizable animals on Earth, often called the “king of beasts” because of its impressive mane, deep roar, and powerful presence. Unlike most big cats, lions are highly social and live in groups called prides, where females, cubs, and a small number of males share territory and protection.',
        speed: '60–80 km/h in short bursts',
        weight: '120–250 kg',
        size: '240–330 cm body length including tail',
        diet: 'Zebras, wildebeest, antelope, buffalo, warthogs',
        naturalHabitat: 'Savannahs, grasslands, open woodlands, dry scrublands',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Lions are the only big cats that live in large social groups called prides.',
          'A lion’s roar can travel across open landscapes and be heard from far away.',
          'Lionesses do most of the hunting for the pride.',
          'Male lions use their mane to appear larger and stronger to rivals.',
          'Lions spend much of the day resting to save energy for hunting and territory patrols.',
          'White lions are not albino; their pale color comes from a rare genetic trait.',
        ],
        image: require('../../assets/i/biigctsandbcatl2.png'),
      },
      {
        id: 'amur_tiger',
        scientificName: 'Panthera tigris altaica',
        name: 'Amur Tiger',
        status: 'Endangered',
        tag: 'Frozen Forest Giant',
        description:
          'The Amur tiger, also known as the Siberian tiger, is the largest tiger subspecies and one of the most powerful cats on the planet. It lives in cold forests of the Russian Far East and nearby regions, where snow, mountains, and dense woodland shape its daily survival.',
        speed: '50–65 km/h',
        weight: '160–320 kg',
        size: '280–330 cm body length including tail',
        diet: 'Deer, wild boar, elk, hares, smaller mammals',
        naturalHabitat: 'Cold temperate forests, snowy taiga, mountain forests',
        conservationStatus: 'Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'The Amur tiger is considered the largest living wild cat.',
          'Its thick winter coat helps protect it from extreme cold.',
          'Amur tigers need very large territories to find enough prey.',
          'Their paw prints can be huge and are often visible in snow.',
          'They are powerful swimmers despite living in cold northern forests.',
        ],
        image: require('../../assets/i/biigctsandbcatl3.png'),
      },
      {
        id: 'jaguar',
        scientificName: 'Panthera onca',
        name: 'Jaguar',
        status: 'Near Threatened',
        tag: 'Jungle Crusher',
        description:
          'The jaguar is the largest cat in the Americas and the third-largest big cat in the world after the tiger and lion. It has a compact, muscular body, a broad head, and a golden coat covered with rosettes.',
        speed: '50–80 km/h in short bursts',
        weight: '55–120 kg',
        size: '160–260 cm body length including tail',
        diet: 'Capybaras, deer, caimans, fish, turtles, peccaries',
        naturalHabitat:
          'Rainforests, wetlands, river valleys, dry forests, grasslands',
        conservationStatus: 'Near Threatened',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Jaguars have the strongest bite force of any big cat relative to body size.',
          'They often hunt near water and can catch fish, turtles, and caimans.',
          'A jaguar’s rosettes usually have small spots inside them, unlike leopard rosettes.',
          'Black jaguars are often called black panthers, but they are still jaguars.',
          'Jaguars are important apex predators in rainforest ecosystems.',
        ],
        image: require('../../assets/i/biigctsandbcatl4.png'),
      },
      {
        id: 'leopard',
        scientificName: 'Panthera pardus',
        name: 'Leopard',
        status: 'Vulnerable',
        tag: 'Silent Climber',
        description:
          'The leopard is one of the most adaptable and mysterious big cats. It can live in forests, mountains, savannahs, deserts, and even near human settlements.',
        speed: '50–60 km/h',
        weight: '30–90 kg',
        size: '160–260 cm body length including tail',
        diet: 'Antelope, monkeys, birds, rodents, reptiles, small mammals',
        naturalHabitat: 'Forests, savannahs, mountains, deserts, scrublands',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Leopards can carry prey heavier than themselves into trees.',
          'They are mostly solitary and extremely difficult to spot in the wild.',
          'Their rosette markings help them disappear into shadows and vegetation.',
          'Leopards are strong swimmers, although they are not as water-focused as jaguars.',
          'Black leopards are also called black panthers.',
        ],
        image: require('../../assets/i/biigctsandbcatl5.png'),
      },
      {
        id: 'snow_leopard',
        scientificName: 'Panthera uncia',
        name: 'Snow Leopard',
        status: 'Vulnerable',
        tag: 'Mountain Ghost',
        description:
          'The snow leopard is one of the most elusive and beautiful big cats, perfectly adapted to life in cold mountain regions.',
        speed: '55–65 km/h in short bursts',
        weight: '25–55 kg',
        size: '180–230 cm body length including tail',
        diet: 'Blue sheep, ibex, marmots, hares, birds, mountain goats',
        naturalHabitat:
          'High mountains, rocky cliffs, alpine valleys, cold steppe regions',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Snow leopards use their long tails for balance and as a warm wrap in freezing weather.',
          'Their wide paws act like natural snowshoes.',
          'They can leap several meters across rocky mountain terrain.',
          'Snow leopards cannot roar like lions or tigers.',
          'Their pale coat makes them almost invisible among rocks and snow.',
          'They are usually active at dawn, dusk, and night.',
        ],
        image: require('../../assets/i/biigctsandbcatl6.png'),
      },
      {
        id: 'cheetah',
        scientificName: 'Acinonyx jubatus',
        name: 'Cheetah',
        status: 'Vulnerable',
        tag: 'Speed Specialist',
        description:
          'The cheetah is the fastest land animal, built for explosive acceleration rather than brute strength.',
        speed: '80–110 km/h in short sprints',
        weight: '20–65 kg',
        size: '180–230 cm body length including tail',
        diet: 'Gazelles, impalas, hares, young antelope, birds',
        naturalHabitat: 'Open grasslands, savannahs, dry plains, scrublands',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Cheetahs can accelerate faster than most sports cars over a short distance.',
          'Their black “tear marks” may help reduce sun glare while hunting.',
          'Cheetahs cannot roar; they chirp, purr, growl, and hiss.',
          'They use their long tail like a steering tool while running.',
          'After a sprint, a cheetah must rest and cool down before eating.',
        ],
        image: require('../../assets/i/biigctsandbcatl7.png'),
      },
      {
        id: 'cougar',
        scientificName: 'Puma concolor',
        name: 'Cougar',
        status: 'Least Concern',
        tag: 'Mountain Shadow',
        description:
          'The cougar, also known as the puma or mountain lion, is a powerful and highly adaptable wild cat found across the Americas.',
        speed: '64–80 km/h in short bursts',
        weight: '35–100 kg',
        size: '150–275 cm body length including tail',
        diet: 'Deer, elk, rabbits, raccoons, birds, small mammals',
        naturalHabitat:
          'Mountains, forests, deserts, grasslands, rocky regions',
        conservationStatus: 'Least Concern',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Cougars have many names, including puma, mountain lion, catamount, and panther.',
          'They cannot roar, but they can purr, growl, hiss, and scream.',
          'Cougars are excellent jumpers and can leap great distances.',
          'They have one of the widest ranges of any wild cat in the Americas.',
        ],
        image: require('../../assets/i/biigctsandbcatl8.png'),
      },
      {
        id: 'clouded_leopard',
        scientificName: 'Neofelis nebulosa',
        name: 'Clouded Leopard',
        status: 'Vulnerable',
        tag: 'Forest Acrobat',
        description:
          'The clouded leopard is a mysterious forest cat with large cloud-shaped markings, a long tail, and unusually long canine teeth for its size.',
        speed: '40–50 km/h',
        weight: '11–23 kg',
        size: '120–200 cm body length including tail',
        diet: 'Birds, monkeys, small deer, rodents, reptiles',
        naturalHabitat:
          'Tropical forests, subtropical forests, dense woodland, mountain forests',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Clouded leopards have some of the longest canine teeth relative to body size among wild cats.',
          'Their long tail helps them balance while climbing.',
          'They can climb down trees headfirst.',
          'Their cloud-like markings give them excellent camouflage in forest shadows.',
          'They are rarely seen in the wild because they are extremely secretive.',
        ],
        image: require('../../assets/i/biigctsandbcatl9.png'),
      },
      {
        id: 'asiatic_lion',
        scientificName: 'Panthera leo persica',
        name: 'Asiatic Lion',
        status: 'Endangered',
        tag: 'Rare Royal Cat',
        description:
          'The Asiatic lion is a rare lion population found mainly in India’s Gir Forest region. It looks similar to the African lion but is usually slightly smaller.',
        speed: '60–70 km/h in short bursts',
        weight: '110–190 kg',
        size: '240–290 cm body length including tail',
        diet: 'Deer, antelope, wild boar, livestock when natural prey is limited',
        naturalHabitat: 'Dry forests, scrublands, grasslands, open woodland',
        conservationStatus: 'Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Asiatic lions live mainly in and around Gir Forest in India.',
          'Male Asiatic lions usually have shorter, thinner manes than many African lions.',
          'They have a visible belly fold that helps distinguish them from African lions.',
          'Their survival is considered one of India’s major conservation stories.',
          'Because they live in one main region, disease outbreaks can be especially dangerous for them.',
        ],
        image: require('../../assets/i/biigctsandbcatl10.png'),
      },
      {
        id: 'black_panther',
        scientificName: 'Panthera pardus or Panthera onca',
        name: 'Black Panther',
        status: 'Depends on species',
        tag: 'Shadow Hunter',
        description:
          'A black panther is not a separate species. The name usually refers to a melanistic leopard in Africa or Asia, or a melanistic jaguar in the Americas.',
        speed: 'Depends on species',
        weight: 'Depends on species',
        size: 'Depends on species',
        diet: 'Deer, monkeys, birds, wild pigs, reptiles, smaller mammals',
        naturalHabitat:
          'Rainforests, dense forests, wetlands, mountain forests',
        conservationStatus: 'Depends on species',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'A black panther is usually a black leopard or a black jaguar.',
          'The dark coat is caused by a genetic condition called melanism.',
          'Their spots are often still visible under strong light.',
          'Black panthers are especially associated with dense forests.',
          'They are not a separate big cat species.',
        ],
        image: require('../../assets/i/biigctsandbcatl11.png'),
      },
      {
        id: 'sunda_clouded_leopard',
        scientificName: 'Neofelis diardi',
        name: 'Sunda Clouded Leopard',
        status: 'Vulnerable',
        tag: 'Island Forest Phantom',
        description:
          'The Sunda clouded leopard lives on the islands of Borneo and Sumatra. It was once considered the same species as the mainland clouded leopard.',
        speed: '40–50 km/h',
        weight: '12–26 kg',
        size: '130–210 cm body length including tail',
        diet: 'Monkeys, birds, deer, rodents, reptiles, small mammals',
        naturalHabitat:
          'Tropical rainforests, peat swamp forests, island forests, mountain forests',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Sunda clouded leopards live only on Borneo and Sumatra.',
          'They are separate from mainland clouded leopards.',
          'Their long tail helps them move through trees with balance and control.',
          'They are among the least-seen wild cats in the world.',
        ],
        image: require('../../assets/i/biigctsandbcatl12.png'),
      },
      {
        id: 'sumatran_tiger',
        scientificName: 'Panthera tigris sumatrae',
        name: 'Sumatran Tiger',
        status: 'Critically Endangered',
        tag: 'Island Survivor',
        description:
          'The Sumatran tiger is the smallest living tiger subspecies and the only surviving tiger population in Indonesia.',
        speed: '50–65 km/h',
        weight: '75–140 kg',
        size: '220–255 cm body length including tail',
        diet: 'Deer, wild boar, monkeys, birds, fish, smaller mammals',
        naturalHabitat:
          'Tropical rainforests, peat swamp forests, mountain forests, lowland forests',
        conservationStatus: 'Critically Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Sumatran tigers are the smallest living tiger subspecies.',
          'Their dense stripes help them disappear into dark rainforest vegetation.',
          'They are strong swimmers and may hunt near rivers or swampy areas.',
          'Sumatran tigers are the last remaining tiger population in Indonesia.',
          'Their island home makes their survival especially vulnerable to habitat change.',
        ],
        image: require('../../assets/i/biigctsandbcatl13.png'),
      },
      {
        id: 'malayan_tiger',
        scientificName: 'Panthera tigris jacksoni',
        name: 'Malayan Tiger',
        status: 'Critically Endangered',
        tag: 'Rainforest Phantom',
        description:
          'The Malayan tiger is a rare tiger subspecies found in the forests of Peninsular Malaysia. It is slightly smaller than many mainland tigers.',
        speed: '50–65 km/h',
        weight: '75–150 kg',
        size: '230–280 cm body length including tail',
        diet: 'Deer, wild boar, tapirs, monkeys, birds, smaller mammals',
        naturalHabitat:
          'Tropical rainforests, lowland forests, hill forests, dense jungle',
        conservationStatus: 'Critically Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Malayan tigers live only in Peninsular Malaysia.',
          'They were officially recognized as a separate tiger subspecies in the early 2000s.',
          'Their smaller size helps them move through thick rainforest.',
          'They are extremely difficult to observe in the wild.',
          'The Malayan tiger is an important national symbol of Malaysia.',
        ],
        image: require('../../assets/i/biigctsandbcatl14.png'),
      },
      {
        id: 'indochinese_tiger',
        scientificName: 'Panthera tigris corbetti',
        name: 'Indochinese Tiger',
        status: 'Endangered',
        tag: 'Hidden Jungle Hunter',
        description:
          'The Indochinese tiger is a secretive tiger subspecies that lives in parts of Southeast Asia. It is generally smaller and darker than the Bengal tiger.',
        speed: '50–65 km/h',
        weight: '100–195 kg',
        size: '240–285 cm body length including tail',
        diet: 'Deer, wild boar, banteng, monkeys, porcupines, smaller mammals',
        naturalHabitat:
          'Tropical forests, hill forests, bamboo forests, remote mountain valleys',
        conservationStatus: 'Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Indochinese tigers are among the most secretive tiger subspecies.',
          'Camera traps are often used to study them in remote forests.',
          'They usually have darker coats and narrower stripes than Bengal tigers.',
          'They need large, connected forests to survive.',
          'Their range has become much smaller than it once was.',
        ],
        image: require('../../assets/i/biigctsandbcatl15.png'),
      },
      {
        id: 'south_china_tiger',
        scientificName: 'Panthera tigris amoyensis',
        name: 'South China Tiger',
        status: 'Critically Endangered',
        tag: 'Lost Forest Legend',
        description:
          'The South China tiger is one of the most endangered tiger subspecies in the world. It once lived across parts of southern China.',
        speed: '50–65 km/h',
        weight: '100–175 kg',
        size: '230–265 cm body length including tail',
        diet: 'Historically deer, wild boar, livestock, smaller mammals',
        naturalHabitat:
          'Historically subtropical forests, mountain forests, grasslands, river valleys',
        conservationStatus: 'Critically Endangered',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'The South China tiger may be extinct in the wild.',
          'It is considered one of the most ancient tiger lineages.',
          'Most living South China tigers are part of managed breeding programs.',
          'It is sometimes called the “Chinese tiger.”',
        ],
        image: require('../../assets/i/biigctsandbcatl16.png'),
      },
      {
        id: 'white_tiger',
        scientificName: 'Panthera tigris tigris',
        name: 'White Tiger',
        status: 'Not a separate wild subspecies',
        tag: 'Rare Color Morph',
        description:
          'The white tiger is not a separate species or subspecies. It is usually a Bengal tiger with a rare genetic color variation that produces a pale coat.',
        speed: '49–65 km/h',
        weight: '140–300 kg',
        size: '270–310 cm body length including tail',
        diet: 'Deer, wild boar, water buffalo, monkeys, smaller mammals',
        naturalHabitat:
          'Historically the same habitats as Bengal tigers; today mostly seen in captivity',
        conservationStatus: 'Not classified as a separate wild taxon',
        conservationNote: 'Related species monitored by IUCN Red List',
        facts: [
          'White tigers are usually Bengal tigers with a rare genetic color trait.',
          'They are not albino because they still have dark stripes and blue eyes.',
          'White tigers are not a separate endangered subspecies.',
          'Their pale coat would make camouflage harder in many wild habitats.',
          'Most white tigers seen today live in captivity.',
        ],
        image: require('../../assets/i/biigctsandbcatl17.png'),
      },
      {
        id: 'barbary_lion',
        scientificName: 'Panthera leo leo',
        name: 'Barbary Lion',
        status: 'Extinct in the Wild',
        tag: 'Atlas Mountain King',
        description:
          'The Barbary lion once lived across North Africa, including the Atlas Mountains and surrounding regions. Today, it is considered extinct in the wild.',
        speed: '60–80 km/h in short bursts',
        weight: '160–250 kg',
        size: '260–330 cm body length including tail',
        diet: 'Historically deer, wild boar, antelope, Barbary sheep, livestock',
        naturalHabitat:
          'Mountain forests, scrublands, semi-arid plains, Atlas Mountain regions',
        conservationStatus: 'Extinct in the Wild',
        conservationNote: 'Historical population monitored through research',
        facts: [
          'Barbary lions once lived in North Africa.',
          'They were associated with the Atlas Mountains.',
          'Their dark, full mane made them especially famous.',
          'Ancient Romans used North African lions in arenas.',
          'No confirmed wild Barbary lions remain today.',
        ],
        image: require('../../assets/i/biigctsandbcatl18.png'),
      },
      {
        id: 'eurasian_lynx',
        scientificName: 'Lynx lynx',
        name: 'Eurasian Lynx',
        status: 'Least Concern',
        tag: 'Forest Listener',
        description:
          'The Eurasian lynx is the largest lynx species and one of the most impressive wild cats of Europe and Asia.',
        speed: '50–65 km/h in short bursts',
        weight: '18–36 kg',
        size: '80–130 cm body length',
        diet: 'Roe deer, hares, birds, rodents, foxes, small mammals',
        naturalHabitat: 'Boreal forests, mountain forests, mixed woodlands',
        conservationStatus: 'Least Concern',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'The Eurasian lynx is the largest lynx species.',
          'Its ear tufts may help with communication and sound detection.',
          'Wide paws help it move across snow.',
          'It is very quiet and rarely seen by people.',
          'In some European regions, lynx have been successfully reintroduced.',
        ],
        image: require('../../assets/i/biigctsandbcatl19.png'),
      },
      {
        id: 'canada_lynx',
        scientificName: 'Lynx canadensis',
        name: 'Canada Lynx',
        status: 'Least Concern',
        tag: 'Snowstep Hunter',
        description:
          'The Canada lynx is a northern forest cat specially adapted to cold, snowy environments and closely linked to the snowshoe hare.',
        speed: '40–50 km/h',
        weight: '8–17 kg',
        size: '75–110 cm body length',
        diet: 'Snowshoe hares, birds, squirrels, rodents, small mammals',
        naturalHabitat:
          'Boreal forests, snowy woodlands, northern conifer forests',
        conservationStatus: 'Least Concern',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Canada lynx have huge paws that work like snowshoes.',
          'Snowshoe hares are their main food source.',
          'Their population often rises and falls with hare numbers.',
          'Their thick fur protects them in freezing northern forests.',
          'They are usually solitary and avoid open areas.',
        ],
        image: require('../../assets/i/biigctsandbcatl20.png'),
      },
      {
        id: 'caracal',
        scientificName: 'Caracal caracal',
        name: 'Caracal',
        status: 'Least Concern',
        tag: 'Desert Jumper',
        description:
          'The caracal is a medium-sized wild cat famous for its long black ear tufts, athletic body, and incredible jumping ability.',
        speed: '50–80 km/h in short bursts',
        weight: '8–19 kg',
        size: '60–110 cm body length including tail',
        diet: 'Birds, rodents, hares, small antelope, reptiles',
        naturalHabitat:
          'Savannahs, dry scrublands, semi-deserts, rocky hills, open woodland',
        conservationStatus: 'Least Concern',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Caracals can leap high enough to catch birds in midair.',
          'Their long black ear tufts are one of their most recognizable features.',
          'The name “caracal” comes from a word meaning “black ear.”',
          'They are mostly nocturnal in hot regions.',
          'Caracals are strong enough to hunt prey larger than themselves.',
        ],
        image: require('../../assets/i/biigctsandbcatl21.png'),
      },
      {
        id: 'serval',
        scientificName: 'Leptailurus serval',
        name: 'Serval',
        status: 'Least Concern',
        tag: 'Tall-Grass Radar',
        description:
          'The serval is a slender African wild cat with long legs, large ears, and a beautifully spotted coat, designed for hunting in tall grass.',
        speed: '65–80 km/h in short bursts',
        weight: '7–18 kg',
        size: '85–125 cm body length including tail',
        diet: 'Rodents, birds, frogs, insects, reptiles, small mammals',
        naturalHabitat:
          'Wetlands, savannahs, reed beds, grasslands, open woodland',
        conservationStatus: 'Least Concern',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Servals have some of the longest legs relative to body size among cats.',
          'Their large ears help them hear prey moving underground or in tall grass.',
          'They can leap high into the air before pouncing.',
          'Servals are extremely successful hunters compared with many other cats.',
          'They often live near water and grassy wetlands.',
        ],
        image: require('../../assets/i/biigctsandbcatl22.png'),
      },
      {
        id: 'fishing_cat',
        scientificName: 'Prionailurus viverrinus',
        name: 'Fishing Cat',
        status: 'Vulnerable',
        tag: 'Wetland Stalker',
        description:
          'The fishing cat is a strong, stocky wild cat that lives near wetlands, rivers, mangroves, and marshes and is skilled at catching fish.',
        speed: '35–45 km/h',
        weight: '5–16 kg',
        size: '75–115 cm body length including tail',
        diet: 'Fish, frogs, crabs, birds, rodents, reptiles',
        naturalHabitat: 'Wetlands, mangroves, marshes, riverbanks, reed beds',
        conservationStatus: 'Vulnerable',
        conservationNote: 'Monitored by IUCN Red List',
        facts: [
          'Fishing cats are excellent swimmers.',
          'They often hunt fish, frogs, and crabs near water.',
          'Their paws may help them move through wet, muddy habitats.',
          'They are strongly dependent on healthy wetlands.',
          'They can dive or wade into water to catch prey.',
        ],
        image: require('../../assets/i/biigctsandbcatl23.png'),
      },
    ],
    [],
  );

  const biigctsandbyonndctlogFiltered = useMemo(() => {
    const biigctsandbyonndctlogQ = biigctsandbyonndctlogQuery.trim();
    const biigctsandbyonndctlogNeedle = biigctsandbyonndctlogQ.toLowerCase();

    return biigctsandbyonndctlogCats.filter(biigctsandbyonndctlogCat => {
      if (
        biigctsandbyonndctlogFavOnly &&
        !biigctsandbyonndctlogFavIds[biigctsandbyonndctlogCat.id]
      ) {
        return false;
      }
      if (!biigctsandbyonndctlogNeedle) {
        return true;
      }
      const biigctsandbyonndctlogHaystack =
        `${biigctsandbyonndctlogCat.name} ${biigctsandbyonndctlogCat.tag} ${biigctsandbyonndctlogCat.naturalHabitat} ${biigctsandbyonndctlogCat.status}`.toLowerCase();
      return biigctsandbyonndctlogHaystack.includes(
        biigctsandbyonndctlogNeedle,
      );
    });
  }, [
    biigctsandbyonndctlogCats,
    biigctsandbyonndctlogFavIds,
    biigctsandbyonndctlogFavOnly,
    biigctsandbyonndctlogQuery,
  ]);

  const biigctsandbyonndctlogToggleFav = (biigctsandbyonndctlogId: string) => {
    setBiigctsandbyonndctlogFavIds(prev => {
      const biigctsandbyonndctlogWasFav = !!prev[biigctsandbyonndctlogId];
      let biigctsandbyonndctlogNext: Record<string, true>;
      if (biigctsandbyonndctlogWasFav) {
        biigctsandbyonndctlogNext = {...prev};
        delete biigctsandbyonndctlogNext[biigctsandbyonndctlogId];
      } else {
        biigctsandbyonndctlogNext = {...prev, [biigctsandbyonndctlogId]: true};
      }
      biigctsandbyonndPrefsSaveFavCats(biigctsandbyonndctlogNext).catch(
        () => {},
      );
      if (biigctsandbyonndNotifs) {
        Toast.show({
          type: 'success',
          text1: biigctsandbyonndctlogWasFav
            ? 'Card removed from favorites.'
            : 'Card saved to favorites.',
        });
      }
      return biigctsandbyonndctlogNext;
    });
  };

  const biigctsandbyonndctlogRenderItem = ({
    item,
  }: {
    item: BiigctsandbyonndctlogCat;
  }) => {
    const biigctsandbyonndctlogIsFav = !!biigctsandbyonndctlogFavIds[item.id];
    return (
      <Pressable
        onPress={() =>
          (biigctsandbyonndctlogNavigation as any).navigate(
            'Biigctsandbyonndctdet',
            {cat: item},
          )
        }
        style={styles.biigctsandbyonndctlogCard}>
        <Image
          source={item.image}
          style={styles.biigctsandbyonndctlogCardImage}
        />
        <View style={styles.biigctsandbyonndctlogCardImageWrap}>
          <Pressable
            hitSlop={10}
            onPress={() => biigctsandbyonndctlogToggleFav(item.id)}
            style={styles.biigctsandbyonndctlogHeartBtn}>
            <Image
              source={
                biigctsandbyonndctlogIsFav
                  ? require('../../assets/i/biigctsandbcsvd.png')
                  : require('../../assets/i/biigctsandbsv.png')
              }
              style={styles.biigctsandbyonndctlogHeartText}
            />
          </Pressable>
        </View>

        <View style={styles.biigctsandbyonndctlogCardBody}>
          <Text style={styles.biigctsandbyonndctlogCardTitle}>{item.name}</Text>
          <View style={styles.biigctsandbyonndctlogChipRow}>
            <View style={styles.biigctsandbyonndctlogChip}>
              <Text style={styles.biigctsandbyonndctlogChipText}>
                {item.status}
              </Text>
            </View>
            <View style={styles.biigctsandbyonndctlogChip}>
              <Text style={styles.biigctsandbyonndctlogChipText}>
                ★ {item.tag}
              </Text>
            </View>
          </View>
          <Text numberOfLines={2} style={styles.biigctsandbyonndctlogCardDesc}>
            {item.description}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <Biigctsandbyonndlay>
      <View style={styles.biigctsandbyonndctlogRoot}>
        <View style={styles.biigctsandbyonndctlogHeader}>
          <View>
            <Text style={styles.biigctsandbyonndctlogHeaderOverline}>
              WILDLIFE EXPLORER
            </Text>
            <Text style={styles.biigctsandbyonndctlogHeaderTitle}>
              Big Cat Catalog
            </Text>
          </View>

          <View style={styles.biigctsandbyonndctlogHeaderPawBtnWrap}>
            <LinearGradient
              colors={['#E8A82E', '#D4621A']}
              style={[
                styles.biigctsandbyonndctlogHeaderPawBtn,
                biigctsandbyonndctlogFavOnly
                  ? styles.biigctsandbyonndctlogHeaderPawBtnActive
                  : null,
              ]}>
              <Image
                source={require('../../assets/i/biigctsandbctig.png')}
                style={styles.biigctsandbyonndctlogHeaderPawText}
              />
            </LinearGradient>
          </View>
        </View>

        <View style={styles.biigctsandbyonndctlogSearchWrap}>
          <Image
            source={require('../../assets/i/biigctsandbcsear.png')}
            style={styles.biigctsandbyonndctlogSearchIcon}
          />
          <TextInput
            value={biigctsandbyonndctlogQuery}
            onChangeText={setBiigctsandbyonndctlogQuery}
            placeholder="Search by name, tag, habitat..."
            placeholderTextColor="#FFFFFF80"
            style={styles.biigctsandbyonndctlogSearchInput}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

        {biigctsandbyonndctlogFiltered.length === 0 ? (
          <View style={styles.biigctsandbyonndctlogEmptyWrap}>
            <View style={styles.biigctsandbyonndctlogEmptyIconCircle}>
              <Text style={styles.biigctsandbyonndctlogEmptyIcon}>🔎</Text>
            </View>
            <Text style={styles.biigctsandbyonndctlogEmptyTitle}>
              No results found
            </Text>
            <Text style={styles.biigctsandbyonndctlogEmptyDesc}>
              Try a different search term
            </Text>
          </View>
        ) : (
          <FlatList
            data={biigctsandbyonndctlogFiltered}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={biigctsandbyonndctlogRenderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.biigctsandbyonndctlogListContent}
          />
        )}
      </View>
    </Biigctsandbyonndlay>
  );
};

export default Biigctsandbyonndctlog;

const styles = StyleSheet.create({
  biigctsandbyonndctlogSearchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F0D0D',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 15,

    marginBottom: 12,
  },
  biigctsandbyonndctlogSearchIcon: {
    marginRight: 8,
    opacity: 0.8,
  },
  biigctsandbyonndctlogSearchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    paddingVertical: 0,
  },

  biigctsandbyonndctlogRoot: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 10,
  },

  biigctsandbyonndctlogHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  biigctsandbyonndctlogHeaderOverline: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    letterSpacing: 1.4,
    marginBottom: 2,
  },
  biigctsandbyonndctlogHeaderTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 26,
    lineHeight: 32,
  },
  biigctsandbyonndctlogHeaderPawBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#FF6A00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biigctsandbyonndctlogHeaderPawBtnActive: {
    backgroundColor: '#FF6A00CC',
  },
  biigctsandbyonndctlogHeaderPawText: {
    fontSize: 18,
  },

  biigctsandbyonndctlogListContent: {
    paddingBottom: 120,
  },

  biigctsandbyonndctlogCard: {
    flexDirection: 'row',
    backgroundColor: '#2A1313B3',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    marginBottom: 12,
  },
  biigctsandbyonndctlogCardImageWrap: {
    position: 'absolute',
    top: 8,
    left: 80,

    borderRadius: 14,
    overflow: 'hidden',
  },
  biigctsandbyonndctlogCardImage: {
    width: 120,
    height: '100%',
    borderRadius: 14,
    resizeMode: 'cover',
  },
  biigctsandbyonndctlogCardImagePlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
    backgroundColor: '#FFFFFF14',
  },
  biigctsandbyonndctlogHeartBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFFD9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },
  biigctsandbyonndctlogHeartText: {
    fontSize: 16,
    marginTop: -1,
  },
  biigctsandbyonndctlogHeartTextIdle: {
    color: '#FFB28A',
  },
  biigctsandbyonndctlogHeartTextActive: {
    color: '#FF6A00',
  },

  biigctsandbyonndctlogCardBody: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 10,
  },
  biigctsandbyonndctlogCardTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    marginBottom: 6,
  },
  biigctsandbyonndctlogChipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  biigctsandbyonndctlogChip: {
    backgroundColor: '#00000040',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
  },
  biigctsandbyonndctlogChipText: {
    color: '#FFFFFFCC',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 11,
  },
  biigctsandbyonndctlogCardDesc: {
    color: '#FFFFFFB0',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    lineHeight: 16,
    paddingRight: 4,
    width: '90%',
  },

  biigctsandbyonndctlogEmptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 110,
  },
  biigctsandbyonndctlogEmptyIconCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#0000002E',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  biigctsandbyonndctlogEmptyIcon: {
    fontSize: 30,
    opacity: 0.9,
  },
  biigctsandbyonndctlogEmptyTitle: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    marginBottom: 6,
  },
  biigctsandbyonndctlogEmptyDesc: {
    color: '#FFFFFFA3',
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
  },
});
