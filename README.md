# Responsive Web Design with HTML5 and CSS - 4th Edition

Responsive Web Design with HTML5 and CSS, Fourth Edition, published by Packt

For more about this title, visit [rwd.education](https://rwd.education)

Queries? Create an issue, contact the author on [Twitter](https://twitter.com/benfrain) or via his [website](https://benfrain.com)

<a href="https://rwd.education"><img src="https://benfrain.com/wp-content/themes/bf2018/img/rwd4.jpg" style="max-width: 600px;" alt="Responsive Web Design with HTML5 and CSS, Fourth Edition"/></a>

## Building the 'rwd.education' site

You can browse the source files used to build the [rwd.education](https://rwd.education) website here.

To build the site I used [vitejs](https://vitejs.dev/) to speed development.

**Note** that a CSS post-processor step was used so I can nest media queries inside selectors (see Chapter 14 for more info) and TypeScript was used for the little bit of JavaScript.

I also used the rather lovely [https://realfavicongenerator.net/](https://realfavicongenerator.net/) to make all the favicon images/manifests.

If you are curious and 'don't mind getting your hands dirty', included in the folder should be everything you need to run it up in a local server yourself.

-   You will need to install a recent version of Node (I used 16 if memory serves)
-   You will need to install [Vite](https://vite.dev) v3
-   Run <code>[sudo] npm install</code> in Terminal from the 'rwd.education' folder
-   Assuming all installs OK (cross all your digits!), after everything is installed, you should now be able to run `npm run build` from the Terminal and away you go.

Problems? Open an issue, Tweet at me or send me a mail. Happy building!
