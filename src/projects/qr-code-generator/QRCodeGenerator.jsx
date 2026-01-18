import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput('');
  }

  const isButtonDisabled = input.trim() === '';

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button disabled={isButtonDisabled} onClick={handleGenerateQRCode}>
          Generate
        </button>
      </div>
      <br />
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
