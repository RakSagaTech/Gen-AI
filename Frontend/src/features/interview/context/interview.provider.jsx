import {useState} from "react"
import { InterviewContext } from "./interview.context"; 



export const InterviewProvider = ({children}) =>{
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <InterviewContext.Provider value={{report, setReport, loading, setLoading}}>
      {children}
    </InterviewContext.Provider>
  )

}