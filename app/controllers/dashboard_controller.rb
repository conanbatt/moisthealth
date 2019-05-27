class DashboardController < ApplicationController
  def index
    @tasks = Task.all.includes(:provider, :patient)
  end
end
