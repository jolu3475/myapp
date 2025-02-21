"use client";

import { DarkThemeToggle } from "flowbite-react";
import { Navbar } from "flowbite-react";
import Main from "./main";

export default function Home() {
  return (
    <>
      <div className=" fixed inset-x-0 top-0 p-2">
        <Navbar fluid rounded className="bg-gray-300">
          <Navbar.Brand href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              MyApp
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#home" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#about">About Me</Navbar.Link>
            <Navbar.Link href="#techno">Techno</Navbar.Link>
            <Navbar.Link href="#project">Project</Navbar.Link>
            <Navbar.Link href="#contact">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div
        className="pt-15 container h-screen p-20 dark:text-slate-400"
        id="home"
      >
        <Main />
      </div>
      <div
        className="pt-15 container h-screen p-20 dark:text-slate-400"
        id="about"
      >
        <Main />
      </div>
      <div
        className="pt-15 container h-screen p-20 dark:text-slate-400"
        id="techno"
      >
        <Main />
      </div>
      <div
        className="pt-15 container h-screen p-20 dark:text-slate-400"
        id="project"
      >
        <Main />
      </div>
      <div
        className="pt-15 container h-screen p-20 dark:text-slate-400"
        id="contact"
      >
        <Main />
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <DarkThemeToggle />
      </div>
    </>
  );
}
