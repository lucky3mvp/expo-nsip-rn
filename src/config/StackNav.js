import React from 'react';
import { StackNavigator } from 'react-navigation';

import TabNav from './TabNav';
import UiRoute from '../page/ui/route';

const StackNav = StackNavigator({
	home: {
		screen: TabNav
	},
	...UiRoute
}, {
	navigationOptions: () => ({
		headerStyle: {
			backgroundColor: '#231f1f',
		},
		headerTitleStyle: {
			fontWeight: 'bold',
			color: '#fff',
			backgroundColor: '#231f1f',
		},
	}),
});

export default class Screen extends React.Component {
	render() {
		return <StackNav />;
	}
}