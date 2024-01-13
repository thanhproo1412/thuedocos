// components/Gallery.js
import { Box, Grid, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useBreakpointValue, GridItem, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';


const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  const templateAreas =
    isSmallScreen || images.length === 1
      ? `"area1"`
      : images.length === 3
        ? `"area1 area2 area3"`
        : images.length === 4
          ? `"area1 area2" "area3 area4"`
          : `"area1 area1 area1 area2 area2 area2" "area3 area3 area4 area4 area5 area5"`;


  return (
    <Box>
      <Grid
        templateAreas={templateAreas}
        gap={4}>
        {images.slice(0, isSmallScreen ? 1 : images.length === 3 ? 3 : images.length === 4 ? 4 : 5).map((image, index) => (
          <GridItem
            key={index}
            onClick={() => openModal(index)}
            position="relative"
            area={`area${index + 1}`}
          >

            <Image
              cursor='pointer'
              src={image.url}
              alt={`Image ${index}`}
              objectFit="cover"
              width="100%"
              height="100%"
              userSelect='none'
            />
            {index === 4 && images.length > 5 && (
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                background="rgba(0, 0, 0, 0.7)"
                color="white"
                fontSize="2rem"
                onClick={() => openModal(5)} // Open modal with the 6th image when clicked
              >
                <FaPlus /> {`${images.length - 4}`}
              </Box>
            )}
          </GridItem>
        ))}
      </Grid>


      <Modal isOpen={selectedImageIndex !== null} onClose={closeModal} size="90%">
        <ModalOverlay />
        <ModalContent height="85vh" minWidth="50%" maxWidth="80%">
          <ModalCloseButton position="absolute" right="8px" top="8px" />
          <ModalBody padding='0' h='100%'
          >
            {selectedImageIndex !== null && (
              isSmallScreen ?
                <Box>
                  <Box w='100%'
                    overflowY="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    height="100%"
                    position="relative"
                    background='black'
                  >
                    <Box
                      as={FaChevronLeft}
                      onClick={goToPrevImage}
                      position="absolute"
                      left="12px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      fontSize="1.8rem"
                      color="white"
                      borderRadius="50%"
                      backgroundColor="rgb(255 255 255 / 50%)"
                      padding="16px"
                      width="48px"
                      height="48px"
                      transition="background-color 0.3s"
                      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.884)", color: 'blue' }}
                    />
                    <Image
                      src={images[selectedImageIndex]?.url}
                      alt={`Selected Image`}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                      userSelect="none"
                    />
                    <Box
                      as={FaChevronRight}
                      onClick={goToNextImage}
                      position="absolute"
                      right="12px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      fontSize="1.8rem"
                      color="white"
                      borderRadius="50%"
                      backgroundColor="rgb(255 255 255 / 50%)"
                      padding="16px"
                      width="48px"
                      height="48px"
                      transition="background-color 0.3s"
                      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.884)", color: 'blue' }}
                    />
                    <Box
                      position="absolute"
                      top="32px"
                      cursor="pointer"
                      color="white"
                      padding="6px 12px"
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                      transition="background-color 0.3s, transform 0.3s"
                      _hover={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        transform: "scale(1.1)",
                      }}
                      transform="translateY(-50%)"
                      userSelect="none"
                    >
                      Image {selectedImageIndex + 1} of {images.length}
                    </Box>
                  </Box>
                  <Box >
                    <ContentBox title='Mô tả' content={images[selectedImageIndex]?.content} />
                  </Box>
                </Box>
                :
                <Flex h="100%">
                  <Box w='100%'
                    overflowY="auto"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    height="100%"
                    position="relative"
                    background='black'
                  >
                    <Box
                      as={FaChevronLeft}
                      onClick={goToPrevImage}
                      position="absolute"
                      left="12px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      fontSize="1.8rem"
                      color="white"
                      borderRadius="50%"
                      backgroundColor="rgb(255 255 255 / 50%)"
                      padding="16px"
                      width="48px"
                      height="48px"
                      transition="background-color 0.3s"
                      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.884)", color: 'blue' }}
                    />
                    <Image
                      src={images[selectedImageIndex]?.url}
                      alt={`Selected Image`}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                      userSelect="none"
                    />
                    <Box
                      as={FaChevronRight}
                      onClick={goToNextImage}
                      position="absolute"
                      right="12px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      fontSize="1.8rem"
                      color="white"
                      borderRadius="50%"
                      backgroundColor="rgb(255 255 255 / 50%)"
                      padding="16px"
                      width="48px"
                      height="48px"
                      transition="background-color 0.3s"
                      _hover={{ backgroundColor: "rgba(255, 255, 255, 0.884)", color: 'blue' }}
                    />
                    <Box
                      position="absolute"
                      top="32px"
                      cursor="pointer"
                      color="white"
                      padding="6px 12px"
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                      transition="background-color 0.3s, transform 0.3s"
                      _hover={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        transform: "scale(1.1)",
                      }}
                      transform="translateY(-50%)"
                      userSelect="none"
                    >
                      Image {selectedImageIndex + 1} of {images.length}
                    </Box>
                  </Box>
                  <Box w="360px">
                    <ContentBox title='Mô tả' content={images[selectedImageIndex]?.content} />
                  </Box>
                </Flex>
            )}

          </ModalBody>
        </ModalContent>
      </Modal>
    </Box >
  );
};

export default Gallery;


interface ContentBoxProps {
  title: string;
  content: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content }) => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      bg="white"
      color="gray.800"
      transition="box-shadow 0.3s"
      _hover={{ boxShadow: "xl" }}
    >
      <Box fontWeight='400' fontSize='20px' marginBottom='20px'>
        {title}
      </Box>
      <Text
        lineHeight='25px'>
        {content}
      </Text>
    </Box>
  );
};

