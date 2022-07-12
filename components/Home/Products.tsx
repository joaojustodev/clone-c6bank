import ProductsForYou from "./ProductsForYou";

const Products = () => {
  return (
    <section className="py-12 md:py-20 md:px-12">
      <div className="max-w-containerMd mx-auto ">
        <div className="flex flex-col gap-12 px-4 mb-12">
          <h2 className="text-3xl leading-snug md:text-[40px] max-w-[633px]">
            Um banco <strong>transparente e completo</strong> com produtos
            exclusivos
          </h2>
          <div className="flex">
            <h3 className={`px-3 py-[6px] ${true && "opacity-100"}`}>
              <span
                className={`${
                  true &&
                  "relative before:absolute before:top-[20px] before:left-[27px]  before:content-[''] before:w-[25%] before:h-[2px] before:bg-yellow-500"
                }`}
              >
                PARA VOCÊ
              </span>
            </h3>
            <h3 className={`px-3 py-[6px] opacity-70`}>
              <span>PARA MEI</span>
            </h3>
            <h3 className={`px-3 py-[6px] opacity-70`}>
              <span>PARA EMPRESAS</span>
            </h3>
          </div>
        </div>
      </div>

      <ProductsForYou />
    </section>
  );
};

export default Products;
