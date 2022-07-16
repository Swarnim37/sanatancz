import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font shadow-2xl font-abc">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="about"
                className="object-cover object-center h-full w-full"
                width={1700}
                height={600}
                src="/img/solar-system.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-110 h-110 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    alt="about"
                    className="object-cover object-center h-full w-full"
                    width={1110}
                    height={1110}
                    src="/img/jyoti.jpg"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Mgr. Helena Sharma
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  {/*<p className="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
  </p>*/}
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  Astrologii se aktivně věnuji více než 15 let. Studovala jsem
                  západní i védskou. Védská filozofie mne zaujala svou
                  logičností vysvětlující existenci a fungování vesmíru, naši
                  existenci a vše, co se nám v životě děje. Védské pojetí duše,
                  zákona karmy a reinkarnace dává smysl. Aktivně se věnuji
                  studiu nejen astrologie, ale i ajurvédy, vastu a jógy.
                  <br />
                  Absolovovala jsem řadu kurzů u předních védských astrologů,
                  stejně jako kurzy psychologie a poradenství. Astrologie
                  Sanatan si vypůjčila název ze slov „sanatan dharm“. Je to
                  životní filozofie, kterou se řídí obyvatelé Indie po tisíce
                  let a v překladu znamená „věčná pravda“. Cílem Astrologie
                  Sanatan je šířit povědomí o védských vědách a být průvodcem
                  védskou moudrostí. Povolám jsem jazykovou lektorkou se
                  zaměřením na výuku angličtiny a španělštiny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
