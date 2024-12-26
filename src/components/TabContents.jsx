import { useState } from "react";
import { items } from "../data";
import { TabContent } from "../components/TabContent/TabContent";
import { Section } from "./Section";
import { Tabs } from "./Tabs";

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
    <Section title="Examples" className="tabContent">
      <Tabs
        buttons={
          <div className="infoTabs">
            <TabContent
              isSelected={selectedTopic === "Components"}
              onClick={() => handleClick("Components")}
            >
              Component
            </TabContent>
            <TabContent isSelected={selectedTopic === "JSX"} onClick={() => handleClick("JSX")}>
              JSX
            </TabContent>
            <TabContent isSelected={selectedTopic === "Props"} onClick={() => handleClick("Props")}>
              Props
            </TabContent>
            <TabContent isSelected={selectedTopic === "State"} onClick={() => handleClick("State")}>
              State
            </TabContent>
          </div>
        }
      >
        {tabContent}
      </Tabs>

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
    </Section>
  );
}
