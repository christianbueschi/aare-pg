import React, {useState} from "react"
import { Box, Button, Heading, Accordion, AccordionPanel, TextInput } from 'grommet';
//import Amplitude from 'react-amplitude';

(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
    ;r.type="text/javascript"
    ;r.integrity="sha384-d/yhnowERvm+7eCU79T/bYjOiMmq4F11ElWYLmt0ktvYEVgqLDazh4+gW9CKMpYW"
    ;r.crossOrigin="anonymous";r.async=true
    ;r.src="https://cdn.amplitude.com/libs/amplitude-5.2.2-min.gz.js"
    ;r.onload=function(){if(!e.amplitude.runQueuedFunctions){
    console.log("[Amplitude] Error: could not load SDK")}}
    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
    ;function s(e,t){e.prototype[t]=function(){
    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
    var o=function(){this._q=[];return this}
    ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
    ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
    ;return this}
    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
    ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
    ;function v(e){function t(t){e[t]=function(){
    e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
    for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
    e=(!e||e.length===0?"$default_instance":e).toLowerCase()
    ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
    ;e.amplitude=n})(window,document);
    
    window.amplitude.getInstance().init("11018f87cd0149862e310aa0ea5910cc");

const AmplitudeComponent = () => {

    const fireEvent = (name) => {
        window.amplitude.getInstance().logEvent(name);
    }
    const registration = () => {
        const identity = new window.amplitude.Identify().add('name', 'chris');
        window.amplitude.getInstance().setUserId(name);
        fireEvent('Registration');
        window.amplitude.getInstance().identify(identity);
    }

    const [name, setName] = useState('');

    return (
        <>
            <Heading margin="0" level="1">Amplitude</Heading>
            <Button target="_blank" href="https://analytics.amplitude.com/aare-pg/settings/projects/238780" alignSelf="start" margin={{'vertical': 'small'}} label="Go to Account"/>
            <Box border={{ color: 'brand', size: 'large' }} pad="medium" margin={{vertical: 'small'}}>
                <Heading margin="0" level="4">Registration & Login</Heading>
                <TextInput placeholder="Name" value={name} onChange={event => setName(event.target.value)}/>
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

export default AmplitudeComponent
