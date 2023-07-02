import React from 'react'
import { Project } from './Project'
import { projectNames } from '../../../data'


export const Projects = () => {
  return (
    <div className='space-y-2 mt-2'>
        {
            projectNames.map(project => <Project project={project}/>
            )
        }

    
    </div>
  )
}
