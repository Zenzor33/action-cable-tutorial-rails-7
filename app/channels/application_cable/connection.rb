module ApplicationCable
  class Connection < ActionCable::Connection::Base
    include SessionsHelper

    identified_by :message_user # Sets an identifier for the connection, which can be used by channels to recognize the user.

    def connect #Called when a new connection is established.
      self.message_user = find_verified_user
    end

    private

    def find_verified_user
      if logged_in?
        current_user #different from rails 7 documentation
      else
        reject_unauthorized_connection
      end
    end
  end
end
