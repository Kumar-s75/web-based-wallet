import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateMnemonic } from "bip39";
import {SolanaWallet} from './components/Solanawallet'
import { EthWallet } from './components/EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const handleGenerate = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  };
  return (
    <>
<button onClick={handleGenerate}>Create Seed Phrase</button>
<br/><br/>
<input 
type="text"
value={mnemonic}
readOnly
// style={{width:"100%",padding:"10px"}}
/>
{mnemonic && 

(
<> 

<SolanaWallet mnemonic={mnemonic}/>
 <EthWallet mnemonic={mnemonic} />
 
 </>
 )}
    </>
  )
}

export default App
