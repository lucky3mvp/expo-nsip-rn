/**
 * 图标组件
 * @author esky Henry
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

// 下为expo环境icon所需 --- start
import { createIconSet } from '@expo/vector-icons'
const glyphMap = require('../../../assets/FontAwesome.js').default;
const ExpoIcon = createIconSet instanceof Function ? createIconSet(glyphMap, 'FontAwesome') : null;
// 上为expo环境icon所需 --- end

/**
 * 字体数据
 * 示例：
 *  {
		entypo: {},
		FontAwesome: {}
	}
	*/
const FAMILY_MAP = {}
export default class Icon extends Component {
	/**
	 * 产品项目可设置默认字体
	 * Icon.defaultProps.family = 'self'
	 */
	static defaultProps = {
		// 默认字体为FontAwesome
		// http://www.fontawesome.com.cn/faicons/
		family: 'FontAwesome'
	}
	static propTypes = {
		...Text.propTypes,
		name: PropTypes.string.isRequired,
		size: PropTypes.number,
		color: PropTypes.string,
		family: PropTypes.string
	}
	/**
	 * 设置字体数据
	 */
	static setFamily = function (map = {}) {
		FAMILY_MAP = {
			...FAMILY_MAP,
			...map
		}
	}
	render() {
		const { name, size, color, family, style, ...props } = this.props

		let glyphMap = FAMILY_MAP[family] || {}
		let glyph = glyphMap[name] || name
		let simpleStyle = {}
		if (typeof glyph === 'number') {
			glyph = String.fromCharCode(glyph);
		}
		if (typeof size === 'number') {
			simpleStyle.fontSize = size
		}
		if (typeof color === 'string') {
			simpleStyle.color = color
		}
		// 样式优先级 baseStyle style simpleStyle
		props.style = [baseStyle.container, style, simpleStyle, { fontFamily: family }]
		// return <Text {...props}>{glyph}{this.props.children}</Text>
		return ExpoIcon ? <ExpoIcon name={name} {...props} >{this.props.children}</ExpoIcon> : <Text {...props}>{glyph}{this.props.children}</Text>
	}
}
const baseStyle = {
	container: {
		fontSize: 16,
		color: '#333',
		fontWeight: 'normal',
		fontStyle: 'normal',
	}
}
