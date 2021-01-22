## Synonym Chaser App

This app creates a cloud of search inputs out of returned results from an inital query via Thesaurus API. Clicking any of the search-text-buttons adds that word to a list and refreshes the cloud with results from that word, and so on. The result is an interactive Thesaurus experience that tracks a cart of all the words that lead to the current one.

This project is developed as part of MS2 Interactive Front End module at Code Institute. It is developed with React via [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


[Back to top](#table-of-contents)
___
___
## Features
___
### Existing Features
___

#### Search
___

  - Text about search

#### Results
___
  - Text about results

#### Saved List
___
  -  text about saved list

#### Dashboard Static Landscape Mode
___
- The project features a dashboard mode, which is a version of the static/expanded state with the side menu open. In this mode, the side menu functions as a document outline with at-a-glance info and data visualization enabled by Scrollspy events occurring in the adjacent body.

#### Display string
___
  -  Text about display string

#### Clear/Add/Remove
___
  -  Text about reducers


#### Mode
___
- Text about theme

#### Context / theme / counters
___
- Text about hooks

___
### Features Left to Implement
___

- Refine the search.
  - To refine search.
- Database schema
  - To add schema with apollo client.
- Deep merge
  - ability to merge history

___
___
## Technologies
___
### Languages
___

1.   [HTML5](https://en.wikipedia.org/wiki/HTML5)
2.   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
3.   [JavaScript](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
___
### Frameworks and Libraries
___


1. [Nextjs 5.8.2:](https://mdbootstrap.com/docs/standard/getting-started/installation/)
    - MDBootstrap's free kit is the primary front-end framework used to do much of the heavy.
2. [Material UI 5.2.3:](https://ionicons.com/)
    - A curated selection of [components](https://ionicons.com/)'s premium designed icons are attached to index.html's `head` as a set of differential JS script tags ([unpkg.com](https://unpkg.com/browse/ionicons@5.2.3/dist/)) and are featured in main navigational button icons.
3. [FontAwesome 5.8.2:](https://fontawesome.com/)
   - Secondary and/or supporting icons, mostly for brand logos are referenced from FontAwesome's vast library of responsive, easily-adjustable icons.
   - FontAwesome icons are inserted in `<i>` elements when used as support imagery for existing text; and inserted in `<span>` elements when used as an independent feature.
4. [Adobe Fonts:](https://fonts.adobe.com/)
    - All font families are hosted from [Adobe Fonts ](https://fonts.adobe.com/) via an `@import` url and [typekit](https://blog.typekit.com/) in style.css.

___
### Programs and Software
___

1. [WebStorm:](https://www.jetbrains.com/webstorm/)
    - WebStorm 2020.2 by [JetBrains](https://www.jetbrains.com/) is the web development IDE used to locally construct the project -- helpful for its seamless tool integration, coding assistance, and ecosystem of plugins; namely: [JetBrains W3C Validators](https://plugins.jetbrains.com/plugin/11541-w3c-validators) built in as code quality tools; [Yet another emoji support](https://plugins.jetbrains.com/plugin/12512-yet-another-emoji-support/) for (the obvious) and; [Markdown Navigator Enhanced](https://plugins.jetbrains.com/plugin/7896-markdown-navigator-enhanced/) for its advanced support of [GFM](https://github.github.com/gfm/) in local editors.
2. [Git:](https://git-scm.com/)
    - Git is used as the version control system and is utilized via the WebStorm terminal to `commit` to Git and `push` to GitHub.
4. [GitHub:](https://github.com/)
    - GitHub is used to store the project's code and directory upon concurrent `push`es via Git.
5. [Adobe INDD:](https://www.adobe.com/sea/products/xd.html)
   - Adobe indd is the user experience design tool and workspace used to mock up the project from low fidelity wireframes to high fidelity prototypes. XD's templates along with its plugin [Whiteboard](https://xd.adobe.com/ideas/perspectives/leadership-insights/new-whiteboard-plugin-adobe-xd/) were used for diagramming mind maps, user journeys and site maps.

___
___
## Testing
___
### User Testing
___

#### __New Visitor Goals__
___

1. _As a new visitor, I want to have a good understanding of what the application does within a few seconds._

    - The website features a search text field prominently to indicate its primary purpose.

2. _As a new visitor, I want to be led seamlessly through the site to arrive at valuable content with the minimum amount of clicks._

   - The website is a single page app with Tabs to swipe between the two views: Search and Saves.

#### __Returning Visitor Goeals__
___

1. _As a Returning Visitor, I want to find synonyms for a word._

    - The application is written to return Synonyms, Related Words, Synonymous Phrases and Similar Words for any word in the english language via Thesaurus API..

2. _As a Returning Visitor, I want to be able to reference previous words I have queried to understand how similar words with different meanings might relate to each other ._

    - The website features the ability to view all previous queries, grouped by their sense definition..

#### __Frequent Visitor Goals__
___

1. _As a frequent visitor, I want to better understand and compare the meanings of nuanced usages of a particular term._

    - The website features a display string that interactively updates a word within the scope of that word's definition.

2. _As a frequent visitor, I want to ensure I have control of the privacy of own search history._

    - The website features ability to clear the cache.


___
### Documentation Notes
___

1. The result instance and iterating through the JSON as it is returned,  forking at each array nest every time a new unknown length array has to be iterated .

    <br>
    <details><summary> Example JS </summary>
    <br>

     ```JavaScript

         // test

     ```

    <br>
    </details>
    <br>

2. Directory follows Vercel documentation but moved to src folder, .

3. _Document custom and serverSide props.

>*Note: All descriptions of atypical methods can be found within style blocks in style.css.*

### Code Testing
___

- The W3C Markup Validator (Nu Html Checker) and W3C CSS Validator Services continue to be used to validate the single html page (index.html) and the css URI of the project (/assets/style.css) to ensure no errors, alerts or flags pertaining to html and css syntax. Some warnings for "potential misuse of aria-label" were reviewed; the elements that remain are deemed usable and beneficial. See [Accessibility Testing](#accessibility-testing).

    -   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Findex.html)
    -   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)
   -   [Vercel Testing](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Findex.html)
    -   [Vercel Plugin](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)

> Note: 1) Several parse errors are flagged around vendor prefixes. [AutoPrefixer](https://autoprefixer.github.io/)'s web version was used to manually add vendor prefixes without the PostCSS plugin.
>   2\) W3C is [widely known](https://stackoverflow.com/questions/57661659/w3c-css-validation-parse-error-on-variables) to attach a parse error to every custom property/custom variable.

### Accessibility Testing
___

- [ChromeVox Extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) was used to ensure that screen-reader accessibility standards are met. This was done by walking through the entire project with the screen-reader plugin enabled. Various adjustments were made following these tests. Notably, positioning of the checkbox `input` and its highly styled `label` were adjusted to have egalitarian accessibility.

### Browser Testing
___

- Throughout the development of the project, in-browser dev tools were used to test for consistency across browsers. The browsers themselves were equally used for general use-case testing. The following browsers' per-device applications were accessed with an iPhone 11 Pro, MacBook Pro 15" and iPad Pro 12.9":
  - Chrome Version: 83
  - Firefox 82
  - Opera 72
  - Safari 14

### Known Bugs
___

- xx.
- xx.

[Back to top](#table-of-contents)

___
___
## Deployment

The project uses GitHub Pages to deploy index.html from the root directory of the project's repository. This is achieved via the following steps.

1. Committing and pushing the code from my local IDE to Github via Git and my MacBook's iTerm terminal.
1. Logging in to GitHub and accessing the [GitHub Repository](https://github.com/israelias/resume-redux) for this project.
2. Accessing "Settings" via its tab button, located at the end (right) of the repository's menu tabs.
3. Scrolling down to the sixth section of the "Settings" page, to "GitHub Pages"
4. Beneath "Source", selecting the dropdown defaultly set to "None" and choosing "Master Branch".
5. Waiting for the page to refresh and finding a note above "Source" to appear and indicate:
    > "Your site is published at *https://username.github.io/repository-name/*"

Code is locally run via WebStorm as described in [Programs and Software ](#programs-and-software). Two branches.

The project can be used as a means for featuring a variety of media. To clone this repository (*Exact literature is sourced from Code Institute's template*):

1. Select the Repository from the Github Dashboard.
1. Click on the "Clone or download" green button located above and to the right of the File Structure table.
1. Click on the "clipboard icon" to the right of the Git URL to copy the web URL of the Clone.
1. Open your preferred Integrated Development Environment (IDE) and navigate to the terminal window.
1. Change the directory to where you want to clone the repository to.
1. Paste the Git URL copied from above and click "Ok".

[Back to top](#table-of-contents)

___
___
## Cloning This Repository

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the project:

```bash
npx create-next-app --example environment-variables environment-variables-app
# or
yarn create next-app --example environment-variables environment-variables-app
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

___
___
## Credits
___
### Code
___

- Damien L. Gilliams' tutorial on [how to embed LinkedIn recommendations](https://www.damosdesigns.com/LinkedinRecommendationsOnWebsite/) takes care of a whole section in the project, and is a great lesson on appropriation. Directly following Mr. Gilliams' tutorial, the style block for `#target-six`'s Recommendations section in style.css are only slightly modified from the tutorial. This style block includes Mr. Gilliams' original comments.  Equally, the code in index.html for the Recommendations section is taken from the owner's public LinkedIn profile, with adjustments per Mr. Gilliams' tutorial. One adjustment for the project was to wrap each recommendation item in a `<figure>` element, both for semantic clarity and for application of some of the project's signature styles such as a gradient and a border radius.

- Taking Damien L Gilliams' LinkedIn CSS styles a steph further, the list of awards featured in `#target-six`'s Awards section in index.html applies Mr. Gilliams' appropriation style to the "Accomplishments" section of the owner's public LinkedIn profile. Code for this extensive `<ul>` was only slightly modified for margins. The CSS rulesets extracted from this exercise are added to the style block following the Recommendations style block and Mr. Gilliams's notes in style.css.

- GitHub's  progress bar styles and language colors were appropriated in the project by inspecting the HTML of the project's repository page, and using the colors it assigns for languages. [MDBootstrap's Progress bar](https://mdbootstrap.com/docs/standard/components/progress/) class was then utilized to show these percentages.

- The landing section's "highlighted text" feature uses CSS from [John Negoita's examples](https://medium.com/@codingdudecom/highlight-text-css-97331a5b71b5). Complete descriptions of customization is described in style.css.

### Content and Media
___

- All written content and media outside of iconography and typography are conceived by the owner or retrieved from the owner's public profiles.
- Thesaurus API.

### Acknowledgements
___

- Reducers reference.
- React blogs.
- Material UI components.
- The site's favicon was generated via [Real Favicon Generator.net](https://realfavicongenerator.net/) following Philippe Bernard's [comprehensive summary on favicons](https://css-tricks.com/favicon-quiz/).
- Github Repo module.
- The development of this README.md takes precedent from various templates and samples throughout Code Institute's course. The development of the UX section and Jesse Garret's Five Planes of UX equally take direct inspiration from Code Institute's course.
- The Slack community at Code Institute, namely the senior leads, for being generous and quick to offer endless assistance and advice.
- Tutor Support at Code Institute for offering invaluable technical support.
- My mentor Aaron Sinnott for his support, time investment and for helping to push this project to be the best that it can be.

[Back to top](#table-of-contents)

