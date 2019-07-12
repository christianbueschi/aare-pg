import React, {useState} from "react"
import { Box, Button, Heading, Accordion, AccordionPanel, TextInput } from 'grommet';
//import Amplitude from 'react-amplitude'


const segment = (!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  analytics.load("6ZRo7mJ1mMMSS7fu6kJ2tmNt59jeR3YN");
}}());
const Segment = () => {

    const fireEvent = (name) => {
        //window.amplitude.getInstance().logEvent(name);
        window.analytics.track(name);
    }
    const registration = () => {
        window.analytics.identify('f4ca124293', {
            name: user,
            email: user
        });
        //window.analytics.track('Registration', {user});
    }

    const [user, setName] = useState('');

    return (
        <>
            <Heading margin="0" level="1">Amplitude</Heading>
            <Button target="_blank" href="https://analytics.amplitude.com/aare-pg/settings/projects/238780" alignSelf="start" margin={{'vertical': 'small'}} label="Go to Account"/>
            <Box border={{ color: 'brand', size: 'large' }} pad="medium" margin={{vertical: 'small'}}>
                <Heading margin="0" level="4">Registration & Login</Heading>
                <TextInput placeholder="Name" value={user} onChange={event => setName(event.target.value)}/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={registration} label="Registration"/>
            </Box>
            <Box border={{ color: 'brand', size: 'large' }} pad="medium" pad="medium" margin={{vertical: 'small'}}>
                <Heading margin="0" level="4">Schedule a visit</Heading>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Choose Termin')} label="Choose visit"/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Book date')} label="Book date"/>
            </Box>
            <Box border={{ color: 'brand', size: 'large' }} pad="medium" pad="medium" margin={{vertical: 'small'}}>
                <Heading margin="0" level="4">Make an application</Heading>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Personal Information')} label="Personal Information"/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Current Situation')} label="Current Situation"/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Work Situation')} label="Work Situation"/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Documents')} label="Documents"/>
                <Button alignSelf="start" margin={{'vertical': 'small'}} onClick={() => fireEvent('Send Application')} label="Send Application"/>
            </Box>
        </>
    )
}

export default Segment
