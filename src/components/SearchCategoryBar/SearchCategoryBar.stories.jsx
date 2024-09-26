import { BrowserRouter as Router } from "react-router-dom";
import { SearchCategoryBar } from "./SearchCategoryBar";

export default {
  title: "components/SearchCategoryBar",
  component: SearchCategoryBar,
};

const Template = (args) => (
  <Router>
    <SearchCategoryBar {...args} />
  </Router>
);

export const Default = Template.bind({});
