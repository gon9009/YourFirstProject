import React, { createContext, useState } from 'react'
import ProjectScore from '../data/ProjectScore'

export const ScoreContext = createContext();

export const ScoreProvider = ({children}) => {
  const [score,setScore] = useState(ProjectScore);
  return (
    <ScoreContext.Provider value={{score,setScore}}>
      {children}
    </ScoreContext.Provider>
  )
}
