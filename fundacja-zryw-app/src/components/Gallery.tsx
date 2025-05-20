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
  return (
    <section className="h-[780px]">
        {gallery.map(({img}) => (
            <div></div>
        ))}
    </section>
  );
};

export default Gallery;
