//import hooks
import { insertPost } from "../global-state/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

//import components
import { Form, Button } from "react-bootstrap";
import Loading from "./Loading";
import * as Yup from "yup";
import authentication from "./authentication";

const SignupSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  description: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

function Add() {
  let { error, loading } = useSelector((state) => state);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      let id = Math.floor(Math.random() * 1000);
      dispatch(insertPost({ id, title: values.title, description: values.description }))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <Loading error={error} loading={loading}>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            isInvalid={!!formik.errors.title}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>{" "}
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
          <Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>{" "}
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
export default authentication(Add);
