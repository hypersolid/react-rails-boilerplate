class AuthService
  def auth(login, _password)
    return unless login =~ /@registered/
    begin
       # query to remote auth API goes here
       user = User.find_or_create_by(login: login)
       token = SecureRandom.hex(64)
       user.update_attribute(:token, token)
       token
     rescue StandardError => e
       Rails.logger.fatal e.message
       false
     end
  end
end
