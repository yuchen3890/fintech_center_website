import {
    Box,
    chakra,
    Flex,
    OrderedList,
    ListItem,
} from '@chakra-ui/react';

const FinBussIntro = () => {
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
                    color={'blue.400'}>
                    簡介
                </chakra.h3>
                <chakra.h1
                    py={5}
                    fontSize={40}
                    fontWeight={'bold'}
                    color={'gray.700'}>
                    金融業務組
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
                        金融科技在金融相關產業的運用層面很廣，金融業務組目前聚焦在應用人工智慧(AI)方法優化優化金融投資，我們認為:在金融科技發展迅速蓬勃的今天，未來台灣的金融業和金融從業人員都面臨嚴峻的考驗，如何運用AI技術來強化我國金融業的投資能力和績效，將攸關金融業的獲利能力與生存。當金融業者進行國際金融投資時，常面臨市場資料量龐大複雜、國外公司優劣難以判斷及突發消息難以掌握等挑戰，影響投資績效。針對上述問題，本組未來將研究透過「文字探勘」、「資料採礦」、「機器學習」等方法，協助金融機構優化財務理論與實務的選股方法，歸納可行的投資因子與模型，協助分析個股新聞報導、搜索關鍵字熱度、社交網站、重要媒體評論等非結構化資料，以即時偵測分析影響個股價格走勢的重要消息，做出最佳的股票投資決策，進而增加投資報酬率。
                        <br/><br/>
                        目前規畫的開發方向先以「機器學習」法為主，輔以傳統的計量分析方法，進而運用在選股(stock picking)策略及擇時(market timing)策略，預計開發的 法包含 (1) 支援向量機(Support Vector Machine); (2) 人工神經網路(Artificial Neural Network); (3) 隨機森林(random forest); (4) Lasso算法(least absolute shrinkage and selection operator); (5) 羅吉斯迴歸(logistic regressions); (6)馬可夫狀態轉換法(Markov regime switching methods)等。
                        <br/><br/>
                        目前可提供技轉或共同開發的技術如下:
                        <OrderedList>
                            <ListItem>奇異式選擇權(exotic options)的靜態複製(static hedge)法</ListItem>
                            <ListItem>個股選擇權價量資訊在選股策略的運用</ListItem>
                            <ListItem>Black-Litterman模型在理財機器人的運用</ListItem>
                        </OrderedList>
                    </chakra.p>
                </Box>
            </Flex>
        </Flex>
    )
}
export default FinBussIntro;