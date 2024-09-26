import React from "react";
import { CategoryMenu } from "./CategoryMenu";

// Define the default export for the story
export default {
  title: "Components/CategoryMenu",
  component: CategoryMenu,
};

// Template to generate Button stories
const Template = (args) => <CategoryMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Shoes",
};
