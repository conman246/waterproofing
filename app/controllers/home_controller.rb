 class HomeController < ApplicationController

  def index
    render layout: "home_layout"
  end

  def about_us
    render :about_us
  end


end
