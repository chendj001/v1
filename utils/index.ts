/**
 * 版本
 */
export const getVer = () => 'utils - 1.0.1'

export const utilsHook = (name: string) => {
  if (['getVer'].includes(name)) {
    return {
      name,
      from: 'utils/index.ts'
    }
  }
}

export const utilsResolver = () => {
  return (name: string) => {
    return utilsHook(name)
  }
}
