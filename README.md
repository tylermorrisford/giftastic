## #failSearch
This app is a simple API search that uses buttons and user input to update the giphy api query url, resulting in different gifs being (and their 'ratings') displayed on the screen.

## Index
1. How it works
2. Game Instructions
3. Built with
4. User Feedback

# How it works
A click event targets dynamically generated buttons and generates a new api query. When the user enters a new 'fail' keyword (ex. 'jumps') that word is pushed into an array, the 'buttons' div content is deleted, and buttons are dynamically created from items in the array.

The api request grabs both still and animated image urls and toggles to the animated url when the image is clicked, using a 'data-state' attribute to track which state each image is currently in. When the category button (top) is clicked, the ten gifs are loaded using the still url, which results in a slightly faster load time. When the users clicks on a gif, a click event changes the data-state and source url for the image, resulting in a moving image. When the user clicks again, the data-state and source url are changed back to still.

# Game Instructions
Click a 'category' button to load the screen with 10 gifs and their 'rating'. If there's a different cateogry you would like to see, type a keyword into the input and click the 'submit' button. Your new category will appear as a new button at the top of the screen - click that button to load your category. 
 
# Built with
* [Bootstrap](https://getbootstrap.com/) - The web framework used
* [jQuery](https://jquery.com/) - logic and events
* [Giphy Developer API](https://developers.giphy.com/docs/api/#quick-start-guide) - API and endpoints

 
# User Feedback
two test users who have seen my previous coursework where given the app; their feedback can be summarized as, "cool, but... how do I play it?"
