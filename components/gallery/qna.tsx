import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import React from "react";

const Qna = () => {
  return (
    <div className="w-full">
      <div className="w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-main/75">
                <span>교환/반품 안내</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-main`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다
                관계법령이 우선합니다. 다만, 판매자의 제시사항이 관계법령보다
                소비자에게 유리한 경우에는 판매자 제시사항이 적용됩니다.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium  focus:outline-none focus-visible:ring focus-visible:ring-main/75">
                <span>교환/반품 제한사항</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-main`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <>
                  ㆍ주문/제작 상품의 경우, 상품의 제작이 이미 진행된 경우 <br />
                  <br />
                  ㆍ상품포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가
                  훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
                  <br />
                  <br />
                  ㆍ고객의 사용, 시간경과, 일부 소비에 의하여 상품의 가치가
                  현저히 감소한 경우 ㆍ세트상품 일부 사용, 구성품을 분실하였거나
                  취급 부주의로 인한 파손/고장/오염으로 재판매 불가한 경우
                  <br />
                  <br />
                  ㆍ모니터 해상도의 차이로 인해 색상이나 이미지가 실제와 달라,
                  고객이 단순 변심으로 교환/반품을 무료로 요청하는 경우
                  <br />
                  <br />
                  ㆍ제조사의 사정 (신모델 출시등) 및 부품 가격 변동 등에 의해
                  무료 교환/반품으로 요청하는 경우
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Qna;
