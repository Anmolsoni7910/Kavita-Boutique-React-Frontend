import React from "react";

function HomeTop() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Let’s Get Shopping!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We want to transform your closet and your confidence with custom
              made-to-measure clothing. We believe it’s the most ethically and
              environmentally impactful way you can buy new clothes.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 rotate-12">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/q/7/v/s-pwd322-purshottam-wala-original-imagm7ypaavduvnm.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/e/a/p/s-pwd322-purshottam-wala-original-imagm6ywr7vz95sz.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 rotate-12">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/kuyf8nk0/dress/x/4/c/s-21auw15994-116106-w-original-imag7ymmr5gggzzg.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/kxtaxzk0/dress/c/d/m/l-keri-vaani-creation-original-imaga6ngag7wtcgh.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/l13whow0/dress/m/4/o/xxl-21aud10360-501943-aurelia-original-imagcqvjnssagkqt.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 rotate-12">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/6/t/z/free-sequined-embroidered-saree-granthva-fab-unstitched-original-imaggsq6b4y2adwk.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://rukminim1.flixcart.com/image/612/612/k7c88sw0/sari/j/z/y/free-ladli-krishna-r-fashion-original-imafphxuxmkutnt8.jpeg?q=70"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/women/clothing/saree"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
