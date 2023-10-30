import { Product } from "@/type";
import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="w-full">
      {items.length === 0 && <NoResult />}
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
