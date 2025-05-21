import React from "react";

const partners: { img: string }[] = [
  { img: "/partners/action.png" },
  { img: "/partners/ttr.png" },
  { img: "/partners/prb.png" },
  { img: "/partners/fundation.png" },
  { img: "/partners/messina.png" },
  { img: "/partners/mentors.png" },
  { img: "/partners/odc.png" },
];

const Partners: React.FC = () => {
  return (
    <>
        <h2 className="font-new-order w-mobile mx-auto xs:w-main text-green text-4xl tracking-[-0.03em] mt-20">Zaufali <br className="xs:hidden"/> nam</h2>
        <section className="w-mobile xs:w-main mx-auto h-[128px] xs:h-[190px] mt-9 overflow-hidden xs:mt-25">
            <div className="inline-flex gap-x-6">
                {partners.map(({ img }, i) => (
                    <div key={img + `${i}`} className="w-[133px] xs:w-[199px] h-[128px] xs:h-[190px] bg-beige border-1 border-beige-b flex justify-center items-center rounded-lg p-3">
                        <img key={i} src={img} alt={`partner-${i}`} className=""/>
                    </div>
                ))}
            </div>
        </section>
        <div className="w-mobile mx-auto flex xs:w-main mt-6 xs:mt-3">
            <p className="ml-auto text-xs xs:text-base font-calluna">Zostań partnerem</p>
        </div>
    </>
  );
};

export default Partners;
