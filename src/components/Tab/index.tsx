import { useContext, useEffect, useState, type FC, type ReactNode } from 'react'
import { TabsContext } from '../Tabs';
import { ITabsHeaderItem } from '../Tabs/models';

interface TabProps {
  children?: ReactNode,
  name: string
}

const findHeaderItem = (headerItems: ITabsHeaderItem[], name: string): number | -1 => {
  return headerItems.findIndex(headerItem => headerItem.name.toLowerCase() === name.toLowerCase());
}

const Tab: FC<TabProps> = ({ children, name }) => {

  const { tabsActiveIndex, tabsHeaderItems, setTabsHeaderItems } = useContext(TabsContext)
  const [tabIndex, setTabIndex] = useState<null | number>(null);

  const tabIsActive = tabsActiveIndex === tabIndex;

  const createTabHeaderAndSetIndex = () => {
    const tabHeaderIndex = findHeaderItem(tabsHeaderItems, name);

    if (tabHeaderIndex === -1) {
      setTabsHeaderItems([...tabsHeaderItems, { name }]);
      setTabIndex(tabsHeaderItems.length);
    } else {
      setTabIndex(tabHeaderIndex);
    }
  }

  useEffect(createTabHeaderAndSetIndex, [tabsHeaderItems])

  if (!tabIsActive) {
    return null;
  }

  return (
    <div className="tab">
      {children}
    </div>
  )
}

export default Tab