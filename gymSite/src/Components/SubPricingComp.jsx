import React from 'react'
import Pricing from './Pricing'

function SubPricingComp(memName,price,){(
    <div className="sPricing">
<span>
    {memName}
</span>
<h1>
    ${price}
</h1>
<span className="low">
    SINGLE CLASS
</span>

<ul>
    <li>Free riding</li>
    <li>Unlimited equipments</li>
    <li>Personal trainer</li>
    <li>Weight losing classes</li>
    <li>Month to mouth</li>
    <li>No time restriction</li>
</ul>

<a href="">Enroll Now</a>
    </div>
  )
}

export default SubPricingComp