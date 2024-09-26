import { BrowserRouter as Router } from "react-router-dom";
import { MenuBar } from "./MenuBar";

export default {
  title: "components/MenuBar",
  component: MenuBar,
};

const Template = (args) => (
  <Router>
    <MenuBar {...args} />
  </Router>
);

export const Default = Template.bind({});
