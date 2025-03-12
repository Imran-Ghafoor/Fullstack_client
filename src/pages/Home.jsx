const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best Services Provider!</p>
              <h1>Welcome to Imran MERN-STACK World!</h1>
              <p>
                Are you ready to take our buisness to the next level with
                cutting-eg=dge IT solutions? Look no further! At Imran
                MERN-STACK, we specialize in providing innovative IT services
                and sulutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now!</button>
                </a>
                <a href="/register">
                  <button className="btn secondry-btn">Leran more!</button>
                </a>
              </div>
            </div>
            {/* hero image */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="home"
                width={"500"}
                height={"500"}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Know Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/home1.png"
              alt="home"
              width={"500"}
              height={"500"}
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you!</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towords a more afficient and source
              IT infrastructure? Contact us today for a free consultation and
              let's discuss hoe Imran Stack can help your buisness thrive in the
              digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now!</button>
              </a>
              <a href="/register">
                <button className="btn secondry-btn">Leran more!</button>
              </a>
            </div>
          </div>
          {/* hero image */}
        </div>
      </section>
    </>
  );
};

export default Home;
