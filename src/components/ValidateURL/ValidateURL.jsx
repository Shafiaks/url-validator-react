import React from 'react'

function ValidateURL(url) {
    // https://www.freecodecamp.orgdh
    const validProtocol=['http://','https://','ftp://','ws://','wss://','mailto:','file://','tel:'];
    var protocol = url.split('//'||':');
    console.log("protocol", protocol)
    const partsSplitByDots = url.split('.');

    function validSubdomain() {
    //     /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i  
    //      /^[A-Za-z0-9-]{1,63}\.[A-Za-z]{2,6}$/
    var regExForSubdomain =  new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/);
    if(regExForSubdomain.test(url)) {
        alert("invalid");
    }
}

  return (
    <div>

      
    </div>
  )
}

export default ValidateURL
