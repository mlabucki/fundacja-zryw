import React from "react";
import AboutWhy from "./AboutWhy";
import { clipPathValue } from "./clipPathValue";

const AboutSection3: React.FC = () => {
  return (
    <section className="w-full min-h-[500px] flex flex-col mt-20">
      <div>
        <AboutWhy
          title="Dlaczego"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
          bgColor="bg-[var(--color-primary)]"
          textColor="text-[var(--color-beige)]"
          clipPath={clipPathValue}
          arrowColor="var(--color-primary)"
        />
      </div>
      <div className="mx-auto mt-[60px]">
        <AboutWhy
          title="Jak"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
          bgColor="bg-[var(--color-accent)]"
          textColor="text-[var(--color-beige)]"
          clipPath={clipPathValue}
          arrowColor="var(--color-accent)"
        />
      </div>
      <div className="ml-auto mt-[100px]">
        <AboutWhy
          title="Co"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque."
          bgColor="bg-[var(--color-olive)]"
          textColor="text-[var(--color-primary)]"
          clipPath={clipPathValue}
          arrowColor="var(--color-olive)"
        />
      </div>
    </section>
  );
};

export default AboutSection3;
