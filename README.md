## Arcadian

Arcadian is a pinball arcade management app made to:

* Help arcades show off their current machine line-ups
* Allow players to report mechanical issues that arise during play
* Give owners a to-do list of needed repairs based on crowdsourced reports

### Motivation

As an active member of the DD Pinball League I wanted to build a practical solution for a frequent problem.

Arcade owner-operators are generally responsible for the upkeep of their machines, but tend to rely on word of mouth to find out what's not working on their admittedly complex games! Why not allow player to report these directly, in real time?

This project is currently proof-of-concept for an idea I'd like to develop further, get in touch if you have feature ideas or want to collaborate!

### Demo Video

On YouTube: https://youtu.be/Jb8wXfcI_Go

### Installing Locally

You will need to clone both the front and back end to your local machine.
[Front End] : https://github.com/drubaby/arcadian-frontend/
[Back End] : https://github.com/drubaby/arcadian-backend/

With Postgres running, navigate to the back end directory and run `rake db:seed` to populate the app with locations and a few random machines in each arcade. Next, run `rails s` to start the rails server.

From the front end directory run `npm install` to load all dependencies and then `npm start` to start the local server. This should automatically open the project in your browser.

## Credits

DC Pinball Locations seeded from the Pinball Map API: http://pinballmap.com/api/v1/docs

Pinball Machine data seeded from the Open Pinball Database API: https://opdb.org/api
