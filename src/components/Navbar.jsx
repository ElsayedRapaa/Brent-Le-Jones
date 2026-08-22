import { NavLink } from "react-router-dom";

export default function Navbar({link}) {
  return (
    <NavLink
      to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
      className={({ isActive, isPending }) =>
        `relative inline-block py-1 text-white font-serif text-lg tracking-wide transition-opacity duration-300
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-white
        after:origin-left after:transition-transform after:duration-300 after:ease-out
        ${isPending ? "opacity-50" : ""}
        ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`
      }
      >
      {link}
    </NavLink>
  )
}
