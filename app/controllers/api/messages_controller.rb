class Api::MessagesController < ApplicationController
	def index
		random_message = Message.all.sample
		greeting = random_message.message
		puts greeting
	end	
end