import "../Main/Main.css";
import { TabContents } from "../TabContents";
// import { items } from "../../data";
// import { useState } from "react";
import { CardList } from "../CardList/CardList";

// export function Card(props) {
//   return (
//     <>
//       <div className="card">
//         <p>{props.id}</p>
//         <h2>{props.name}</h2>
//         <p className={props.isAvailable ? "inActive" : "active"}>
//           {props.isAvailable ? "Available" : "Not Available"}
//         </p>
//       </div>
//     </>
//   );
// }

export function Main() {
  return (
    <>
      <div className="infoCards">
        {/* <div className="cards">
          {randomData.map((conceptItem) => (
            <Card key={randomData.id} {...conceptItem} />
          ))}
        </div> */}
        <CardList />
        <TabContents />
      </div>
    </>
  );
}
