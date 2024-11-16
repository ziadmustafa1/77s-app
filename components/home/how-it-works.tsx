import Image from "next/image";

export default function HowItWorks() {
  const contestSteps = [
    "Submit a creative brief",
    "Select a package and features",
    "Invite more designers",
    "Send feedback & rate",
    "Pick up the finalists for the final round",
    "Select the winner design",
    "File handover (copy transfer agreement - File review - Payment release)",
  ];

  const hiringSteps = [
    "Submit a creative brief",
    "Invite a designer or send to your designer",
    "Discuss project details/Timeline & Budget",
    "Secure invoice",
    "Discuss the design & Send feedback",
    "Receive files & Release payment",
  ];

  return (
    <div className="container md:pl-20 mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="mb-16 text-center text-4xl font-bold text-[#ff5757]">
        How it works & Experience
      </h2>

      {/* Steps Section */}
      <div className="space-y-12">
        {/* Row 1: Contest Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <h3 className="mb-6 text-lg font-semibold text-[#4b37bc]">
              Contest Steps
            </h3>
            <ol className="list-inside list-decimal space-y-3 text-gray-600">
              {contestSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <Image
              src="/Experience1.svg"
              alt="Contest process illustration"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Row 2: Hiring Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Image
              src="/Experience2.svg"
              alt="Hiring process illustration"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="mb-6 text-lg font-semibold text-[#00bcd4]">
              Hiring Steps
            </h3>
            <ol className="list-inside list-decimal space-y-3 text-gray-600">
              {hiringSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
