import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { LinkComponent } from 'components/LinkComponent'
import { SITE_DESCRIPTION, SITE_NAME, SOCIAL_GITHUB, SOCIAL_TWITTER } from 'utils/config'

interface Props {
  className?: string
}

export function Footer(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="footer" className={className} flexDirection="column" justifyContent="center" alignItems="center" mt={8}>
      <Text fontSize="xl">{SITE_NAME}</Text>

      <Text>{SITE_DESCRIPTION}</Text>

      <Flex color="gray.500" gap={2} alignItems="center">
        <LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`}>
          <FaGithub />
        </LinkComponent>
        <LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`}>
          <FaTwitter />
        </LinkComponent>
      </Flex>
    </Flex>
  )
}
