import React from "react";
import { useAddonState, useChannel } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";
import { PanelContent } from "./components/PanelContent";
import type { Results } from './types';

interface PanelProps {
  active: boolean;
}
const INITIAL_RESULTS: Results = {
  overview: {
    assignedTo: undefined,
    comments: undefined,
    created: "",
    description: "",
    lastUpdated: "",
    status: {
      color: "",
      label: ""
    },
    summary: "",
    ticketId: "",
    subtasksProgress: [],
    priority: {
      label: "",
      icon: ""
    },
    reporter: {
      name: "",
      avatar: ""
    }
  },
  subtasks: {
    amount: 0,
    categories: undefined
  },
}
export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setState] = useAddonState(ADDON_ID, INITIAL_RESULTS);

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: (newResults: Results) => setState(newResults),
  });


  return (
    <AddonPanel {...props}>
      <PanelContent
        results={results}
        fetchData={(ticketId: string, isForSubtask = false) => {
          if (ticketId) {
            emit(EVENTS.REQUEST,
              { ticketId: ticketId, isForSubtask: isForSubtask });
          }
        }}
        clearData={() => {
          emit(EVENTS.CLEAR);
        }}
      />
    </AddonPanel>
  );
};
