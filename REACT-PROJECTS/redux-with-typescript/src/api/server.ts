import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { factory, oneOf, manyOf, primaryKey } from "@mswjs/data";
import { nanoid } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker/locale/en";

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;
const ARTIFICIAL_DELAY_MS = 2000;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* RNG setup (consistent test data via seed) */
let useSeededRNG = true;
if (useSeededRNG) {
  let randomSeedString = localStorage.getItem("randomTimestampSeed");
  let seedDate;
  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();
    randomSeedString = seedDate.toISOString();
    localStorage.setItem("randomTimestampSeed", randomSeedString);
  }
  faker.seed(seedDate.getTime());
}

/* Helpers */
function getRandomInt(min: number, max: number) {
  return faker.number.int({ min, max });
}

const randomFromArray = <T>(arr: T[]): T => {
  const idx = getRandomInt(0, arr.length - 1);
  return arr[idx];
};

const firstFromArray = (items: string | string[] | readonly string[]): string => {
  return ([] as string[]).concat(items)[0];
};

type ReactionName = "thumbsUp" | "tada" | "heart" | "rocket" | "eyes";

/* MSW data model via @mswjs/data */
export const db = factory({
  user: {
    id: primaryKey(() => nanoid()),
    firstName: String,
    lastName: String,
    name: String,
    username: String,
    posts: manyOf("post"),
  },
  post: {
    id: primaryKey(() => nanoid()),
    title: String,
    date: String,
    content: String,
    reactions: oneOf("reaction"),
    comments: manyOf("comment"),
    user: oneOf("user"),
  },
  comment: {
    id: primaryKey(() => nanoid()),
    date: String,
    text: String,
    post: oneOf("post"),
  },
  reaction: {
    id: primaryKey(() => nanoid()),
    thumbsUp: Number,
    tada: Number,
    heart: Number,
    rocket: Number,
    eyes: Number,
    post: oneOf("post"),
  },
});

type User = ReturnType<typeof db.user.create>;
type Post = ReturnType<typeof db.post.create>;

const createUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    username: faker.internet.userName(),
  };
};

const createPostData = (user: User) => ({
  title: faker.lorem.words(),
  date: faker.date.recent({ days: RECENT_NOTIFICATIONS_DAYS }).toISOString(),
  user,
  content: faker.lorem.paragraphs(),
  reactions: db.reaction.create({
    thumbsUp: 0,
    tada: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  }),
});

/* Seed initial test data */
for (let i = 0; i < NUM_USERS; i++) {
  const author = db.user.create(createUserData());
  for (let j = 0; j < POSTS_PER_USER; j++) {
    db.post.create(createPostData(author));
  }
}

/* Serializing posts before returning them */
const serializePost = (post: Post) => ({
  ...post,
  user: post.user ? post.user.id : null,
});

/* MSW HTTP handlers */
let currentUser: string | null = null;

export const handlers = [
  // login
  http.post("/fakeApi/login", async ({ request }) => {
    const { username } = (await request.json()) as { username: string };
    currentUser = username;
    return HttpResponse.json({ success: true });
  }),

  // logout
  http.post("/fakeApi/logout", async () => {
    currentUser = null;
    return HttpResponse.json({ success: true });
  }),

  // fetch all posts
  http.get("/fakeApi/posts", async () => {
    const posts = db.post.getAll().map(serializePost);
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(posts);
  }),

  // create a new post
  http.post("/fakeApi/posts", async ({ request }) => {
    const data = (await request.json()) as Record<string, any>;
    if (data.content === "error") {
      await delay(ARTIFICIAL_DELAY_MS);
      return new HttpResponse(JSON.stringify("Server error saving this post!"), {
        status: 500,
      });
    }
    data.date = new Date().toISOString();
    const user = db.user.findFirst({ where: { id: { equals: data.user } } });
    data.user = user;
    data.reactions = db.reaction.create({
      thumbsUp: 0,
      tada: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    });
    const post = db.post.create(data);
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(serializePost(post));
  }),

  // fetch single post
  http.get("/fakeApi/posts/:postId", async ({ params }) => {
    const postId = firstFromArray(params.postId);
    const post = db.post.findFirst({ where: { id: { equals: postId } } })!;
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(serializePost(post));
  }),

  // update post
  http.patch("/fakeApi/posts/:postId", async ({ request, params }) => {
    const { id, ...data } = (await request.json()) as Post;
    const postId = firstFromArray(params.postId);
    const updated = db.post.update({
      where: { id: { equals: postId } },
      data,
    })!;
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(serializePost(updated));
  }),

  // fetch comments
  http.get("/fakeApi/posts/:postId/comments", async ({ params }) => {
    const postId = firstFromArray(params.postId);
    const post = db.post.findFirst({ where: { id: { equals: postId } } })!;
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json({ comments: post.comments });
  }),

  // post a reaction
  http.post("/fakeApi/posts/:postId/reactions", async ({ request, params }) => {
    const postId = firstFromArray(params.postId);
    const { reaction } = (await request.json()) as { reaction: ReactionName };
    const post = db.post.findFirst({ where: { id: { equals: postId } } })!;
    const updated = db.post.update({
      where: { id: { equals: postId } },
      data: {
        reactions: {
          ...post.reactions!,
          [reaction]: post.reactions![reaction] + 1,
        },
      },
    })!;
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(serializePost(updated));
  }),

  // notifications endpoint
  http.get("/fakeApi/notifications", async ({ request }) => {
    const since = new URL(request.url).searchParams.get("since") ?? undefined;
    // You'll need to define `generateRandomNotifications`
    const notifications = generateRandomNotifications(
      since,
      currentUser,
      getRandomInt(1, 5),
      db
    );
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(notifications);
  }),

  // fetch all users
  http.get("/fakeApi/users", async () => {
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(db.user.getAll());
  }),
];

export const worker = setupWorker(...handlers);
