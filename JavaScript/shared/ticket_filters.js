const selects = document.querySelectorAll(".filterSelect");
const selectsContainer = document.querySelector(".filter");

selectsContainer.addEventListener("change", () => {
  let filterValues = {};
  selects.forEach((select) => {
    filterValues[select.name] = select.value.toLowerCase();
  });
  console.log(filterValues);
  const articles = document.querySelectorAll(".ticket-card");
  articles.forEach((article) => {
    const dataAttributes = article.dataset;
    let match = true;
    for (const filter in filterValues) {
      const ValueArticle = dataAttributes[filter].toLowerCase();
      ValueArticle === filterValues[filter] || !filterValues[filter]
        ? (match = true)
        : (match = false);
      if (!match) break;
    }
    article.classList.toggle("is-hidden", !match);
  });
});
