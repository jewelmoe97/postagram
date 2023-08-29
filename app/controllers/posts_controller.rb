class PostsController < ApplicationController

    def index
        
        # render json: Post.all
        post = Post.includes(:user).all
        render json: post, include: [:user,:comments,:likes]
      end


    


      def show
        post = Post.find_by(id: params[:id])
      
        if post
            render json: post, include: [:user,:comments,:likes]
        else
          render json: { error: "Post not found" }, status: :not_found
        end
      end
      

def create
    post = @current_user.posts.create!(post_params)
        
    render json: {
      comment: post,
      message: ['Post added successfully']
      
    },status: :created

end

def edit
    
        post = Post.find(params[:id])
      if post.user_id == @current_user.id
        r1 = Post.find_by(id: params[:id])
        if r1
          r1.update(post_params)
          
          render json: {
            post: r1,
            message: ['Post edited successfully']
            
          },status: :created
        else
          render json: { errors: ["Post not found" ]}, status: :not_found
        end
      else
            render json: { errors: ['!You are not authorized to update this post' ]}, status: :unauthorized
          end
      end
      
      def destroy
        post = Post.find(params[:id])
        if post.user_id == @current_user.id
          post.destroy
          
          render json: {
            post: post,
            message: ['Post deleted']
            
          }
        else
          
          render json: { errors: ['!You are not authorized to delete this post!' ]}, status: :unauthorized
        end
      end





private
    
def post_params
  params.permit( :caption, :image, :user_id)
end

end
