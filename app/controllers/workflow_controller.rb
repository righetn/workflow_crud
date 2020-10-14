class WorkflowController < ApplicationController
  def index
    @workflows = Workflow.all
  end

  def new
  end

  def create
    res = params.permit(:name, :projectName, :stepNumber)
    workflow = Workflow.create(name: res['name'], project_name: res['projectName'])
    (0...res['stepNumber'].to_i).each do |num|
      Step.create(number: num, status: "initial", workflow: workflow)
    end
  end
end
