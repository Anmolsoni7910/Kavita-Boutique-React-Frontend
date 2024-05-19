import React from "react";

const callouts = [
  {
    name: "Unique & exclusive styles",
    description: "Work from home accessories",
    imageSrc:
      "https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873733/uvagvfccv1lzryb1kxcs.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Ethical & sustainable",
    description: "Journals and note-taking",
    imageSrc:
      "https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873730/clx1xbn8lnqkihgliajz.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "A guaranteed perfect fit",
    description: "Daily commute essentials",
    imageSrc:
      "https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873730/bhpldsa4k7ruu2it6hjf.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

function HomeBannerRToL() {
  return (
    <div className="bg-gray-100 rounded-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
          <h2 className="text-2xl font-bold text-gray-900">Reasons to Shop Custom</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-45 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="mt-6 text-2xl text-black font-semibold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBannerRToL;
