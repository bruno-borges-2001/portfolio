import SanityClient from 'next-sanity-client'

const client = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})

export default client