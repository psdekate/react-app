import { randomData } from "../../data2";
// import "../Main/Main.css";

export function CardList() {
  return (
    <>
      <div className="cards">
        {randomData.map((conceptItem) => (
          <Card key={conceptItem.id} {...conceptItem} />
        ))}
      </div>
    </>
  );
}

export function Card(props) {
  return (
    <>
      <div className="card">
        <p>{props.id}</p>
        <h3>{props.name}</h3>
        <p className={props.isAvailable ? "inActive" : "active"}>
          {props.isAvailable ? "Available" : "Not Available"}
        </p>
      </div>
    </>
  );
}
