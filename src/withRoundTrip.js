import { useChannel } from "@storybook/client-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";
import parseTicketData from './helpers/parseTicketData'

// something to have a look at:
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-storyfn

export const withRoundTrip = (storyFn) => {
  const clearData = () => {
    emit(EVENTS.RESULT, {
      overview: {},
      subtasks: {},
      data: {}
    });
  }

  const emit = useChannel({
    [EVENTS.REQUEST]: async ({ ticketId, isForSubtask }) => {
      let data = null
      if (ticketId) {
        const fetchedData = await fetch(`${process.env?.STORYBOOK_MIDDLEWARE_JIRA_ENDPOINT}?ticketId=${ticketId}`)
        console.log('🚀 ~ fetchedData', fetchedData)
        data = await fetchedData.json()
        console.log('🚀 ~ data in withRoundTrip', data)
      }
      const parsedData = parseTicketData(data)
      emit(EVENTS.RESULT, {parsedData: parsedData, isForSubtask: isForSubtask})
    },
    [STORY_CHANGED]: clearData,
    [EVENTS.CLEAR]: clearData,
  });
  return storyFn();
};
