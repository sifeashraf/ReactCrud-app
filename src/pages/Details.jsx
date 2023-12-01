//import hooks
import { useEffect } from "react";
import { clearRecord } from "../global-state/postSlice";
import { useDispatch } from "react-redux";
import usepostdetails from "../Hooks/use-post-details";

//import components
import Loading from "./Loading";

export default function Details() {
  let dispatch = useDispatch();
  let { record, loading, error } = usepostdetails();
  useEffect(() => {
    dispatch(clearRecord());
  }, [dispatch]);
  return (
    <Loading loading={loading} error={error}>
      <p>{record?.title}</p>
      <p>{record?.description}</p>
    </Loading>
  );
}
