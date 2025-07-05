export async function usersDataLoader({ request }) {
  const res = await fetch("http://localhost:3000/");
  if (!res.ok) {
    throw new Response("Failed to fetch users data", { status: res.status });
  }

  const usersData = await res.json();

  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (!q || q.trim() === "") {
    return usersData;
  }

  const filteredUsersData = usersData.filter(
    (user) =>
      user.firstName.toLowerCase().includes(q) ||
      user.lastName.toLowerCase().includes(q)
  );

  console.log("checking filterd data", filteredUsersData);

  return filteredUsersData;
}

export async function useDetailsLoader({ params }) {
  const userId = params.id;
  const response = await fetch(`http://localhost:3000/${userId}`);
  if (!response) {
    throw new Response("Failed to fetch a user details", {
      status: response.status,
    });
  }
  const userData = await response.json();

  return { userData, favorite: userData.favorite };
}

export async function searchActionLoader({ request }) {
  const usersData = await usersDataLoader();
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (!q || q.trim() === "") {
    return usersData;
  }

  const filteredUsersData = usersData.filter(
    (user) =>
      user.firstName.toLowerCase().includes(q) ||
      user.lastName.toLowerCase().includes(q)
  );

  console.log("checking filterd data", filteredUsersData);

  return filteredUsersData;
}
