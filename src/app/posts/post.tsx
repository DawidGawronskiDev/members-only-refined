import Avatar from "@/components/avatar";
import { PostWithAuthor } from "@/types";

export default function Post({ post }: { post: PostWithAuthor }) {
  return (
    <li className="p-2 rounded-md break-inside-avoid-column border border-background/10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/5">
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
