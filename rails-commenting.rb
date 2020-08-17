# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The blog post controller
class BlogPostsController < ApplicationController
  def index
    # 2) declaring a instance variable that contains all the blog plots, will be referenced in the view
    @posts = BlogPost.all
  end

  def show
    # 3) creating a instance variable for a specific blog post, which can be passed an id in the url
    @post = BlogPost.find(params[:id])
  end

  # 4) calling the new page, no action is needed from the database so rails magic will look for a page called new
  def new
  end

  def edit
  end

  def create
    # 5) create a blog post by getting the info from the view and sending it to the model, calling strong params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) if the requirements aren't meant to delete a post, it will redirect the user to the show page
      redirect_to blog_post_path(@post)
    end
  end

  # 7) a keyword that protects the methods below this line, the methods below can only be called inside of this class
  private
  def blog_post_params
    # 8) only the columsn title and contect will have information
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) the blog post model
class BlogPost < ApplicationRecord
  # 10) it has an association with comments
  has_many :comments
end
