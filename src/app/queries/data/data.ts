import gql from "graphql-tag";



export const GET_DATA = gql `
query repos($query:String!){
  search(
    first: 10,
    type: REPOSITORY,
    query:$query
  ){
    repos: edges {
      repo: node {
        ... on Repository {
          name
          url
          description
          stargazers {
            totalCount
          }
        }
      }
    }
  }
  
}
`
