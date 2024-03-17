import { version } from './package.json'
export * from './format'
/**
 * 版本
 */
export const getVer = () => `utils - ${version}`
