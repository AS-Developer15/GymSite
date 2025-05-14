import React from 'react'
import ChooseUsShowCase from './ChooseUsShowCase'

function ChooseUs() {
  return (
    <div id="chooseUs">
<div id="chooseUsHead">

        <span >
Why to choose us?
        </span>
        <h1>
Push your limit forward
        </h1>
</div>
<div id="flexShowCase">
    {ChooseUsShowCase("Src/Components/Images/Bicycle.png", "Modern Equipment", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis." )}

    {ChooseUsShowCase("Src/Components/Images/Juice.png","Healhty Nutrition Plan","Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")}
    
{ChooseUsShowCase("Src/Components/Images/Dumbell.png","Proffesional Training Plan","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.")}
    
{ChooseUsShowCase("Src/Components/Images/Hbeat.png", "Unique to Your Needs","Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")}



</div>
    </div>
  )
}

export default ChooseUs