//import hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, deletepost } from "../global-state/postSlice";

//import components
import PostList from "./PostList";
import Loading from "./Loading";

export default function App() {
  let { isLoggiedind } = useSelector(({ toggleauth }) => toggleauth);
  let dispatch = useDispatch();
  let { records, loading, error } = useSelector((state) => state.postsreducer);
  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  return (
    <div className="App">
      <Loading loading={loading} error={error}>
        <PostList data={records} deletepost={deletepost} isLoggiedind={isLoggiedind} />
      </Loading>
    </div>
  );
}
