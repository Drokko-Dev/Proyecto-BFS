export function HomePageTicket(props) {
  return (
    <article data-prioridad="alta" className="ticket-card">
      <div>
        <h2>{props.title}</h2>
        <span className={props.priority}>{props.priority}</span>
      </div>
      <p>ID: #{props.id}</p>
      <div>
        <img src="/img/Profile3.png" alt="" />
        <p>{props.assigned_to}</p>
        <span>{props.date}</span>
      </div>
    </article>
  );
}
