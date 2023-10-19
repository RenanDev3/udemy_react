import React from 'react'
import { BsFill1CircleFill, BsFill2CircleFill } from 'react-icons/bs'
import { GrStatusGood } from 'react-icons/gr'
import { AiOutlineWarning } from 'react-icons/ai'
import { CgDanger } from 'react-icons/cg'

import Button from "../components/Button"

function ButtonPage() {
  return (
    <div>
    <h2 className="text-3xl underline text-red-600 mb-4 text-center">App</h2>       
    <div>
        <Button primary rounded outline onClick={() => alert("Primary button")} className="mb-8"> 
        <BsFill1CircleFill />
        Primary
        </Button>
    </div>
    <div>
        <Button secondary >
        <BsFill2CircleFill />
            Secondary
        </Button>
    </div>
    <div>
        <Button success rounded>
        <GrStatusGood />
            Success
        </Button>
    </div>
    <div>
        <Button warning outline>
        <AiOutlineWarning />
            Warning
        </Button>
    </div>
    <div>
        <Button danger>
        <CgDanger />
            Danger
        </Button>
    </div>
</div>
  )
}

export default ButtonPage