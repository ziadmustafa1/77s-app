import Link from "next/link"
import Image from "next/image"
import { FaBehanceSquare, FaInstagramSquare } from "react-icons/fa"
import { FaFacebook, FaSquareTwitter } from "react-icons/fa6"
import { CiBookmark, CiMail } from "react-icons/ci"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { AiOutlineExclamationCircle } from "react-icons/ai"

export default function Footer() {
  return (
    <footer className="w-full text-white bg-[#1e2b3c]">
      <div className="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-auto px-8 py-16 md:pl-20">
          {/* Design Services Column */}
          <div>
            <h3 className="mb-6 text-base font-medium">Design Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Design Contest
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Hiring 1 to 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Switch to Designer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  77S design Studio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Find a Designer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Discover Designs
                </Link>
              </li>
            </ul>
          </div>

          {/* Category Column */}
          <div>
            <h3 className="mb-6 text-base font-medium">Category</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Logo - brand identity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  T-shirt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Label - packaging
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Illustration - graphics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Web - App design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  All categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <CiBookmark className="h-8 w-8"/>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <CiMail className="h-8 w-8"/>
                  Join to 775 design
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <IoIosHelpCircleOutline className="h-8 w-8"/>
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <AiOutlineExclamationCircle className="h-8 w-8"/>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Image
                  src="/contact.svg"
                  alt="75design"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                />
                  Contact
                </Link>
                <div className="mt-8 flex items-center gap-4">
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            Design Language
          </Link>
          <Link href="#" className="text-sm bg-white text-black p-1 rounded-xl">
          English
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white">
            عربي
          </Link>
        </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector */}


        {/* Bottom Section */}
        <div className="bg-[#13192E] p-20 border-t-2">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logofooter.svg"
                  alt="75design"
                  width={120}
                  height={40}
                  className="h-auto w-auto"
                />
              </Link>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-300 hover:text-white">
                  Privacy
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" aria-label="Behance">
                <FaBehanceSquare className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagramSquare className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaSquareTwitter className="h-6 w-6 text-gray-300 hover:text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}