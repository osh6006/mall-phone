import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getStorages from "@/actions/get-storage";

import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";

interface CetegoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    storageId: string;
  };
}
const CategoryPage: React.FC<CetegoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    storageId: searchParams.storageId,
  });

  const storage = await getStorages();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Banner data={[category.billboard]} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter storages={storage} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="storageId" name="저장 공간" data={storage} />
              <Filter valueKey="colorId" name="색상" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
