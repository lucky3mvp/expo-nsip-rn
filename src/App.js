import React from 'react';
import { View, Text, Platform } from 'react-native';
import Screen from './config/StackNav';
import { Font, Asset } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isReady: false
		}
	}
	async componentDidMount() {
		await Asset.loadAsync([
			require('./page/ui/Carousel/img/arrow.png'),
			require('./page/ui/Carousel/img/carousel1.jpg'),
			require('./page/ui/Carousel/img/carousel2.jpg'),
			require('./page/ui/Carousel/img/carousel3.jpg'),
			require('./page/ui/Carousel/img/carousel4.jpg'),
		]),
		await Font.loadAsync([
			Ionicons.font,
			{
				'FontAwesome': require('./assets/FontAwesome.ttf')
			}
		])

		this.setState({isReady: true});
	}
	render() {
		return this.state.isReady ? (
			<View style={{flex: 1, backgroundColor: '#EFEFEF'}}><Screen /></View>
		) : (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF'}}>
				<Text>Waiting</Text>
			</View>
		)
	}
}
