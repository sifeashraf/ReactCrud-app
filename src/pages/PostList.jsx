//import hooks
import { useDispatch } from "react-redux";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//import components
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "react-bootstrap";

function PostList({ data, deletepost, isLoggiedind }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let deletrecord = useCallback(
    (data) => {
      if (window.confirm(`do you realy want to delete this item: ${data.title}`)) {
        dispatch(deletepost(data.id));
      }
    },
    [deletepost]
  );
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          {isLoggiedind && <th style={{ width: "10%" }}></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((record, idx) => (
          <tr key={record.id}>
            <td>{idx + 1}</td>
            <td>
              <Link to={`posts/post/${record.id}`} style={{ color: "black" }}>
                {record.title}
              </Link>
            </td>
            {isLoggiedind && (
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="success" onClick={() => navigate(`posts/edit/${record.id}`)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => deletrecord(record)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default memo(PostList);
