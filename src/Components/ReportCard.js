import {
    Box,
    chakra,
    Text,
    AspectRatio,
    useDisclosure,
    Container,
    Center,
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
  } from '@chakra-ui/react'

interface ReportCardProps {
    date: string,
    time: string,
    title: string,
    pic: string,
    file: string,
}

function ManualClose(props: ReportCardProps) {
    const { date, time, title, pic, file, pic_ref } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Container maxW={'-moz-max-content'} p={0}>
        <Box
            position="relative"
            h={80}
            bgImage={`../report/${pic}`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            left={0}
            right={0}
            width="100vw"
            maxWidth="100%"
            onClick={onOpen}
            cursor="pointer"
        >
            <Box
            position="absolute"
            top={0}
            left={0}
            w="full"
            h="full"
            bg="black"
            opacity={0.4}
            bgBlendMode="multiply"
            />
            <Center
            position="relative"
            zIndex={1}
            textAlign="center"
            display="flex"
            justifyContent="center"
            minH={80}
            >
            <chakra.p fontSize="1xl" color='gray.200'>
                <Text as="b" fontSize="4xl">
                    {title}
                </Text>
                <br/>
                {date}
            </chakra.p>
            
            </Center>
        </Box>
        </Container>
        <Text fontSize='xs'>圖片來源: {pic_ref}</Text>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}_{time}</ModalHeader>
            <ModalCloseButton />
            <AspectRatio maxW='100%' ratio={1}>
                <iframe
                    title='report'
                    src={`../report/${file}`}
                    allowFullScreen
                />
            </AspectRatio>
          </ModalContent>
        </Modal>
      </>
    )
  }

function ReportCard(props: ReportCardProps) {
    
    return (
        <ManualClose {...props}/>
    );
}
export { ReportCard };