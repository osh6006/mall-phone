import React from "react";
import Heading from "../../../components/ui/heading";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20">
      <Heading
        title="당신에게 맞는 스마트 기기는?"
        desc="iphone, galaxy, xiaomi등 다양한 회사에서 제공하는 스마트 기기를 구매해
          보세요."
      />
      <div className="flex w-full gap-x-2 mt-8">
        <div className="flex-1 flex flex-col gap-y-2">
          <div className="w-full h-44 bg-cover bg-[url('/images/galaxy.jpg')]"></div>
          <div className="flex-1 bg-cover bg-[url('/images/galaxy.webp')]"></div>
        </div>
        <div className="flex-1 flex flex-col gap-y-2">
          <div className="w-full bg-cover h-64 bg-[url('/images/mi2.jpg')]"></div>
          <div className="w-full bg-cover h-48 bg-[url('/images/iphone.jpg')]"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
