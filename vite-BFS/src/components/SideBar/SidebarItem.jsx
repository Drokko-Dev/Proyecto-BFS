import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";

export function SidebarItem({link, icon, title, classname}) {
  const location = useLocation();
  return (
    <li className={`${classname} ${(location.pathname === link)? 'selected' : ''}`}>
      <Link
        to={link}
      >
        {icon}
        {title}
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
