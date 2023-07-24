import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { ThemeProvider } from '@aws-amplify/ui-react';
import ProperDate from "./ProperDate";
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

const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      heading: {
        color: { value: '#d70e0e' },
        fontWeight: { value: 'tokens.fontWeights.bold' },
      },
      button: {
        primary: {
          backgroundColor: { value: '#d70e0e' },
          color: { value: '#ffee00' },
          _hover: {
            backgroundColor: { value: '#ffee00' },
            color: { value: '#d70e0e' },
          },
          _focus: {
            backgroundColor: { value: '#d70e0e' },
            color: { value: '#ffee00' },
          },
          _active: {
            backgroundColor: { value: '#d70e0e' },
            color: { value: '#ffee00' },
          },
        },
        link: {
          color: { value: '#d70e0e' },
          _hover: {
            backgroundColor: { value: 'transparent' },
            color: { value: '#7b0707' },
          },
        }
      },
    },
  },
};

const App = ({ signOut }) => {
  const [clothes, setClothes] = useState([]);
  const [todaysDate, setTodaysDate] = useState('');

  useEffect(() => {
    fetchClothes();
    setTodaysDate(new Date().toJSON().slice(0, 10));
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
    <ThemeProvider theme={theme}>
      <View className="App">
        <Heading margin="1rem 0" level={1}>Berties Clothes</Heading>
        <View as="form" margin="2rem 0" onSubmit={createClothing} padding="2rem 3rem">
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
              placeholder="Notes (optional)"
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
              defaultValue={todaysDate}
            />
            <Button type="submit" variation="primary">
              Log
            </Button>
          </Flex>
        </View>
        <Heading level={3}>Outstanding clothes</Heading>
        <View margin="2rem 0">
          {clothes.map((clothing) => (
            <Flex
              className="outstandingClothesItem"
              key={clothing.id || clothing.type}
              direction="row"
              justifyContent="left"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {clothing.type}
              </Text>
              <Text as="span">{clothing.notes}</Text>
              <ProperDate todaysDate={clothing.date} />
              <Button variation="link" onClick={() => deleteClothing(clothing)}>
                Delete
              </Button>
            </Flex>
          ))}
        </View>
        <Button variation="primary" margin="2rem 0"onClick={signOut}>Sign Out</Button>
      </View>
    </ThemeProvider>
  );
};

export default withAuthenticator(App);