import "./ProductListItem.scss";

interface ProductListItemProps {
  name: string;
  price: number;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ name, price }) => {
  return (
    <div className="product-container">
      <div className="name">{name}</div>
      <div className="price">{`€${price},-`}</div>
      <button>Put in shopping basket</button>
    </div>
  );
};

export default ProductListItem;
