import { Popover } from '@headlessui/react'
import {AiOutlineCaretDown} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"

function MyPopover() {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className=" relative text-sm bg-transparent bg-backgrounddark/60 backdrop-blur flex items-center justify-center gap-2 rounded-full p-2">
            Maps
            <AiOutlineCaretDown className={open ? 'rotate-180 transform' : ''} />
          </Popover.Button>
          <Popover.Panel className="absolute flex items-center gap-2 mt-3 bg-blue-500 p-4 text-black">
            <HiLocationMarker className="font-sm"/>
            <a href="/location" className='text-sm text-center'>Location</a>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default MyPopover