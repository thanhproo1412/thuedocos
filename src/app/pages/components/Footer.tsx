'use client'

import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Link, Image, } from '@chakra-ui/react'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react'


const SocialButton = ({ children, label, href, }: { children: ReactNode, label: string, href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: '#339FFA',
        color: 'white'
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Link href='#'>
          <Image h='50px' objectFit='cover' src='/imgs/logo/linkedin_banner_image_1.png' alt='Thuê đồ cos' />
        </Link>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'#'}>Home</Box>
          <Box as="a" href={'#'}>About</Box>
          <Box as="a" href={'#'}>Blog</Box>
          <Box as="a" href={'#'}>Contact</Box>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Website by Thanh Nguyen</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/Thanhproo1412'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.facebook.com/Thanhproo1412'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.facebook.com/Thanhproo1412'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}