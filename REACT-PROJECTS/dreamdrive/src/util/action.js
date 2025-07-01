import { redirect } from "react-router-dom";

export async function formAction({ request }) {
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);
  console.log(data);

  const res = await fetch("http://localhost:3000/new-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("failed to add new user");
  }

  return redirect("/");
}
export async function editformAction({ request, params }) {
  const usrId = params.id;
  const formdata = await request.formData();
  const data = Object.fromEntries(formdata);
  console.log(data);

  const res = await fetch(`http://localhost:3000/${usrId}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("failed to add new user");
  }

  return redirect("/");
}
export async function deleteUsersAction({ params }) {
  const userId = params.id;

  const res = await fetch(`http://localhost:3000/${userId}/delete`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("failed to add new user");
  }

  return redirect("/");
}

export async function updateFavoriteAction({ request, params }) {
  const userId = params.id;
  const formdata = await request.formData();

  const favorite = formdata.get("favorite");

  const res = await fetch(`http://localhost:3000/${userId}/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ favorite: favorite }),
  });

  if (!res.ok) {
    throw new Error("failed to add favorite");
  }

  console.log(favorite);

  return null;
}
