import { styled } from "@storybook/theming";

const AvatarImage = styled.img({
  borderRadius: "50%",
  width: '24px',
  height: '24px',
  margin: 'auto 0 auto 5px',
  '&.avatar-priority': {
    transform: "scale(0.6)"
  },
  '&.avatar-comment': {
    marginRight: '0px',
  }
})

export default AvatarImage
