import {
    Box,
    Text,
} from '@chakra-ui/react';


import { REPORTS } from '../Components/info_all_reports';
import { ReportCard } from '../Components/ReportCard';

const Report = () => {
    return (
        <Box
            bg="#edf3f8" // 背景主題色：淺藍
            p={10}
            w="full"
        >
            {REPORTS.map((cardInfo, index) => {
                return (
                    <>
                        <Box
                            mt={14}
                            borderRadius='md'
                            backgroundColor='#1E646E' 
                            my="20px"
                        >
                        
                            <Text
                                fontWeight='bold'
                                fontSize='3xl'
                                color='white'>
                                金融科技研究報告
                            </Text>
                        </Box>
                        <ReportCard {...cardInfo} index={index} />
                    </>
                )
            })}
        </Box>
    )
}
export default Report;