import React from "react";
import Heading from "../../../components/ui/heading";
import Image from "next/image";

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
          <div className="w-full h-44">
            <Image
              src="/images/galaxy.jpg"
              alt=""
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={0}
              height={0}
            />
          </div>
          <div className="flex-1 w-full">
            <Image
              src="/images/galaxy.webp"
              alt=""
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-2">
          <div className="h-64 w-full">
            <Image
              src="/images/mi2.jpg"
              alt=""
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={0}
              height={0}
            />
          </div>
          <div className="flex-1 w-full">
            <Image
              src="/images/iphone.jpg"
              alt=""
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
