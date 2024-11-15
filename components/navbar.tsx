import Link from "next/link"
import { Bell, CircleUserRound, Mail, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function Navbar() {

  const menuItems = [
    { title: "Categories", href: "/categories" },
    { title: "Discover", href: "/discover" },
    { title: "Designers", href: "/designers" },
    { title: "Find contests", href: "/contests" },
    { title: "Find Projects", href: "/projects" },
    { title: "My Work", href: "/work" },
    { title: "Help", href: "/help" },
  ]

  const userMenuItems = [
    { title: "Account setting", href: "/settings" },
    { title: "Profile", href: "/profile" },
    { title: "Balance", href: "/balance" },
    { title: "Log out", href: "/logout" },
  ]

  return (
    <header className="w-full sticky top-0 z-30 bg-[#F5F7FA]">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="75design"
            width={100}
            height={30}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Mail className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleUserRound className="" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {userMenuItems.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}