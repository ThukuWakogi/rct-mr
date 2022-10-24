import { Banner } from '@rct-mr/common-ui';
import { exampleProducts } from '@rct-mr/products';

export function app() {
  return (
    <>
      <Banner text="Welcome to the store" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}
