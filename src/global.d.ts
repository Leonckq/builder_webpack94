/***************************************************
 * Created by nanyuantingfeng on 2019/11/6 18:14. *
 ***************************************************/
declare const __DEV__: boolean

declare const i18n: any

declare var APPLICATION_VERSION: string
declare var UPLOAD_INVOICE_FILE_URL: string
declare var IS_STANDALONE: boolean

interface Window {
  APPLICATION_VERSION: string
  UPLOAD_INVOICE_FILE_URL: string
  NOEKBSET: any
  emma: any
  // 还款权限
  $_privilegeId: string
}

interface Window {
  i18n: any
  __PLANTFORM__: string
  CURRENCY_SYMBOL: string
  IS_STANDALONE: string
  isMessage: boolean
  DEFAULTTITLE: string
  isNewHome: boolean
  home5GuideIsShowLeftBtn: boolean
  showNavBarLeftBtn: boolean
  isIOS: boolean
  Intercom: Function
  PLATFORM_FEATURE: any
  payeeInfo: any
}

interface Fetch {
  userId: string
  corpId: string
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.worker' {
  const value: Worker
  export default value
}

declare module 'ekbc-query-builder'

declare module '*.module.less' {
  const styles: any
  export default styles
}

declare module '*.less'
declare module '@ekuaibao/store'
declare module 'rc-form/*'

declare var IS_HSFK: boolean
declare module 'react-highlight-words'

declare interface StringAnyProps {
  [propName: string]: any
}
declare interface StringStringProps {
  [propName: string]: string
}
