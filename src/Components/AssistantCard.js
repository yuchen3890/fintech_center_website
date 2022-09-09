import {
    Box,
    chakra,
    Flex,
    Image,
    Tag,
    Text,
    VStack,
    HStack,
} from '@chakra-ui/react';

interface AssistantCardProps {
    name_ch: string,
    name_en: string,
    title: string,
    email: string,
    phone: string,
    avatar: string,
}

function AssistantCard(props: AssistantCardProps) {
    const { name_ch, name_en, title, email, phone, avatar } = props;
    return (
        <>
            {/* RWD: md 以上 */}
            <Flex
                mx="auto"
                w="90%"
                mt={12}
                bg="white"
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                display={{ base: 'none', md: 'flex' }}
            >
                <Flex
                    w={1 / 3}
                >
                    <Image width='70%' src={avatar} alt='' />
                </Flex>

                <Box
                    w={2 / 3}
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
                        {name_ch}
                    </chakra.h1>
                    <chakra.h2
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.800"
                    >
                        {name_en}
                    </chakra.h2>

                    <chakra.p
                        mt={3}
                        fontSize="sm"
                        color="gray.600"
                    >

                        <HStack>
                            <Tag size={'lg'} variant='solid' colorScheme='teal'>
                                職稱
                            </Tag>
                            <Text fontSize='lg'>{title}</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Tag size={'lg'} variant='solid' colorScheme='teal'>
                                信箱
                            </Tag>
                            <Text fontSize='lg'>{email}</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Tag size={'lg'} variant='solid' colorScheme='teal'>
                                電話
                            </Tag>
                            <Text fontSize='lg'>{phone}</Text>
                        </HStack>
                    </chakra.p>
                </Box>
            </Flex>
            
            {/* RWD: md 以下 */}
            <VStack
                mx="auto"
                mt={12}
                bg="white"
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                display={{ md: 'none' }}
            >
                <Image width='100%' src={avatar} alt='' />
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
                        _dark={{
                            color: "white",
                        }}
                    >
                        {name_ch}
                    </chakra.h1>
                    <chakra.h2
                        fontSize="xl"
                        fontWeight="bold"
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                    >
                        {name_en}
                    </chakra.h2>

                    <chakra.p
                        mt={3}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                            color: "gray.400",
                        }}
                    >
                        <HStack>
                            <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                職稱
                            </Tag>
                            <Text fontSize='lg'>{title}</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                信箱
                            </Tag>
                            <Text fontSize='lg'>{email}</Text>
                        </HStack>
                        <HStack mt={2}>
                            <Tag size={'lg'} key={'lg'} variant='solid' colorScheme='teal'>
                                電話
                            </Tag>
                            <Text fontSize='lg'>{phone}</Text>
                        </HStack>
                    </chakra.p>
                </Box>
            </VStack>
        </>
    );
}
export { AssistantCard };