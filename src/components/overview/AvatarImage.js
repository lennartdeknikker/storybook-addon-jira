import { styled } from "@storybook/theming";

const AvatarImage = styled.img({
  borderRadius: "50%",
  width: '24px',
  height: '24px',
  marginLeft: '5px',
  '&.avatar-priority': {
    transform: "scale(0.6) translateY(5px)"
  },
  '&.avatar-comment': {
    marginRight: '10px',
    marginLeft: 0,
  }
})

export default AvatarImage