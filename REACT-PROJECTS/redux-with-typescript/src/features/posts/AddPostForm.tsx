import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postAdded } from "./postsSlice";
// import { selectAllUsers } from "../users/usersSlice";
import { selectCurrentUsername } from "../auth/authSlice";

//let AddPostFormFields become an alias for HTMLFormControlsCollection we specify the properties that the form elements is suppose to contain
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}

//let AddPostFormElement become equivalent to HTMLFormElement while the elements property has the same shape as AddPostFormFields
interface AddPostFormElements extends HTMLFormElement {
  elements: AddPostFormFields;
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch();
  // const users = useAppSelector(selectAllUsers);
  const userId = useAppSelector(selectCurrentUsername);

  //creates a function that receives submitted form details and processes it
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    //preventing the default action of a button with type=submit
    e.preventDefault();

    const { elements } = e.currentTarget;

    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    // Create the post object and dispatch the `postAdded` action while ensuring it matches the shape of Post
    dispatch(postAdded(title, content, userId!));

    e.currentTarget.reset();
  };

  // const userOptions = users.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {user.name}
  //   </option>
  // ));

  return (
    <section className="postform-data">
      <h2>Add a New Post</h2>
      <form className="form-data" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          defaultValue=""
          required
        />

        {/* <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" className="select">
          <option value=""></option>
          {userOptions}
        </select> */}
        
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
        ></textarea>

        <button>Save Post</button>
      </form>
    </section>
  );
};
