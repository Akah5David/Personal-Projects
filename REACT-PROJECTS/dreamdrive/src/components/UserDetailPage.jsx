import { useLoaderData, useSubmit, Link, useFetcher } from "react-router-dom";

function UserDetailsPage() {
  // const [isFilled, setIsFilled] = useState(false);
  const user = useLoaderData();
  const submit = useSubmit();

  const fetcher = useFetcher();

  let isFilled = user.favorite === "filled"; // we receive a bolean value true or false depending on if the condition was satisfied

  function handleDeleteUser(userId) {
    console.log("hi bro");

    console.log("hi bro 2");
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      submit(null, { method: "delete", action: `/${userId}/delete` });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-start",
        flex: "6",
        width: "100%",
        height: "auto",
        color: "black",
        gap: "30px",
        margin: "20px 0 0 0",
        paddingRight: "20px",
        backgroundColor: "tranparent",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}
    >
      <img
        style={{
          width: "170px",
          height: "170px",
          borderRadius: "20px",
          alignSelf: "stretch",
        }}
        src={user.userData.image}
        alt={`${user.userData.firstName} ${user.lastName}`}
      />
      <div style={{ lineHeight: "15px", textAlign: "left" }}>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {user.userData.firstName} {user.userData.lastName}
          <span>
            {fetcher.Form && (
              <fetcher.Form
                method="POST"
                action={`/${user.userData.id}/favorite`}
              >
                <input
                  type="hidden"
                  name="favorite"
                  value={isFilled ? "empty" : "filled"}
                />
                <button
                  type="submit"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    // backgroundColor: "blue",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    // alignItems: "center",
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill={isFilled ? "gold" : "none"}
                    stroke="grey"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ cursor: "pointer" }}
                  >
                    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" />
                  </svg>
                </button>
              </fetcher.Form>
            )}
          </span>
        </h3>
        <p style={{ fontStyle: "italic", color: "rgb(0, 102, 255)" }}>
          {user.userData.firstName}
        </p>
        <p>{user.userData.occupation}</p>

        <div style={{ display: "flex" }}>
          <button
            style={{
              width: "auto",
              height: "auto",
              padding: "5px 8px",
              borderRadius: "20%",
              backgroundColor: "rgb(255, 255, 255)",
              border: "none",
              boxShadow:
                "2px 2px 2px rgb(233, 231, 231), -2px -2px 2px rgb(241, 239, 239) ",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "rgb(0, 102, 255)" }}
              to={`/${user.userData.id}/edit`}
            >
              Edit
            </Link>
          </button>
          <button
            style={{
              width: "auto",
              height: "auto",
              padding: "8px 6px",
              border: "none",
              borderRadius: "20%",
              marginLeft: "10px",
              backgroundColor: "rgb(255, 255, 255)",
              color: "red",
              boxShadow:
                "2px 2px 2px rgb(233, 231, 231), -2px -2px 2px rgb(241, 239, 239) ",
            }}
            onClick={() => handleDeleteUser(user.userData.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPage;
