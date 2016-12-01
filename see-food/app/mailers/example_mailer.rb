class ExampleMailer < ApplicationMailer
  default from: "seefoodreactor@gmail.com"

  def sample_email(params)
    p params[:enterEmail]
    mail(to: params[:enterEmail], subject: 'sample email')
  end
end
