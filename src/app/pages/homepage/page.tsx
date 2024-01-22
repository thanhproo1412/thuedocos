'use client'

// pages/categories.js
import { Box, Container, Heading, Image, Stack, Center, Flex, Link, Circle, Badge, Tooltip, chakra, Icon, SimpleGrid, Button } from '@chakra-ui/react';
import Rating from '../components/Rating'
import { FiShoppingCart } from 'react-icons/fi'

export default function CategoriesPage() {

  return (
    <Box pt='88px'>
      <Container maxW={'6xl'}> {/* Adjust maxW to your desired width, for example, '2xl' */}

        {/*------------------------------------------------------------ Fast Categories------------------------------------------------------------ */}
        <Box>
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
        </Box>

        {/* {/*------------------------------------------------------------introduce text{/*------------------------------------------------------------ */}
        <Box p={4} borderWidth={0} borderColor="gray.200" borderRadius="md">
          <Box as="h2" fontSize="lg" fontWeight="semibold">
            All products featured on Vogue are independently selected by our editors. However, when you buy something through our retail links, we may earn an affiliate commission.
          </Box>
          <Box py={4}>
            <Box as="p" fontSize="md" lineHeight="1.5">
              What if you had carte blanche with your wardrobe? Today's clothing rental subscription services make it entirely possible to breathe new life into your closet, without having to fully commit to new pieces that might not end up working for you down the line. It doesn't matter if you're a thrill-seeking maximalist or a less-is-more minimalist, these clothing and accessories rental subscription services are the easiest way to ensure 2024 is your best-dressed year yet.
            </Box>
            <Box as="p" fontSize="md" lineHeight="1.5">
              Whether that means suiting up for important meetings in the office, going all out for a winter sun (or ski!) getaway, or slipping on a gown for an intimate wedding ceremony, there's no denying the joy of putting together a new outfit. You could search your closet for fresh ways to make something old feel new again, spend hours searching for a completely new look to buy, or the reason we're here-test out a clothing rental subscription service.
            </Box>
          </Box>
        </Box>

        {/* {/*------------------------------------------------------------list produce for today {/*------------------------------------------------------------*/}
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={2}>
          {topSearch.map((item) => (
            <Box key={item.key}>
              <Flex w="full" alignItems="center" justifyContent="center">
                <Box
                  bg={'white'}
                  maxW="sm"
                  borderWidth="2px"
                  rounded="lg"
                  shadow="lg"
                  position="relative"
                  _hover={{
                    border: '2px solid lightblue',
                    boxShadow: 'xl',
                  }}
                >
                  <chakra.a href={'#'} display={'flex'}>
                    <Image
                      src={item.imageURL}
                      alt={`Picture of ${item.name}`}
                      roundedTop="lg"
                      h="250px" // Set a fixed height for the image
                      w="250px" // Set a fixed height for the image
                      objectFit="cover" // Control how the image behaves within its container
                    />
                  </chakra.a>

                  <Box p="6">
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {item.name}
                      </Box>
                      <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}
                      >
                        <chakra.a href={'#'} display={'flex'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                        </chakra.a>
                      </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                      <Box fontSize="2xl" color={'black'}>
                        <Box as="span" color={'gray.600'} fontSize="lg">
                          {/* £ */}
                        </Box>
                        {item.price.toFixed(2)}đ
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
        <Center>
          <Button
            m='16px'
            px={8}
            bg={'gray.900'}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() => { }}>
            Xem thêm
          </Button>
        </Center>



      </Container >
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

const topSearch = [
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://gw.alicdn.com/imgextra/i3/2216607963594/O1CN01gmOC8v1cQ6LMRwAxI_!!2216607963594.jpg_Q75.jpg_.webp',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://ae01.alicdn.com/kf/S43bc2516543a406d99ce494513a8afccm/COSER-TRIBE-Anime-Game-Honkai-Impact-3-Li-Sushang-Cute-Halloween-Carnival-Role-CosPlay-Costume-Complete.png',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://ae01.alicdn.com/kf/S8add6aeff8ea4a21bc3885d3d594dde9w.jpg_640x640Q90.jpg_.webp',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://gw.alicdn.com/imgextra/i3/2216607963594/O1CN01gmOC8v1cQ6LMRwAxI_!!2216607963594.jpg_Q75.jpg_.webp',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://ae01.alicdn.com/kf/Ua5a566a95b294157bba4c830e9a24c41y.jpg_640x640Q90.jpg_.webp',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://ae01.alicdn.com/kf/Sf43edc958d9047859983d95a4d4fa25dF.jpg_640x640Q90.jpg_.webp',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://sg-test-11.slatic.net/p/7f6badf3026287bf70fa484aa1a613e1.jpg',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  },
  {
    id: '#',
    isNew: true,
    imageURL:
      'https://us03-imgcdn.ymcart.com/65728/2022/04/02/2/5/25521a3b541a4f30.jpg?x-oss-process=image/quality,Q_90/auto-orient,1/resize,m_lfit,w_500,h_500',
    name: 'Jinx',
    price: 450,
    rating: 4.2,
    numReviews: 34,
    link: '#'
  }
]

