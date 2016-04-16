import React from 'react-native';
import TabView from './scenes/TabView';

export default function routeMapper(route, navigator) {
  switch (route.name) {
    case 'tabs':
      return <TabView navigator={navigator} />;
    default:
      return <WelcomeView />;
  }
}
