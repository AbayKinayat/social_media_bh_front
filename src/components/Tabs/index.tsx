import { createContext, useCallback, useMemo, useState, type FC, type ReactNode } from 'react'
import classNames from "classnames";

import { TabsContextProps, ITabsHeaderItem } from './models';
import { IAppColor } from '../../models/IAppColor';
import TabsHeaderItem from "./TabsHeaderItem";
import "./Tabs.scss";

interface TabsProps {
  children?: ReactNode,
  headerColor?: IAppColor,
  backgroundColor?: IAppColor,
  activeColor?: IAppColor
}

export const TabsContext = createContext<TabsContextProps>({
  tabsActiveIndex: 0,
  tabsHeaderItems: [],
  setTabsHeaderItems: () => { }
});

const Tabs: FC<TabsProps> = ({
  children,
  headerColor = "transparent",
  activeColor = "primary",
  backgroundColor = "secondary"
}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [headerItems, setHeaderItems] = useState<ITabsHeaderItem[]>([]);

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
        <div className={classNames("tabs-header", backgroundColor)}>
          {
            headerItems.map(({ name }, index) => (
              <TabsHeaderItem
                key={name}
                name={name}
                isActive={activeIndex === index}
                onClick={headerItemClickHandler.bind(null, index)}
                color={headerColor}
                activeColor={activeColor}
              />
            ))
          }
        </div>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export default Tabs