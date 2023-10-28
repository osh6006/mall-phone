import getBillboards from "@/actions/get-billboards";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const Banners = await getBillboards();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={Banners} />
      </div>
    </Container>
  );
};

export default HomePage;
