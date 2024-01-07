"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, slug, image, description, userId } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      image,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, image, isAdmin } =
    Object.fromEntries(formData);

  if (password.length < 6)
    return { error: "Password must be more than 6 characters" };

  try {
    connectToDb();

    const checkUsername = await User.findOne({ username });
    if (checkUsername) return { error: "Username already exist" };

    const checkEmail = await User.findOne({ email });
    if (checkEmail) return { error: "Email already exist" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
      isAdmin,
    });
    await newUser.save();
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

// export async function handleGithubLogin() {
//   await signIn("github");
// }

export async function handleLogout() {
  await signOut();
}

export async function register(previousState, formData) {
  const { username, email, password, passwordRepeat, image } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match!" };
  }

  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(validRegex)) {
    return { error: "Invalid email format" };
  }

  try {
    connectToDb();

    const checkUsername = await User.findOne({ username });
    if (checkUsername) return { error: "Username already exist" };

    const checkEmail = await User.findOne({ email });
    if (checkEmail) return { error: "Email already exist!" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export async function login(previousState, formData) {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Wrong credentials!" };
    }

    throw error;
  }
}
