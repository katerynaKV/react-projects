import { useState } from 'react';
import './Tabs.css';

export default function Tabs({ tabs, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(newIndex) {
    setCurrentTabIndex(newIndex);
    onChange(newIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabs.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content">{tabs[currentTabIndex]?.content}</div>
    </div>
  );
}
