import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Message = () => {
  const { setTitle } = useAuth();
  useEffect(() => {
    setTitle("Messages");
  }, [setTitle]);
  return <div>this is conversation page</div>;
};

export default Message;
