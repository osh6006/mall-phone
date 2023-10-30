import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Intro from "@/app/(route)/components/intro";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import React from "react";
import Recent from "./components/recent";

export const revalidate = 0;

const HomePage = async () => {
  const products = (await getProducts({ isFeatured: true })).filter(
    (_, i) => i < 4
  );
  const banners = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banners} />
        <Intro />
        <Recent products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
