import { useLocation } from 'react-router-dom';
import { 
    HEAD_MEMBERS, 
    FINTECH_MEMBERS, 
    FINBUSS_MEMBERS, 
    FINLAW_MEMBERS, 
    INDUSTRY_MEMBERS 
} from '../Components/info_all_members';

import {
    Flex,
    chakra,
    Box,
    Text,
    Tag,
    Link,
    HStack,
    VStack,
    Image,
} from '@chakra-ui/react';

const PersonalPage = () => {
    const location = useLocation();
    const { index, group } = location.state;

    let person;
    if (group === 'Head') {
        person = HEAD_MEMBERS[index];
    }
    else if (group === 'FinTech') {
        person = FINTECH_MEMBERS[index];
    }
    else if (group === 'FinBuss') {
        person = FINBUSS_MEMBERS[index];
    }
    else if (group === 'FinLaw') {
        person = FINLAW_MEMBERS[index];
    }
    else if (group === 'Industry') {
        person = INDUSTRY_MEMBERS[index];
    }

    return (
        <Box
            bg="#edf3f8"
            p={10}
            w="auto"
        >
            <Box
                shadow="xl"
                bg="white"
                mx="auto"
            >
                {/* RWD: md 以上版本 */}
                <Flex
                    display={{ base: 'none', md: 'flex' }}
                    p={10}
                >
                    <Flex
                        w={1 / 3}
                    >
                        <Image width='70%' src={person.avatar} alt='' />
                    </Flex>

                    <Box
                        w={2 / 3}
                        padding={10}
                        p={{
                            textAlign: 'left',
                            overflowX: 'overlay',
                        }}
                    >
                        <chakra.h1
                            fontSize="3xl"
                            fontWeight="bold"
                            color="gray.800"
                        >
                            {person.name_ch}
                        </chakra.h1>
                        <chakra.h2
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                        >
                            {person.name_en}
                        </chakra.h2>

                        <chakra.p
                            mt={3}
                            fontSize="sm"
                            color="gray.600"
                        >
                            <HStack>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    職稱
                                </Tag>
                                <Text fontSize='lg'>{person.title}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    信箱
                                </Tag>
                                <Text fontSize='lg'>{person.email}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    研究專長
                                </Tag>
                                <Text fontSize='lg'>{person.expertise}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    個人網站
                                </Tag>
                                <Link fontSize='lg' href={person.website} isExternal>{person.website}</Link>
                            </HStack>
                        </chakra.p>
                    </Box>
                </Flex>
                {/* RWD: md 以下版本 */}
                <VStack
                    bg="white"
                    overflow="hidden"
                    display={{ md: 'none' }}
                >
                    <Image width='100%' src={person.avatar} alt='' />
                    <Box
                        p={{
                            textAlign: 'left',
                            overflowX: 'overlay',
                        }}
                        padding='3'
                    >
                        <chakra.h1
                            fontSize="2xl"
                            fontWeight="bold"
                            color="gray.800"
                        >
                            {person.name_ch}
                        </chakra.h1>
                        <chakra.h2
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                        >
                            {person.name_en}
                        </chakra.h2>

                        <chakra.p
                            mt={3}
                            fontSize="sm"
                            color="gray.600"
                        >
                            <HStack>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    職稱
                                </Tag>
                                <Text fontSize='lg'>{person.title}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    信箱
                                </Tag>
                                <Text fontSize='lg'>{person.email}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    研究專長
                                </Tag>
                                <Text fontSize='lg'>{person.expertise}</Text>
                            </HStack>
                            <HStack mt={2}>
                                <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                    個人網站
                                </Tag>
                                <Link fontSize='lg' href={person.website} isExternal>{person.website}</Link>
                            </HStack>
                        </chakra.p>
                    </Box>
                </VStack>
                
                <chakra.p
                    mb={6}
                    p={10}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                    }}
                    textAlign={{
                        base: "center",
                        sm: "left",
                    }}
                    color="gray.600"
                >
                    {person.bio}
                </chakra.p>
            </Box>
        </Box>
    );
}
export default PersonalPage;
