import { Product } from "@/type";
import NoResult from "./ui/no-result";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
