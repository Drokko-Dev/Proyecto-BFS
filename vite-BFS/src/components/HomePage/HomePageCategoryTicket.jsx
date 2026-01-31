import { useEffect, useState } from "react";
import { HomePageTicket } from "./HomePageTicket";

export function HomePageCategoryTicket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/info_tickets.json")
      .then((response) => {
        console.log(response.ok);
        return response.json();
      })
      .then((dataTickets) => {
        setTickets(dataTickets.tickets);
      })
      .catch((error) => {
        console.error("Error fetching tickets data:", error);
      });
  }, []);
  const renderedTickets = () => {
    const statusCategories = tickets.reduce((category, ticket) => {
      if (!category[ticket.status]) {
        category[ticket.status] = [];
      }
      category[ticket.status].push(
        <HomePageTicket
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          priority={ticket.priority}
          assigned_to={ticket.assigned_to}
          date={ticket.date}
        />
      );
      return category;
    }, {});
    /* for (const status in statusCategories) {
      renderTickets.push(
        <div className={`${status} ticket`} key={status}>
          <h1>{status}</h1>
          {statusCategories[status]}
        </div>
      );
    } */
    const renderTickets = Object.entries(statusCategories).map(
      ([status, ticket]) => (
        <div className={`${status} ticket`} key={status}>
          <h1>{status}</h1>
          {ticket}
        </div>
      )
    );
    return renderTickets;
  };
  return <section className="tickets">{renderedTickets()}</section>;
}
