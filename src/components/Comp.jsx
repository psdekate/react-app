export default function Comp({ title, description, something }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{something}</p>
    </div>
  );
}
