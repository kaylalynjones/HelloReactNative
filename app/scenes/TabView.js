'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import WelcomeView from './WelcomeView';
import MovieList from './MovieList';

export default class TabView extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'welcome'
    };

    this.tabs = [
      { id: 'welcome',
        label: 'Welcome',
        icon: null,
        systemIcon: 'featured',
        view: <WelcomeView/>
      }, {
        id: 'movies',
        label: 'Movies',
        icon: null,
        systemIcon: 'most-viewed',
        badge: 5,
        view: <MovieList/>
      },
    ];
  }

  render() {
    return (
      <TabBarIOS tintColor='steelblue' barTintColor='whitesmoke'>
        {this.tabs.map((tab, key) => {
          return (
            <TabBarIOS.Item
              key={key}
              title={tab.label}
              icon={tab.icon}
              systemIcon={tab.systemIcon}
              badge={tab.badge}
              selected={this.state.selectedTab === tab.id}
              onPress={() => {
                this.setState({
                  selectedTab: tab.id
                })
              }}>
              {tab.view}
            </TabBarIOS.Item>
          );
        })}
      </TabBarIOS>
    );
  }
}
