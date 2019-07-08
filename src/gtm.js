import React from "react"

const GTM = () => (
  <>
    <h1>Google Tag Manager</h1>

	  <a target="_blank" href="https://tagmanager.google.com/#/container/accounts/4702277546/containers/12289230/workspaces/9">GTM Account</a>
	  <br></br><br></br>
    <div>
      	<button gtm="gtmClick">Click</button><br></br><br></br>
      	<button>Click (not attached to gtm)</button>
    </div>
	  <br></br><br></br>
  </>
)

export default GTM
