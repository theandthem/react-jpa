/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClothes = /* GraphQL */ `
  query GetClothes($id: ID!) {
    getClothes(id: $id) {
      id
      type
      notes
      date
      createdAt
      updatedAt
    }
  }
`;
export const listClothes = /* GraphQL */ `
  query ListClothes(
    $filter: ModelClothesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClothes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        notes
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;