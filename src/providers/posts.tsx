import useFetch from "@/hooks/useFetch";
import { PostWithAuthor } from "@/types";
import { createContext, useContext } from "react";

interface PostsContextType {
  loading: boolean;
  error: string | null;
  posts: PostWithAuthor[];
  refetch: () => void;
}

const PostsContext = createContext<PostsContextType>({
  loading: true,
  error: null,
  posts: [],
  refetch: () => {},
});

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    loading,
    error,
    data: posts,
    refetch,
  } = useFetch<PostWithAuthor[]>("/api/posts");

  return (
    <PostsContext.Provider
      value={{ loading, error, posts: posts ?? [], refetch }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  return context;
};
