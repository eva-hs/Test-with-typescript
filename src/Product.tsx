interface Props {
  quantity: number;
}

function Product({ quantity }: Props) {
  return <div>{quantity}</div>;
}

export default Product;
