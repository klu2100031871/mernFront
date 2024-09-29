import React, { useState } from 'react';  
import QRCode from 'react-qr-code';  

const QRCodeGenerator = () => {  
  const [text, setText] = useState('https://example.com');  

  return (  
    <div>  
      {/* <h1>QR Code Generator</h1>   */}
      {/* <input   
        type="text"   
        value={text}   
        onChange={(e) => setText(e.target.value)}   
        placeholder="Enter text or URL"  
      />   */}
      <div>  
        <QRCode value={text} />  
      </div>  
    </div>  
  );  
};  

export default QRCodeGenerator;