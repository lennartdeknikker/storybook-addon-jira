import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    jira: {
      id: 'RING-1020'
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

Secondary.parameters = {
  jira: {
    id: 'RING-1029'
  }
}


export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

Large.parameters = {
  jira: {
    id: 'RING-1025'
  }
}

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
