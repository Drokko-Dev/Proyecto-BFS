console.log("antes del fetch");

const container = document.querySelector(".ticket");
const sectionFilters = document.querySelectorAll(".filterSelect");

function renderTickets(data) {
  data.forEach((ticket) => {
    const article = document.createElement("article");
    article.className = "ticket-card";
    article.dataset.priority = ticket.priority;
    article.dataset.date = ticket.date;
    article.dataset.assigned_to = ticket.assigned_to;
    article.dataset.status = ticket.status;
    article.dataset.category = ticket.category;
    article.innerHTML = ` 
            <p>#${ticket.id}</p>
              <h2>${ticket.title}</h2>
              <div class="prioridad">
                <span class=${ticket.priority}></span>
                <span>${ticket.priority}</span>
              </div>

              <span>${ticket.status}</span>
              <p>${ticket.date}</p>

              <div class="asignado">
                <img src="./images/perfil_demo.png" alt="" />
                <p>${ticket.assigned_to}</p>
              </div>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-mixpanel"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M4.5 12m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"
                  />
                  <path
                    d="M20.5 12m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"
                  />
                  <path d="M13 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg
              ></span>
            `;
    container.appendChild(article);
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

/* function renderSelects(data, Array) {
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
    
    for (const filterSelect in optionsSelect) {
     
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
} */

fetch("../JavaScript/JSON/info_tickets.json")
  .then((response) => {
    return response.json();
  })
  .then((dataTickets) => {
    renderTickets(dataTickets.tickets);
    /* renderSelects(dataTickets.tickets, ["prioridad", "date", "assigned_to"]); */
    renderSelects2(dataTickets.tickets);
  });
