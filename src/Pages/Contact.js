import {
    Flex,
    Heading,
    chakra,
    Box,
    Stack,
    Divider,
    Text,
    VStack,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai'

const Contact = () => {

    const contact_info = [{
        name: '地址',
        content: `台北市羅斯福路四段一號 國立台灣大學 資訊工程系 542室`
    },
    {
        name: '信箱',
        content: 'EMAIL：yiying@ntu.edu.tw'
    },
    {
        name: '電話',
        content: 'TEL：(02)3366-4888 #542'
    }]

    return (
        <Box
            bg="#edf3f8"
            p={20}
        >
            <chakra.h2
                py={5}
                fontSize={35}
                fontWeight={'bold'}
                mt={'8'}
                color={'gray'}>
                聯絡我們
            </chakra.h2>
            <Divider />
            {/* RWD: md 以上版本 */}
            <Flex
                justifyContent={'space-around'}
                mt={10}
                display={{ base: 'none', md: 'flex' }}
            >
                {contact_info.map((item) => {
                    return (
                        <Box
                            bg={'white'}
                            boxShadow={'2xl'}
                            width={1 / 5}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Flex justify={'center'} mt={5}>
                                {item.name === '信箱' ? (<EmailIcon w={10} h={10} />) : (item.name === '地址' ? <Icon as={AiFillHome} w={10} h={10} /> : <PhoneIcon w={10} h={10} />)}
                            </Flex>
                            <Box p={6}>
                                <Stack spacing={0} align={'center'} >
                                    <Heading fontSize={'2xl'} fontWeight={'bold'} fontFamily={'body'}>
                                        {item.name}
                                    </Heading>
                                </Stack>
                                <Text mt={3}>{item.content}</Text>
                            </Box>
                        </Box>
                    )
                })}
            </Flex>
            {/* RWD: md 以下版本 */}
            <VStack
                display={{ md: 'none' }}
            >
                {contact_info.map((item) => {
                    return (
                        <Box
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Flex justify={'space-around'} alignItems={'center'} >
                                {item.name === '信箱' ? (<EmailIcon w={10} h={'100%'} />) : (item.name === '地址' ? <Icon as={AiFillHome} w={10} h={10} /> : <PhoneIcon w={10} h={10} />)}
                                <Box p={6} w={2 / 3}>
                                    <Stack spacing={0} align={'center'} >
                                        <Heading fontSize={'2xl'} fontWeight={'bold'} fontFamily={'body'}>
                                            {item.name}
                                        </Heading>
                                    </Stack>
                                    <Text mt={3}>{item.content}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    )
                })}
            </VStack>
        </Box>
    )
}
export default Contact;