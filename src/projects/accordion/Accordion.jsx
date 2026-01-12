import { useState } from "react";
import { data } from "./data";
import "./Accordion.css";

export default function Accordion() {
  const [isMultiSelectionEnabled, setIsMultiSelectionEnabled] = useState(false);
  const [singleSelectedId, setSingleSelectedId] = useState(null);
  const [multiSelectedIds, setMultiSelectedIds] = useState([]);

  const handleSingleSelection = (itemId) => {
    setSingleSelectedId(itemId === singleSelectedId ? null : itemId);
  };

  const handleMultiSelection = (itemId) => {
    const newMultiSelectedIds =
      multiSelectedIds.indexOf(itemId) === -1
        ? [...multiSelectedIds, itemId]
        : multiSelectedIds.filter((id) => id !== itemId);

    setMultiSelectedIds(newMultiSelectedIds);
  };

  const toggleMultiSelection = () => {
    setIsMultiSelectionEnabled(!isMultiSelectionEnabled);
    setSingleSelectedId(null);
    setMultiSelectedIds([]);
  };

  return (
    <div className="wrapper">
      <button onClick={toggleMultiSelection}>
        {isMultiSelectionEnabled ? "Disabled" : "Enable"} Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  isMultiSelectionEnabled
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {isMultiSelectionEnabled
                ? multiSelectedIds.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : singleSelectedId === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
