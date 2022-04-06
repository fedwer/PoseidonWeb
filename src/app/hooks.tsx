import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { CommunityInfo, PresetWaterQuality, WaterQuality, WaterQualityCategory } from './data/model'
import type { RootState, AppDispatch } from './store'
import i18next from 'i18next'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type Comparable = WaterQualityCategory | PresetWaterQuality | CommunityInfo

export function compare(a: Comparable, b: Comparable) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}
