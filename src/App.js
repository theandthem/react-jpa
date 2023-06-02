import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  SelectField,
} from "@aws-amplify/ui-react";
import {
  createClothes as createClothesMutation,
  deleteClothes as deleteClothesMutation,
} from "./graphql/mutations";

import { listClothes } from "./graphql/queries";

const App = ({ signOut }) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetchClothes();
  }, []);

  async function createClothing(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      type: form.get("type"),
      notes: form.get("notes"),
      date: form.get("date"),
    };
    await API.graphql({
      query: createClothesMutation,
      variables: { input: data },
    });
    fetchClothes();
    event.target.reset();
  }

  async function deleteClothing({ id }) {
    const newClothes = clothes.filter((clothing) => clothing.id !== id);
    setClothes(newClothes);
    await API.graphql({
      query: deleteClothesMutation,
      variables: { input: { id } },
    });
  }

  async function fetchClothes() {
    const apiData = await API.graphql({ query: listClothes });
    let clothes = apiData.data.listClothes.items;
    setClothes(clothes);
  }


  return (
    <View className="App">
      <Heading margin="2rem 0" level={1}>Berties Clothes</Heading>
      <View as="form" margin="3rem 0" onSubmit={createClothing} padding="4rem">
        <Flex direction="column" justifyContent="center" gap="2rem">
          <SelectField
            name="type"
            label="Type"
            descriptiveText="Clothing type"
            labelHidden
            variation="quiet"
            required
          >
            <option value="Casual">Casual clothes</option>
            <option value="Uniform">Uniform</option>
            <option value="PE Kit">PE kit</option>
          </SelectField>
          <TextField
            name="notes"
            placeholder="Notes"
            label="Notes"
            labelHidden
            variation="quiet"
          />
          <TextField
            name="date"
            placeholder="Date"
            label="Date"
            labelHidden
            variation="quiet"
            type="date"
            required
          />
          <Button type="submit" variation="primary">
            Log
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current outstanding clothes</Heading>
      <View margin="3rem 0">
        {clothes.map((clothing) => (
          <Flex
            key={clothing.id || clothing.type}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {clothing.type}
            </Text>
            <Text as="span">{clothing.notes}</Text>
            <Text as="span">{clothing.date}</Text>
            <Button variation="link" onClick={() => deleteClothing(clothing)}>
              Delete
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);