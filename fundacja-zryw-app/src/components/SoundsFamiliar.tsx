import React from "react";
import Button from "./Button";

const SoundsFamiliar: React.FC = () => (
  <div className="mt-20">
    <h2 className="font-new-order text-4xl font-bold mb-8 md:mb-16 text-center md:text-left">
      Brzmi znajomo?
    </h2>
    {/* MOBILE: below md */}
    <div className="flex flex-col items-center md:hidden">
      <div className="w-full max-w-xs rounded-lg overflow-hidden aspect-[109/100] mb-6">
        <img
          src="./photos/apply-sounds-familiar.jpg"
          alt="Grupa ludzi na skałach"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 w-full max-w-xs mb-4">
        {[
          "Masz 19–25 lat i studiujesz na polskiej uczelni",
          "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
          "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
          "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
          "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
          "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
          "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
        ].map((text, index) => (
          <p
            key={index}
            className="text-center font-['Calluna'] text-base text-[var(--color-primary)]"
          >
            {text}
          </p>
        ))}
      </div>
      <Button className="mt-2">Aplikuj</Button>
    </div>
    {/* DESKTOP: from md */}
    <div className="hidden md:grid grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4 aspect-square md:aspect-[4/5]">
        <img
          src="./photos/apply-sounds-familiar.jpg"
          alt="Grupa ludzi na skałach"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-8">
        {[
          "Masz 19–25 lat i studiujesz na polskiej uczelni",
          "Działasz lokalnie i wiesz, jak rozwiązywać realne problemy",
          "Chcesz poznać osoby z pierwszej linii polskiego życia publicznego",
          "Szukasz ekipy z całej Polski, która też chce czegoś więcej",
          "Frustruje Cię, jak wygląda dziś polskie życie publiczne i czujesz, że można inaczej",
          "Jesteś osobą empatyczną, zdeterminowaną i skuteczną",
          "Zależy Ci na bliskim kontakcie z czołowymi liderami publicznymi",
        ].map((text, index) => (
          <p key={index} className="font-calluna text-xl">
            {text}
          </p>
        ))}
        <div>
          <Button>Aplikuj</Button>
        </div>
      </div>
    </div>
  </div>
);

export default SoundsFamiliar;
