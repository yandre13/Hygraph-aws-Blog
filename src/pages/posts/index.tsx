import Card from '@/components/Card'
import { DataPosts, queryPosts } from '@/gql/posts.query'
import { gqlClient } from '@/lib/gqlClient'

type PostsPageProps = {
  posts: DataPosts['posts']
  preview: boolean
}

export async function getStaticProps({ preview = false }) {
  const { posts }: DataPosts = await gqlClient(preview).request(queryPosts)

  return {
    props: {
      posts,
      preview,
    } as PostsPageProps,
  }
}
export default function Posts({ posts, preview }: PostsPageProps) {
  return (
    <section className="py-16">
      <h1 className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-center text-7xl font-black text-transparent">
        {preview && '[Preview mode:]'} My latest posts
      </h1>
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="col-span-1">
            <Card {...post} />
          </article>
        ))}
      </div>
    </section>
  )
}
