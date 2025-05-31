import React from "react";
import Button from "./Button";
import Container from "./Container";

interface HeroTextProps {
  children: React.ReactNode;
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ children, className = "" }) => (
  <h2 className={`font-new-order font-bold leading-[1.1] ${className}`}>
    {children}
  </h2>
);

const ApplyHero: React.FC = () => {
  return (
    <Container>
      <section className="relative xs:mt-8 overflow-hidden rounded-lg w-full">
        {/* MOBILE: */}
        <div className="w-full overflow-hidden xs:hidden h-[360px]">
          <picture>
            <source
              srcSet="./photos/apply-create.jpg"
              media="(min-width: 395px)"
            />
            <img
              src="./photos/apply-create.jpg"
              alt="Aplikuj na zryw"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </picture>
          <h1 className="font-new-order text-[54px] font-bold text-center mt-6 mb-4 text-[var(--color-primary)]">
            Dołącz do
            <br />
            Zrywu i twórz
            <br />
            nową Polskę
          </h1>
          <Button className="block mx-auto mb-6 bg-[var(--color-accent)] text-white">
            Aplikuj
          </Button>
        </div>

        {/* DESKTOP: */}
        <div className="hidden xs:block h-[672px] relative w-full">
          <img
            src="./photos/apply-create.jpg"
            alt="Aplikuj na zryw"
            className="h-full w-full object-cover object-[40%_35%] rounded-lg shadow-lg"
          />
          {/* Gradient overlay identyczny jak w LandingHeader */}
          <div className="absolute z-2 inset-0 bg-[linear-gradient(285.13deg,_rgba(0,_0,_0,_0)_0.22%,_rgba(81,_81,_61,_0.2)_100%)] rounded-lg"></div>
          <div
            className="h-full w-full grid absolute top-0 left-0 z-3 p-[40px]"
            style={{
              gridTemplateRows: "1fr 1fr 1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
              gridTemplateAreas: `
                "left left . . . ."
                "left left . . . ."
                ". . . . right right"
                ". . . . right right"
              `,
              height: "100%",
              width: "100%",
            }}
          >
            <div
              className="flex flex-col items-start justify-start p-2 xs:p-4 max-w-[420px] gap-2"
              style={{ gridArea: "left" }}
            >
              <HeroText className="text-[81px] leading-tight text-[var(--color-beige)]">
                Aplikuj na
                <br />
                zryw
              </HeroText>
            </div>

            <div
              className="flex flex-col items-end justify-end p-2 xs:p-4 max-w-[520px] gap-2"
              style={{ gridArea: "right" }}
            >
              <div className="flex flex-col items-end">
                <HeroText className="text-[81px] text-right leading-tight m-0 text-[var(--color-beige)] whitespace-nowrap">
                  Twórz nową
                </HeroText>
                <div className="flex flex-row items-end w-full gap-2">
                  <HeroText className="text-[81px] text-left leading-tight m-0 w-full text-[var(--color-beige)]">
                    Polskę
                  </HeroText>
                  <Button
                    style={{ backgroundColor: "var(--color-beige)" }}
                    className="!text-[var(--color-primary)] ml-2 px-4 py-1 text-base h-auto mb-0 self-center"
                  >
                    Aplikuj
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ApplyHero;
