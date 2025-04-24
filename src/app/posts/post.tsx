import Avatar from "@/components/avatar";
import { PostWithAuthor } from "@/types";

export default function Post({ post }: { post: PostWithAuthor }) {
  return (
    <li className="break-inside-avoid-column border border-gray-900/10 dark:border-gray-100/10 p-4 rounded-2xl dark:bg-gray-100/5 shadow-sm">
      <div className="flex items-start justify-start">
        <Avatar n={post.id} />
        <div className="ml-2">
          <span className="font-bold">{post.author.username}</span>
        </div>
      </div>
      <div>
        <p className="mt-2 opacity-100 font-light break-all">{post.content}</p>
      </div>
    </li>
  );
}
