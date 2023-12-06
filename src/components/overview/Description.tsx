import React from 'react';
import { styled } from "@storybook/theming";
import parseAdfToHtml from 'src/helpers/parseAdfToHtml';

interface DescriptionProps {
  descriptionAdfString: string; 
}

const Description: React.FC<DescriptionProps> = (props: DescriptionProps) => {
  
  const descriptionHtmlString = props.descriptionAdfString
  const DescriptionTitle = styled.h2({
    margin: '0 0 10px 0'
  })

  const DescriptionSection = styled.div(({ theme }) => ({
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: theme.background.app,
    marginBottom: '1em'
  }))

  const DescriptionCopy = styled.p(({ theme }) => ({
    display: 'block',
    padding: '5px',
    backgroundColor: theme.background.content
  }))

  return (
    <DescriptionSection>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionCopy dangerouslySetInnerHTML={{__html: parseAdfToHtml(descriptionHtmlString)}} />
    </DescriptionSection>
  )
}

export default Description
