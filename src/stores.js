import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  userid: "",
});

export const place = writable({
  id: "",
});

export const category = writable({
  id: "",
});

export const userStore = writable({
  id: "",
  username: "",
  token: "",
});