import { AppLoadingProps } from 'expo'

export type ImageResource = string | number

export interface FontsResource {
  [name: string]: number
}

export interface AssetLoaderConfig {
  images?: ImageResource[]
  fonts?: FontsResource
}

export interface AssetLoaderState {
  isReady: boolean
  getAppLoadingProps: () => AppLoadingProps
}

export { AppLoadingProps }
