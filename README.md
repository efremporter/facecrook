# README

Live link: https://efremfacecrook.herokuapp.com/

Technologies used: PostGreSQL, Ruby on Rails, Javascript, React & Redux, AWS S3

Facecrook is a Facebook clone, with a slight spin. Originally, the plan was to give it a theme and populate the database with "missing person" reports as posts. After two weeks of learning and struggling, I ended up populating the database with fun facts!

In Facecrook, users are able to sign up, log in, and sign in as a guest, using the "guest log in" button. 
<img height="200" alt="Screen Shot 2022-02-04 at 10 06 08 AM" src="https://user-images.githubusercontent.com/89431346/152580293-f9f47e97-8b2e-47b5-b712-9790d6108e72.png">
<img height="200" alt="Screen Shot 2022-02-04 at 10 06 58 AM" src="https://user-images.githubusercontent.com/89431346/152580415-b7504e01-460b-48de-8bb3-942207ee8836.png">

Once logged in, users are redirected to the feed page. While a user is logged in, he/she can no longer navigate to the sign up or login page. On the feed, users have access to all the posts that are authored by their friends.

<img width="300" alt="Screen Shot 2022-04-04 at 3 09 07 PM" src="https://user-images.githubusercontent.com/89431346/161640243-7b1766d2-f70e-4385-aeb2-a484e6239b57.png">

Users can also create a post on the feed by clicking the "What's on your mind?" prompt, which opens up a post modal.
<img width="523" alt="Screen Shot 2022-04-04 at 3 10 59 PM" src="https://user-images.githubusercontent.com/89431346/161640397-185f60b2-4422-4459-b6a8-16ee8f87cf83.png">
<img width="565" alt="Screen Shot 2022-04-04 at 3 10 49 PM" src="https://user-images.githubusercontent.com/89431346/161640420-e5180c60-fc88-493a-a580-70594e24c882.png">


Users can then navigate to their own profile by clicking on the Facecrook logo in the top left hand corner. Here, users can create posts and have them update in real-time!
<br />
<img height="300" alt="Screen Shot 2022-02-04 at 10 08 45 AM" src="https://user-images.githubusercontent.com/89431346/152580650-63caecbd-0440-4675-bca4-0cbe81f1c955.png">
<img height="300" alt="Screen Shot 2022-02-04 at 10 09 34 AM" src="https://user-images.githubusercontent.com/89431346/152580791-bcd8be89-8c5c-4944-b9d2-6c31ff3cb33d.png">


Users can also navigate to another person's profile by typing in their user id. Users can then create posts on another person's wall! It will display the post as well as who wrote it!
<br />
<img height="300" alt="Screen Shot 2022-02-04 at 10 10 20 AM" src="https://user-images.githubusercontent.com/89431346/152580893-ad5cea17-8991-4457-8e73-dc33fbe9aae6.png">

In order to build this app, I used a number of technologies. For my backend, I used Ruby on rails and a PostgreSQL database. For my frontend, I used react/redux and javascript. For styling, I used HTML and CSS. In order to get pictures to show and persist (like profile pictures), I used Amazon Web Services (AWS).

I'm particularly proud of the feature that allows a user to post. This feature took me well over a full workday to complete. The biggest issue that I ran into was fetching the correct user to display on the post, and more importantly, how to fetch that user. I ended up using a router to wrap the component, which gave it access to the "ownProps" variable, which I then keyed into to access the userId.

Future directions for project:
* Feed
  * Show the current user a curated feed of their friend's posts
  * Allow navigation to other profiles by clicking the name or profile picture on posts
* Likes
  * Allow users to like posts
* Comments
  * Allow users to comment on posts
* Friends
  * Allow users to add friends
* Search
  * Allow users to search for other users
