console.log("antes del fetch");

const container = document.querySelectorAll(".ticket");

function renderTickets(data) {
  data.forEach((ticket) => {
    container.forEach((categoryTicket) => {
      if (categoryTicket.classList.contains(ticket.status)) {
        const article = document.createElement("article");
        article.className = "ticket-card";
        article.dataset.prioridad = ticket.priority;
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

fetch("../JavaScript/JSON/info_tickets.json")
  .then((response) => {
    return response.json();
  })
  .then((dataTickets) => {
    renderTickets(dataTickets.tickets);
    renderSelects(dataTickets.tickets, ["prioridad", "date", "assigned_to"]);
  });
