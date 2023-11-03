"use client";

import { Product } from "@/type";
import Currency from "../ui/currency";
import Button from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Tab } from "@headlessui/react";
import { cn } from "@/libs/utils";
import CommentList from "./comment-list";
import Qna from "./qna";
import QuestionList from "./quetion-list";

interface InfoProps {
  data: Product;
  isPreview?: boolean;
}

const Info: React.FC<InfoProps> = ({ data, isPreview }) => {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex items-end justify-between">
        <p className="text-2xl text-gray-900 ">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <h1 className="font-semibold text-black">용량:</h1>
          <div>{data.storage.name} GB</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h1 className="font-semibold text-black">색상:</h1>
          <p>{data.color.name}</p>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          장바구니 담기
          <ShoppingCart />
        </Button>
      </div>
      {isPreview || (
        <Tab.Group as="div" className="">
          <Tab.List className="flex justify-around items-center mt-6">
            <Tab className="flex-1 ring-0 outline-none">
              {({ selected }) => (
                <div
                  className={cn(
                    " py-2 border border-b-0",
                    selected ? "text-main border-main" : ""
                  )}
                >
                  상품 평
                </div>
              )}
            </Tab>
            <Tab className="flex-1 ring-0 outline-none">
              {({ selected }) => (
                <div
                  className={cn(
                    " py-2 border border-b-0",
                    selected ? "text-main border-main" : ""
                  )}
                >
                  문의 사항
                </div>
              )}
            </Tab>
            <Tab className="flex-1 ring-0 outline-none">
              {({ selected }) => (
                <div
                  className={cn(
                    " py-2 border border-b-0",
                    selected ? "text-main border-main" : ""
                  )}
                >
                  주의 사항
                </div>
              )}
            </Tab>
          </Tab.List>
          <div className="h-[500px]">
            <Tab.Panels className="border px-3 py-2 mt-7 h-full overflow-y-scroll">
              <Tab.Panel>
                <CommentList />
              </Tab.Panel>
              <Tab.Panel>
                <QuestionList />
              </Tab.Panel>
              <Tab.Panel>
                <Qna />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      )}
    </div>
  );
};

export default Info;
