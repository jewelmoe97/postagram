# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u2= User.second



Post.create(image: "https://weighteasyloss.com/wp-content/uploads/2018/03/28433324_214772239264210_6742195603486277632_n-1024x1024.jpg", caption: "idk", user_id: u2.id)

Post.create(image: "https://th.bing.com/th/id/OIP.49PuGOqa8t8-MsNSMpectgHaE6?pid=ImgDet&rs=1",caption: "duh", user_id: u2.id)
Post.create(image: "https://www.saltstrong.com/wp-content/uploads/Honeymoon_Island_Insider-report-pic.jpg", caption: "may b", user_id: u2.id)


