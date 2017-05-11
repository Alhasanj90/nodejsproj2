# Football Player List API
A simple REST API project that list players information by using http to list, add,
update and delete data.

## Heroku
In order to push the API to Heroku I have used the Following code in terminal:

### $ heroku login 
using my heroku email and password.
### $ heroku git:clone -a evening-bayou-82070
using the source code to my local machine
### Push to heroku
to push the files to heroku and each time made change to the API i used the following:
### $ git add .
### $ git commit -am "make it better"
### $ git push heroku master

#Player List in Heroku

![screen shot 2017-05-11 at 15 05 15](https://cloud.githubusercontent.com/assets/17804084/25953541/a341b91e-365b-11e7-8ec0-24f5d6df480d.png)

this how is the players list look in Heroku as we listed all the players in the database.

## Add a player

Using Advanced REST client
we have to use application/json to add player to the list. 

![screen shot 2017-05-11 at 15 20 02](https://cloud.githubusercontent.com/assets/17804084/25954251/925ce144-365d-11e7-8ce2-0d53797cdeda.png)

As we can see above the API use Validation for the age so we got an error when trying to add a player with age less than 18.

![screen shot 2017-05-11 at 15 25 26](https://cloud.githubusercontent.com/assets/17804084/25954413/23314bf6-365e-11e7-80a1-0f808eef60f3.png)

The above Screenshot shows that we added a player when changing the age of the player.

### Player added in Heroku
![screen shot 2017-05-11 at 15 28 56](https://cloud.githubusercontent.com/assets/17804084/25954612/c7390ebe-365e-11e7-9aec-3b4d7b955369.png)


## Update Player
to update the same player that we just added to the list we should use the heroku link and the player ID 
as following :

