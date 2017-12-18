import UIComponent from './common/UIComponent'
// import * as native from './native'
// import * as nativeUI from './nativeUI'
import * as ui from './ui'
import * as util from './util'
import './patch'

/**
 * 按分类导出
 */
export {
	UIComponent,
	// native,
	// nativeUI,
	ui,
	util
}
/**
 * 仅ui，util有快捷导出
 */
export * from './ui'
export * from './util'