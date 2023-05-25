import {
    Box,
    Text,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import EventIntro from './eventIntro';
import { ACTIVITIES } from '../Components/info_all_activities';


const Event = ({ id }) => {
    return (
        <Box
            bg="#edf3f8"
            p={10}
            w="full"
        >
            <EventIntro activity={ACTIVITIES[id]}></EventIntro>
            <Image src={`../activity/${ACTIVITIES[id].fileName}`} alt='NONE'></Image>

        </Box>
    )
}
export default Event;