# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id: integer, on the belongs_to side, Sightings

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: routes that take in dynamic content from the user, post request will get passed information from a form
  Put/patch, delete, show - routes always act on a single record
  Show, update, destroy

  Researched answer:



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer: get 'game/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate migration - migration file, with unique timestamp
  rails generate model ModelName attribute:datatype - table in database, model class, schema, migration
  rails generate controller - controller, view folder
  rails generate resource - routes, model, controller, view folder

  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users       all the users, index   

method="GET"    /users/1     one user, show

method="GET"    /users/new   html page for new entry, inputs

method="GET"    /users/edit/1   html page to edit data of id 1

method="POST"   /users     creating a new user, onSubmit       

method="PUT"    /users/1      editing user with id of 1, onSubmit

method="DELETE" /users/1      delete the user with an id of 1
