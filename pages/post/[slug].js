import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
// import { AdjacentPosts } from "../../sections";
import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <Author />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm />
            <Comments />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
