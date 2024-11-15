"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FastForward } from "lucide-react"

export default function Hero() {
  return (
    <div className="px-4 md:py-12 bg-[#F5F7FA]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="md:hidden block">
          <Image
            src="/02.png" // ضع مسار صورة الخلفية هنا
            alt="Creative Design Illustration"
            width={300}
            height={300}
            className=""
          />
        </div>
        <div className="max-w-2xl text-center lg:text-left md:pt-28">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Access to talented and creative designers for original designs
          </h1>
          <div className="mt-8 flex flex-row items-center justify-between gap-2 bg-white">
            {/* أول Select */}
            <Select>
              <SelectTrigger className="h-10 w-full max-w-[200px] border border-white bg-white px-4 text-sm">
                <SelectValue placeholder="Logo, Brand Identity, Packaging..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logo">Logo, Brand Identity, Packaging</SelectItem>
                <SelectItem value="business">Business & Advertising</SelectItem>
                <SelectItem value="illustration">Illustration & Graphics</SelectItem>
              </SelectContent>
            </Select>

            {/* ثاني Select */}
            <Select>
              <SelectTrigger className="h-10 w-full max-w-[200px] border border-white bg-white px-4 text-sm">
                <SelectValue placeholder="CONTEST" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contest">CONTEST</SelectItem>
                <SelectItem value="project">Project</SelectItem>
              </SelectContent>
            </Select>

            {/* الزر */}
            <Button className="h-10 bg-[#ff5757] px-4 text-sm font-medium text-white hover:bg-[#ff4141]">
              Start
            </Button>
          </div>

          <div className="mt-2 text-gray-500 text-sm text-center">Project 1 to 1</div>
          <div className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 text-[#ff5757]">
            <FastForward className="h-5 w-5" />
            <span className="font-bold">IP PROTECTION FOR YOUR DESIGNS - 100% GUARANTEE</span>
            <FastForward className="h-5 w-5 rotate-180" />
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/02.png" // ضع مسار صورة الخلفية هنا
            alt="Creative Design Illustration"
            width={300}
            height={300}
            className=""
          />
        </div>
      </div>
    </div>
  )
}
