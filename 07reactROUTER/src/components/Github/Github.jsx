import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        
        Github follower:{data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        </div>
  )
}

export const github = async () =>{
    const res = await fetch ('https://api.github.com/users/panza123')
    return res.json()
}
