export const Hero = () => {
  return (
    <header
      id="hero" className="w-full pt-10 hero"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="w-full -mt-20 bg-opacity-50 h-96 hero-overlay"></div>
      <div className="m-5 text-center hero-content text-neutral-content">
        <div className="max-w-md" id="coba">
          <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};
