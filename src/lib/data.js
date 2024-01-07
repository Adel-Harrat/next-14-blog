import { connectToDb } from "./utils";
import { Contact, Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export async function getPosts() {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getPost(slug) {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
}

export async function getUser(id) {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
}

export async function getUsers() {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
}

export async function getContactMessages() {
  try {
    connectToDb();
    const messages = await Contact.find();
    return messages;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch contact messages");
  }
}
