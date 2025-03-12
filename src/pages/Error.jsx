import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h3>Sorry ! Page not found</h3>
          <p>
            Oops! It seems like the oage you're trying to access doesn't exist.
            If you belive there's an issue, feel free to report it , and we'll
            liik into it.
          </p>
          <div className="btns">
            <NavLink to={"/"}>
              <button>return home</button>
            </NavLink>
            <NavLink to={"/contact"}>
              <button>report problem</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
