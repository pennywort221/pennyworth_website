import ProductOverview from "../sections/product-details/ProductOverview";

function ProductsOverviews({ items = [] }: any) {
  if (!items.length) return null;

  return (
    <section className="w-full overflow-hidden mt-10">
      <div className="pt-4 px-5 md:px-10">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Product Overview
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>
      {items.map((variant: any, idx: number) => (
        <ProductOverview key={idx} {...variant} />
      ))}
    </section>
  );
}

export default ProductsOverviews;
