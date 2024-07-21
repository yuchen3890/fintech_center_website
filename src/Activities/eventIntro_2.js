import {
    Box,
    chakra,
    Flex,
    Image,
    Divider,
    AbsoluteCenter,
    Link,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Text,
} from '@chakra-ui/react';


const EventIntro_2 = ({ activity }) => {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width="100%" margin={'auto'}>
                <chakra.h1
                    fontSize={40}
                    fontWeight={'bold'}
                    color={'gray.700'}
                    pb={10}
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
                <Image src={`../activity/${activity.pic}`} alt='NONE'></Image>
                <Box position='relative' padding='10'>
                    <Divider  borderColor={'gray.400'}/>
                    <AbsoluteCenter bg='white' px='4'>
                        <chakra.h2
                            py={3}
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
                            活動資訊
                        </chakra.h2>
                    </AbsoluteCenter>
                </Box>
                <Box
                    textAlign={'left'}>
                    
                    
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        本活動自113年7月15日起於北中南舉辦6場<Text as='b'>第9屆「經濟部國家產業創新獎」參選說明會</Text>，闡釋獎項<Text as="u">徵選內容、作業流程、與申請書填寫</Text>等相關事宜，歡迎各界人士踴躍報名參加。
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        <Table bg="#edf3f8" >
                        <Thead bg="#437070" h="60px">
                            <Tr>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    場次
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    日期
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    時間
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    地區
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    會議地點
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {activity.date2.map((_, i) => {
                                    if(i % 2 === 1){
                                        return (
                                            <Tr bg="#e6e8ed">
                                                <Td>{i+1}</Td>
                                                <Td>{activity.date2[i]}</Td>
                                                <Td>{activity.time[i]}</Td>
                                                <Td>{activity.area[i]}</Td>
                                                <Td>{activity.place[i]}</Td>
                                            </Tr>
                                        )
                                    }
                                    return(
                                        <Tr>
                                            <Td>{i+1}</Td>
                                            <Td>{activity.date2[i]}</Td>
                                            <Td>{activity.time[i]}</Td>
                                            <Td>{activity.area[i]}</Td>
                                            <Td>{activity.place[i]}</Td>
                                        </Tr>
                                    )})
                            }
                        </Tbody>
                        </Table>
                        <chakra.p
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontSize={'15px'}
                            pb={2}
                            pt={2}
                        >※主辦單位保留場次內容調整之權利
                        </chakra.p>
                    </chakra.p>
                    
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'15px'}
                        pb={2}
                        pt={2}
                    >本活動可至獎項官網（<Link color="#437070">www.niia.tw</Link>）、或掃QR code線上報名，或將下方報名表填妥後傳真至（02-2325-6816）。
                    </chakra.p>
                    <Image src={`../activity/${activity.QRcode}`} alt='NONE'></Image>
                    {activity.fileName.map((fn) => {
                        return(
                            <chakra.p
                                fontFamily={'Inter'}
                                fontWeight={'medium'}
                                fontSize={'15px'}
                                pb={2}
                                pt={2}
                            >
                                <Link color="#437070" href={require(`../../public/activity/${fn}`)} download>{fn}</Link>

                            </chakra.p>
                        )
                    })}
                </Box>                
            </Box>
        </Flex>
    )
}
export default EventIntro_2;