import React from "react";
import Link from "next/link";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto font-abc">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Napište nám
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Spojte se na námi emailem nebo na sociálních sitích.
          </p>
        </div>

        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">sanatanastrology.cz@gmail.com</a>
          <p className="leading-normal my-5">
            Vysocanska 23
            <br />
            Prague-9, 19000 , Czech Republic
          </p>

          <span className="inLine-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/Astrologie-Sanatan-v%C3%A9dsk%C3%A1-astrologie-102275345851203">
              <a target="_blank" className="text-gray-900">
                <AiFillFacebook />
              </a>
            </Link>
            <Link href="https://twitter.com/SanatanAstro3">
              <a target="_blank" className="ml-3 text-gray-900">
                <AiFillTwitterSquare />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
