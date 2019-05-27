class Task < ApplicationRecord
  belongs_to :task, optional: true
  belongs_to :patient
  belongs_to :provider

  validates :status, :task_type, :title, :text, presence: true

  enum status: {
    pending: "pending",
    resolved: "resolved",
  }

  enum task_type: {
    documentation: "documentation",
    referral: "referral",
  }

  def to_json
    super
  end
end
