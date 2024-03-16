import { version } from './package.json'
/**
 * 版本
 */
export const getVer = () => `utils - ${version}`

export const utilsHook = (name: string) => {
  if (['getVer'].includes(name)) {
    return {
      name,
      from: 'utils/index.ts'
    }
  }
}
/**
 * utils解析器
 */
export const utilsResolver = () => {
  return (name: string) => {
    return utilsHook(name)
  }
}
