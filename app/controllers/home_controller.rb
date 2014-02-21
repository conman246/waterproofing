 class HomeController < ApplicationController

  def index
    render layout: "home_layout"
  end

  def about_us
    render layout: "about_us_layout", view: "about_us"
  end


end
