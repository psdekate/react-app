import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { items } from "./data";
import Comp from "./components/Comp";
import TabButton from "./components/TabButton";

function App() {
  return (
    <>
      <div>
        <Comp
          title={items[0].title}
          description={items[0].description}
          something={items[0].something}
        />
        <Comp {...items[1]} />
        <Comp {...items[2]} />
      </div>
      <section>
        <menu>
          <TabButton name="Components">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab inventore vero, officiis
              veritatis facere ex? Modi, nisi sunt quas nesciunt dignissimos temporibus eligendi
              porro cumque, quo, voluptate minus iusto suscipit?
            </p>
            <a href="#">
              <b>Wait, this works?</b>
            </a>
          </TabButton>
        </menu>
      </section>
    </>
  );
}

export default App;
