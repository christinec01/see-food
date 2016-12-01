class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
  def sample_email(user)
    @user = user
    mail(to: @user.email, subject: 'sample email')
  end
end
