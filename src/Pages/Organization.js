import {
    Box,
    chakra,
    Flex,
    Text,
    Divider,
    Stack,
    Heading,
    Button,
    Avatar,
} from '@chakra-ui/react';


import { HEAD_MEMBERS, ASSISTANTS } from '../Components/info_all_members';
import { GROUP_ITEMS } from '../Components/info_all_groups';
import { MemberCard } from '../Components/MemberCard';
import { AssistantCard } from '../Components/AssistantCard';

const Organization = () => {
    return (
        <Box
            bg="#edf3f8" // 背景主題色：淺藍
            p={10}
            w="full"
        >
            <chakra.h1
                py={5}
                fontSize={40}
                fontWeight={'bold'}
                color={'gray.700'}>
                組織成員
            </chakra.h1>
            <Divider />
            {HEAD_MEMBERS.map((cardInfo, index) => {
                return (
                    <>
                        <Box
                            mt={14}
                            borderRadius='md'
                            backgroundColor='#1E646E' // 職稱 title 深綠色
                        >
                            {index === 0 ? <Text
                                fontWeight='bold'
                                fontSize='3xl'
                                color='white'>
                                主任
                            </Text> :
                                (index === 1 ? <Text
                                    fontWeight='bold'
                                    fontSize='3xl'
                                    color='white'>
                                    副主任
                                </Text> : <></>)}
                        </Box>
                        <MemberCard {...cardInfo} index={index} group={'Head'} />
                    </>
                )
            })}

            <chakra.h2
                py={5}
                mt={'8'}
                fontSize={35}
                fontWeight={'bold'}
                color={'gray.700'}>
                研究群
            </chakra.h2>
            <Divider />
            {/* RWD: md 以上 */}
            <Flex
                mt={10}
                justifyContent={'space-around'}
                display={{ base: 'none', md: 'flex' }}>
                {GROUP_ITEMS.map((groupItem) => {
                    return (
                        <Box
                            width={1 / 5}
                            bg={'white'}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Flex
                                justify={'center'}
                                mt={5}>
                                <Avatar
                                    bgColor={'white'}
                                    size={'xl'}
                                    src={
                                        `${groupItem.route}-logo.svg`
                                    }
                                    alt={`${groupItem.route}-logo`}
                                />
                            </Flex>
                            <Box p={6}>
                                <Stack spacing={0} align={'center'} >
                                    <Heading 
                                    color={'#396060'} 
                                    fontSize={'2xl'} 
                                    fontWeight={'bold'} 
                                    >
                                        {groupItem.name}
                                    </Heading>
                                </Stack>
                                <Button
                                    onClick={() => { window.location.href = groupItem.route }}
                                    w={'full'}
                                    mt={8}
                                    bg={'#151f21'}
                                    color={'white'}
                                    rounded={'md'}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}>
                                        了解更多 >
                                </Button>
                            </Box>
                        </Box>
                    )
                })}
            </Flex>
            {/* RWD: md 以下 */}
            <Box
                justifyContent={'space-around'}
                mt={10}
                display={{ md: 'none' }}>
                {GROUP_ITEMS.map((groupItem) => {
                    return (
                        <Box
                            bg={'white'}
                            boxShadow={'2xl'}
                            mt={'5'}
                            rounded={'md'}
                            overflow={'hidden'}>
                            <Flex justify={'center'} mt={5}>
                                <Avatar
                                    bgColor={'white'}
                                    size={'xl'}
                                    src={
                                        `${groupItem.route}-logo.svg`
                                    }
                                    alt={`${groupItem.route}-logo`}
                                />
                            </Flex>
                            <Box p={6}>
                                <Stack spacing={0} align={'center'} >
                                    <Heading color={'#396060'} fontSize={'2xl'} fontWeight={'bold'} fontFamily={'body'}>
                                        {groupItem.name}
                                    </Heading>
                                </Stack>
                                <Button
                                    onClick={() => { window.location.href = groupItem.route }}
                                    w={'full'}
                                    mt={8}
                                    bg={'#151f21'}
                                    color={'white'}
                                    rounded={'md'}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}>
                                        了解更多 >
                                </Button>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <chakra.h2
                py={5}
                fontSize={35}
                fontWeight={'bold'}
                mt={'8'}
                color={'gray.700'}>
                業務團隊
            </chakra.h2>
            <Divider />
            {ASSISTANTS.map((cardInfo)=>(<AssistantCard {...cardInfo} />))}
        </Box>
    )
}
export default Organization;