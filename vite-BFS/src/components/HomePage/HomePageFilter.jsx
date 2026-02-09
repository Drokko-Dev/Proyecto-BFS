import { useGlobal } from "../../context/GobalContext.jsx";

const DataFilterHomePage = [
  { name: "priority", label: "Prioridad" },
  { name: "date", label: "Fecha" },
  { name: "assigned_to", label: "Usuario" },
];

export function HomePageFilter() {
  const { tickets } = useGlobal();
  const filters = DataFilterHomePage.map((filter) => {
    const uniqueValues = new Set();
    tickets.forEach((ticket) => {
      uniqueValues.add(ticket[filter.name]);
    });
    const optionsArray = [...uniqueValues];
    return (
      <select name={filter.name} key={filter.name} className="filterSelect">
        <option value="">{filter.label}</option>
        {optionsArray.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    );
  });

  return (
    <div className="filter-container">
      <div className="filter">{filters}</div>
    </div>
  );
}
