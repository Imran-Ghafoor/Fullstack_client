import { useAuth } from "../store/Auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <h1>About</h1>
      <p>
        Welcome , {user ? `${user.username} to our website` : ` to our website`}
      </p>
    </>
  );
};

export default About;
