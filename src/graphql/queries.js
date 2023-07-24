/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClothes = /* GraphQL */ `
  query GetClothes($noteId: ID!, $date: AWSDate!) {
    getClothes(noteId: $noteId, date: $date) {
      noteId
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
    $noteId: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelClothesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClothes(
      noteId: $noteId
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        noteId
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
