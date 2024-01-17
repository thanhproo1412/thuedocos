'use client'

// pages/categories.js
import { Box, Container, Heading, Image, Stack, Center, Text, Link } from '@chakra-ui/react';

export default function CategoriesPage() {

  return (
    <Box pt='88px'>
      <Container maxW={'6xl'}> {/* Adjust maxW to your desired width, for example, '2xl' */}
        <Center>
          <Heading color='gray.800'>I'm renting for:</Heading>
        </Center>
        <Center py={12}>
          {Categories.map((cat) => (
            <Link
              m='.8em'
              key={cat.key}
              href={cat.url}
              role={'group'}
              p={6} maxW={'330px'}
              w={'full'}
              bg={'white'}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `${cat.img}`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}
              >
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={cat.img}
                  alt="#"
                />
              </Box>
              <Stack pt={10} align={'center'}>
                {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Brand
                </Text> */}
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  {cat.title}
                </Heading>
                {/* <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'xl'}>
                    $57
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    $199
                  </Text>
                </Stack> */}
              </Stack>
            </Link>
          ))}
        </Center>

      </Container>
    </Box >

  );
}


interface Categories {
  title: string
  img: string
  url: string
}

const Categories: Array<Categories> = [
  {
    title: 'Genshin costume',
    img: 'https://sbluucosplay.com/cdn/shop/files/KaedeharaKazuhaCosplayCostume30.jpg?v=1702022370',
    url: '#'
  },
  {
    title: 'Anime costume',
    img: 'https://i.pinimg.com/550x/cf/d0/d9/cfd0d96260fea6a4876900bce9971392.jpg',
    url: '#'
  },
  {
    title: 'HSR costume',
    img: 'https://uwowocosplay.com/cdn/shop/files/2_199da95b-9499-47c1-87d4-c74ebf1f65e7.jpg?v=1687676785&width=1445',
    url: '#'
  },
  {
    title: 'Lolita costume',
    img: 'https://ae01.alicdn.com/kf/Sc3124caed2c14a29b29ebc35ad40749ao.jpg_640x640Q90.jpg_.webp',
    url: '#'
  },
]



