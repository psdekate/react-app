import "../Main/Main.css";
import { TabContent } from "../Main/TabContent";
import { items } from "../../data";
import { useState } from "react";

export function Card(props) {
  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.something}</p>
      </div>
    </>
  );
}

export function Main() {
  const [selectedTopic, setSelectedTopic] = useState("JSX");

  function handleClick(selectedMessage) {
    setSelectedTopic(selectedMessage);
    // console.log(selectedMessage);
  }

  return (
    <>
      <div className="infoCards">
        <div className="cards">
          <Card {...items[0]} />
          <Card {...items[1]} />
          <Card {...items[2]} />
          <Card {...items[3]} />
        </div>
        <section className="tabContent">
          <h3>Examples</h3>
          <div className="infoTabs">
            <TabContent onSelect={() => handleClick("Components")}>Component</TabContent>
            <TabContent onSelect={() => handleClick("JSX")}>JSX</TabContent>
            <TabContent onSelect={() => handleClick("Props")}>Props</TabContent>
            <TabContent onSelect={() => handleClick("State")}>State</TabContent>
          </div>
          <div className="topicContent">
            <h3>{items[selectedTopic].title}</h3>
            <p>{items[selectedTopic].description}</p>
          </div>
        </section>
      </div>
    </>
  );
}
