import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';


import { ACTIVITIES } from '../Components/info_all_activities';

const activity = () => {

    const Routing = (route) =>{
        window.location.href = route;
    }
    
    return (
        <Box
            bg="#edf3f8"
            p={{
                base: '5', 
                md: '20'
            }}
            w="auto"
        >
            <TableContainer
                bg="white"
                borderRadius='md'>
                <Table variant='simple' size='lg' width={'100%'}>
                    <Thead>
                        <Tr
                            bgColor={'#4d8080'}>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>活動日期</Th>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>活動主題</Th>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>簡介</Th>
                        </Tr>
                    </Thead>
                    {ACTIVITIES.map((activity, i) => (
                        <Tbody>
                            <Tr 
                            cursor={"pointer"}
                            onClick = {() => Routing(`/activity/${i}`)}
                            _hover= {{bgColor: '#eff5f5', color: '#70a9a9'}}
                            >
                                <Td>{activity.date}</Td>
                                <Td>{activity.title}</Td>
                                <Td>{activity.intro}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Box>
    )
}
export default activity;

