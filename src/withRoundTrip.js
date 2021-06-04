import { useChannel } from "@storybook/client-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";

export const withRoundTrip = (storyFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: async ({ ticketId }) => {
      let data = null
      if (ticketId) {
        const fetchedData = await fetch(`/api?ticketId=${ticketId}`)
        data = await fetchedData.json()
      }
      const subTasks = data?.fields?.subtasks
      const groupedOnStatus = {
        toDo: [],
        inProgress: [],
        readyForTest: [],
        done:[]
      }
      for (const subTask of subTasks) {
        groupedOnStatus[subTask.fields.status.name.toLowerCase()].push({
          title: subTask.key,
          description: subTask.fields.summary,
          data: subTask
        })
      }

      emit(EVENTS.RESULT, groupedOnStatus);
    },
    [STORY_CHANGED]: () => {
      emit(EVENTS.RESULT, {
        toDo: [],
        inProgress: [],
        readyForTest: [],
        done: []
      });
    },
    [EVENTS.CLEAR]: () => {
      emit(EVENTS.RESULT, {
        toDo: [],
        inProgress: [],
        readyForTest: [],
        done: []
      });
    },
  });
  return storyFn();
};
