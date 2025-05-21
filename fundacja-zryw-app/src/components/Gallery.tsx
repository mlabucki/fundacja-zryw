import React from "react";

const gallery: { img: string }[] = [
  { img: "/photos/apply-to-zryw.jpg" },
  { img: "/photos/pizza.jpg" },
  { img: "/photos/black-and-white.jpg" },
  { img: "/photos/outside.jpg" },
  { img: "/photos/company.jpg" },
  { img: "/photos/apply-create.jpg" },
];

const Gallery: React.FC = () => {
  // Grupowanie zdjęć po 3
  const rows = [];
  for (let i = 0; i < gallery.length; i += 3) {
    rows.push(gallery.slice(i, i + 3));
  }

  return (
    <section className="w-mobile mx-auto xs:w-main space-y-3.5 overflow-hidden mt-25">
      {rows.map((row, rowIndex) => (
        <div
          key={`${rowIndex} + ${row}`}
          className={`flex gap-3.5 overflow-visible ${
            rowIndex === 0
              ? "translate-x-[-13%]"
              : rowIndex === 1
              ? "translate-x-[-10%]"
              : ""
          }`}
        >
          {row.map((item, i) => (
            <img
              key={i}
              src={item.img}
              alt=""
              className="h-[383px] w-auto object-cover"
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Gallery;
