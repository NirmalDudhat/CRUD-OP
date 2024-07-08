import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const getdata = async () => {
    const response = await fetch("http://localhost:5000/");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();

    if (!response.ok) {
      //   console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      setError("Data Deleted Succesfully");

      setTimeout(() => {
        setError("");
        getdata();
      }, 500);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log(data);

  return (
    <div className="container my-2 mt-3">
      {error && <div className="alert alert-success">{error}</div>}
      <h2 className="text-center mb-5">All Data</h2>

      <div className="row">
        {data &&
          data?.map((ele) => (
            <div key={ele._id} className="col-sm-6 col-lg-3">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.age}</p>
                  <a
                    className="card-link"
                    onClick={() => handleDelete(ele._id)}
                  >
                    Delete
                  </a>
                  <Link to={`/${ele._id}`} className="card-link">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
