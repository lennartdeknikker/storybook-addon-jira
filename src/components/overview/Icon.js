import { styled } from "@storybook/theming";
import { Icons } from "@storybook/components";

const Icon = styled(Icons)({
  height: '12px',
  width: '12px',
  marginLeft: '5px',
  alignSelf: "center",
  display: "inline-flex",
  "&.icon-refresh": {
    marginLeft: 0,
    "@keyframes rotate": {
      from: {
        transform: "rotate(0)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    "&.icon-refreshing": {
      marginLeft: 0,
      animation: '1s infinite alternate rotate'
    }
  }
});

export default Icon