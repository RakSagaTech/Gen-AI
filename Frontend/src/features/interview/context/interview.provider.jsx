import {useState} from "react"
import { InterviewContext } from "./interview.context"; 



export const InterviewProvider = ({children}) =>{
  const [report, setReport] = useState(null)
  const [reports, setReports] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <InterviewContext.Provider value={{report, setReport, loading, setLoading, reports, setReports}}>
      {children}
    </InterviewContext.Provider>
  )

}