import type { Dispatch, SetStateAction } from "react"

export interface TabsHeaderItem {
  name: string
}

export interface TabsContextProps {
  tabsHeaderItems: TabsHeaderItem[]
  tabsActiveIndex: number
  setTabsHeaderItems: Dispatch<SetStateAction<TabsHeaderItem[]>>
}