import React from "react";
import { CategoryList } from "./CategoryList";

// Define the default export for the story
export default {
  title: "Components/CategoryList",
  component: CategoryList,
};

// Template to generate Button stories
const Template = (args) => <CategoryList {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    "Accessories",
    "Bags",
    "Book & Magazines",
    "Computer & Device",
    "Fashion",
    "Glasses",
    "Health & Beauty",
    "Laptop",
    "Shoes & Sports",
    "Smartphone & Tablets",
  ],
};
