/**
 * 功能名称
 * @author 作者
 */
import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { Style, Const } from 'common'
import { Button, nativeUI, Toast } from 'component'

let { EditText } = nativeUI;
const ref_edit_text = 'ref_edit_text';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '^[A-Za-z]+$',
			regularString: '^[A-Za-z]+$',
		}
		this.regularString = '^[A-Za-z]+$'
	}

	componentDidMount() {
	}


	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#FFF' }}>
				<ScrollView style={{ flex: 1 }} accessible={false} keyboardShouldPersistTaps='handled' keyboardDismissMode={'interactive'} >
					<View style={{ flex: 1, backgroundColor: '#f1f1f3', padding: 10, paddingBottom: 200 }}>
						<Text style={{ marginTop: 20, }}>当前正则表达式：</Text>
						<EditText
							ref={ref_edit_text}
							value={this.state.text}
							styles={{
								container: {
									flex: 1,
									marginTop: 20,
									marginBottom: 20,
									height: 45,
									borderWidth: 1,
									paddingHorizontal: 10
								},
								text: {
									padding: 0,
									fontSize: 14,
									textAlignVertical: 'center'
								}
							}}
							maxLength={100}
							onChange={e => {
								let text = e.nativeEvent.text
								this.setState({ text: text })
							}}
							isNumber={false}
							keyboardType="email-address">
						</EditText>

						<Button
							title="设置正则"
							onPress={e => {
								this.regularString = this.state.text
								this.setState({ regularString: this.regularString });
								Toast.info('设置成功，当前规则：' + this.regularString);
							}}>
						</Button>

						<Text style={{ marginTop: 20, }}>输入测试↓</Text>
						<EditText
							styles={{
								container: {
									flex: 1,
									marginTop: 20,
									marginBottom: 20,
									height: 45,
									borderWidth: 1,
									paddingHorizontal: 10
								},
								text: {
									padding: 0,
									fontSize: 14,
									textAlignVertical: 'center'
								}
							}}

							regularString={this.state.regularString}>
						</EditText>

					</View>
				</ScrollView>



			</View>
		)
	}

}