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

import { GROUP_ITEMS } from '../Components/info_all_groups';

const research = () => {

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
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>單位</Th>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>組長</Th>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>聯絡信箱</Th>
                            <Th color={'#eff5f5'} fontSize={20} fontWeight={'bold'}>簡介</Th>
                        </Tr>
                    </Thead>
                    {GROUP_ITEMS.map((groupItem) => (
                        <Tbody>
                            <Tr 
                            cursor={'mouse'}
                            onClick = {() => Routing(groupItem.route)}
                            _hover= {{bgColor: '#eff5f5', color: '#70a9a9'}}
                            >
                                <Td>{groupItem.name}</Td>
                                <Td>{groupItem.lead}</Td>
                                <Td>{groupItem.email}</Td>
                                <Td>{groupItem.intro}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </Box>
    )
}
export default research;

