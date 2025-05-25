import React from "react";
import Button from "./Button";
import Container from "./Container";

const SoundsFamiliar: React.FC = () => (
  <Container>
    <div className="mt-33">
      <h2 className="font-new-order text-4xl text-green font-bold mb-8 text-center xs:text-left xs:mb-16">
        Brzmi znajomo?
      </h2>
      {/* MOBILE: tylko poniżej xs */}
      <div className="flex flex-col items-center xs:hidden">
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
              className="text-center font-calluna text-base text-[var(--color-primary)]"
            >
              {text}
            </p>
          ))}
        </div>
        <Button className="mt-2 bg-[var(--color-accent)] text-white">
          Aplikuj
        </Button>
      </div>
      {/* DESKTOP: od xs wzwyż */}
      <div className="hidden xs:grid grid-cols-12 gap-8 xs:gap-12">
        <div className="xs:col-span-4 aspect-square xs:aspect-[4/5]">
          <img
            src="./photos/apply-sounds-familiar.jpg"
            alt="Grupa ludzi na skałach"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="xs:col-span-8 grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-x-16 xs:gap-y-8">
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
            <Button className="bg-[var(--color-accent)] text-white">
              Aplikuj
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Container>
  
);

export default SoundsFamiliar;
