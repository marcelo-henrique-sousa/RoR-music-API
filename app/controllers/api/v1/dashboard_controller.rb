class Api::V1::DashboardController < ApplicationController

  def index
    load_recent_heard
    load_recomendations
  end
  
  private
  def load_recent_heard
    @recent_albums = current_user.recently_heards.order('created_at DESC').limit(8).map(&:album).uniq
  end
  
  def load_recomendations
    heard_categories = @recent_albums.map(&:category)
    if heard_categories.present?
      @recommend_albums = Album.joins(:category, :songs).where(category: heard_categories).select('distinct albums.*').limit(12)
    else
      @recommend_albums = Album.all.sample(12)
    end  
  end
  

end
