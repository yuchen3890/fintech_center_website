import {
    Box,
    chakra,
    Flex,
    Image
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