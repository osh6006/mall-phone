"use client";

import useMount from "@/hooks/use-mount";

interface CurrencyProps {
  value?: number | string;
}

export const formatter = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const { isMounted } = useMount();

  if (!isMounted) return null;
  if (value) return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
