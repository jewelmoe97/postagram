class LikesController < ApplicationController
   
        # user = User.find(params[:user_id])
   

    # def create
    #     post = Post.find(params[:post_id])
        
    #     if @current_user.likes.exists?(post: post)
    #       render json: { error: "You have already liked this post" }, status: :unprocessable_entity
    #     else
    #       like = @current_user.likes.build(post: post)
          
    #       if like.save
    #         render json: like, status: :created
    #       else
    #         render json: { error: "Failed to create like" }, status: :unprocessable_entity
    #       end
    #     end
    #   end

    #   def destroy
    #     like = @current_user.likes.find_by(post_id: params[:post_id])
        
    #     if like.nil?
    #       render json: { error: "Like not found" }, status: :not_found
    #     else
    #       like.destroy
    #       head :no_content
    #     end
    #   end
    def create
      # Create a new like record
      like = Like.new(like_params)
  
      if like.save
        render json: like, status: :created
      else
        render json: like.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      # Find and destroy the like record
      like = Like.find_by(like_params)
  
      if like
        like.destroy
        head :no_content
      else
        render json: { error: 'Like not found' }, status: :not_found
      end
    end
  
    private
  
    def like_params
      params.require(:likes).permit(:user_id, :post_id)
    end



    end
