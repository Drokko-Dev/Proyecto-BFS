import { useEffect, useState } from "react";
import { HomePageTicket } from "./HomePageTicket";
import { useGlobal } from "../../context/GobalContext.jsx";

export function HomePageCategoryTicket() {
  const { tickets } = useGlobal();

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
        />,
      );
      return category;
    }, {});

    const renderTickets = Object.entries(statusCategories).map(
      ([status, ticket]) => (
        <div className={`${status} ticket`} key={status}>
          <h1>{status}</h1>
          {ticket}
        </div>
      ),
    );

    return renderTickets;
  };

  return <section className="tickets">{renderedTickets()}</section>;
}
