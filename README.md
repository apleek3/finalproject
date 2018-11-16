# Synthro
## Overview
Heroku deployed app created to show empathy and improve our skills as Web Developers: 

## Our Objectives
> To use our Dev skills for good; our aim was to refine our ability to implement common web accessibility features.
> To make this app feel as Accessible as possible for users who have overcome disabilities; using best practices for Web Accessibility according to [WebAIM Guidelines](https://webaim.org/resources/designers/).  

## Group Members: 
### Kathrin Byard, Marc Alkons, Jill Morimoto, and Alex Lee

## Project Requirements:
### UCD Ext. Course Project 
* Must use React, Vue, or Angular (even if minimal)
* Must use Node & Express
* Must be backed by MySQL or MongoDB (with the appropriate ORM)
* Must have both GET and POST routes for retrieving and adding new data
* Must utilize at least two libraries, packages, or technologies that we haven't discussed
* Must be deployed to Heroku
* Must allow for involve the authentication of users in some way
* Must have a polished frontend / UI
* Must meet good quality coding standards
* Must not expose sensitive API Key information


## Technologies We Used:

### MERN Stack
* MongoDB / Mongoose - for storing and retrieving informationn
* Express - for conducting app through ports and connecting our users and servers 
* React - for using fun, mutable, and changeable components
* Node.js - for running and testing our app outside of a browser

### Business as Usual...
* Heroku - for deploying the app to a cloud!
* Robo3T (formerly RoboMongo) - for interacting with our Mongo DB in a lightweight fashion
* HTML - for making the bones of the app. As is tradition.
* CSS - for manual styling of certain elements and connecting new animation library (see below)
* jQuery - for manipulating DOM elements not connected to React
* Bootstrap - for mobile friendly, fast CSS work

### NEW STUFF! (for us)
* GreenSock Animation Platform (GSAP) - for making a dynamic and fun web page using new animation features. Three Libraries were learned and employed for this project:
1. ThrowPropsPlugin.js - allows manipulation of objects so they appear to be "thrown" and snapped to various positions on a canvas
1. Draggable.js - allows the dragging of DOM elements so that items can be carried about with the cursor. Made for some very interesting combinations including our Hue, Saturation, and Lightness Dials.
1. TweenMax & TweenLite - Libraries for animating DOM elements. A very interesting and fun language for dynamically styling elements so they can change color, disappear, ease, fade, and move in dynamic ways!


## Setup
### To use this application locally:
1. Set up MongoDB on your machine.  [MongoDB](https://www.mongodb.com/) 
1. Set up Robo3T: [Robo3T](https://robomongo.org/)
1. Set up a new local MongoDB connection in Robo3T.
1. If you haven't already: clone this repository to your computer
1. Open a 1st terminal window: cd to the root of the directory and install the node dependencies -- npm i --
1. After the installation is complete: use command -- node server -- within this 1st terminal window. Expected output: "API Server now listening on PORT 3001..."
1. Open a 2nd terminal window: cd to the client folder at the root of the directory and use command -- npm start -- Expected output "Starting the Development Server" ----> "Compiled successfully!"
1. Open a 3rd terminal window: use command -- mongod -- Expected output: a buttload of stuff.
1. Open a 4th terminal window: use command -- mongo -- Expected output: a buttload more stuff.  
1. Navigate to localhost:3000 in your browser
1. Navigate around the page and try to discover all the different features!

#### Detailed example command line codes for getting started locally: 

    $ git clone https://github.com/apleek3/finalproject.git
    $ cd --your file path--../finalproject
    $ npm i
    $ node server (in another bash, cd to root folder)
    $ npm start (in another bash, cd to root folder then client folder)
    $ mongod (in another bash)
    $ mongo (in one last bash)



### Notes about Synesthesia
This app was created with three specific health conditions in mind: [Synesthesia](https://www.apa.org/monitor/mar01/synesthesia.aspx), Varying levels of Blindess (not inlcuding total blindess), and [Color Blindness](https://www.aao.org/eye-health/diseases/what-is-color-blindness). 

While it was desirable for us to appeal to every form of Web Accessibility, we decided to refine our skills using techniques, tools, and practices that would in some ways appeal to each of these conditions. One of the overarching goals of the project was to aim for 100% Web Accessibility per our Chrome Developer Tools Audit in order to appeal to varying levels of blindess; the app was intended to be considered better than adequate for use with a screen reader. Next we wanted to tailor the app for users experiencing difficulty with distinguishing colors. While there are various forms of color blindness we wanted to appeal to all of them by focusing on colors that contrasted with font large enough to read for most users. Lastly, we incorporated a Hue, Saturation, and Lightness adjustment tool in the app so that those with color perception difficulties could find utility in it and those with Synesthesia might find joy!




We hope you enjoy and see some utility in these tools for yourself and for others!




## DEMO
### Want to see a demo of it working? 
### Click here: [Synesthesia Video]()

### Want to do it live?
### Click here: [Synesethesia App]()
