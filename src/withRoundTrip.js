import { useChannel } from "@storybook/client-api";
import { STORY_CHANGED } from "@storybook/core-events";
import { EVENTS } from "./constants";

export const withRoundTrip = (storyFn) => {
  const emit = useChannel({
    [EVENTS.REQUEST]: () => {
      emit(EVENTS.RESULT, {
        toDo: [
          {
            title: "Panels are the most common type of addon in the ecosystem",
            description:
              "For example the official @storybook/actions and @storybook/a11y use this pattern",
          },
          {
            title:
              "You can specify a custom title for your addon panel and have full control over what content it renders",
            description:
              "@storybook/components offers components to help you addons with the look and feel of Storybook itself",
          },
        ],
        inProgress: [
          {
            title:
              'This tabbed UI pattern is a popular option to display "test" reports.',
            description:
              "It's used by @storybook/addon-jest and @storybook/addon-a11y. @storybook/components offers this and other components to help you quickly build an addon",
          },
        ],
        readyForTest: [
          {
            title:
              'This tabbed UI pattern is a popular option to display "test" reports.',
            description:
              "It's used by @storybook/addon-jest and @storybook/addon-a11y. @storybook/components offers this and other components to help you quickly build an addon",
          },
        ],
        done: []
      });
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
