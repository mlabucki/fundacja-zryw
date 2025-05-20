import React from "react";
import photo1 from '/photos/talking.jpg';
import photo2 from '/photos/apply-sounds-familiar.jpg';

const Story: React.FC = () => {
  return (
    <section className="w-mobile xs:w-main mx-auto mt-5 flex justify-between">
        <h2 className="w-[364px] text-4xl font-new-order leading-[110%] tracking-[-0.015em] text-green">
            Budujemy środowisko, które pozwala studentom stawiać pierwsze kroki w służbie publicznej.
        </h2>
        <div className="flex flex-col w-[330px]">
            <img src={photo1} alt="talking-people" className=""/>
            <p>Organizujemy zrywy. To trzydniowe zjazdy w różnych zakątkach Polski, w trakcie których uczestnicy poznają się z systemem politycznym i jego funkcjonowaniem.</p>
        </div>
        <div className="flex flex-col w-[330px]">
            <img src={photo2} alt="sitting-people" className=""/>
            <p>Łączymy podopiecznych, praktyków i decydentów politycznych. Naszą siłą jest jakość i relacyjność.</p>
        </div>
    </section>
  );
};

export default Story;
