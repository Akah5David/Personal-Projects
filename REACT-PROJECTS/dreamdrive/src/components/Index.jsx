import { Link, useLoaderData } from "react-router-dom";

function HomePage() {
  const usersData = useLoaderData();

  return (
    <div
      style={{
        height: "auto",
        flex: "0 0 60%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "20px",
      }}
    >
      <ul style={{ marginRight: "20px", backgroundColor: "transparent" }}>
        {usersData?.map((user) => (
          <li
            key={user.id}
            style={{
              display: "flex",
              gap: "20px",
              margin: "20px 0",
              boxShadow:
                "1px 1px 1px rgb(255, 255, 255), -1px -1px 1px rgb(255, 255, 255)", //hvbc
              color: "black",
              textAlign: "left",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordBreak: "break-word",
              overflowWrap: "break-wor",
              border: "none",
            }}
          >
            {" "}
            <img
              style={{
                width: "170px",
                borderRadius: "20px",
                alignSelf: "stretch",
              }}
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                height: "auto",
                alignSelf: "flexd-start",
                margin: "0",
                padding: "10px",
                lineHeight: "15px",
              }}
            >
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.occupation}</p>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  width: "100px",
                  height: "30px",
                  backgroundColor: "rgb(240, 231, 231)",
                  borderRadius: "10px",
                  boxShadow:
                    "1px 1px 1px rgb(233, 233, 233), -1px -1px 1px rgb(255, 255, 255)",
                }}
              >
                <Link
                  to={`/${user.id}`}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  View Details
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        style={{
          padding: "8px 6px",
          border: "none",
          cursor: "pointer",
          width: "auto",
          height: "30px",
          backgroundColor: "rgb(5, 33, 158)",
          borderRadius: "10px",
          boxShadow:
            "1px 1px 1px rgb(233, 233, 233), -1px -1px 1px rgb(255, 255, 255)",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="new-user">
          Go to Form Page
        </Link>
      </button>
    </div>
  );
}

export default HomePage;
