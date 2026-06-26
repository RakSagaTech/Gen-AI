import {useState} from "react"
import { InterviewContext } from "./interview.context"; 



export const InterviewProvider = ({children}) =>{
  const [report, setReport] = useState("")
  const [reports, setReports] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <InterviewContext.Provider value={{report, setReport, loading, setLoading, reports, setReports}}>
      {children}
    </InterviewContext.Provider>
  )

}