import { useState } from "react";
import { Form, Link } from "react-router-dom";
function EditPage() {
  const [previewFile, setPreviewFile] = useState(null);

  function handlefileChange(e) {
    const file = e.targert.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreviewFile(ev.target.result);
      reader.readAsDataURL(file);
    }
  }
  return (
    <div style={{ flex: "6", marginRight: "40px", borderRadius: "10px" }}>
      <Form
        method="POST"
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          color: "black",
          boxShadow: "1px 0.8px 2px rgb(231, 231, 235)",
          borderRadius: "10px",
          padding: "8px",
          width: "100%",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      >
        <label
          htmlFor="firstName"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          style={{
            backgroundColor: "rgba(235, 231, 231, 0.87)",
            color: "black",
            border: "none",
            margin: "10px 0",
            height: "25px",
            boxShadow: "1px 0.8px 2px rgba(189, 185, 185, 0.87)",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        />

        <label
          htmlFor="lastName"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          style={{
            backgroundColor: "rgba(235, 231, 231, 0.87)",
            color: "black",
            border: "none",
            margin: "10px 0",
            height: "25px",
            boxShadow: "1px 0.8px 2px rgba(189, 185, 185, 0.87)",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        />

        <label htmlFor="image" style={{ fontSize: "20px", fontWeight: "bold" }}>
          Image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handlefileChange}
          style={{
            backgroundColor: "rgba(235, 231, 231, 0.87)",
            color: "black",
            border: "none",
            margin: "10px 0",
            height: "25px",
            boxShadow: "1px 0.8px 2px rgba(189, 185, 185, 0.87)",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        />
        {previewFile && <img src={previewFile} alt="Preview" />}

        <label
          htmlFor="occupation"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          Enter Your Occupation
        </label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          style={{
            backgroundColor: "rgba(235, 231, 231, 0.87)",
            boxShadow: "1px 0.8px 2px rgba(189, 185, 185, 0.87)",
            color: "black",
            border: "none",
            margin: "10px 0",
            height: "25px",
            lineHeight: "20px",
            fontSize: "20px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            padding: "5px",
          }}
        >
          <button
            style={{
              boxShadow: "1px 1px 3px rgba(44, 42, 42, 0.87)",
              backgroundColor: "green",
              border: "none",
              padding: "9px 10px",
              borderRadius: "10px",
            }}
          >
            Submit
          </button>

          <button
            style={{
              boxShadow: "1px 1 px 3px rgba(51, 49, 49, 0.87)",
              backgroundColor: "red",
              border: "none",
              padding: "9px 10px",
              borderRadius: "10px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Go Back To Homepage
            </Link>
          </button>
        </div>
      </Form>
    </div>
  );
}

export default EditPage;
