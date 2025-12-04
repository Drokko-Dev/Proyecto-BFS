console.log("antes del fetch");

const container = document.querySelectorAll(".ticket");
const sectionFilters = document.querySelectorAll(".filterSelect");

function renderTickets(data) {
  data.forEach((ticket) => {
    container.forEach((categoryTicket) => {
      if (categoryTicket.classList.contains(ticket.status)) {
        const article = document.createElement("article");
        article.className = "ticket-card";
        article.dataset.priority = ticket.priority;
        article.dataset.date = ticket.date;
        article.dataset.assigned_to = ticket.assigned_to;
        article.innerHTML = ` 
            <div>
                <h2>${ticket.title}</h2>
                <span class=${ticket.priority}>${ticket.priority}</span>
            </div>
                <p>ID: #${ticket.id}</p>
            <div>
                <img src="./images/perfil_demo.png" alt="" />
                <p>${ticket.assigned_to}</p>
                <span>${ticket.date}</span>
            </div>
            `;
        categoryTicket.appendChild(article);
      }
    });
  });
}

function renderSelects(data, Array) {
  let prioridades = [];
  let date = [];
  let assigned_to = [];
  data.forEach((ticket) => {
    prioridades.push(ticket.priority);
    date.push(ticket.date);
    assigned_to.push(ticket.assigned_to);
  });
  prioridades = [...new Set(prioridades)];
  date = [...new Set(date)].sort().reverse();
  assigned_to = [...new Set(assigned_to)].sort();
  const optionsSelect = {
    prioridad: prioridades,
    date: date,
    assigned_to: assigned_to,
  };
  Array.forEach((filter) => {
    const select = document.querySelector(`.filterSelect.${filter}`);
    /* console.log(filter); */
    for (const filterSelect in optionsSelect) {
      /* console.log(filterSelect); */
      if (filter === filterSelect) {
        optionsSelect[filterSelect].forEach((prioridad) => {
          const option = document.createElement("option");
          option.textContent = prioridad;
          option.value = prioridad;
          select.appendChild(option);
        });
      }
    }
  });
}

function renderSelects2(data) {
  let filters = {};
  sectionFilters.forEach((element) => {
    filters[element.name] = [];
  });
  /* console.log(filters); */
  for (const filter in filters) {
    /* console.log(filter); */
    const select = document.querySelector(`.filterSelect.${filter}`);
    data.forEach((ticket) => {
      filters[filter].push(ticket[filter]);
    });
    filter !== "priority"
      ? (filters[filter] = [...new Set(filters[filter])].sort().reverse())
      : (filters[filter] = [...new Set(filters[filter])]);

    filters[filter].forEach((options) => {
      const option = document.createElement("option");
      option.textContent = options;
      option.value = options;
      select.appendChild(option);
    });
  }
  console.log(filters);
}

fetch("../JavaScript/JSON/info_tickets.json")
  .then((response) => {
    return response.json();
  })
  .then((dataTickets) => {
    renderTickets(dataTickets.tickets);
    /* renderSelects(dataTickets.tickets, ["prioridad", "date", "assigned_to"]); */
    renderSelects2(dataTickets.tickets);
  });
