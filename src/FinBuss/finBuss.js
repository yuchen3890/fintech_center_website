import {
    Box,
    Text,
} from '@chakra-ui/react';

import FinBussIntro from './FinBussIntro';
import { FINBUSS_MEMBERS } from '../Components/info_all_members';
import { MemberCard } from '../Components/MemberCard';


const FinBuss = () => {
    return (
        <Box
            bg="#edf3f8"
            p={10}
            w="full"
        >
            <FinBussIntro></FinBussIntro>

            {FINBUSS_MEMBERS.map((cardInfo, index) => {
                return (
                    <>
                        <Box
                            mt={14}
                            borderRadius='md'
                            backgroundColor='#1E646E' // 職稱 title 深綠色
                        >
                            {index === 0 ? <Text
                                fontWeight='bold'
                                fontSize='3xl'
                                color='white'>
                                組長
                            </Text> :
                                (index === 1 ? <Text
                                    fontWeight='bold'
                                    fontSize='3xl'
                                    color='white'>
                                    研究成員
                                </Text> : <></>)}
                        </Box>
                        <MemberCard {...cardInfo} index={index} group={'FinBuss'} />
                    </>
                )
            })}
        </Box>
    )
}
export default FinBuss;