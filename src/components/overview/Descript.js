import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import parseAdfToHtml from '../../helpers/parseAdfToHtml'

const Descript = ({ descriptionAdfString }) => {
  const descriptionHtmlString = parseAdfToHtml(descriptionAdfString)

  const Description = styled.p({
    display: 'block',
    fontWeight: 300,
    marginTop: 0,
    a: {
      color: '#0052cc',
      textDecoration: 'none'
    },
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: convert(themes.normal).color.light
  })

  return (
    <Description dangerouslySetInnerHTML={{__html: descriptionHtmlString}} />
  )
}

export default Descript