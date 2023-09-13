import {createClient} from '@sanity/client'


export const client = createClient({
  projectId: "r03ftse9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-12-09",  
  token: "skjmFQC8VYnIeiZKuxzS076fxnKYp2bPZqdJKC8OJnVTKPe0KydtFBZo3VDePx5eYAPhWGtERn3ucko2NaptAJhZgo7N7eeoQDr8BgbU4oKxKBxkaFAX2RJxdGfVIkSVPGNXj7Qc6bWRwrJba1ykFnvurtjr6G4FGiICzdDtfWOHpDdrcsAM",
})