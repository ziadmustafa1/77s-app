import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Categories() {
  const categories = [
    {
      name: "Logo & Brand identity",
      img: '/logocat.svg',
      color: "bg-[#ff5757]",
    },
    {
      name: "Business & Advertising",
      img: '/Businesslogo.svg',
      color: "bg-[#7b61ff]",
    },
    {
      name: "Illustration & Graphics",
      img: '/Illustration.svg',
      color: "bg-[#1e2b3c]",
    },
    {
      name: "Web & App design",
      img: '/Web.svg',
      color: "bg-[#00e5b0]",
    },
    {
      name: "Clothing & Merchandise",
      img: '/Clothing.svg',
      color: "bg-[#1e2b3c]",
    },
    {
      name: "All Categories",
      color: "bg-white",
      textColor: "text-gray-900",
      img: '/allcat.svg',
      link: "/all-categories",
    },
  ]

  return (
    <div className="container mx-auto md:px-12 py-12 md:pl-16 px-5">
      <h2 className="mb-8 text-lg font-medium">Categories:</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          category.link ? (
            <Link href={category.link} key={index} passHref className="bg-white">
              <Button
                className={`group shadow-custom relative h-32 w-44  md:w-60 overflow-hidden rounded-2xl ${category.color} p-0`}
                aria-label={category.name}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={30}
                    height={20}
                  />
                  <span className={`text-center mt-3 text-sm font-medium ${category.textColor || 'text-white'}`}>
                    {category.name}
                  </span>
                </div>
              </Button>
            </Link>
          ) : (
            <Button
              key={index}
              className={`group shadow-custom relative h-32 md:w-60 overflow-hidden rounded-2xl ${category.color} p-0`}
              aria-label={category.name}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={50}
                  height={20}
                />
                <span className={`text-center mt-3 text-sm font-medium ${category.textColor || 'text-white'}`}>
                  {category.name}
                </span>
              </div>
            </Button>
          )
        ))}
      </div>
    </div>
  )
}
