// import iconArt from 'assets/svgs/rainbow.svg';
// import iconCollectibles from 'assets/svgs/bear.svg';
// import iconSports from 'assets/svgs/soccerball.svg';
// import iconUtility from 'assets/svgs/tools.svg';
// import iconTrading from 'assets/svgs/cardboard.svg';
// import iconVirtual from 'assets/svgs/monster.svg';
// import iconDomain from 'assets/svgs/domain.svg';
// import iconSearch from 'assets/svgs/magnifier.svg';
import iconHiphop from 'assets/imgs/hiphop.png';
import iconRock from 'assets/imgs/rock.png';
import iconPopmusic from 'assets/imgs/popmusic.png';
import iconJazz from 'assets/imgs/jazz.png';
import iconMetal from 'assets/imgs/metal.png';
import iconReggae from 'assets/imgs/reggae.png';
import iconAfrobeat from 'assets/imgs/afrobeat.png';

export const GroupFilters = [
  {
    value: 'all',
    label: 'All Items',
  },
  {
    value: 'single',
    label: 'Single Items',
  },
  // {
  //   value: 'bundle',
  //   label: 'Bundles',
  // },
];

export const Categories = [
  {
    id: 0,
    icon: iconHiphop,
    label: 'Hip Hop',
  },
  {
    id: 1,
    icon: iconRock,
    label: 'Rock',
  },
  {
    id: 2,
    icon: iconPopmusic,
    label: 'Pop Music',
  },
  {
    id: 3,
    icon: iconJazz,
    label: 'Jazz',
  },
  {
    id: 4,
    icon: iconMetal,
    label: 'Metal',
  },
  {
    id: 5,
    icon: iconReggae,
    label: 'Reggae',
  },
  {
    id: 6,
    icon: iconAfrobeat,
    label: 'Afro Beat',
  },
];

export const SortByOptions = [
  {
    id: 'createdAt',
    label: 'Recently Created',
  },
  {
    id: 'oldest',
    label: 'Oldest',
  },
  {
    id: 'listedAt',
    label: 'Recently Listed',
  },
  {
    id: 'soldAt',
    label: 'Recently Sold',
  },
  {
    id: 'saleEndsAt',
    label: 'Ending Soon',
  },
  {
    id: 'price',
    label: 'Highest Price',
  },
  {
    id: 'cheapest',
    label: 'Lowest Price',
  },
  {
    id: 'lastSalePrice',
    label: 'Highest Last Sale',
  },
  {
    id: 'viewed',
    label: 'Mostly Viewed',
  },
];

const FilterConstants = {
  UPDATE_STATUS_FILTER: 'UPDATE_STATUS_FILTER',
  UPDATE_COLLECTIONS_FILTER: 'UPDATE_COLLECTIONS_FILTER',
  UPDATE_CATEGORIES_FILTER: 'UPDATE_CATEGORIES_FILTER',
  UPDATE_GROUP_TYPE_FILTER: 'UPDATE_GROUP_TYPE_FILTER',
  UPDATE_SORT_BY_FILTER: 'UPDATE_SORT_BY_FILTER',
};

export default FilterConstants;
