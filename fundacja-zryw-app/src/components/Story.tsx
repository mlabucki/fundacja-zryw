import React from "react";
import photo1 from '/photos/talking.jpg';
import photo2 from '/photos/apply-sounds-familiar.jpg';

interface CardData {
  img: string;
  alt: string;
  text: string;
}

const cards: CardData[] = [
  {
    img: photo1,
    alt: "talking-people",
    text: "Organizujemy zrywy. To trzydniowe zjazdy w różnych zakątkach Polski, w trakcie których uczestnicy poznają się z systemem politycznym i jego funkcjonowaniem.",
  },
  {
    img: photo2,
    alt: "sitting-people",
    text: "Łączymy podopiecznych, praktyków i decydentów politycznych. Naszą siłą jest jakość i relacyjność.",
  },
];

const Story: React.FC = () => {
  return (
    <section className="w-mobile xs:w-main mx-auto mt-20 xs:mt-5 flex justify-between flex-col xs:flex-row">
        <h2 className="w-[364px] text-2xl xs:text-4xl font-new-order leading-[130%] xs:leading-[110%] xs:tracking-[-0.015em] text-green">
            Budujemy środowisko, które pozwala studentom stawiać pierwsze kroki w służbie publicznej.
        </h2>
        {cards.map(({ img, alt, text }, idx) => (
          <div key={idx} className="flex flex-col xs:w-[330px] mt-10 xs:mt-0">
            <img src={img} alt={alt} className="rounded-lg object-cover h-[252px] object-[50%_23%]"/>
            <p className="font-calluna text-lg mt-6 leading-[130%] tracking-[-0.015em]">{text}</p>
          </div>
        ))}
    </section>
  );
};

export default Story;
