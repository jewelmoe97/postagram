class CommentsController < ApplicationController
    def index
          
        # render json: Comment.all
        comments = Comment.includes(:user, :post).all
    render json: comments, include: [:user, :post]
      end 

      def create
        comment = @current_user.comments.create!(comment_params)
         # render json: comment, status: :created
         render json: {
           comment: comment,
           message: ['Comment added successfully']
           
         },status: :created
       end

       def destroy
        comment = Comment.find(params[:id])
        if comment.user_id == @current_user.id
         comment.destroy
          # render json: { message: 'Comment deleted' }
          render json: {
            comment: comment,
            message: ['Comment deleted!']
        }
        else
          render json: { errors: ['!You are not authorized to delete this comment!' ] }, status: :unauthorized
        end
 
      end
       private
    
       def comment_params
         params.permit( :user_id, :post_id, :text)
       end

end
