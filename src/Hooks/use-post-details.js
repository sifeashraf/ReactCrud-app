import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost } from "../global-state/postSlice";
import { useParams } from "react-router-dom";

export default function usePostDetails() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let { loading, record, error } = useSelector((data) => data.postsreducer);
  useEffect(() => {
    dispatch(fetchpost(id));
  }, [id]);
  return { loading, record, error };
}
