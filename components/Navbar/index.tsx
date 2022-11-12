import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({}) => {
  return (
    <nav className="nav">
      <Image
        className="nav__logo"
        src="https://placekitten.com/300/300"
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <ul className="nav__container">
        <li className="nav__container__item">
          <Link className="nav__container__item__link" href="/">
            Home
          </Link>
        </li>
        <li className="nav__container__item">
          <Link className="nav__container__item__link" href="/cart">
            Cart
          </Link>
        </li>
        <li className="nav__container__item">
          <Link
            className="nav__container__item__link"
            href="/checkout"
          >
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
