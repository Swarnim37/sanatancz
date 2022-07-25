import React from "react";
import Image from "next/image";

const Compatibility = () => {
  return (
    <div>
      <section className="text-gray-600 body-font font-abc">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              width={700}
              height={620}
              src="/img/compatility.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Partnerský horoskop 1,5 – 2 hodiny
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Partnerský horoskop se skládá ze dvou částí. První část spočívá ve
              vyhodnocení osobností, citových potřeb, hodnot a předpokladů pro
              vztah jednotlivých partnerů. Druhá část je porovnáním vzájemného
              působení energií obou horoskopů.
            </p>
            <div>
              <p>
                Pro objednávku výkladu napište, o který typ výkladu mate zájem a
                tyto údaje na email <b> sanatanastrology.cz@gmail.com: </b>
              </p>
              <li>datum narození </li>
              <li>
                pokud možno přesný čas (na minutu) nebo alespoň +/- 10 – 15
                minut. Také je třeba provést tzv.rektifikaci (upřesnění) času
                narození. K tomu je nutné doplnit informaci o důležitých
                životních událostech jako např. ukončení vzdělání, získání
                pracovní pozice/nástup do zaměstnání, svatba, narození potomka,
                rozvod, začátek podnikání, ztráta zaměstnání, změna zaměstnání,
                povýšení v zaměstnání, operace, nemoc, atd. Při zadávání Vašich
                údajů tedy prosím poskytněnte co nejvíce výše uvedených
                životních událostí včetně přesného data nebo alespoň měsíc +
                rok, kdy k události došlo.{" "}
              </li>
              <li>místo narození.</li>
              <li>
                Přesný čas narození je nutný pro sestavení divizních horoskopů
                (u některých se ascendent mění každé 2 minuty) a hlavně ke
                správnému vymezení planetárních období.{" "}
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compatibility;
