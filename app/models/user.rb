class User < ActiveRecord::Base
	validates :username, :password_digest, :session_token, presence: true
	validates :password, length: { minimum: 6, allow_nil: true }
	validates :username, uniqueness: true

	attr_reader :password

	has_many :favorites,
	primary_key: :id,
	foreign_key: :user_id,
	class_name: 'Favorite'

	has_many :favorite_cities,
	through: :favorites,
	source: :city

	after_initialize :ensure_session_token

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return user if user && user.valid_password?(password)
		nil
	end

	def self.findByUsername(username)
		user = User.find_by(username: username)
		return user if user
		nil
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def valid_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_token!
		self.session_token = SecureRandom.urlsafe_base64
		self.save!
		self.session_token
	end

	

	private
	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64
	end



end
