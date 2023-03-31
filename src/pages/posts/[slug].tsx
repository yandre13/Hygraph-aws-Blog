import {
  DataPost,
  DataPostsSlug,
  queryPostBySlug,
  queryPostsSlug,
} from '@/gql/posts.query'
import { gqlClient } from '@/lib/gqlClient'
import Image from 'next/image'

export async function getStaticPaths() {
  const { posts }: DataPostsSlug = await gqlClient().request(queryPostsSlug)

  return {
    paths: posts.map((post: { slug: string }) => ({
      params: { slug: post.slug },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { slug: string }
  preview: boolean
}) {
  const { slug } = params

  const { post }: DataPost = await gqlClient(preview).request(queryPostBySlug, {
    slug,
  })

  return {
    props: {
      post,
      preview,
    },
  }
}

export default function Post({ post }: { post: DataPost['post'] }) {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        <Image
          src={post.image.url}
          alt={post.title}
          width={400}
          height={700}
          className="aspect-[2.3] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            {post.title} {post.stage}
          </h1>
          <p className="py-6">{post.description}</p>
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </section>
  )
}
