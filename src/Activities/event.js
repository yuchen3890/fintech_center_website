import {
    Box,
} from '@chakra-ui/react';

import { ACTIVITIES } from '../Components/info_all_activities';
import EventIntro_0 from './eventIntro_0'; 
import EventIntro_1 from './eventIntro_1';

const eventIntroComponents = {
    '0': EventIntro_0,
    '1': EventIntro_1,
  };

const Event = ({id}) => {
    const EventIntroComponent = eventIntroComponents[id];

    return (
        <Box
            bg="#edf3f8"
            p={10}
            w="full"
        >
            <EventIntroComponent  activity={ACTIVITIES[id]}></EventIntroComponent>
        </Box>
    )
}
export default Event;