# Titanic Passangers Data Dashboard 

This is a single page dashboard represents the data of the passengers of the Titanic. Users can hover over and click on charts and selectors,
to make their own selected groups and compare to an other group. 

This can bring forward facts about the survivors correlation to age, class and genders.

The page uses the D3.js library with the DC.js and crossfilter.js libraries to present the data via a series of bar and pie charts, keep the data analysis clear and simple.

The last bar-chart can be used to select similar age groups. This brings out facts about yunger or elder survivor rates.

Github repository : [https://github.com/aticodein/second-project](https://github.com/aticodein/second-project)

## UX
 
 User experiences: easy to navigate to scroll down, last chart also horizontal scrolling. Clickable "Learn more" button for about the page and
 
 "Reset all Charts" button self-explained. Buttons always on top line to easy access. Charts individual explanatory can be invisible with click on book icon.  
 
 ### User Stories
 
 * As a user, I want to be able to view data about the passangers of Titanic.
 * As a user, I want to be able to view data with different aspects like survivors, gender, age and travelling classes.
 * As a user, I want to be able to see exact numbers after I selected any group.
 * As a user, I want to be able to compare different age groups.
 * As a user, I want to be able to draw my own conclusions from the data and complete my knowledge.
 * As a user, I want to be able to easily reset the data and start over, and not have to worry about manually setting all the values back to their original values.
 
### Wireframes
/assets/images/balsamiq.png

![Alt text](/assets/images/balsamiq.png?raw=true "Title")
#### The mockup made on Balsamiq. I have tried tu use free version and lost the images,
#### but this early stage of the project shows the main concept of the dashboard was:
#### a heading , some explanation (Learn more button made later for same purpose), charts two rows, (side bar was left out later completly) and footer
 
## Features

### Current Features
###### Feature 1 - Top title Jumbotron with image of Titanic
* The top bar contains the name of the site and also a button that when clicked, resets all the filters back to their default values.
* The bar is fixed to the top of the page so even when the user scrolls down, the user can quickly and easily reset the filters at any point. This avoids the need for constant scrolling up and down the page.

###### Feature 2 - Footer
* Footer with Github link to the project repository and the original dataset. JS icon for thanks to Dave Laffan for all his help and advices.

###### Feature 3 - Introduction
* Learn more button for short explanatory and this text doesn't take up space on dashboard.

###### Feature 4 - Dropdown open and closed book icons
* When user is familiar with the charts representations can close the texts over the charts.


###### Feature 5 - Pie Chart
* Better view to proportion visualization.

### Future adds on

###### Menubar
* Detailed menubar with more pages. Such as more history about Titanic and contact or/and sign up pages. 

## Technologies Used

* The following technologies were used in the design and build of this project.

#### [Balsamiq](https://balsamiq.com/) 
- Balsamiq was used for creating the layout during the design stage.

#### [HTML5](https://www.w3.org/TR/html/) & [CSS3](https://www.w3.org/Style/CSS/)
- HTML5 & CSS3 were used to create the layout and styling of this site
- Code validators were used to check for errors with the [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/)

#### [AWS Cloud9](https://www.awseducate.com/student/s/awssite)
- Cloud9 IDE editor used to write the HTML, CSS and JavaScript.

#### [Bootswatch](https://bootswatch.com/3/)
- Bootswatch 3.4.0 ([Spacelab](https://bootswatch/3.4.0/spacelab/) 
- 
#### JavaScript
* JavaScript and selected external libraries have been used throughout this site, in the following ways:
* For the creation and manipulation of the data-visualization elements, JavaScript and the following libraries were used
    * [D3.js](https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js)
    * [DC.js](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.js)
    * [Crossfilter.js](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.js)
    * [D3-queue.js](https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js) was used to load files.
    * [jQuery](https://code.jquery.com/jquery-3.2.1.min.js) was used to assist with DOM manipulation when resetting filters and showing / hiding selected sections.


#### [Font Awesome](https://origin.fontawesome.com/)
- Font Awesome was used to provide the icons for the GitHub an JS logo in the site footer. Book icons for main section.

#### [Git & GitHub](https://github.com/)
- Git used for version control. GitHub used as a remote repository and the hosting of this site.


## Testing ####

Continously used Google Crome developer tools to find mistakes and check looks on different devices and responsiveness.

The following physical devices tested.
- Samsung SM-T580 Tablet
- Samsung A7 phone
- W3 HTML validator
- w3 CSS validator


All user stories listed in the UX section above. 

## Deployment ####

The site was developed using the cloud9 IDE and uses git for version control which is then pushed to GitHub. The site is hosted on GitHub Pages and deployed there from the master branch on GitHub.

[https://aticodein.github.io/second-project/](https://aticodein.github.io/second-project/)

To deploy this project, I took the following initial steps:
- From my GitHub page I clicked on 'Repositories' and selected the required repository, in this case 'superhero-dashboard'
- I then clicked on the 'settings' option, located on the top horizontal menu bar
- Next, I scrolled down the page to the GitHub Pages section and located the dropdown box under 'Source'
- From there I selected the 'master branch'
- These steps resulted in the finished site being deployed at [https://aticodein.github.io/second-project/], (https://aticodein.github.io/second-project/)

## Credits

- Thanks for all help and support to Dave Laffan 

### Content
- Charts dc, d3, crossfilter and queue from CodeInstitute data visualization modul 
- The source dataset was obtained from (https://vincentarelbundock.github.io/Rdatasets/datasets.html).
- Note - The original .csv file contained several unknown data those I have changed to cloesest similar group dataset.


### Media
- The background image was sourced from (https://en.wikipedia.org/wiki/RMS_Titanic).

### Acknowledgements ####
- Ali Ashik my New Code Institute mentor for advices and guidance.
- The slack channel community over at [Code Institute](https://codeinstitute.net/), and specifically thanks to 'Miklos Sarosi' 'Eventyret' and 'Dave L' for their helpful feedback.