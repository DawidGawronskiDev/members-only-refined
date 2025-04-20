import Avatar from "@/components/avatar";
import { PostWithAuthor } from "@/types";

export default function Post({ post }: { post: PostWithAuthor }) {
  return (
    <li className="border p-2 rounded-md break-inside-avoid-column">
      <div className="flex items-start justify-start">
        <Avatar n={post.id} />
        <div className="ml-2">
          <span className="font-bold">{post.author.username}</span>
        </div>
      </div>
      <div>
        <p className="mt-2">{post.content}</p>
      </div>
    </li>
  );
}
