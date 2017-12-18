import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'component';

const Pages = [
	{ title: 'RefreshView', subTitle: '下拉刷新', url: 'ui/RefreshView/ListView'},
	{ title: 'ActivityIndicator', subTitle: '活动指示器', url: 'ui/ActivityIndicator'},
	{ title: 'Button', subTitle: '按钮', icon: 'user', url: 'ui/Button'},
	{ title: 'Carousel', subTitle: '走马灯', url: 'ui/Carousel'},
	{ title: 'Form', subTitle: '表单', icon: 'book', url: 'ui/Form'},
	// { title: 'GesturePassword', subTitle: '手势密码', url: 'ui/GesturePassword'},
	{ title: 'Icon', subTitle: '图标', icon: 'child', url: 'ui/Icon'},
	{ title: 'List', subTitle: '清单', icon: 'bars', url: 'ui/List'},
	{ title: 'Modal', subTitle: '模态框', url: 'ui/Modal'},
	{ title: 'CalendarPicker', subTitle: '日历', icon: 'calendar', url: 'ui/Calendar'},
	{ title: 'DatePicker', subTitle: '日期选择', icon:'calendar', url: 'ui/DatePicker'},
	{ title: 'MonthPicker', subTitle: '选择器', url: 'ui/MonthPicker'},
	{ title: 'Picker', subTitle: '选择器', url: 'ui/Picker'},
	{ title: 'PickerView', subTitle: '选择器', url: 'ui/PickerView'},
	{ title: 'PieChatView', subTitle: '图表', url: 'ui/PieChatView'},
	{ title: 'Popover', subTitle: '泡泡层', url: 'ui/Popover'},
	{ title: 'Popup', subTitle: '弹出层', url: 'ui/Popup'},
	{ title: 'Progress', subTitle: '进度条', url: 'ui/Progress'},
	{ title: 'Segment', subTitle: '分段器', url: 'ui/Segment'},
	{ title: 'Slider', subTitle: '滑动器', url: 'ui/Slider'},
	{ title: 'Switch', subTitle: '开关', url: 'ui/Switch'},
	{ title: 'Tabs', subTitle: '标签页', url: 'ui/Tabs'},
	{ title: 'Tabs', subTitle: '横屏切换标签页', url: 'ui/Tabs/RotateTabs'},
	{ title: 'Tag', subTitle: '小标签', url: 'ui/Tag'},
	{ title: 'Toast', subTitle: '轻提示', url: 'ui/Toast'},
	{ title: 'PieChatView', subTitle: '饼图', url: 'ui/PieChatView'},
	{ title: 'TestArt', subTitle: '图表', url: 'ui/TestArt'},
]

export default class HomeScreen extends React.Component {
	sort(item1, item2) {
		// 主序 title，从序 subTitle
		if (item1.title < item2.title) return -1;
		else if (item1.title > item2.title) return 1;
		else if (item1.subTitle < item2.subTitle) return -1;
		else if (item1.subTitle > item2.subTitle) return 1;
		else return 0;
	}
	render() {
		let { navigation } = this.props;
		return (
			<ScrollView>
				<List>{
					Pages.sort(this.sort).map((item, i) => {
						return (
							<ListItem key={i} hasRightArrow onPress={() => {
								navigation.navigate(item.url);
							}}><Text>{`${item.subTitle} ${item.title}`}</Text></ListItem>
						)
					})
				}</List>
			</ScrollView>
		);
	}
}