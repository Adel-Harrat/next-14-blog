"use client";

import { addPost } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <div>
      <form action={formAction}>
        <h2 className="text-center font-semibold text-2xl py-5">
          Add New Post
        </h2>

        {state && (
          <p className="bg-red-300 text-red-900 font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>

            {state.error}
          </p>
        )}

        <input
          type="hidden"
          name="userId"
          value={userId}
        />

        <div className="mb-5">
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="title"
            name="title"
            placeholder="Please Enter the Title"
          />
        </div>

        <div className="mb-5">
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="slug"
            name="slug"
            placeholder="Please Enter the Slug"
          />
        </div>

        <div className="mb-5">
          <input
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            type="text"
            id="image"
            name="image"
            placeholder="Please Enter the Image (Optional)"
          />
        </div>

        <div className="mb-5">
          <textarea
            className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium"
            id="description"
            name="description"
            placeholder="Please Enter the Description"
            rows={5}
          ></textarea>
        </div>

        <div>
          <button className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPostForm;
