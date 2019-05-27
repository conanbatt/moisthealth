class Patient < ApplicationRecord
  belongs_to :provider
  validates :name, :dob, :provider, presence: true
end
