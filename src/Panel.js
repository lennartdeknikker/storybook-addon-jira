import React, { useEffect, useState } from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS } from "./constants";
import { PanelContent } from "./components/PanelContent";
import { parseToCamelCase } from "./helpers/parseCamelCase";

export const Panel = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const [results, setResults] = useAddonState(ADDON_ID, {
    overview: {},
    subtasks: {},
    data: {}
  });

  const [fetchingState, setFetchingState] = useState(false)

  // https://storybook.js.org/docs/react/addons/addons-api#usechannel
  const emit = useChannel({
    [EVENTS.RESULT]: async function ({parsedData, isForSubtask}) {
      if (!isForSubtask) {
        setResults(parsedData)
        localStorage.setItem('results', JSON.stringify(parsedData))
      } else {
        const updatedResults = JSON.parse(localStorage.getItem('results'))
        const statusIdOfSubtask = parseToCamelCase(parsedData.overview.status.label)
        const idOfSubtask = parsedData.overview.ticketId
        updatedResults.subtasks.categories[statusIdOfSubtask].items.map(item => {
          if (item.id === idOfSubtask) item.data = parsedData
          return item
        })
        setResults(updatedResults)
        localStorage.setItem('results', JSON.stringify(updatedResults))
      }
      setFetchingState(false)
    },
  });

  const fetchData = (ticketId, isForSubtask = false) => {
    setFetchingState(true)
    emit(EVENTS.REQUEST, {ticketId: ticketId, isForSubtask: isForSubtask})
  }

  return (
    <AddonPanel {...props}>
      <PanelContent
        fetchingState={fetchingState}
        results={results}
        fetchData={fetchData}
        clearData={() => emit(EVENTS.CLEAR)}
      />
    </AddonPanel>
  );
};
