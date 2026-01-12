import { useEffect, useRef, useState } from "react";


export const useProfile = () => {
  const menuRef = useRef(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { menuRef, isProfileOpen, setIsProfileOpen }
}