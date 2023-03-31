import { Post } from '@/gql/posts.query'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  title,
  description,
  image,
  slug,
  author,
  createdAt,
}: Post) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <Link href={`/posts/${slug}`}>
        <figure>
          <Image
            src={image.url}
            alt={title}
            width={400}
            height={260}
            className="aspect-video rounded-t-2xl"
          />
        </figure>
      </Link>

      <div className="card-body">
        <p className="mb-2 text-sm">
          <span className="font-bold">Product •</span> {formatDate(createdAt)}
        </p>
        <Link href={`/posts/${slug}`}>
          <h2 className="card-title font-black duration-300 ease-in-out hover:text-[#7928CA]">
            {title}
          </h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions mt-5 gap-3">
          <div className="online avatar">
            <div className="w-10 rounded-full">
              <Image
                src={author.photo.url}
                alt={author.name}
                width={80}
                height={80}
                className="aspect-square"
              />
            </div>
          </div>
          <div>
            <h6 className="text-sm font-medium">{author.name}</h6>
            <p className="text-sm">{author.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
