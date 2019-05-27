json.extract! task, :id, :status, :type, :text, :task_id, :patient_id, :provider_id, :title, :created_at, :updated_at
json.url task_url(task, format: :json)
