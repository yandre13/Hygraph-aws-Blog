import { gql } from 'graphql-request'

export const queryPosts = gql`
  query GetPosts {
    posts {
      id
      title
      description
      slug
      stage
      image {
        fileName
        url
        createdAt
      }
      author {
        name
        role
        photo {
          fileName
          url
          createdAt
        }
      }
      createdAt
    }
  }
`

export const queryPostsSlug = gql`
  query GetPosts {
    posts {
      slug
    }
  }
`

export type DataPostsSlug = {
  posts: {
    slug: string
  }[]
}

export const queryPostBySlug = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      description
      slug
      stage
      image {
        fileName
        url
        createdAt
      }
      author {
        name
        role
        photo {
          fileName
          url
          createdAt
        }
      }
      createdAt
    }
  }
`

export type DataPost = {
  post: Post
}
export type DataPosts = {
  posts: Post[]
}

export type Post = {
  id: string
  title: string
  description: string
  slug: string
  stage: string
  image: Image
  author: Author
  createdAt: string
}

export type Author = {
  id: string
  name: string
  role: string
  photo: Image
  createdAt: string
}

export type Image = {
  fileName: string
  url: string
  createdAt: string
}
