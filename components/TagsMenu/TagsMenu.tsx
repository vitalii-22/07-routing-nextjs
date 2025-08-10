"use client";

import { useState } from "react";
import Link from "next/link";
import css from "./TagsMenu.module.css";

const categories: string[] = [
  "All",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
  "Todo",
];

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      <ul className={css.menuList}>
        {categories.map((category) => (
          <li key={category} className={css.menuItem}>
            <Link href={`/notes/filter/${category}`} onClick={toggle}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
