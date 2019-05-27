class Provider < ApplicationRecord
  validates :name, :address, :phone, :emr, presence: true

  enum emr: {
    drchrono: "drchrono",
    helix: "helix",
    bagel: "bagel"
  }
end
