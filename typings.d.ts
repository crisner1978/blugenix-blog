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
  id: string
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

export interface IHero {
  slogan: string
  bannerTitle?: string
  about: string
  info: string
  id: string
  bgGradient1: {
    url: string
  }
  bgGradient2: {
    url: string
  }
  heroImage: {
    url: string
  }
}

export interface IHomeSection {
  id: string
  subheading: string
  heading: string
  text: string
  text2: string
  text3: string
  buttonText: string
  modal: boolean
  sectionImage: {
    url: string
  }
}

