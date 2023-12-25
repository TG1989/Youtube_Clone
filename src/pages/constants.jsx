import React from 'react';
import {
  MdHome, MdTrendingUp, MdSubscriptions, MdLibraryBooks, MdHistory, MdVideoLibrary, MdWatchLater, MdMusicNote, MdSportsEsports, MdSportsSoccer, MdSentimentSatisfied, MdShoppingCart, MdPets,
  MdLocalCafe, MdFitnessCenter,
} from 'react-icons/md';

export const categories = [
  {
    name: 'Home',
    icon: <MdHome />,
    type: 'home'
  },

  {
    name: 'Trending',
    icon: <MdTrendingUp />,
    type: 'trending'
  },

  {
    name: 'Subscriptions',
    icon: <MdSubscriptions />,
    type: 'category'
  },

  {
    name: 'Library',
    icon: <MdLibraryBooks />,
    type: 'category'
  },

  {
    name: 'History',
    icon: <MdHistory />,
    type: 'category',
  },

  {
    name: 'Your Videos',
    icon: <MdVideoLibrary />,
    type: 'category'
  },

  {
    name: 'Watch Later',
    icon: <MdWatchLater />,
    type: 'category'
  },

  {
    name: 'Music',
    icon: <MdMusicNote />,
    type: 'category'
  },

  {
    name: 'Gaming',
    icon: <MdSportsEsports />,
    type: 'category'
  },

  {
    name: 'Sports',
    icon: <MdSportsSoccer />,
    type: 'category',
    divider: true
  },

  {
    name: 'Entertainment',
    icon: <MdSentimentSatisfied />,
    type: 'category',
     },

  {
    name: 'Pets',
    icon: <MdPets />,
    type: 'category'
  },

  {
    name: 'Food & Drink',
    icon: <MdLocalCafe />,
    type: 'category'
  },

  {
    name: 'Fitness',
    icon: <MdFitnessCenter />,
    type: 'category'
  }]