import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/home/hero"
import Categories from "@/components/home/categories"
import HowItWorks from "@/components/home/how-it-works"
import Referral from "@/components/home/referral-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <HowItWorks />
        <Referral/>
      </main>
      <Footer />
    </div>
  )
}