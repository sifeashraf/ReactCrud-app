//import hooks
import usePostDetails from "../Hooks/use-post-details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editPost, clearRecord } from "../global-state/postSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

//import components
import authentication from "./authentication";
import { Form, Button } from "react-bootstrap";
import Loading from "./Loading";
// import module
import { useFormik } from "formik";

const SignupSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  description: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});
function Edit() {
  let { loading, record, error } = usePostDetails();

  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearRecord());
  }, [dispatch]);

  let formik = useFormik({
    initialValues: {
      title: record ? record.title : "",
      description: record ? record.description : "",
    },
    enableReinitialize: true,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(editPost({ id: record.id, title: values.title, description: values.description }))
        .unwrap()
        .then(() => navigate("/"));
    },
  });

  return (
    <Loading loading={loading} error={error}>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title </Form.Label>
          <Form.Control
            type="email"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            isInvalid={!!formik.errors.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description...</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={formik.handleChange}
            name="description"
            value={formik.values.description}
            isInvalid={!!formik.errors.description}
          />
        </Form.Group>
        <Loading loading={loading} error={error}>
          <Button variant="primary" type="submit">
            submit
          </Button>
        </Loading>
      </Form>
    </Loading>
  );
}
export default authentication(Edit);
