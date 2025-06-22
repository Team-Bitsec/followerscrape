import React from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import { Button, H1 } from '../ui/Typhography'




function Titlesection() {
  return (
    <div className='bg-gray-100'>

<SectionWrapper className='text-center max-w-2xl text-black mx-auto '>
 <H1 className='leading-[32px]'>You’re in the right place,
sign up and get started.</H1>

<div className='flex gap-5 mt-5 justify-center'>
<Button className='mt-4'>Get a started</Button>

<Button>Signup</Button>
</div>
</SectionWrapper>









    </div>
  )
}

export default Titlesection