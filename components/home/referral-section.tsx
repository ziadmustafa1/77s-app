"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Referral() {
  return (
    <div className="mx-auto px-4 py-12 bg-[#F5F7FA]">
      <div className="mx-auto max-w-xl rounded-xl bg-[#ff5757] p-6">
        <div className="mb-4 text-white">
          <p>Refer new Clients and you both get a cashback code $50 promotion free.</p>
          <p className="text-sm">Please invite new client</p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input className="h-10 bg-white" placeholder="Enter client details" />
            <Button className="h-10 bg-gray-200 text-gray-700 hover:bg-gray-300">
              Copy Link
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white">Add Email addresses</label>
            <div className="flex gap-2">
              <Input className="h-10 bg-white" placeholder="Enter email addresses" />
              <Button className="h-10 bg-gray-200 text-gray-700 hover:bg-gray-300">
                Invite Client
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}