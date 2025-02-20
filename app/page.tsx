"use client";

import { DarkThemeToggle } from "flowbite-react";
import { Navbar } from "flowbite-react";
import Main from "./main";

export default function Home() {
  return (
    <>
      <Navbar fluid rounded className="m-2">
        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MyApp
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="container px-5 ">
        <Main />
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <DarkThemeToggle />
      </div>
    </>
  );
}
