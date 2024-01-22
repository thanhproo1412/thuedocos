'use client'

import {
    Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue,
    useBreakpointValue, useDisclosure, Image, Input, InputGroup, InputRightElement, Show, Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, SearchIcon, } from '@chakra-ui/icons'
import styles from './css/NavBarCss.module.css'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box pos="fixed" top={'0'} minW={'100%'} bg={useColorModeValue('white', 'gray.800')} borderBottom={1} borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')} align='center' zIndex='20000'>
            <Flex maxW='container.xl' bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'60px'} py={{ base: 2 }}
                px={{ base: 4 }} align={'center'}>
                <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
                    <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'} aria-label={'Toggle Navigation'} />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>
                        <Show above='sm'>
                            <Link href='#'>
                                <Image boxSize='50px' objectFit='cover' src='/imgs/logo/logo.png' alt='Thuê đồ cos' />
                            </Link>
                        </Show>
                    </Text>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
                    <Show above='lg'>
                        <InputGroup className={styles['my-search']}>
                            <Input placeholder="Search..." />
                            <InputRightElement>
                                <IconButton icon={<SearchIcon />} size="sm" variant="ghost" aria-label="Search" />
                            </InputRightElement>
                        </InputGroup>
                    </Show>
                    {/* <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'/login'}>
                        Log In
                    </Button> */}
                    <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} bg={'#1E42DD'} href={'/login'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Log In
                    </Button>
                </Stack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>

        </Box>
    )
}

const DesktopNav = () => {
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} spacing={4} justify={'center'} align={'center'}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box className={styles['my-nav-item']} as="a" p={2} href={navItem.href} fontSize={'sm'} fontWeight={500} color={'#1E2132'}
                                _hover={{
                                    textDecoration: 'none',
                                    // color: '#9DECF9',
                                    backgroundColor: '#F2F4F5',
                                    borderRadius: '4px'
                                }}>
                                {navItem.label}
                                {navItem.children && (
                                    <Icon color={'#1E2132'} w={5} h={5} as={ChevronRightIcon} />
                                )}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel, children }: NavItem) => {
    return (
        <Popover trigger={'hover'} placement={'right-start'}>
            <Box role={'group'} display={'block'} p={2} rounded={'md'} color={'#1E2132'}
                _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
                <PopoverTrigger>
                    <Stack direction={'row'} align={'center'}>
                        <Box as="a" justifyContent={'space-around'} href={href}>
                            <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500} color={'#1E2132'}>
                                {label}
                            </Text>
                            <Text fontSize={'sm'}>{subLabel}</Text>
                        </Box>
                        {children &&
                            <Icon
                                _groupHover={{ color: 'pink.400' }} color={'#1E2132'} w={5} h={5} as={ChevronRightIcon} />
                        }
                        <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} justify={'flex-end'} align={'center'} flex={1}
                            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        >
                        </Flex>
                    </Stack>
                </PopoverTrigger>
                {children &&
                    <PopoverContent color={'#1E2132'} border={0} boxShadow={'xl'} p={4} rounded={'xl'} minW={'sm'}>
                        {children.map((child) => (
                            <DesktopSubNav key={child.label} {...child} />
                        ))}
                    </PopoverContent>
                }
            </Box>
        </Popover>

    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            <Image boxSize='50px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} level={1} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href, level }: NavItem & { level: Number }) => {

    const handleLevel = useDisclosure()

    return (
        <Stack spacing={4}>
            <Box py={2} as="a" href={href ?? '#'} alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Flex onClick={children && handleLevel.onToggle}>
                    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                    {children && (
                        <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={handleLevel.isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />
                    )}
                </Flex>
            </Box>

            <Collapse in={handleLevel.isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
                    {children &&
                        children.map((child) => (

                            <MobileNavItem key={child.label} {...child} level={level}>
                            </MobileNavItem>

                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Trang Chủ',
        href: '/homepage',
        subLabel: 'Up-and-coming Designers',
    },
    {
        label: 'Tin tức',
        // href: '/tintuc',
        children: [
            {
                label: 'Tin Vinfast',
                subLabel: 'test subLabel',
                href: '/tintuc',
            },
            {
                label: 'Tin Cộng Đồng',
                href: '#',
            },
            {
                label: 'Đời Sống',
                // href: '/doisong',
                children: [
                    {
                        label: 'Thị trường xe điện',
                        href: '/doisong/thitruongxedien',
                    },
                    {
                        label: 'Công nghệ',
                        href: '/doisong/congnghe',
                    },
                    {
                        label: 'Du lịch',
                        href: '/doisong/dulich',
                    },
                    {
                        label: 'Ảnh đẹp',
                        // href: '/doisong/anhdep',
                        children: [
                            {
                                label: 'Ảnh đẹp',
                                href: '/doisong/anhdep',
                            }
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: 'Đồ cho thuê',
        // href: '/diendan',
        children: [
            {
                label: 'Game',
                href: '#',
            },
            {
                label: 'Anime',
                href: '#',
            },
            {
                label: 'Lotita',
                href: '#',
            },
            {
                label: 'Hán phục',
                href: '#',
            }
        ],
    },
    {
        label: 'Tìm dàn',
        href: '/posts',
    },
    {
        label: 'Về chúng tôi',
        href: '/about',
    },
]