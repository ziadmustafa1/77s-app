import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Logo & Brand identity",
      img: '/logocat.svg',
      color: "bg-[#FF5F6B]",
    },
    {
      name: "Business & Advertising",
      img: '/Businesslogo.svg',
      color: "bg-[#4747C7]",
    },
    {
      name: "Illustration & Graphics",
      img: '/Illustration.svg',
      color: "bg-[#13192E]",
    },
    {
      name: "Web & App design",
      img: '/Web.svg',
      color: "bg-[#00C7C7]",
    },
    {
      name: "Clothing & Merchandise",
      img: '/Clothing.svg',
      color: "bg-[#252C47]",
    },
    {
      name: "All Categories",
      color: "bg-[#F5F7FA]",
      textColor: "text-gray-900",
      img: '/allcat.svg',
      link: "/all-categories",
    },
  ]

  return (
    <div className="container mx-auto md:px-12 py-12 md:pl-32 pl-10 px-5">
      <h2 className="mb-8 text-lg font-medium">Categories:</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          category.link ? (
            <Link href={category.link} key={index} passHref>
              <div
                className={`group shadow-custom relative h-36 w-36 md:w-36 overflow-hidden rounded-2xl ${category.color} p-0 transform transition-transform duration-300 hover:scale-105`}
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
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className={`group shadow-custom relative h-36 w-32 md:w-36 overflow-hidden rounded-2xl ${category.color} p-0 transform transition-transform duration-300 hover:scale-105`}
              aria-label={category.name}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={70}
                  height={20}
                />
                <span className={`text-center mt-3 text-sm font-bold ${category.textColor || 'text-white'}`}>
                  {category.name}
                </span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
