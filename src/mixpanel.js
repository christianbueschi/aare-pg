import React from "react"

const Mixpanel = () => {
    
    // const mixpanel = useMixpanel();
    // mixpanel.init("529ff777c007d670ae8159ee2a896a06");

    const fireEvent = (step) => {
        //mixpanel.track(step);
    }

    const identfify = () => {
        //const identity = mixpanel.Identify().set('name', 'chris');
    }

    return (
        <>
            <h1>Mixpanel</h1>

	        <a target="_blank" href="https://mixpanel.com/report/1994025/insights">Mixpanel Account</a>
	        <br></br><br></br>
            <div>
                <button onClick={identfify} >Identify</button>
      	        <button onClick={() => fireEvent('click_step_1')} >Click Step 1</button>
      	        <button onClick={() => fireEvent('click_step_2')} >Click Step 2</button>
      	        <button onClick={() => fireEvent('click_step_3')} >Click Step 3</button>
      	        <button onClick={() => fireEvent('click_step_4')} >Click Step 4</button>
      	        <button onClick={() => fireEvent('click_step_5')} >Click Step 5</button>
      	        <button onClick={() => fireEvent('click_step_6')} >Click Step 6</button>
            </div>
	        <br></br><br></br>
        </>
    )
}

export default Mixpanel
