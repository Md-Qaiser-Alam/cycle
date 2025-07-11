"use client";
import Logo from "@/components/global/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

const navLinksData = [
  {
    name: "Product",
    subLinks: [
      { name: "Explore", desc: "Explore Cycle with an interactive demo" },
      { name: "Slack app", desc: "Manage feedback from Slack, weirdly fast" },
      { name: "API", desc: "Build custom workflows" },
      { name: "Security", desc: "Enterprise-level protection" },
      {
        name: "Integrations",
        desc: "Connect & unify product information across tools",
      },
    ],
  },
  {
    name: "Resources",
    subLinks: [
      { name: "Blog", desc: "Updates from the Cycle team" },
      { name: "Docs", desc: "Become a Cycle expert" },
      { name: "Glossary", desc: "Learn essential product terminology" },
      {
        name: "Feature Requests",
        desc: "Suggest improvements for your favorite tools",
      },
    ],
  },
  {
    name: "Changelog",
  },
  {
    name: "Manifesto",
  },
];

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-[99] px-4 py-3 bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-md">
      <div className="flex items-center justify-between max-w-[var(--breathing-width-1)] mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="cursor-pointer">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block ml-28">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinksData.map((link, idx) => (
                <NavigationMenuItem key={idx}>
                  {link.subLinks ? (
                    <>
                      <NavigationMenuTrigger className="text-md">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white rounded-lg shadow-lg p-4 min-w-[300px] animate-fade-in">
                        <ul className="grid gap-3">
                          {link.subLinks.map((item, subIdx) => (
                            <li key={subIdx}>
                              <NavigationMenuLink
                                href="#"
                                className="block space-y-1 hover:bg-gray-100 p-2 rounded-md transition"
                              >
                                <div className="text-lg font-medium text-black">
                                  {item.name}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {item.desc}
                                </p>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href="#"
                      className="px-3 py-2 text-md font-medium transition"
                    >
                      {link.name}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:block space-x-3">
          <Button className="text-black py-6 hover:bg-gray-100 bg-transparent border-none shadow-none text-md">
            Log in
          </Button>
          <Button size={"lg"} className="rounded-xl py-6 text-md">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer">
          <Hamburger
            toggled={isMenuVisible}
            toggle={setIsMenuVisible}
            direction="right"
            size={20}
          />
        </div>

        {isMenuVisible && (
          <Sheet open={isMenuVisible} onOpenChange={setIsMenuVisible}>
            <SheetContent side="top" className="z-[99] py-5 rounded-2xl m-2">
              <SheetHeader className="flex flex-col justify-center items-center space-y-3">
                {navLinksData.map((e, i) => (
                  <SheetTitle key={i}>
                    <a href="#">{e.name}</a>
                  </SheetTitle>
                ))}
              </SheetHeader>

              <div className="flex flex-col justify-center items-center">
                <Button className="text-black py-6 hover:bg-gray-100 bg-transparent border-none shadow-none text-md">
                  Log in
                </Button>
                <Button size={"lg"} className="rounded-xl py-6 text-md w-40">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
