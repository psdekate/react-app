import "../Main/Main.css";
import { TabContents } from "../TabContents";
import { CardList } from "../CardList/CardList";

export function Main() {
  return (
    <>
      <div className="infoCards">
        <CardList />
        <TabContents />
      </div>
    </>
  );
}
