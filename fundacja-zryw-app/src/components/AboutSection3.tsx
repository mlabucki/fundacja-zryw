import React from "react";
import AboutWhy from "./AboutWhy";

const AboutSection3: React.FC = () => {
  return (
    <section className="min-h-[500px] flex flex-col mt-20">
      <div>
        <AboutWhy
          title="Dlaczego"
          text="Wiele wymagamy od naszych przywódców i często czujemy się zawiedzeni ich postawami. Jednak czy szkolimy, pomagamy i troszczymy się o osoby, które chcemy, aby nam przewodziły? Jeśli tego nie robimy, to dlaczego oczekujemy, że będą dobrze wykonywać powierzone im zadania?"
          bgColor="bg-[var(--color-primary)]"
          textColor="text-[var(--color-beige)]"
          arrowColor="var(--color-primary)"
        />
      </div>
      <div className="mt-[80px] flex justify-center">
        <AboutWhy
          title="Jak"
          text="Zmiana zaczyna się od wewnętrznego zrywu: decyzji, że warto wziąć odpowiedzialność. Wierzymy, że jakościowa zmiana pokoleniowa w polskim życiu publicznym jest możliwa od środka. Jeden zryw nie zmieni systemu. Ale cała fala już tak. "
          bgColor="bg-[var(--color-accent)]"
          textColor="text-[var(--color-beige)]"
          arrowColor="var(--color-accent)"
        />
      </div>
      <div className="mt-[80px] w-full flex justify-end">
        <AboutWhy
          title="Co"
          text="Otaczamy wsparciem osoby, które już na wczesnym etapie wykazują wysoki potencjał przywódczy i silne prospołeczne motywacje. Organizujemy zrywy: kilkudniowe zjazdy w różnych zakątkach Polski, w trakcie których łączymy uczestników, praktyków i decydentów."
          bgColor="bg-[var(--color-olive)]"
          textColor="text-[var(--color-primary)]"
          arrowColor="var(--color-olive)"
        />
      </div>
    </section>
  );
};

export default AboutSection3;
