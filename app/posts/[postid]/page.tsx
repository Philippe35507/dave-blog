import { getSortedPostsData } from "@/lib/posts";

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  return <div>page</div>;
}
