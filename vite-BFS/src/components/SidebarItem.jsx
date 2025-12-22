import React from "react";

export function SidebarItem({children }) {
  return (
    <li>
      <a href="#">
        {children}
      </a>
    </li>
  );
}
