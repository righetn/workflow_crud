class Workflow < ApplicationRecord
    has_many :steps, dependent: :destroy
end
