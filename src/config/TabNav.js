import React from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';

import UI from '../page/ui';
import Other from '../page/Other';

export default TabNavigator({
	ui: {
		screen: UI,
		navigationOptions: {
			title: 'UI 组件',
			tabBarLabel: 'ui'
		}
	},
	nativeUI: {
		screen: Other,
		navigationOptions: {
			title: 'nativeUI 组件',
			tabBarLabel: 'nativeUI'
		}
	},
	native: {
		screen: Other,
		navigationOptions: {
			title: 'native 组件',
			tabBarLabel: 'native'
		}
	},
	util: {
		screen: Other,
		navigationOptions: {
			title: 'util 组件',
			tabBarLabel: 'util'
		}
	},
}, {
	tabBarComponent: TabBarTop,
	tabBarPosition: 'bottom',
	animationEnabled: true,
	swipeEnabled: true,
	tabBarOptions: {
		showIcon: false,
		showLabel: true,
		upperCaseLabel: false,
		labelStyle: {
			fontSize: 16,
		},
		style: {
			backgroundColor: '#f7f7f7',
			backgroundColor: '#231f1f',
		},
		activeTintColor: '#268bd2',
		activeTintColor: '#a8864d',
		inactiveTintColor: '#222',
		inactiveTintColor: '#fff',
		indicatorStyle: {
			height: 0
		}
	}
});
