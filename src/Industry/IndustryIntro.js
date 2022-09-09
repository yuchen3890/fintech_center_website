import {
    Box,
    chakra,
    Flex,
    useColorModeValue,
    OrderedList,
    ListItem,
} from '@chakra-ui/react';

const IndustryIntro = () => {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <chakra.h3
                    fontWeight={'bold'}
                    fontSize={32}
                    textTransform={'uppercase'}
                    color={'blue.400'}>
                    簡介
                </chakra.h3>
                <chakra.h1
                    py={5}
                    fontSize={40}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.700', 'gray.50')}>
                    產學合作組
                </chakra.h1>
            </Box>
            <Flex
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
                        產學合作組的目標為媒合技術開發及產業需求，希望將大學及研究單位的研發方向逐步導向產業需求，同時促進技術端與產業端的對話和合作，降低彼此之間的差距，最後能把研發的能量確實轉化成產業和經濟的實質力量。因此本組將持續推動金融科技的產學合作，包含下列各項技術的在地化與產業化：
                        <OrderedList>
                            <ListItem>機器學習與人工智慧</ListItem>
                            <ListItem>生物認證（指紋、人臉、聲紋等）</ListItem>
                            <ListItem>區塊鏈與密碼貨幣</ListItem>
                            <ListItem>大數據分析</ListItem>
                            <ListItem>自然語言處理</ListItem>
                            <ListItem>影像辨識</ListItem>
                        </OrderedList>
                    </chakra.p>
                </Box>
            </Flex>
        </Flex>
    )
}
export default IndustryIntro;