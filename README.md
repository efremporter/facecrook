# README

Full Stack clone of Facebook.com

Live link: https://efremfacecrook.herokuapp.com/

Technologies used: PostGreSQL, Ruby on Rails, Javascript, React & Redux, Amazon Web Services S3 (AWS), HTML, CSS

Facecrook is a Facebook clone, with a slight spin. Originally, the plan was to give it a theme and populate the database with "missing person" reports as posts. After two weeks of learning and struggling, I ended up populating the database with fun facts!

In Facecrook, users are able to sign up, log in, and sign in as a guest, using the "guest log in" button. 
<img height="200" alt="Screen Shot 2022-02-04 at 10 06 08 AM" src="https://user-images.githubusercontent.com/89431346/152580293-f9f47e97-8b2e-47b5-b712-9790d6108e72.png">
<img height="200" alt="Screen Shot 2022-02-04 at 10 06 58 AM" src="https://user-images.githubusercontent.com/89431346/152580415-b7504e01-460b-48de-8bb3-942207ee8836.png">

Once logged in, users are redirected to the feed page. While a user is logged in, he/she can no longer navigate to the sign up or login page. On the feed, users have access to all the posts that are authored by their friends. </br>
<img width="300" alt="Screen Shot 2022-04-04 at 3 09 07 PM" src="https://user-images.githubusercontent.com/89431346/161640243-7b1766d2-f70e-4385-aeb2-a484e6239b57.png">

Users can also create a post on the feed by clicking the "What's on your mind?" prompt, which opens up a post modal.
<img width="300" alt="Screen Shot 2022-04-04 at 3 10 49 PM" src="https://user-images.githubusercontent.com/89431346/161640420-e5180c60-fc88-493a-a580-70594e24c882.png">


Users can then navigate to their own profile by clicking on the icon that has their profile picture and first name in the top right of the page.
<img width="136" alt="Screen Shot 2022-04-04 at 3 18 57 PM" src="https://user-images.githubusercontent.com/89431346/161641289-266dc5c8-66e8-499c-b442-3c1545ca6f35.png">

If you visit your own profile, you're able to change the cover photo and profile photo by clicking on the camera icon next to each image.
<img width="400" alt="Screen Shot 2022-04-04 at 3 23 13 PM" src="https://user-images.githubusercontent.com/89431346/161641683-0648de22-cf8e-4c2c-87a2-679c9d1410a7.png">

A count of your friends will appear underneath your profile, along with different profile components that you can visit.
<img width="248" alt="Screen Shot 2022-04-04 at 3 24 15 PM" src="https://user-images.githubusercontent.com/89431346/161641786-aebe849d-4937-4f7c-bac3-ffe08bf4de9f.png">

The left side of the profile houses the photos and friends component. The right side is an index of all posts that have been authored by the user, as well as posts that have been authored by friends on the user's profile. <br />
<img width="400" alt="Screen Shot 2022-04-04 at 3 25 32 PM" src="https://user-images.githubusercontent.com/89431346/161641926-2ccaffdb-ccb9-42f5-a416-188f78eb50fe.png">

If you select "See all friends", you are shown a friends index. This displays all the friends of that particular user.
<img width="300" alt="Screen Shot 2022-04-04 at 3 27 15 PM" src="https://user-images.githubusercontent.com/89431346/161642131-72688795-ebe9-4158-bef8-15b166f18cf2.png">

If you select "See all photos", you are shown a photos index. This displays all of the photos that a user has posted on his/her own profile.
<img width="300" alt="Screen Shot 2022-04-04 at 3 30 44 PM" src="https://user-images.githubusercontent.com/89431346/161642465-365bb902-7ca2-46fa-a1ed-3016ff5aec96.png">


Users can also navigate to another person's profile by selecting that user's profile picture or name at any given point in the app. 

Users can then create posts on another person's wall! It will display the post as well as who wrote it!
<br />
<img width="300" alt="Screen Shot 2022-04-04 at 3 33 05 PM" src="https://user-images.githubusercontent.com/89431346/161642728-7c2c51e5-18d7-4b8e-aba4-567e7754ed50.png">

Users are also able to like and comment on posts. These will persist, even when you log out and log back in.
<img width="300" alt="Screen Shot 2022-04-04 at 3 34 14 PM" src="https://user-images.githubusercontent.com/89431346/161642861-b0413a1f-829a-4cca-9e40-9c92cf323d99.png">


In order to build this app, I used a number of technologies. For my backend, I used Ruby on Rails and a PostgreSQL database. For my frontend, I used React/Redux and Javascript. For styling, I used HTML and CSS. In order to get pictures to show and persist (like profile pictures), I used Amazon Web Services (AWS) S3.

I'm particularly proud of the feature that allows a user to post. This feature took me well over a full workday to complete. The biggest issue that I ran into was fetching the correct user to display on the post, and more importantly, how to fetch that user. I ended up using a router to wrap the component, which gave it access to the "ownProps" variable, which I then keyed into to access the userId.

Future directions for project:
* Search
  * Users can search for other users
* Messenger
  * Users can privately message other users 
* Groups
  * Users can create and join groups that interest them
