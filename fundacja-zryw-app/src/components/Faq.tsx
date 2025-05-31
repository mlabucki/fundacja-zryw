import React from "react";
import Container from "./Container";
import Button from "./Button";

interface QuestionsData {
  title: string;
  text: string;
}

const questions: QuestionsData[] = [
  {
    title: "Question text goes here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    title: "Question text goes here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    title: "Question text goes here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

const Faq: React.FC = () => {
  return (
    <Container>
      <section className="mt-20 xs:mt-30">
        <h2 className="font-new-order text-5xl text-green">
          Masz pytania? <br /> My mamy odpowiedzi
        </h2>
        <div className="mt-10 xs:mt-20">
          {questions.map((question, index) => (
            <div key={`${index}` + question.title}>
              <hr className="mt-10 xs:mt-12 h-[1px] bg-olive border-0 outline-none" />
              <div className="mt-6 flex flex-wrap gap-y-6 flex-col xs:flex-row">
                <h3 className="font-new-order text-base text-green xs:w-[30%] pr-4">
                  {question.title}
                </h3>
                <p className="font-calluna text-base xs:w-[70%]">
                  {question.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-10 xs:mt-20 font-new-order text-3xl text-green">
          Masz inne pytanie?
        </h3>
        <div className="mt-4">
          <p className="hidden xs:block">
            Napisz do nas na{" "}
            <span className="underline">rekrutacja@fundacjazryw.pl</span>
          </p>
          <p className="block xs:hidden">Napisz do Nas, z chęcią odpowiemy</p>
        </div>

        <Button className="block xs:hidden mt-6 bg-green">Kontakt</Button>
      </section>
    </Container>
  );
};

export default Faq;
