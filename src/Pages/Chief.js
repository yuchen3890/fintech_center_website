import {
    Box,
    chakra,
    Text,
    Divider,
} from '@chakra-ui/react';


import { CHIEF_PREV } from '../Components/info_all_members';
import { MemberCard } from '../Components/MemberCard';

const Chief = () => {
    return (
        <Box
            bg="#edf3f8" // 背景主題色：淺藍
            p={10}
            w="full"
        >
            <chakra.h1
                py={5}
                fontSize={40}
                fontWeight={'bold'}
                color={'gray.700'}>
                歷屆主任
            </chakra.h1>
            <Divider />
            {CHIEF_PREV.map((cardInfo, index) => {
                return (
                    <>
                        <Box
                            mt={14}
                            borderRadius='md'
                            backgroundColor='#1E646E' // 職稱 title 深綠色
                        >
                            {index === CHIEF_PREV.length - 1 ?
                                <Text
                                    fontWeight='bold'
                                    fontSize='3xl'
                                    color='white'>
                                    現任
                                </Text> :
                                <Text
                                    fontWeight='bold'
                                    fontSize='3xl'
                                    color='white'>
                                    第 {index + 1} 屆
                                </Text>}
                        </Box>
                        <MemberCard {...cardInfo} index={index} group={'Chief'} />
                    </>
                )
            })}
        </Box>
    )
}
export default Chief;