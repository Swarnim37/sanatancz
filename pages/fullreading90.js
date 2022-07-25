import React from "react";
import Image from "next/image";

const Fullreading90 = () => {
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
              src="/img/kundli.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Osobní horoskop - 1 hodina
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Je několik možností, jak využít tento zkrácený výklad. Můžete se
              podívat na Váš horoskop z hlediska momentální situace –
              probíhající planetární období a pod-období určují hlavní trendy,
              životní témata a tranzity události spouštějí, upřesňují,
              dokreslují. Také můžete tuto konzultaci využít k položení několika
              (3 – 4) otázek, které Vás zajímají.
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

export default Fullreading90;
