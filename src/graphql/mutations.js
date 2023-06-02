/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClothes = /* GraphQL */ `
  mutation CreateClothes(
    $input: CreateClothesInput!
    $condition: ModelClothesConditionInput
  ) {
    createClothes(input: $input, condition: $condition) {
      id
      type
      notes
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateClothes = /* GraphQL */ `
  mutation UpdateClothes(
    $input: UpdateClothesInput!
    $condition: ModelClothesConditionInput
  ) {
    updateClothes(input: $input, condition: $condition) {
      id
      type
      notes
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteClothes = /* GraphQL */ `
  mutation DeleteClothes(
    $input: DeleteClothesInput!
    $condition: ModelClothesConditionInput
  ) {
    deleteClothes(input: $input, condition: $condition) {
      id
      type
      notes
      date
      createdAt
      updatedAt
    }
  }
`;
