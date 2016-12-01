class ExampleMailer < ApplicationMailer
  default from: "seefoodreactor@gmail.com"

  def sample_email(params)
  
    p "*&*" * 80
    @liked_spots = params[:likedSpots]
 


    mail(to: params[:enterEmail], subject: 'sample email')
  end
end
