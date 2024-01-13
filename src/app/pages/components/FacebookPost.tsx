"use client"
import {
    Box, CloseButton, Container, Flex, Image, Text, Link, Button,
    Tooltip, Divider, Grid, GridItem, forwardRef, Textarea, useBreakpointValue
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { FaEarthAsia } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { BiSolidHide } from "react-icons/bi";
import { MdDoneOutline } from "react-icons/md";
import Gallery from './ImageBox'


export default function Posts() {

    return (
        <Box background={'#F0F2F5'} minH='100vh' marginTop={'66px'} >
            {/* Facebook Post */}
            <SociablePost />
        </Box >
    )
}

const LikePeople: React.FC<LikePeopleProps> = ({ likePeople }) => {
    return (
        <>
            {
                likePeople && (
                    <Box>
                        <Text fontSize={'16px'} fontWeight={'600'} marginBottom={'8px'}>
                            Thích
                        </Text>
                        {likePeople.map((person) => (
                            <Text key={person.name}>
                                {person.name}
                            </Text>
                        ))}
                    </Box>
                )}
        </>
    )
}

export function SociablePost() {

    return (
        <>
            {PostData.map((data) => (
                <PostDetail
                    key={data.id}
                    groupName={data.groupName}
                    icon={data.icon}
                    name={data.name}
                    timePost={data.timePost}
                    status={data.status}
                    content={data.content}
                    imgList={data.imgList}
                    likePeople={data.likePeople}
                    comment={data.comment.length > 0 ? data.comment[0].content : ''}
                    commentPerson={data.comment.length > 0 ? data.comment[0].name : ''}
                />
            ))}
        </>
    )
}


// PostDetail component
export function PostDetail({
    groupName, icon, name, timePost, status, content, imgList, likePeople, comment, commentPerson
}: {
    groupName: any; icon: any; name: any; timePost: any; status: any; content: any; imgList: any; likePeople: any; comment: any; commentPerson: any;
}) {

    const [show, setShow] = useState(false)
    const showMoreComment = () => setShow(!show)
    const isSmallScreen = useBreakpointValue({ base: true, sm: false });

    return (
        <Box paddingTop='16px'>
            {/* Facebook Post */}
            <Container
                maxW='container.sm'
                minH={'600px'}
                background={'white'}
                padding={'0'}
                border={'solid 0px yellow'}
                borderRadius='8px'
                paddingBottom='12px'
                boxShadow="lg">
                {/* Post information ------------------------------------------------------------------------------------------- */}
                <Flex
                    justifyContent={'space-between'}
                    padding={'12px 16px 0px 16px'}
                    marginBottom={'12px'}>
                    <Flex align={'center'}>
                        <Link href='#'>
                            <Image boxSize='36px'
                                objectFit='cover'
                                src={icon}
                                alt='Dan Abramov'
                                rounded={'8px'}
                                marginRight={'8px'} />
                        </Link>
                        <Box>
                            <UnderlineLink
                                color='#050505'
                                fontWeight='600'>
                                {groupName}
                            </UnderlineLink>
                            <Flex
                                fontWeight='400'
                                fontSize='.8125rem'
                                color='#65676B'>
                                <UnderlineLink>{name}</UnderlineLink>
                                <Text as='span' margin={'0 6px'}>
                                    -
                                </Text>
                                <UnderlineLink>{timePost}</UnderlineLink>
                                <Flex
                                    align={'center'}
                                    padding='0 8px'>
                                    <Tooltip
                                        label={status ? status : 'status'}
                                        placement='top'>
                                        <Box display='block' margin='auto' cursor='pointer'>
                                            {status === 'Công khai' ? <FaEarthAsia fontSize='16px' /> : status === 'Đã hoàn thành' ? <MdDoneOutline fontSize='20px' color='#008000' /> : <BiSolidHide fontSize='20px' color='#ff0000' />}
                                        </Box>

                                    </Tooltip>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex
                        align={'center'} >
                        <Button
                            fontSize={'16px'}
                            padding={'0'}
                            borderRadius={'100px'}
                            margin={'0'}
                            background={"transparent"}
                            _hover={{
                                background: 'rgba(0, 0, 0, 0.06)'
                            }}>
                            <BsThreeDots />
                        </Button>
                        {/* <Box>
              <CloseButton />
            </Box> */}
                    </Flex>
                </Flex>
                {/* This is the content of the post  ------------------------------------------------------------------------------*/}
                <Box padding={'4px 16px 16px 16px'}>
                    <Text>{content}</Text>
                </Box>
                {/* This is the image list of the post ------------------------------------------------------------------------------ */}
                <Gallery images={imgList} />
                {/* <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent h='80%'>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image boxSize='100%' w='100%' inset='calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)' src={img} alt='Image of the post' />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal> */}

                {/* Like, comment status --------------------------------------------------------------------------------------- */}
                <Flex
                    align={'center'}
                    alignContent={'space-between'}
                    justifyContent={'space-between'}
                    margin={'0px 16px'}
                    padding={'10px 0'}>
                    <Tooltip
                        label={<LikePeople likePeople={likePeople} />}
                        placement='top'>
                        <Flex
                            color={'white'}
                            h={'18px'}
                            w={'18px'}
                            borderRadius={'100px'}
                            background={'#077BFF'}
                            fontSize='12px'
                            cursor={'pointer'}>
                            <Box
                                display='block' margin='auto' >
                                <AiFillLike />
                            </Box>
                        </Flex>
                    </Tooltip>
                    <Flex
                        fontWeight='400'
                        fontSize='.8125rem'
                        color='#65676B'>
                        <Tooltip
                            label={<LikePeople likePeople={likePeople} />}
                            placement='top'>
                            <UnderlineLink margin={'0 8px'} >
                                5 Bình luận
                            </UnderlineLink>
                        </Tooltip>
                        <Tooltip
                            label={<LikePeople likePeople={likePeople} />}
                            placement='top'>
                            <UnderlineLink margin={'0 8px'} >
                                5 lượt chia sẻ
                            </UnderlineLink>
                        </Tooltip>
                    </Flex>
                </Flex>
                {/* Button like, comment ... --------------------------------------------------------------------------------------*/}
                <Box
                    padding={'4px'}
                    margin={'0px 12px'}>
                    <Divider />
                    <Grid templateColumns='repeat(3, 1fr)'
                        color={'#65676B'}
                        textAlign={'center'}
                        lineHeight={'18px'}>
                        <GridItem
                            colSpan={1}
                            padding={isSmallScreen ? '0 6px' : '0 12px'}>
                            <Flex
                                padding={'6px 2px'}
                                background={'transparent'}
                                height={'32px'}
                                width={'100%'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                lineHeight={'32px'}
                                cursor={'pointer'}
                                userSelect={'none'}
                                borderRadius={'4px'}
                                fontSize={'.9375rem'}
                                fontWeight={'600'}
                                _hover={{
                                    background: '#F0F2F5',
                                }}
                                _active={{
                                    background: '#cfe2ff',
                                }}
                            >
                                <AiOutlineLike fontSize='24px' />
                                <Text padding={isSmallScreen ? '0 6px' : '0 12px'}>
                                    Thích
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            padding={isSmallScreen ? '0 6px' : '0 12px'}>
                            <Flex padding={'6px 2px'}
                                background={'transparent'}
                                height={'32px'}
                                width={'100%'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                lineHeight={'32px'}
                                cursor={'pointer'}
                                userSelect={'none'}
                                borderRadius={'4px'}
                                fontSize={'.9375rem'}
                                fontWeight={'600'}
                                _hover={{
                                    background: '#F0F2F5',
                                }}
                                _active={{
                                    background: '#cfe2ff',
                                }}
                            >
                                <FaRegComment fontSize='24px' />
                                <Text padding={isSmallScreen ? '0 6px' : '0 12px'}>
                                    Comment
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            padding={isSmallScreen ? '0' : '0 12px'}
                        >
                            <Flex
                                padding={'6px 2px'}
                                background={'transparent'}
                                height={'32px'}
                                width={'100%'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                lineHeight={'32px'}
                                cursor={'pointer'}
                                userSelect={'none'}
                                borderRadius={'4px'}
                                fontSize={'.9375rem'}
                                fontWeight={'600'}
                                _hover={{
                                    background: '#F0F2F5',
                                }}
                                _active={{
                                    background: '#cfe2ff',
                                }}
                            >
                                <FaShareSquare fontSize='24px' />
                                <Text padding={isSmallScreen ? '0 6px' : '0 12px'}>
                                    Share
                                </Text>
                            </Flex>
                        </GridItem>
                    </Grid>
                    <Divider />
                </Box>
                {/* This is the comment of the post  ------------------------------------------------------------------------------*/}
                <Box padding={'4px 16px 16px 16px'}>
                    <UnderlineLink
                        fontSize='.9375rem'
                        onClick={showMoreComment}
                        mt='1rem'
                        color='#65676B'>
                        {show ? 'Ẩn bớt' : 'Xem thêm'}  bình luận
                    </UnderlineLink>

                </Box>
                {/* Comment ------------------------------------------------------------------------------------------- */}
                <Flex
                    padding={'12px 16px 0px 16px'}
                    marginBottom={'12px'}>
                    <Link
                        h='36px'
                        w='36px'
                        href='#'
                        padding={'0'}
                        marginRight={'8px'}>
                        <Image
                            maxW='36px'
                            objectFit='contain'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov' rounded={'22px'}
                            padding={'0'} />
                    </Link>
                    <Box >
                        <Box position='relative'>
                            <Box
                                padding={'8px 12px'}
                                borderRadius={'8px'}
                                bg={'#E4E6EB'} >
                                <UnderlineLink
                                    fontSize='.8125rem'
                                    fontWeight={'600'}>
                                    {commentPerson}
                                </UnderlineLink>
                                <Text
                                    fontSize={'.9375r'}
                                    fontWeight={'400'}>
                                    {comment}
                                </Text>
                            </Box>
                            <Flex
                                right='2px'
                                bottom='-11px'
                                position='absolute'
                                alignItems={'center'}>
                                <Box
                                    borderTopLeftRadius={'100px'}
                                    borderBottomLeftRadius='100px'
                                    background={'white'}
                                    padding='2px'>
                                    <Flex
                                        color={'white'}
                                        h={'18px'}
                                        w={'18px'}
                                        fontSize='12px'
                                        cursor={'pointer'}
                                        background={'#0B7BFE'}
                                        borderRadius='100px'>
                                        <Box
                                            display='block'
                                            margin='auto' >
                                            <AiFillLike />
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box
                                    background={'white'}
                                    padding='2px'>
                                    <Flex
                                        color={'white'}
                                        h={'18px'}
                                        w={'18px'}
                                        fontSize='12px'
                                        cursor={'pointer'}
                                        background={'#FB4462'}
                                        borderRadius='100px'>
                                        <Box
                                            display='block'
                                            margin='auto' >
                                            <FaHeart />
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box
                                    borderTopRightRadius={'100px'}
                                    borderBottomRightRadius='100px'
                                    background={'white'}
                                    padding='2px'>
                                    <Flex
                                        h={'18px'}
                                        w={'18px'}
                                        fontSize='12px'
                                        cursor={'pointer'} >
                                        <Tooltip
                                            label={<LikePeople likePeople={likePeople} />}
                                            placement='top'>
                                            <UnderlineLink >42</UnderlineLink>
                                        </Tooltip>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Flex>
                            <Flex
                                fontWeight='400'
                                fontSize='.8125rem'
                                color='#65676B'
                                paddingTop='3px 4px 0px 4px'>
                                <UnderlineLink margin='0px 8px'>6 giờ</UnderlineLink>
                                <UnderlineLink margin='0px 8px' fontWeight='600'>Thích</UnderlineLink>
                                <UnderlineLink margin='0px 8px' fontWeight='600'>Phản hồi</UnderlineLink>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                {/* Input Comment ------------------------------------------------------------------------------------------- */}
                <Flex
                    padding={'12px 16px 0px 16px'}
                    marginBottom={'12px'}>
                    <Link
                        h='36px'
                        w='36px'
                        href='#'
                        padding={'0'}
                        marginRight={'8px'}>
                        <Image
                            maxW='36px'
                            objectFit='contain'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                            rounded={'22px'}
                            padding={'0'} />
                    </Link>
                    <Box
                        padding={'8px 12px'}
                        borderRadius={'8px'}
                        bg={'#E4E6EB'}
                        width={'100%'} >
                        <UnderlineLink
                            fontSize='.8125rem'
                            fontWeight={'600'}>
                            Aline Tran
                        </UnderlineLink>
                        <Box position='relative'>
                            <Box
                                as='button'
                                padding='8px'
                                color='pink'
                                position='absolute'
                                bottom='0'
                                right='0'
                                zIndex={'2'}>
                                <IoSend />
                            </Box>
                            <Textarea placeholder='Here is a sample placeholder' />
                        </Box>
                    </Box>
                </Flex>
            </Container >
        </Box >
    )
}

export const UnderlineLink = forwardRef(({ children, href, onClick, ...props }, ref) => {
    return (
        <Link ref={ref} href={href} {...props} onClick={onClick}
            userSelect={'none'}>
            {children}
        </Link>
    );
});

interface LikePeopleProps {
    likePeople: LikePerson[];
}

interface LikePerson {
    name: string;
}

interface Comment {
    name: string;
    content: string;
}

interface imgList {
    url: string;
    content?: string;
}

interface PostData {
    id: number;
    groupName: string;
    icon: string;
    name: string;
    timePost: string;
    status?: string;
    content: string;
    imgList: imgList[];
    likePeople: LikePerson[];
    comment: Comment[];
}

const PostData: PostData[] = [
    {
        id: 1,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '11:53 AM - 7 tháng 12',
        status: 'Đã hoàn thành',
        content: 'Thanh long trong mì cũng hay nhưng :',
        imgList: [
            {
                url: 'https://inkythuatso.com/uploads/thumbnails/800/2023/02/meme-meo-kho-hieu-cute-1-03-12-57-40.jpg',
                content: 'Enthusiastically leverage others effective users via client-centric portals. Energistically promote principle-centered portals vis-a-vis virtual strategic theme areas. Assertively streamline premium alignments through focused total linkage'
            },
            {
                url: 'https://mcdn.coolmate.me/image/March2023/meme-meo-8.jpg',
            },
            {
                url: 'https://lh3.googleusercontent.com/l1PbMRIFRS4BcOXSyUjbSsi3OKJOdp6ysy0G5w2O-jNCHcRMnWRDXSWNee0MHifq9IMVqLxo23K3A0iMh8UutYMjOUpwyrsxnS-VpO7S=rp-w1080-nu',
            },
            {
                url: 'https://bizweb.dktcdn.net/100/438/408/files/meme-het-cuu-yody-vn-6.jpg?v=1695455595250',
            },
            {
                url: 'https://sportshub.cbsistatic.com/i/2023/05/19/d5291db7-27db-4569-8b39-b458030968bf/spider-man-across-the-spider-verse-posters-new.jpg',
            },
            {
                url: 'https://play-lh.googleusercontent.com/phUhJzNvyZTpbUhQmN3oaj0bHL0pQ_tOeBLjlF_l9z8qK7zogZbYO0ttd3jTGTHdAQ',
            },
            {
                url: 'https://img.freepik.com/premium-photo/hipster-cute-cat-funny-art-illustration-anthropomorphic-cats_739548-5508.jpg',
            },
            {
                url: 'https://www.greenscene.co.id/wp-content/uploads/2023/05/spider-cat-1.jpg',
            },
            {
                url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/marvels-spider-man-miles-morales-2110757.jpg?tf=3840x',
            },
            {
                url: 'https://regionps.com/wp-content/uploads/2020/10/Spider-Man-Miles-Morales-Cat_10-14-20.jpg',
            },

        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
            {
                name: 'nguyen Van C',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
    {
        id: 2,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '7 tháng 12 lúc 11:53',
        content: 'Thanh long trong mì cũng hay nhưng :',
        status: 'Tạm ẩn',
        imgList: [
            {
                url: 'https://inkythuatso.com/uploads/thumbnails/800/2023/02/meme-meo-kho-hieu-cute-1-03-12-57-40.jpg',
            },
            {
                url: 'https://mcdn.coolmate.me/image/March2023/meme-meo-8.jpg',
            },
        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
            {
                name: 'nguyen Van C',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
    {
        id: 3,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '11:53 AM - 7 tháng 12',
        content: 'Thanh long trong mì cũng hay nhưng :',
        imgList: [
            {
                url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/marvels-spider-man-miles-morales-2110757.jpg?tf=3840x',
            },
            {
                url: 'https://inkythuatso.com/uploads/thumbnails/800/2023/02/meme-meo-kho-hieu-cute-1-03-12-57-40.jpg',
            },
            {
                url: 'https://mcdn.coolmate.me/image/March2023/meme-meo-8.jpg',
            },
            {
                url: 'https://lh3.googleusercontent.com/l1PbMRIFRS4BcOXSyUjbSsi3OKJOdp6ysy0G5w2O-jNCHcRMnWRDXSWNee0MHifq9IMVqLxo23K3A0iMh8UutYMjOUpwyrsxnS-VpO7S=rp-w1080-nu',
            },
        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
    {
        id: 4,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '11:53 AM - 7 tháng 12',
        content: 'Thanh long trong mì cũng hay nhưng :',
        imgList: [
            {
                url: 'https://inkythuatso.com/uploads/thumbnails/800/2023/02/meme-meo-kho-hieu-cute-1-03-12-57-40.jpg',
            },
            {
                url: 'https://mcdn.coolmate.me/image/March2023/meme-meo-8.jpg',
            },
            {
                url: 'https://lh3.googleusercontent.com/l1PbMRIFRS4BcOXSyUjbSsi3OKJOdp6ysy0G5w2O-jNCHcRMnWRDXSWNee0MHifq9IMVqLxo23K3A0iMh8UutYMjOUpwyrsxnS-VpO7S=rp-w1080-nu',
            },
        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
    {
        id: 5,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '11:53 AM - 7 tháng 12',
        content: 'Thanh long trong mì cũng hay nhưng :',
        imgList: [
            {
                url: 'https://lh3.googleusercontent.com/l1PbMRIFRS4BcOXSyUjbSsi3OKJOdp6ysy0G5w2O-jNCHcRMnWRDXSWNee0MHifq9IMVqLxo23K3A0iMh8UutYMjOUpwyrsxnS-VpO7S=rp-w1080-nu',
            },
        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
    {
        id: 6,
        groupName: 'Testing VN Jobs',
        icon: 'https://bit.ly/dan-abramov',
        name: 'Hai Thanh',
        timePost: '11:53 AM - 7 tháng 12',
        status: 'Công khai',
        content: 'Thanh long trong mì cũng hay nhưng :',
        imgList: [
            {
                url: 'https://inkythuatso.com/uploads/thumbnails/800/2023/01/2-anh-meme-meo-bua-inkythuatso-17-10-34-56.jpg',
            },
        ],
        likePeople: [
            {
                name: 'nguyen Van A',
            },
            {
                name: 'nguyen Van B',
            },
        ],
        comment: [
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            },
            {
                name: 'Aline Tran',
                content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
            }
        ]
    },
]