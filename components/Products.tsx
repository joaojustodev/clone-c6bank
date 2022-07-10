import ProductsForYou from "./ProductsForYou";

const Products = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="flex flex-col gap-12 px-4 mb-12">
        <h2 className="text-3xl">
          Um banco <strong>transparente e completo</strong> com produtos
          exclusivos
        </h2>
        <div className="flex">
          <h3 className={`px-3 py-[6px] ${true && "opacity-100"}`}>
            <span>PARA VOCÊ</span>
          </h3>
          <h3 className={`px-3 py-[6px] opacity-70`}>
            <span>PARA MEI</span>
          </h3>
          <h3 className={`px-3 py-[6px] opacity-70`}>
            <span>PARA EMPRESAS</span>
          </h3>
        </div>
      </div>

      <ProductsForYou />
    </section>
  );
};

export default Products;
