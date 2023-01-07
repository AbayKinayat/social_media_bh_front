import type { Dispatch, SetStateAction } from "react"

export interface ITabsHeaderItem {
  name: string
}

export interface TabsContextProps {
  tabsHeaderItems: ITabsHeaderItem[]
  tabsActiveIndex: number
  setTabsHeaderItems: Dispatch<SetStateAction<ITabsHeaderItem[]>>
}