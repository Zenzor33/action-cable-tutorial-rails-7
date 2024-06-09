class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
    stream_from "room_channel_user_#{message_user.id}" # message_user defined in connection.rb
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
