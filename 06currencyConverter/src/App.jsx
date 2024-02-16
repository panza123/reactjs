import { useState } from "react"
import useCurrencyinfo from "./components/hooks/useCurrencyinfo"
import InputBox from "./components/InputBox"
function App() {
  
const[amount,setAmount] = useState(0)
const [from,setForm] = useState('usd')
const [to,setTo] = useState('nlg')
const [covertAmount,setConvertAmount] = useState(0)
const currencyInfo = useCurrencyinfo(from)
const options = Object.keys(currencyInfo)
const convert = () =>{
  setConvertAmount(amount * currencyInfo[to])
}
const swap = () =>{
  setForm(to)
  setTo(from)
  setConvertAmount(amount)
  setAmount(covertAmount)
}
return (

    <>
<div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-origin-border" style={{backgroundImage:'url(https://media.istockphoto.com/id/1369269456/photo/data-technology-computer-generated-digital-currency-and-exchange-stock-chart-for-finance-and.jpg?b=1&s=612x612&w=0&k=20&c=iIBO_IpsTY1N5xMwxb7v7UOy4amytK-W_3Bzl2cNlqM=)'}}>

<div className="w-full">
 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
  <form onSubmit={(e)=>{
    e.preventDefault()
    convert()
  }}>
<div className="w-full mb-1">
  <InputBox
  label= "from"
  amount={amount}
  currencyOptions ={options}
  onCurrencyChange ={(currency)=> setForm(currency)}
  onAmountChange = {(amount)=> setAmount(amount)}
  selectedCurrency = 'usd'
  />
</div>
<div className="relative w-full h-0.5">
  <button
  className="absolute left-1/2 -translate-x-1/2
   -translate-y-1/2 border-2
    border-white rounded-md bg-blue-600 
    text-white px-2 py-0.5"
  onClick={swap}
  >Swap</button>
 </div>
 <div className="w-full mb-1">
  <InputBox
  label= "to"
  amount={covertAmount}
  currencyOptions ={options}
  amountDisabled ={true}
  onCurrencyChange ={(currency)=> setTo(currency)}
  onAmountChange = {(amount)=> setAmount(amount)}
  selectedCurrency = {to}
  />
</div>
<button type="submit"
className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
  </form>
  
 </div>

</div>



  </div>
    </>
  )
}

export default App
