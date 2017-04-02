Installation:
Browse to the root folder in command line after unzipping the file.
Run npm install to download dependencies.
The solution can be run in dev mode by running the command "npm start" which will launch the app in a browser.
The solution can be run in production mode by running the command "npm run build" which will compile the files into a dist folder and launch the app in a browser.
The widget is keyboard accessible and be used and navigated(collapsed and navigated)entirely with a keyboard only.

Notes:
The solution uses React for the widget and Redux to store the Json data. The data is initialised as the stores initial state when the app starts.
To simulate an error, the line of code in the productsApi.js file can be uncommented, this is just a simple console.log.
The Json supplied contained some question mark unicode characters, not sure if this was intended but left it as is.
The Json also contained some html, this is not ideal and could introduce security holes.