"use client"
import { useState } from 'react'
import { Collapsible } from '@radix-ui/react-collapsible';
import * as Toggle from '@radix-ui/react-toggle';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
const TemplateCollapse = () => {
  return (
    <div> 
      This is the content man
    </div>
  )
}

const ComponentToolBox = () => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return ( 
    <div className = {`h-[100vh] bg-[var(--border-indigo-1)] text-white ${expanded? 'w-[30vw] md:w-[25vw] lg:w-[20%]' : 'w-[10vw]'}`}>
      <Toggle.Root className="bg">
        <DoubleArrowLeftIcon />
      </Toggle.Root>
      <TemplateCollapse/>
    </div>
  )
}

export default ComponentToolBox