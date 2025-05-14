import React from 'react'

function ChooseUsShowCase(imgPath,heading,para) {
  return (
    <div className='showCase'>

<img src={imgPath} alt="" />

<h1>
    {heading}
</h1>



<article>{para}</article>
    </div>
  )
}

export default ChooseUsShowCase