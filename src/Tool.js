import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ outlineActive }, updateGlobals] = useGlobals()

  const toggleOutline = useCallback(
    () =>
      updateGlobals({
        outlineActive: !outlineActive,
      }),
    [outlineActive]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={outlineActive}
      title="Apply outlines to the preview"
      onClick={toggleOutline}
    >
      <Icons icon="outline" />
    </IconButton>
  );
};
