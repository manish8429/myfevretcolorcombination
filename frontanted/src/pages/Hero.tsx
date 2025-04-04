import { Button } from '@/components/ui/button'
import './Herocss.css'
import { PenTool } from "lucide-react";
import { IconCloudDemo } from './Animation';
import Spinner from './spinner';
import { Buttonexplore } from './Button';


const Hero = () => {
    return (
        <>
            <div className='animationshow' style={{marginTop: "10rem"}}>
                <div className='flex justify-center text-center'>

                    <Button className="button ">
                        <span> ✨ Unlimited Free And Paid Tools</span>
                    </Button>

                </div>
            </div>
            <div className='flex text-center justify-center'>

                <h1 className='texth1'>Unlimited Tools Power, Paid And Free</h1>
            </div>
            <div className="flex flex-col items-center text-center text-2xl py-2.5">
    <p className="text-[#9CA3AF]">Access 100+  Tools with no hidden limits. Start building now with our</p>
    <p className="text-[#9CA3AF]">generous free tier, or upgrade to Pro for the price of ☕️</p>
</div>
<div className="mt-10 flex justify-center">
  <div style={{marginTop: "2rem"}}>
   <Buttonexplore/>
  </div>
</div>


        </>
    )
}

export default Hero
