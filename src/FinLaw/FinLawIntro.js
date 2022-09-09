import {
    Box,
    chakra,
    Flex,
    OrderedList,
    ListItem,
} from '@chakra-ui/react';

const FinLawIntro = () => {
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
                    金融法律組
                </chakra.h1>
            </Box>
            <Flex
                boxShadow={'lg'}
                // maxW={'640px'}
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
                        本組研究方向：
                        <OrderedList>
                            <ListItem>金融科技相關法律議題之研究。金融科技發展快速，現行法規因應產業發展，應如何調整始能兼顧金融科技發展以及產業應有之規範。</ListItem>
                            <ListItem>區塊鍊（Blockchain）技術的發展與傳統金融產業結合所衍生之金融法規修正調整之研究。因應區塊鍊技術之去中心化及取得信任之運作模式，對於為來金融產業以及資本市場運作效能之提昇，甚至更廣泛之運用是值得期待的，也必然對現行制度產生衝擊。政策及法制上應如何因應此趨勢之發展，值得持續關注與研究。例如，區塊鍊技術、智能合約與電子交易之法律相關議題。</ListItem>
                            <ListItem>比特幣、虛擬貨幣、Initial Coin Offering (ICO)之發展、法律性質與規範趨勢。</ListItem>
                            <ListItem>金融監理沙盒（Regulatory Sandbox）之國際版與本國版之運作與發展。為鼓勵金融創新，政府如何擬定產業發展政策，配合金融監理沙盒機制之運作，以及調整金融法規與金融監理政策之後續發展</ListItem>
                            <ListItem>不定期舉辦與金融科技發展相關法律議題之座談會或研討會。</ListItem>
                            <ListItem>國際金融科技法律法展之關注。</ListItem>
                        </OrderedList>
                    </chakra.p>
                </Box>
            </Flex>
        </Flex>
    )
}
export default FinLawIntro;