export interface Post {
  node: {
    title: string
    id: string
    slug: string
    excerpt: string
    createdAt: string
    featuredImage: {
      url: string
    }
    author: {
      bio: string
      id: string
      name: string
      photo: {
        url: string
      }
    }
    categories: Category[]
  }
}

export interface Category {
  name: string
  slug: string
}

export interface IPost {
  title: string
  id: string
  slug: string
  excerpt: string
  createdAt: string
  featuredImage: {
    url: string
  }
  author: {
    bio: string
    id: string
    name: string
    photo: {
      url: string
    }
  }
  categories: Category[]
}