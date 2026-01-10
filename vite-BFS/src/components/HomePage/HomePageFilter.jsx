export function HomePageFilter(props) {
  return (
    <select name={props.name} className="filterSelect">
      <option value="">{props.label}</option>
    </select>
  );
}
