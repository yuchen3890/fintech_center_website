import {
    Box,
    chakra,
    Flex,
    Image,
    Divider,
    AbsoluteCenter,
    Link,
    ListItem,
    OrderedList,
    UnorderedList,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
} from '@chakra-ui/react';


const EventIntro_1 = ({ activity }) => {
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
                        <Box
                            textAlign={'left'}>
                            <chakra.p
                                fontFamily={'Inter'}
                                fontWeight={'bold'}
                                fontSize={'20px'}
                                pb={4}
                                pt={4}
                            >
                                【校際說明會】 <br/>
                                
                            </chakra.p>

                            {activity.date2.map((item, i)=>{
                                if(i === 0){
                                    return(
                                        <Box fontWeight={"bold"} pb={4}>
                                        {activity.name[i]} <br/>
                                        日期：{activity.date2[i]} <br/>
                                        時間：{activity.time} <br/>
                                        地點：{activity.place[i]} <br/>
                                        報名表連結：<Link color="#437070" href={activity.link[i]} isExternal>{activity.link[i]}</Link>
                                        </Box>
                                    )
                                }
                                return(
                                <Box pb={4}>
                                {activity.name[i]} <br/>
                                日期：{activity.date2[i]} <br/>
                                時間：{activity.time} <br/>
                                地點：{activity.place[i]} <br/>
                                報名表連結：<Link href={activity.link[i]} isExternal>{activity.link[i]}</Link>
                                </Box>
                                )
                            })}
                        </Box>
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
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        pb={4}
                        pt={4}
                    >
                        【競賽及作品規範說明】
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        一、競賽主題 <br/>
                        
                        嘗試了解並分析現行玉山銀行所提供的數位金融品牌e.Fingo、服務及平台定位，透過思考顧客需求，完成以下方案：
                        <OrderedList>
                            <ListItem>規劃新數位產品或服務</ListItem>
                            <ListItem>跨業合作打造金融新商業模式</ListItem>
                            <ListItem>打造新時代的分行，提供顧客便捷的數位服務體驗</ListItem>
                        </OrderedList>
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        二、提案方式與相關條件說明 <br/>

                        提交一份最多十頁的A4完整企劃書（不含封面封底），內容包含：

                        <OrderedList>
                            <ListItem>填寫團隊資料，包含隊名、團隊成員介紹及參賽動機 
                                <Link color="#437070" href="http://www.ftrc.nccu.edu.tw/wordpresseng/wp-content/uploads/2023/06/%E7%AC%AC%E4%BA%8C%E5%B1%86%E7%8E%89%E5%B1%B1%E6%A0%A1%E5%9C%92%E5%95%86%E6%A5%AD%E7%AB%B6%E8%B3%BD%E8%A6%8F%E5%89%87%E6%9A%A8%E5%A0%B1%E5%90%8D%E8%A1%A8-1.pdf">
                                    （第二屆玉山校園商業競賽規則暨報名表）
                                </Link>
                            </ListItem>
                            <ListItem>目標族群的數位服務、社群使用習慣及金融交易行為喜好及痛點</ListItem>
                            <ListItem>玉山銀行數位金融品牌、服務及平台定位</ListItem>
                            <ListItem>同業的數位金融服務及平台分析</ListItem>
                            <ListItem>團隊所規劃的產品、服務、商業模式，或行銷推廣方案</ListItem>
                            <ListItem>執行策略</ListItem>
                            <ListItem>時程安排</ListItem>
                            <ListItem>成本及效益評估</ListItem>
                        </OrderedList>
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        pb={4}
                        pt={4}
                    >
                        【初賽評分標準】
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
                                    評審主項
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    分項
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    比重
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>創新性</Td>
                                <Td>兼顧企劃新穎性與市場趨勢</Td>
                                <Td>30%</Td>
                            </Tr>
                            <Tr bg="#e6e8ed">
                                <Td>完整性</Td>
                                <Td>相關佐證邏輯、資料之論理及完備性</Td>
                                <Td>40%</Td>
                            </Tr>
                            <Tr>
                                <Td>市場可行性</Td>
                                <Td>客群分析、成本效益評估、實際操作及落地性</Td>
                                <Td>30%</Td>
                            </Tr>
                        </Tbody>
                        </Table>
                        <chakra.p
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontSize={'15px'}
                            pb={2}
                            pt={2}
                        >※由玉山銀行進行審查，審查結果公告於本活動網頁，再由政大商學院金融科技研究中心通知通過審查隊伍工作坊、決賽之時程與地點。
                        </chakra.p>
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        pb={4}
                        pt={4}
                    >
                        【競賽獎勵】
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
                                    名次
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    隊伍數量
                                </Th>
                                <Th 
                                color="white" 
                                fontWeight={"bold"}
                                fontSize={"20px"}>
                                    獎金（幣別為新台幣）
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>冠軍</Td>
                                <Td>一隊</Td>
                                <Td>十萬元</Td>
                            </Tr>
                            <Tr bg="#e6e8ed">
                                <Td>亞軍</Td>
                                <Td>一隊</Td>
                                <Td>五萬元</Td>
                            </Tr>
                            <Tr>
                                <Td>季軍</Td>
                                <Td>一隊</Td>
                                <Td>二萬元</Td>
                            </Tr>
                            <Tr bg="#e6e8ed">
                                <Td>優選</Td>
                                <Td>二隊</Td>
                                <Td>一萬元</Td>
                            </Tr>
                            <Tr>
                                <Td>佳作</Td>
                                <Td>八隊</Td>
                                <Td>五千元</Td>
                            </Tr>
                        </Tbody>
                        </Table>
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'15px'}
                        pb={2}
                        pt={2}
                    >※除了獎金之外，獲獎組別成員可得玉山實習履歷優先審查權及獎狀
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        pb={4}
                        pt={4}
                    >
                        【參賽資格】
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        <OrderedList>
                            <ListItem>全台大專院校大學部、碩博在學學生（在職專班同學除外）</ListItem>
                            <ListItem>每隊人數2-5人（報名後不得更換或替補）</ListItem>
                            <ListItem>不限校系年級，可跨校/系組隊</ListItem>
                        </OrderedList>
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'bold'}
                        fontSize={'20px'}
                        pb={4}
                        pt={4}
                    >
                        【競賽時程】
                    </chakra.p>
                    <chakra.p
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        pb={2}
                        pt={2}
                    >
                        <UnorderedList>
                            <ListItem>2023/11/10  報名收件截止</ListItem>
                            <ListItem>2023/12/8   公布決賽名單（13隊）</ListItem>
                            <ListItem>2023/12月中 實作工作坊+彩排</ListItem>
                            <ListItem>2023/12月底 決賽</ListItem>
                        </UnorderedList>
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
                            活動海報
                        </chakra.h2>
                    </AbsoluteCenter>
                </Box>
                <Image src={`../activity/${activity.fileName}`} alt='NONE'></Image>
                <chakra.p
                    fontFamily={'Inter'}
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    pb={2}
                    pt={2}
                >
                    若有其他問題，請來信 nicolefang@ntu.edu.tw 或聯繫 (02)3366-4888 #542 專案承辦人方小姐，謝謝。
                </chakra.p>
            </Box>
        </Flex>
    )
}
export default EventIntro_1;