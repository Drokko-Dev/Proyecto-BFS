import PropTypes from "prop-types";

export function SidebarItem(props) {
  return (
    <li className={props.className}>
      <a href={props.link}>
        {props.icon}
        {props.title}
      </a>
    </li>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node, // permite un componente, SVG, JSX, etc.
  link: PropTypes.string,
  className: PropTypes.string,
};
