import React, { Fragment } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { TabsState, Placeholder, Button } from "@storybook/components";
import { List } from "./List";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
console.log(convert(themes.normal).color)
export const PanelContent = ({ results, fetchData, clearData }) => (
  <TabsState
    initial="overview"
    backgroundColor={convert(themes.normal).background.hoverable}
  >
    <div
      id="overview"
      title="Overview"
      color={convert(themes.normal).color.positive}
    >
      <Placeholder>
        <Fragment>
          There might be standing JIRA tickets for this component. Click the button to fetch these.
        </Fragment>
        <Fragment>
          <RequestDataButton
            secondary
            small
            onClick={fetchData}
            style={{ marginRight: 16 }}
          >
            Fetch tickets
          </RequestDataButton>
        </Fragment>
      </Placeholder>
    </div>
    <div
      id="toDo"
      title={`${results.toDo.length} To do`}
    >
      <List items={results.toDo} />
    </div>
    <div
      id="inProgress"
      title={`${results.inProgress.length} In progress`}
    >
      <List items={results.inProgress} />
    </div>
    <div
      id="readyForTest"
      title={`${results.readyForTest.length} Ready for test`}
    >
      <List items={results.readyForTest} />
    </div>
    <div
      id="done"
      title={`${results.done.length} Done`}
    >
      <List items={results.done} />
    </div>
  </TabsState>
);
