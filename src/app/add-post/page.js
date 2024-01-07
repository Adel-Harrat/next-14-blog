import { addPostAction, deletePostAction } from "@/lib/actions";

const AddPost = () => {
  return (
    <div>
      <form
        action={addPostAction}
        className="max-w-sm mx-auto"
      >
        <input
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          type="text"
          name="title"
          placeholder="Enter Title"
        />
        <input
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          type="text"
          name="slug"
          placeholder="Enter Slug"
        />
        <input
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          type="text"
          name="image"
          placeholder="Enter Image Url"
        />
        <textarea
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          name="description"
          placeholder="Enter Description"
          rows="8"
        ></textarea>
        <input
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          type="text"
          name="userId"
          placeholder="Enter userId"
        />

        <button className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
          Submit Post
        </button>
      </form>

      <form
        action={deletePostAction}
        className="max-w-sm mx-auto mt-10"
      >
        <input
          className="w-full text-zinc-50 bg-zinc-800 px-5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 border-2 border-transparent font-medium mb-5"
          type="text"
          name="id"
          placeholder="Enter post id to delete"
        />

        <button className="px-5 py-2.5 rounded-xl bg-amber-500 w-full text-zinc-900 font-bold uppercase tracking-widest text-sm focus:outline-none focus:ring-amber-500/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900">
          Delete Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
