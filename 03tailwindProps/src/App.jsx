import Card from "./Card"


function App() {
let  myObj ={
  name:'FAROUQ',
  age:25,
  city:'Abokuta',
  state:'Ogunstate',
  country:'Nigeria'
}
let newArr = [1,2,3,4,5,6,7,8,8]

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 ">
        vite with tailwind
      </h1>
      <Card username='Olowonla Farouq' post = 'ViteEng' />
      <Card username='' newArr ={newArr} />
    </>
  )
}

export default App
