// import "./Hero.css";

function Hero() {
  return (
    <section className="p-8 mx-16">
      <div className="bg-blue-50 grid grid-cols-2 rounded-md min-h-screen[]">
        <div className="flex flex-col justify-center p-16 gap-4">
          <span className="inline-block rounded-full py-1 px-2 text-xs w-fit bg-amber-400">WEEKLY DISCOUNT</span>
          <h1 className="text-6xl font-semibold">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a to="/shop" className="bg-black p-2 text-white rounded-md inline-block w-fit">
            Shop Now
          </a>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="container h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;