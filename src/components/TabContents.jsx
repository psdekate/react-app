import { useState } from "react";
import { items } from "../data";
import { TabContent } from "../components/TabContent/TabContent";

export function TabContents() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Click on the tabs above</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="topicContent">
        <h3>{items[selectedTopic].title}</h3>
        <p>{items[selectedTopic].description}</p>
      </div>
    );
  }

  function handleClick(selectedMessage) {
    setSelectedTopic(selectedMessage);
    // console.log(selectedMessage);
  }
  return (
    <section className="tabContent">
      <h3>Examples</h3>
      <div className="infoTabs">
        <TabContent
          isSelected={selectedTopic === "Components"}
          onSelect={() => handleClick("Components")}
        >
          Component
        </TabContent>
        <TabContent isSelected={selectedTopic === "JSX"} onSelect={() => handleClick("JSX")}>
          JSX
        </TabContent>
        <TabContent isSelected={selectedTopic === "Props"} onSelect={() => handleClick("Props")}>
          Props
        </TabContent>
        <TabContent isSelected={selectedTopic === "State"} onSelect={() => handleClick("State")}>
          State
        </TabContent>
      </div>

      {/* Method 1: using ternary operator */}
      {/* {!selectedTopic ? (
            <p>Please select something</p>
          ) : (
            <div className="topicContent">
              <h3>{items[selectedTopic].title}</h3>
              <p>{items[selectedTopic].description}</p>
            </div>
          )} */}

      {/* Method 2: using binary operator */}
      {/* {!selectedTopic && <p>Select something to begin with </p>}
          {selectedTopic && (
            <div className="topicContent">
              <h3>{items[selectedTopic].title}</h3>
              <p>{items[selectedTopic].description}</p>
            </div>
          )} */}

      {/* Method 3: using a constant and storing a value */}
      {tabContent}
    </section>
  );
}
