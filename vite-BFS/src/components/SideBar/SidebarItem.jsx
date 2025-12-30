import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";

export function SidebarItem(props) {
  const location = useLocation();
  return (
    <li
      className={`${props.classname} ${
        location.pathname === props.link ? "selected" : ""
      }`}
    >
      <Link to={props.link}>
        {props.icon}
        {props.title}
      </Link>
    </li>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node, // permite un componente, SVG, JSX, etc.
  link: PropTypes.string,
  className: PropTypes.string,
};
