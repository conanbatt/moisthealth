class Task < ApplicationRecord
  belongs_to :task
  belongs_to :patient
  belongs_to :provider
end
