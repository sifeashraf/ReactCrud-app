import { useSelector } from "react-redux";

export default function authentication(Component) {
  return (props) => {
    let { isLoggiedind } = useSelector(({ toggleauth }) => toggleauth);
    return isLoggiedind ? <Component {...props} /> : <div>Log In First </div>;
  };
}
