import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ToolCards from './ToolsCard'

const Pricing = () => {
  return (
    <div>
      <div className='flex justify-center text-4xl font-extrabold text-[#9CA3AF]' style={{display: "flex", justifyContent: "center", textAlign: "center", marginTop: "10rem"}}>
        <h1>Free Tools to Make
          Business
          Your Life
          Everything
          Education
          Simple

        </h1>
      </div>
      <div className='flex justify-center' style={{paddingTop: "1rem"}}>
        <p className='text-blue-600 font-extrabold'>   We offer PDF, video, image and other online tools to make your life easier </p>

      </div>
     <div className="flex justify-center items-center gap-3 mt-8"  style={{paddingTop: "3rem"}}>
  <Input 
    className="w-full max-w-sm text-white px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
    placeholder="Search Your Tools"
    style={{padding: "1.5rem"}}
  />
  <Button style={{padding: "1.5rem"}} className="px-6 py-3 rounded-full bg-blue-600 md:w-44 text-white font-semibold shadow-md hover:bg-blue-500 transition-all duration-300 focus:ring-2 focus:ring-blue-400">
    Search
  </Button>
</div>

<div>
<ToolCards/>
</div>
    </div>
  )
}

export default Pricing
