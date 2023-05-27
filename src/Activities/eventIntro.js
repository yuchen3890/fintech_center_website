import {
    Box,
    chakra,
    Flex,
    Link,
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
                <Box
                    textAlign={'left'}>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={4}
                    >
                        本論壇將於 {activity.date} 在{activity.place}舉行，歡迎大家踴躍報名參加。<br/>
                        報名連結：<Link href='https://forms.gle/wwLXyVK1pWLYCgtUA' isExternal>
                        https://forms.gle/wwLXyVK1pWLYCgtUA </Link>
                    </chakra.p>
                </Box>
                <Image src={`../activity/${activity.fileName}`} alt='NONE'></Image>
            </Box>
            
        </Flex>
    )
}
export default EventIntro;