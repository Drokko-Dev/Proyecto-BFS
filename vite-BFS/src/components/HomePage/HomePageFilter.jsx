const DataFilterHomePage = [
  { name: "priority", label: "Prioridad" },
  { name: "date", label: "Fecha" },
  { name: "assigned_to", label: "Usuario" },
];

export function HomePageFilter() {
  const filters = DataFilterHomePage.map((filter) => (
    <select name={filter.name} key={filter.name} className="filterSelect">
      <option value="">{filter.label}</option>
    </select>
  ));

  return (
    <div className="filter-container">
      <div className="filter">{filters}</div>
    </div>
  );
}
