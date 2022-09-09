import {
    Container,
    Text,
    Image,
    Flex,
    Divider,
} from '@chakra-ui/react';

const Footer = () => {

    return (
        <Container
            maxW={'full'}
            bgColor={'#002c2f'}
            color={'white'}
            py={6}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>

            <Flex>
                <Image src="/logo-w.png" alt='logo' mr={5} />
                <Text textAlign={'left'}>National Taiwan University <br />
                    國立臺灣大學金融科技研究中心</Text>
            </Flex>
            <Divider mt={3} />
            <Flex justifyContent={'space-between'} color={'gray'} fontStyle={'italic'} fontSize={15}>
                <Text>Tel: (02)3366-4888 #542  台北市羅斯福路四段一號 台灣大學資訊工程學系542室</Text>
                <Text>© 2022 Chakra Templates. All rights reserved</Text>
            </Flex>

        </Container>
    )

}
export default Footer;