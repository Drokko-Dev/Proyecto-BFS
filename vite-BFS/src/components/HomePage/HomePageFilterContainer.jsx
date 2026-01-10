import * as Icons from "../../assets/svg/svg";
import { HomePageFilter } from "./HomePageFilter";
import { DataFilterHomePage } from "./DataHomePageFiler";

export function HomePageFilterContainer() {
  const filters = DataFilterHomePage.map((filter) => (
    <HomePageFilter name={filter.name} label={filter.label} key={filter.name} />
  ));
  return (
    <div className="filter-container">
      <div className="filter">{filters}</div>

      {/* <button>
        {Icons.CreateNewTicket}
        Crear Nuevo Ticket
      </button> */}
    </div>
  );
}
