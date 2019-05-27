json.extract! task, :id, :status, :task_type, :text, :task_id, :patient_id, :provider_id, :title, :created_at, :updated_at
json.patient do
  json.extract! task.patient, :name, :dob
end
json.provider do
  json.extract! task.provider, :name, :emr, :phone
end
json.url task_url(task, format: :json)
