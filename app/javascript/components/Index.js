import React from "react"

const Index = ({workflows}) => {

  return (
    <div>
      <div>
        {workflows.map((workflow, index) => <div key={index}>{workflow.name} {workflow.project_name}</div>)}
      </div>
    </div>
  );
}

export default Index
