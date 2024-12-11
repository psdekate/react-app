import "../components/Main.css";
import { items } from "../data";

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
  return (
    <>
      <div className="mainContent">
        <Card {...items[0]} />
        <Card {...items[1]} />
        <Card {...items[2]} />
        <Card {...items[3]} />
      </div>
    </>
  );
}
