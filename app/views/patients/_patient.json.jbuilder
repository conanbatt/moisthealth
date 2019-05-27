json.extract! patient, :id, :name, :dob, :gender, :provider_id, :created_at, :updated_at
json.url patient_url(patient, format: :json)
