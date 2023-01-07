import { createContext, useCallback, useMemo, useState, type FC, type ReactNode } from 'react'
import classNames from "classnames";

import { TabsContextProps, TabsHeaderItem } from './models';
import "./Tabs.scss";

interface TabsProps {
  children: ReactNode
}

export const TabsContext = createContext<TabsContextProps>({
  tabsActiveIndex: 0,
  tabsHeaderItems: [],
  setTabsHeaderItems: () => { }
});

const Tabs: FC<TabsProps> = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [headerItems, setHeaderItems] = useState<TabsHeaderItem[]>([]);

  const value = useMemo<TabsContextProps>(() => {
    return {
      tabsActiveIndex: activeIndex,
      tabsHeaderItems: headerItems,
      setTabsHeaderItems: setHeaderItems
    }
  }, [activeIndex, headerItems]);

  const headerItemClickHandler = useCallback((index: number) => {

    setActiveIndex(index);

  }, [activeIndex, headerItems]);

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">
        <div className="tabs-header">
          {
            headerItems.map(({ name }, index) => {
              return <div className={classNames("tabs-header__item", {  'tabs-header__item--active': activeIndex === index })} onClick={headerItemClickHandler.bind(null, index)}>
                {name}
              </div>
            })
          }
        </div>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export default Tabs