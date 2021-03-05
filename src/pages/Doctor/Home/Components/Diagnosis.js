export const Diagnosis = () => {
  return (
    <div>
      <div className="flex bg-gray-100 rounded-x1 p-4">

        <div className="flex-1  text-center  px-4 py-2 m-2
             bg-blue-500  grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 border 
             rounded-lg border-blue-400 hover:bg-blue-600">Syntopms<div>
               <button className="bg-gray-700 hover:bg-green-500 rounded-lg p-2">Add Syntopms</button></div>
             </div>
       
        
        <div className="flex-1  text-center  px-4 py-2 m-2
            bg-blue-500  grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 border 
             rounded-lg border-blue-400 hover:bg-blue-600">Referral<div>
               <input className="w-72 ml-24"></input>
             </div>
             </div>



      </div>
      <div className="flex-1  text-center  px-4 py-2 m-2
             bg-blue-500  grid   border 
             rounded-lg border-blue-400 hover:bg-blue-600">Prescripiton
             <div className="mr-auto"><button className="bg-gray-700 hover:bg-green-500 rounded-lg p-2 ">Add Medicine</button></div>
             
             <table class="border-separate ">
  <thead>
    <tr>
      <th className="border  ">Medicine</th>
      <th className="border ">Before meal</th>
      <th className="border ">After Meal</th>
      <th className="border">Dosage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border w-1/5"><input className="w-96" type="text"></input></td>
        <td className="border w-20"><input type="checkbox" ></input></td>
        <td className="border w-20"><input type="checkbox"></input></td>
        <td className="border w-px"><select>
        <option>1</option>
        <option>2</option>
        </select></td>
    </tr>
    <tr>
    <td className="border w-96"><input className="w-96" type="text"></input></td>
        <td className="border"><input type="checkbox" ></input></td>
        <td className="border"><input type="checkbox"></input></td>
        <td className="border w-56"><select>
        <option>1</option>
        <option>2</option>
        </select></td>
    </tr>
    <tr>
    <td className="border w-96"><input className="w-96" type="text"></input></td>
        <td className="border"><input type="checkbox" ></input></td>
        <td className="border"><input type="checkbox"></input></td>
        <td className="border "><select>
        <option>1</option>
        <option>2</option>
        </select></td>
    </tr>
  </tbody>
</table>

<div><button className="bg-gray-700 hover:bg-green-500 rounded-lg p-2">Submit</button></div>
          
        </div>


    </div>
  )
};
