import { createContext,useState } from "react"

// create context provider object
export const counterContexObj=createContext()

function ContextProvider({ children }) {

    // state
    const [counter,setCounter]=useState(10)
    // function to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }

  return (
    <div>
      <counterContexObj.Provider value={{counter,changeCounter}}>{children}
      </counterContexObj.Provider>
    </div>
  )
}

export default ContextProvider
