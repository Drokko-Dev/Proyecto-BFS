const filtros = document.querySelector(".filter");
const filtros2 = document.querySelectorAll(".filterSelect");

/* filtros.addEventListener("change", () => {
  const prioridad_filtro = filtros.value.toLowerCase();  
  const tickets = document.querySelectorAll(".ticket-card");
  tickets.forEach((ticket) => {
    let prioridad = ticket.dataset.prioridad;
     if (prioridad === prioridad_filtro || !prioridad_filtro) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
}); */

/* filtros.addEventListener("change", () => {
  const prioridad_filtro = filtros.value.toLowerCase();  
  const tickets = document.querySelectorAll(".ticket-card");
  tickets.forEach((ticket) => {
    let prioridad = ticket.getAttribute("data-prioridad");
    const isShown = prioridad === prioridad_filtro || !prioridad_filtro;
    ticket.classList.toggle("is-hidden", !isShown);
  });
}); */

/* filtros2.forEach(element => {
  element.addEventListener("change", () => {
  const prioridad_filtro = element.value; 
  console.log(prioridad_filtro);
  
});
}); */

/* filtros.addEventListener("click", (event) => {
  const element = event.target;
  element.addEventListener("change", () => {
    const filterValue = element.value.toLowerCase();
    console.log(filterValue);
    
    const articles = document.querySelectorAll(".ticket-card");
    articles.forEach((article) => {
      let dataAttributes = article.dataset;
      for (const Attributes in dataAttributes) {
        console.log(Attributes);
        let prioridad = article.getAttribute(`data-${Attributes}`);
        console.log(prioridad);
        
        const isShown = prioridad === filterValue || !filterValue;
        article.classList.toggle("is-hidden", !isShown);
      }
    });
  });
}); */

filtros2.forEach((select) => {
  select.addEventListener("change", () => {
    const selectValue = select.value;
    const selectName = select.name;
    const articles = document.querySelectorAll(".ticket-card");
    articles.forEach((article) => {
      const dataAttributes = article.dataset;
      const isShown =
        dataAttributes[selectName] === selectValue || !selectValue;
      article.classList.toggle("is-hidden", !isShown);
    });
  });
});
