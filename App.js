import logo from './logo.svg';
import './App.css'
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'
<script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>



function App() {
  const [punkListData, setPunkListData] = useState([])
  
  useEffect(() => {
    function fetchData() {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          'https://testnets-api.opensea.io/assets?asset_contract_address=0x9b52c6eef07ff894EDFBfADc537255374C22D26a&order_direction=asc'
        );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();
    }
    fetchData()
  }, []);

  return (
    <div className='app'>
      <Header />
      <CollectionCard
      id={0} 
      name={'nerdy gangsta'}
      traits={[{value:8}]}
      image='https://gateway.ipfscdn.io/ipfs/QmTZ833iWvNWV7rHdrfk2ffgs2jpfZKLLZzQPpYPHRLFT7/1%5B1%5D.jpg'
      />
    </div>
  )
}

export default App
