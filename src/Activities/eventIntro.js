import {
    Box,
    chakra,
    Flex,
    Image,
    Divider,
    AbsoluteCenter
} from '@chakra-ui/react';


const EventIntro = ({ activity }) => {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width="100%" margin={'auto'}>
                <chakra.h1
                    py={5}
                    fontSize={40}
                    fontWeight={'bold'}
                    color={'gray.700'}
                    >
                    {activity.title}
                </chakra.h1>
            </Box>
            <Box
                boxShadow={'lg'}
                alignItem={'center'}
                width={'100%'}
                rounded={'xl'}
                p={10}
                position={'relative'}
                bg={'white'}
                _after={{
                    content: '""',
                    position: 'absolute',
                    height: '50px',
                    width: '50px',
                    left: '25px',
                    top: '-20px',
                    backgroundSize: 'cover',
                    backgroundImage: "url('/quotation_marks.png')",
                }}>
                <Box position='relative' padding='10'>
                    <Divider  borderColor={'gray.400'}/>
                    <AbsoluteCenter bg='white' px='4'>
                        <chakra.h2
                            py={5}
                            fontSize={35}
                            fontWeight={'bold'}
                            color={'gray.700'}
                            >
                            活動簡介
                        </chakra.h2>
                    </AbsoluteCenter>
                </Box>
                <Box
                    textAlign={'left'}>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        {activity.intro}
                    </chakra.p>
                </Box>
                <Box position='relative' padding='10' mb='2'>
                    <Divider  borderColor={'gray.400'}/>
                    <AbsoluteCenter bg='white' px='4'>
                        <chakra.h2
                            py={5}
                            fontSize={35}
                            fontWeight={'bold'}
                            color={'gray.700'}
                            >
                            活動議程
                        </chakra.h2>
                    </AbsoluteCenter>
                </Box>
                <Image src={`../activity/${activity.fileName}`} alt='NONE'></Image>
                <Box position='relative' padding='10' mt='8'>
                    <Divider  borderColor={'gray.400'}/>
                    <AbsoluteCenter bg='white' px='4'>
                        <chakra.h2
                            py={5}
                            fontSize={35}
                            fontWeight={'bold'}
                            color={'gray.700'}
                            >
                            活動亮點總覽
                        </chakra.h2>
                    </AbsoluteCenter>
                </Box>
                <Box textAlign={'left'}>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        {activity.paragraph[0]}
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        {activity.paragraph[1]}
                    </chakra.p>
                    <Flex
                        pb={4}>
                        <Box>
                            <Image src={`../activity/${activity.pics[0]}`} alt='NONE'></Image>
                        </Box>
                        <Box>
                            <Image src={`../activity/${activity.pics[1]}`} alt='NONE'></Image>
                        </Box>
                    </Flex>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        {activity.paragraph[2]}
                    </chakra.p>
                    <Image pb={4} src={`../activity/${activity.pics[2]}`} alt='NONE'></Image>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        {activity.paragraph[3]}
                    </chakra.p>
                    <Image pb={4} src={`../activity/${activity.pics[3]}`} alt='NONE'></Image>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'18px'}
                    >
                        {activity.paragraph[4]} <br/>
                        {activity.paragraph[5]}
                    </chakra.p>
                </Box>

            </Box>

        </Flex>
    )
}
export default EventIntro;