module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def create
        build_resource(sign_up_params)

        resource.save
        yield resource if block_given?
        if resource.persisted?
          if resource.active_for_authentication?
            # Don't sign in for JWT auth
            render json: {
              status: { code: 200, message: 'Signed up successfully.' },
              data: {
                id: resource.id,
                email: resource.email,
                username: resource.username,
                bio: resource.bio,
                avatar_url: resource.avatar_url
              }
            }, status: :ok
          else
            expire_data_after_sign_in!
            respond_with resource, location: after_inactive_sign_up_path_for(resource)
          end
        else
          clean_up_passwords resource
          set_minimum_password_length
          respond_with resource
        end
      end

      private

      def respond_with(resource, _opts = {})
        if resource.persisted?
          render json: {
            status: { code: 200, message: 'Signed up successfully.' },
            data: {
              id: resource.id,
              email: resource.email,
              username: resource.username,
              bio: resource.bio,
              avatar_url: resource.avatar_url
            }
          }, status: :ok
        else
          render json: {
            status: { message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
          }, status: :unprocessable_entity
        end
      end
    end
  end
end
