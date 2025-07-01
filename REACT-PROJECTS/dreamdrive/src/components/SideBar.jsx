import {
  Form,
  Link,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import classes from "./SideBar.module.css";
import { useRef } from "react";

function SideBarPage({ usersData }) {
  const inputRef = useRef(null);
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const submit = useSubmit();

  const q = searchParams.get("q") ?? "";

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <div className={classes.sidebar}>
      <Form action="" className={classes["form-search"]} role="search">
        <div
          style={{
            position: "relative",
          }}
        >
          <svg
            className={classes.svg}
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="grey"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {
              inputRef.current && inputRef.current.focus();
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={inputRef}
            type="search"
            id="q"
            className={classes.q}
            aria-label="Search contacts"
            placeholder="search"
            name="q"
            onChange={(event) => {
              const isFirstSearch = q === null;
              submit(event.currentTarget.form, { replace: !isFirstSearch });
            }}
            defaultValue={q} //persist input value
          />
        </div>
        <div id="search-spinner" aria-hidden={!searching} hidden={!searching}>
          loading...
        </div>
        <button type="button" className={classes.button}>
          New
        </button>
      </Form>

      <hr
        style={{
          border: "none",
          borderTop: "2px solid rgb(216, 212, 212)",
          // margin: "16px 0",
          width: "100%",
        }}
      />

      <ul>
        {usersData?.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/${user.id}`}>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBarPage;
