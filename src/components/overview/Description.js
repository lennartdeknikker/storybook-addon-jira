import React from 'react';
import { styled, themes, convert } from "@storybook/theming";
import parseAdfToHtml from '../../helpers/parseAdfToHtml'

const Description = ({ descriptionAdfString }) => {
  const descriptionHtmlString = parseAdfToHtml(descriptionAdfString)
  const DescriptionTitle = styled.h2({
    fontSize: '1em',
    fontWeight: 700,
    margin: '0 0 20px 0'
  })

  const DescriptionSection = styled.div({
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: convert(themes.normal).color.light,
    marginBottom: '1em'
  })

  const DescriptionCopy = styled.p({
    display: 'block',
    fontWeight: 300,
    marginTop: 0,
    a: {
      color: '#0052cc',
      textDecoration: 'none'
    }
  })

  return (
    <DescriptionSection>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionCopy dangerouslySetInnerHTML={{__html: descriptionHtmlString}} />
    </DescriptionSection>
  )
}

export default Description