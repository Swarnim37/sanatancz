import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Konzultace
            {/*<br className="hidden sm:block" />
            Selfies Wayfarers*/}
          </h1>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/fullreading">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="Osobní horoskop"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Konzultace přes Zoom/Skype
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Osobní horoskop 2 hodiny
                </h2>
                <p className="mt-1">2000 Kč</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/fullreading90">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Konzultace přes Zoom/Skype
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Osobní horoskop 1 hodina
                </h2>
                <p className="mt-1">1200 Kč</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href="/followup">
                <a className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    width={420}
                    height={260}
                    src="/img/birthchart.jpg"
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Konzultace přes Zoom/Skype
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Následné konzultace Zoom/Skype
                </h2>
                <p className="mt-1">600 Kč</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
