import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_BLUGENIX_BLOG

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            id
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: {slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        id
        featuredImage {
          url
        }
        content {
          raw
        }
        categories {
          name
          slug
        }
        author {
          bio
          name
          id
          photo {
            url
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query, { slug })

  return results.post;
}

export const getTeamDetails = async(slug) => {
  const query = gql`
  query GetTeamDetails($slug: String!) {
    teamSection(where: {slug: $slug}) {
      id
      buttonText
      name
      position
      slug
      text
      text2
      text3
      modal
      profileImage {
        url
      }
    }
  }
  `
  const result = await request(graphqlAPI, query, { slug })

  return result.teamSection
}

export const getTherapyDetails = async (slug) => {
  const query = gql`
  query GetTherapyDetails($slug: String!) {
    therapySection(where: {slug: $slug}) {
      createdAt
      buttonText
      heading
      id
      modal
      slug
      subheading
      text
      text2
      text3
      sectionImage {
        url
      }
      therapy {
        name
        slug
      }
    }
  }
  `
  const results = await request(graphqlAPI, query, { slug })

  return results.therapySection;
}

export const getSymptomSection = async (slug) => {
  const query = gql`
  query GetSymptomSection($slug: String!) {
    symptomSection(where: {slug: $slug}) {
      buttonText
      heading
      id
      subheading
      text1
      text2
      text3
    }
  }
  `
  const results = await request(graphqlAPI, query, { slug })

  return results.symptomSection;
}

export const getTestimonialSection = async (slug) => {
  const query = gql`
  query getTestimonialSection($slug: String!) {
    testimonialSection(where: {slug: $slug}) {
      id
      buttonText
      heading
      slug
      subheading
      text
      text2
      boxTitle
      boxButtonText
      sectionImage {
        url
      }
    }
  }
  `
  const results = await request(graphqlAPI, query, { slug })

  return results.testimonialSection;
}

export const getTestimonialCards = async () => {
  const query = gql`
    query GetTestimonialCards() {
      testimonialCards {
        createdAt
        id
        image {
          url
        }
        message
        name
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.testimonialCards
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        id
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.posts
}


export const getSymptoms = async () => {
  const query = gql`
  query GetSymptoms {
    symptoms {
      description
      id
      slug
      title
      buttonText
      symptomImage {
        url
      }
    }
  }
  `
  const results = await request(graphqlAPI, query)

  return results.symptoms
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories }}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        id
      }
    }
  `
  const results = await request(graphqlAPI, query, { categories, slug })

  return results.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        id
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.categories
}

export const getTherapies = async () => {
  const query = gql`
    query GetTherapies {
      therapies {
        name
        slug
        id
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.therapies
}

export const getTeam = async () => {
  const query = gql`
  query GetTeam {
    teamMembers {
      id
      slug
      name
    }
  }
  `
  const results = await request(graphqlAPI, query)

  return results.teamMembers
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj)
  })

  return result.json();
}

export const submitTestimonial = async (obj) => {
  const result = await fetch('/api/testimonial', {
    method: "POST",
    body: obj
  })

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: {slug: $slug } } ) {
        name
        createdAt
        comment
        id
      }
    }
  `

  const results = await request(graphqlAPI, query, { slug })

  return results.comments
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } } ) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            id
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const results = await request(graphqlAPI, query, { slug });

  return results.postsConnection.edges
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        id
        createdAt
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.posts;
}

export const getHero = async () => {
  const query = gql`
    query GetHero {
      homeHeroes {
        about
        id
        info
        slogan
        heroImage {
          url
        }
        bgGradient1 {
          url
        }
        bgGradient2 {
          url
        }
      }
    }
    `

  const result = await request(graphqlAPI, query)

  return result.homeHeroes
}

export const getFormHero = async () => {
  const query = gql`
    query GetFormHero {
      formHeroes {
        about
        bannerTitle
        id
        info
        slogan
        heroImage {
          url
        }
        bgGradient1 {
          url
        }
        bgGradient2 {
          url
        }
      }
    }
    `
  const result = await request(graphqlAPI, query)

  return result.formHeroes
}

export const getTherapyHero = async () => {
  const query = gql`
    query GetTherapyHero {
      therapyHeroes {
        about
        heroImage {
          url
        }
        bgGradient1 {
          url
        }
        bgGradient2 {
          url
        }
        id
        info
        slogan
        bannerTitle
        buttonText
      }
    }
    `
  const result = await request(graphqlAPI, query)

  return result.therapyHeroes
}

export const getBenefitIcons = async () => {
  const query = gql`
    query GetBenefitIcons {
      benefitIcons {
        id
        text
        title
        iconImage {
          url
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.benefitIcons
}

export const getHomeSections = async () => {
  const query = gql`
    query MyQuery {
      homeSections {
        heading
        id
        subheading
        text
        text2
        text3
        buttonText
        modal
        sectionImage {
          url
        }
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.homeSections
}

export const getFormSections = async () => {
  const query = gql`
    query MyQuery {
      formSections {
        buttonText
        heading
        id
        modal
        subheading
        text
        text2
        sectionImage {
          url
        }
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.formSections
}