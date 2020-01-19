## Inspiration

As university students, we have first-hand experience with the unhealthy habits of our peers. We noticed a lack of commitment towards a healthy lifestyle. Therefore, wanted to create a fun and easy solution for students to not only strive to achieve a better lifestyle but to motivate others in their social circle.

## What it does

McFitt is a social platform that allows students to track their nutritional habits and physical activity in an easily accessible way. It allows you to influence and be influenced by your group of friends to stay on track with your nutritional and physical goals. In order to provide the user with accurate analytics, we based the number of calories that a student should consume in a day based on their physical profile according to Health Canada.

## How we built it

We built McFitt using NodeJs (Express.js) to handle all of our app's requests. Bootstrap and the EJS templating engine to manage our frontend, as well as AJAX and jQuery to dynamically render our HTML pages. We also hosted our NodeJs server using DigitalOcean's Virtual Machine. Our app implements two APIs. The first allows us to dynamically retrieve nutritional information on the meals you input. The second API allows us to calculate the calories burned during a workout.

## Challenges we ran into

We ran into a few major problems throughout the creation of our project. First, we ran into difficulty setting up the API to correctly GET and parse the data, as each of the API we used utilities different method and file structure, so we had to adapt to each one of them. Secondly, placing and dynamically updating the numerous charts on the app was quite challenging. Finally, we had to go through quite a long tedious process to host our NodeJs server using DigitalOcean's Virtual Machine.

## Accomplishments that we are proud of

We were very pleased with the fact that we successfully implemented Plot.ly charts into our web application which automatically update based on the user's inputted meals. We are also very proud to have made a practical and appealing social app from frontend to backend in time for the end of the hackathon.

## What we learned

Half of our team got to learn how to use and implement JavaScript in a project for the first time during the hackathon. We also gained experience using NodeJs and APIs. We furthermore learned how to host a server on DigitalOcean's platform.

## What's next for McFitt

-Moving our database to the cloud -Implementing an easier-to-use Login and Register system -Implementing a reward system to further encourage users to stay on the platform -Make the app mobile-friendly

## Built With
- NodeJs (Express.js)
- DigitalOcean
- Bootstrap
- Javascript, AJAX, jQuery, EJS
- HTML, CSS
