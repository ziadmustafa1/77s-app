import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image";

export default function Footer() {
  const sections = [
    {
      title: "Design Services",
      links: [
        "Design Contest",
        "Hiring 1 to 1",
        "Switch to Designer",
        "75 design Studio",
        "Find a Designer",
        "Discover Designs",
      ],
    },
    {
      title: "Category",
      links: [
        "Logo - brand identity",
        "T-shirt",
        "Label - packaging",
        "Illustration - graphics",
        "Web - App design",
        "All categories",
      ],
    },
  ];

  const supportLinks = ["Pricing", "Join to 75 design", "Help", "About", "Contact"];

  return (
    <footer className="w-full bg-[#1e2b3c] text-white">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2 text-xs">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-4">Support</h3>
          <ul className="space-y-2 text-xs">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <Link href="#" className="text-gray-300 hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src='/logofooter.svg'
              alt="75design"
              width={80}
              height={24}
              className="h-auto w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
            <Link href="#">
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
            <Link href="#">
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-gray-300">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </div>
          <p>© 75design</p>
        </div>
      </div>
    </footer>
  )
}