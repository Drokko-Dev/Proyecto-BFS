import { useGlobal } from "../../context/GobalContext.jsx";
import { useState, useEffect } from "react";

const DataFilterHomePage = [
  { name: "priority", label: "Prioridad" },
  { name: "date", label: "Fecha" },
  { name: "assigned_to", label: "Usuario" },
];

export function HomePageFilter() {
  const { tickets, filtros, setFiltros } = useGlobal();
  const ticketsFiltrados = tickets.filter((ticket) => {
    return (
      (filtros.priority === "" || ticket.priority === filtros.priority) &&
      (filtros.date === "" || ticket.date === filtros.date) &&
      (filtros.assigned_to === "" || ticket.assigned_to === filtros.assigned_to)
    );
  });
  const filters = DataFilterHomePage.map((filter) => {
    const uniqueValues = new Set();
    ticketsFiltrados.forEach((ticket) => {
      uniqueValues.add(ticket[filter.name]);
    });
    const optionsArray = [...uniqueValues];
    return (
      <select
        name={filter.name}
        key={filter.name}
        className="filterSelect"
        value={filtros[filter.name]}
        onChange={(e) => {
          const newFiltros = { ...filtros };
          newFiltros[filter.name] = e.target.value;
          setFiltros(newFiltros);
        }}
      >
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
      <button
        onClick={() => {
          setFiltros({ priority: "", date: "", assigned_to: "" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="icon icon-tabler icons-tabler-outline icon-tabler-filter-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M13.758 19.414 9 21v-8.5L4.52 7.572A2 2 0 0 1 4 6.227V4h16v2.172a2 2 0 0 1-.586 1.414L15 12v1.5M22 22l-5-5M17 22l5-5" />
        </svg>
      </button>
    </div>
  );
}
