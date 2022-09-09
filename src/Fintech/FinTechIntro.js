import {
    Box,
    chakra,
    Flex,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

const FinTechIntro = () => {
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
                    color={'gray.700'}>
                    金融科技組
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
                        本組的目標為開發各種前瞻理論與方法，並將這些理論與方法實際用於金融科技，以促進經濟發展並提升生活水平。目前本組規畫的研發方向包含：
                        <UnorderedList>
                            <ListItem>區塊鏈、數位貨幣、密碼學、資訊安全</ListItem>
                            <ListItem>深度學習、機器學習、人工智慧</ListItem>
                            <ListItem>精準行銷、精準推薦</ListItem>
                            <ListItem>工廠自動化、製造自動化</ListItem>
                            <ListItem>大數據分析及各項應用</ListItem>
                        </UnorderedList>
                    </chakra.p>
                </Box>
            </Flex>
        </Flex>
    )
}
export default FinTechIntro;