import { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { SplashScreen } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

import {
  ImageResource,
  FontsResource,
  AssetLoaderConfig,
  AssetLoaderState,
  AppLoadingProps,
} from './types'

export default function useAssetLoader(
  config: AssetLoaderConfig = {}
): AssetLoaderState {
  const [isReady, setIsReady] = useState(false)

  useEffect((): void => {
    SplashScreen.preventAutoHide()
  }, [])

  const loadResourcesRequest = async (): Promise<void> => {
    if (config.images) {
      await cacheImages(config.images)
    }

    if (config.fonts) {
      await cacheFonts(config.fonts)
    }
  }

  const loadResourcesSuccess = (): void => {
    setIsReady(true)
  }

  const loadResourcesFailure = (error: Error): void => {
    throw new Error(`Error loading resources: ${error.message}`)
  }

  return {
    isReady,
    getAppLoadingProps(): AppLoadingProps {
      return {
        startAsync: loadResourcesRequest,
        onFinish: loadResourcesSuccess,
        onError: loadResourcesFailure,
      }
    },
  }
}

function cacheImages(images: ImageResource[]): Promise<void[]> {
  return Promise.all(
    images.map(
      (image: ImageResource): Promise<void> => {
        return typeof image === 'string'
          ? Image.prefetch(image)
          : Asset.fromModule(image).downloadAsync()
      }
    )
  )
}

function cacheFonts(fonts: FontsResource): Promise<void> {
  return Font.loadAsync(fonts)
}
