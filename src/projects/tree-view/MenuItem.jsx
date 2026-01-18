import { useState } from 'react';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const { children = [], label } = item;
  const [isListExpanded, setIsListExpanded] = useState(false);

  function handleToggleChildren() {
    setIsListExpanded(!isListExpanded);
  }

  return (
    <li>
      <div className="menu-item">
        <p>{label}</p>

        {children.length > 0 && (
          <span onClick={handleToggleChildren}>
            {isListExpanded ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />}
          </span>
        )}
      </div>

      {children.length > 0 && isListExpanded && <MenuList list={children} />}
    </li>
  );
}
