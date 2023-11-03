import React from "react";
import Avatar from "../ui/avatar";
import { Disclosure } from "@headlessui/react";

const Question = () => {
  return (
    <>
      <div className="w-full">
        <Disclosure>
          <Disclosure.Button className="w-full py-2 text-left">
            <Avatar src="/next.svg" title="갤럭시 사용자" isPrivate />
            <p>혹시 배송은 얼마나 걸릴까요??</p>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 w-full flex flex-row-reverse  gap-x-3 ">
            <p className="font-bold text-black">판매자</p>
            <p>기본적으로 2~3일 정도 소요 됩니다.</p>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <hr />
    </>
  );
};

export default Question;
