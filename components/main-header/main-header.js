import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png"
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import classes from "./main-header.module.css";

export default function MainHeader() {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <Link href="/community">Foodies Community Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}