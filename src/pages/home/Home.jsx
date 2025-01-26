import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { setTitle } = useAuth();
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);
  return <div>fsd</div>;
};

export default Home;
