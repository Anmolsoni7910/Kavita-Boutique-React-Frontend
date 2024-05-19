import React from "react";

const callouts = [
  {
    name: 'Shop cLothes',
    description: 'Work from home accessories',
    imageSrc: 'https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873730/zohybsqlaw9wlhpnuo5c.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/women/clothing/lengha_choli',
  },
  {
    name: 'Shop bangles & accessories',
    description: 'Journals and note-taking',
    imageSrc: 'https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873730/njttasyqywsfyxgpp3t7.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/women/accessories/bangles',
  },
  {
    name: 'Shop jewellery',
    description: 'Daily commute essentials',
    imageSrc: 'https://res.cloudinary.com/djsbgjc6w/image/upload/v1714873732/isis9dvkrw0noyakjlrv.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/women/accessories/jewellery',
  },
]

function HomeBannerLToR() {
  return (
    <div className="bg-gray-100 rounded-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
          <h2 className="text-2xl font-bold text-gray-900">Shop</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-xl text-black">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBannerLToR;
