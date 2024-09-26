import React from "react";
import { SearchBar } from "./SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

// Default Template for SearchBar
const Template = (args) => <SearchBar {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  onSearch: (query) => console.log("Search query:", query),
};

// Story with some predefined search query
export const PreFilled = Template.bind({});
PreFilled.args = {
  onSearch: (query) => console.log("Search query:", query),
};
