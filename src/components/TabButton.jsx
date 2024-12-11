import "../components/TabButton.css";

//destructuring
export default function TabButton({ name, children }) {
  return (
    <li>
      <button>{name}</button>
      {children}
    </li>
  );
}

// export default function TabButton(props) { //using default props
//   return (
//     <li>
//       <button>{props.name}</button>
//       {props.children}
//     </li>
//   );
// }
