
![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_performance.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_accessibility.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_best-practices.svg?raw=true?sanitize=true)![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_seo.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_pwa.svg?raw=true?sanitize=true) 

![](https://github.com/israelias/synonym-chaser/blob/master/public/og-image-synsearch-app01redblue_Light.png?raw=true)

---
# SynonymSearch
---

## A *meaningful* thesaurus.

Remember all the words you find when you use a Thesaurus.


SynonymSearch helps you to review what you've just learned (and might otherwise forget) by sorting a list of all your search queries by their shared definitions as you're finding them. 

SynonymSearch lets you test the similarity of synonymous words by injecting them into a sentence whose meaning depends on the definition they share. The app helps you actively make sense of a definition and then review it against a repository of synonyms.

<!-- SynonymSearch also always lets you know when you've found a word that you should "already know."  -->

This project is developed as part of MS2 Interactive Front End module at Code Institute. It is written to work with [Merriam-Webster's Collegiate® Thesaurus](https://dictionaryapi.com/)'s JSON response format, and is developed with [React](https://reactjs.org/) via [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed with [Vercel](https://nextjs.org/docs/deployment).

Please visit the project here: [synonyms.vercel.app](https://synonyms.vercel.app/)

## Contents

[TOC levels=1-3]: #

# Table of Contents
- [Resume Re: UX](#resume-re-ux)
  - [UX](#ux)
    - [1.0 Strategy](#10-strategy)
    - [2.0 Scope](#20-scope)
    - [3.0 Structure](#30-structure)
    - [4.0 Skeleton](#40-skeleton)
    - [5.0 Surface](#50-surface)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Technologies](#technologies)
    - [Languages](#languages)
    - [Frameworks and Libraries](#frameworks-and-libraries)
    - [Plugins](#plugins)
    - [Programs and Software](#programs-and-software)
  - [Testing](#testing)
    - [User Testing](#user-testing)
    - [Notable Methods](#notable-methods)
    - [Documentation Notes](#documentation-notes)
    - [Code Testing](#code-testing)
    - [Accessibility Testing](#accessibility-testing)
    - [Browser Testing](#browser-testing)
    - [Known Bugs](#known-bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Code](#code)
    - [Content and Media](#content-and-media)
    - [Acknowledgements](#acknowledgements)

___
___
## UX
___
### User Stories
___

#### __New Visitor Goals__
___

- _As a new visitor, I want to have a good understanding of what the application does within a few seconds._


- _As a new visitor, I want to intuitively understand how to navigate the site without additional instructions._



- _As a new visitor, I want to access valuable content from any device, with minimal wait time and with a minimal amount of clicks._



- _As a new visitor, I want to understand the source of the site's content._



#### __Returning Visitor Goals__
___

- _As a Returning Visitor, I want to use a thesaurus to find groups of words with the same or similar meanings._



- _As a Returning Visitor, I want the ability to see a history of my searched words grouped by their synonymous definitions._



#### __Frequent Visitor Goals__
___

- _As a frequent visitor, I want to have the option to preview how a word and its synonyms might be used in a sentence._


- _As a Frequent Visitor, I want to understand if I am looking at a words that I have already searched before._



- _As a frequent visitor, I want to know that I can delete mysearch history._


### Concept
___
#### Wireframes
____
###### [View Complete Set of Schematic Wireframes](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes.pdf)

- Schematic mockups commenced in early January 2021 to establish relationships between disparate components, and assign appropriate responsibilities. 
___
###### [View Schematic Results Component Ideation Board](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes29.jpg?raw=true)

#### Thinking in React
___

- ##### Appropriating Precedent


    <br>
    <details><summary> The React App's core functionality can be understood as a <em><b>Products List</b></em> with <em><b>products</b></em> fetched from a <em><b>store</b></em>  and a <em><b>Shopping Cart</b></em> with a list of <em><b>items</b></em> added that  can be removed and/or cleared </summary> 
    <br>

    [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true)

    <br>
    </details> 
    <br>


    <br>
    <details><summary> With the ability to query the <em><b>Products List</b></em>     </summary> 
    <br>

   [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true)

    <br>
    </details> 
    <br>
    
    <br>
    <details><summary> With the ability to manage <em><b>items</b></em> that are the same <em><b>products</b></em>   </summary> 
    <br>

  [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true)

    <br>
    </details> 
    <br>
    
    <br>
    <details><summary> And the ability to toggle between <em><b>Products List</b></em> and <em><b>Shopping Cart</b></em>   </summary> 
    <br>

    [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true)

    <br>
    </details> 
    <br>



-  This approach helped break-down the project scope, and, most importantly, afford a benchmark for references for development and troubleshooting.


#### Design
___

###### [View Complete Set of Schematic Wireframes](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes20.jpg?raw=true)
<!-- 
[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes20.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes20.jpg?raw=true) -->

#### NotePad

- A consistent top and bottom border is applied to all nodes with dynamic content. These discrete borders are designed to convey the material scale of a note pad as a familiar touchpoint to a user. These `wordBoxes` only vary in spacing and are responsible for visually conveying hierarchy in a the ***list of list of lists***.

#### Theme

- Material-UI's `ThemeProvider` wraps the app in order to pass styles down the component tree. See [Material-UI Theming](https://material-ui.com/styles/advanced/#advanced).

##### Typography

- The font family is set to an array of system fonts in order to adapt to device/platform/user configuration and avoid depending on an explicit typeface. A `commonSettings` object in `theme.context.js` contains a list of these overrides, which is merged with Material-UI's theme provider. See [Material-UI Global-css](https://material-ui.com/customization/globals/#global-css)


    <br>
    <details><summary> commonSettings </summary> 
    <br>

     ```
         export const commonSettings = {
          typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
      }
     ```

    <br>
    </details> 
    <br>


##### Color

- The app features two sets of primary and secondary colors for a light theme and a dark theme configured via Material UI's [palette configuration](https://material.io/resources/color/#!/?view.left=0&view.right=0). Behaviors and states of colors rely on properties defined in [Material-UI's Default Theme object](https://material-ui.com/customization/default-theme/#default-theme). Secondary colors are set to neutral tone, while primaries are rendered as the singular "feature color". The minimal approach to color sets is to enhance a notepad



    <br>
    <details><summary> lightTheme instance </summary> 
    <br>

     ```
     const lightTheme = createMuiTheme({
             palette: {
             type: 'light',
             primary: {
              main: '#ff3200',
            },
        secondary: {
              main: grey[900],
            },
        },
      ...commonSettings,
      });

     ```

    <br>
    </details> 
    <br>



    <br>
    <details><summary> darkTheme instance </summary> 
    <br>

     ```
     const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: lightblue[500],
        },
        secondary: {
          main: '#fafafa',
        },
        background: {
          default: '#151515',
        },
      },
      ...commonSettings,
    });

     ```

    <br>
    </details> 
    <br>

___
___
## Features
___
### Existing Features
___

#### Dynamic Layout SPA
___
  - The website is modeled as a progressive web application to render a single-page-app's functionality without full page reloads and optimized to perform like a native app. Its framework ensures flexibility across browsers. 

  - The website takes advantage of large floating action buttons (FAB) to quickly navigate between its three remote views: "Search", "Info", and "Saves". Visual metaphors are utilized to represent these view modes discretely and efficiently.

  - A floating "speed dial" button persists across views to quickly access the app's core actions: querying a term, clearing the saved history, and toggling light or dark mode.

  - The app features a custom launch screen on initial page load to succinctly describe its purpose: "An interactive thesaurus app".

#### Info 
___
  - The website offers an info section to credit brands, namely, Merriam-Webster's Collegiate Thesaurus, and supply information about the app.
  
       
#### Search / Results
___
###### [View Schematic Results Component Ideation Board](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes11.jpg?raw=true)

- The application is written to return lists of Synonyms, Related Words, Synonymous Phrases and Similar Words for any queried word in the english language via Thesaurus API. Each word is presented as an option to query.

    - ##### Actions: 
         -  Ability to see if and how many times a word has been queried before.
         -  Ability to see if and how many words have been queried with the same definition.
         -  Ability to see if and how many definitions queried share the same root.
        -  Ability to match definition in a string (See [Verbal Illustration](#-verbal-illustration)).


#### Saves
___
  - The website features the ability to view all previous queries, grouped by their sense definition, accessible via the Saves tab.
    - ##### Actions: 
       -  Ability to remove individual words from the list.
       -  Ability to clear the list.

#### Verbal Illustration
___
###### [View Schematic Display String Component Ideation Board]

  - If a definition contains an example sentence, the website displays this as  verbal illustration to feature how a particular word might be used in context.
  - On scroll and/or on hover, the word used in the sentence changes to the next word in the list of synonyms.
     - ##### Actions: 
       -  Ability to see a word in a sentence by touch/mouse/scroll event. 


#### Counters / Reducers

  - The website features a counter that increments when an exact word with the same definition, and displays next to the word in the search tab.



___
### Features Left to Implement
___

   [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes16.jpg?raw=true" width="400px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes16.jpg?raw=true)
   
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

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
3. [JavaScript](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
___
### Frameworks and Libraries
___


1. [Nextjs 5.8.2:]()
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
### Documentation Notes
___

1. The result instance and iterating through the JSON as it is returned,  forking at each array nest every time a new unknown length array has to be iterated .

    <br>
 <details><summary> Example JS </summary> <br>

     ```JavaScript  

 // test  
     ```

  <br>
 </details> <br>

2. Directory follows Vercel documentation but moved to src folder, .

3. _Document custom and serverSide props.
4. The app utilizes Axios to manage responses from the API. The app's Search component is written to auto-cancel in the middle of typing so as to reduce the amount of requests to the API.  The Search component is built from Material-UI input elements and uses State hooks elicit *side-effects* `onSearchTextChange`.
5.  The Results component is written to work specifically with the JSON response from the Thesaurus API.
6. To note, on succinctly representing the API response:
  - Each query has several head-words ("about" as preposition, as adverb...):
    - Each headWord has several definitions ("about" as in to be, "about as in to...):
      - Each headWord defined in a particular way has:
        - A definition.
        - A string that uses the word in a sentence ([see Display String](https://nextjs.org/docs/deployment))
        - A list of Synonyms
        - A list of Related words
        - A list of Synonymous Phrases
        - A list of Similar Words
7. Each saved word instance retains properties of the Results family it is "taken" from -- such as the word's particular definition, label, root word -- to increment values of duplicates and group words by sense definitions while ensuring each instance, no matter identical at name value, is distinct if the definition and sense is different
8. Counters Context ( and useReducer ) Text about `wordsHistoryDispatch`
9. Theme Context ( and useMemo, useMediaQuery )Text about theme provider

>*Note: All descriptions of atypical methods can be found within style blocks in style.css.*

### Code Testing
___

- The W3C Markup Validator (Nu Html Checker) and W3C CSS Validator Services continue to be used to validate the single html page (index.html) and the css URI of the project (/assets/style.css) to ensure no errors, alerts or flags pertaining to html and css syntax. Some warnings for "potential misuse of aria-label" were reviewed; the elements that remain are deemed usable and beneficial. See [Accessibility Testing](#accessibility-testing).

    - [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Findex.html)
  - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)
  - [Vercel Testing](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Findex.html)
  - [Vercel Plugin](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fisraelias.github.io%2Fresume-redux%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=)

> Note: 1) Several parse errors are flagged around vendor prefixes. [AutoPrefixer](https://autoprefixer.github.io/)'s web version was used to manually add vendor prefixes without the PostCSS plugin.  
> 2\) W3C is [widely known](https://stackoverflow.com/questions/57661659/w3c-css-validation-parse-error-on-variables) to attach a parse error to every custom property/custom variable.

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
- [Search App HTML5 markup](https://stackoverflow.com/questions/3255109/marking-up-a-search-result-list-with-html5-semantics)
- [Intersection Observer](https://developers.google.com/web/updates/2017/09/sticky-headers)
- The site's favicon was generated via [Real Favicon Generator.net](https://realfavicongenerator.net/) following Philippe Bernard's [comprehensive summary on favicons](https://css-tricks.com/favicon-quiz/).
- Github Repo module.
- The development of this README.md takes precedent from various templates and samples throughout Code Institute's course. The development of the UX section and Jesse Garret's Five Planes of UX equally take direct inspiration from Code Institute's course.
- The Slack community at Code Institute, namely the senior leads, for being generous and quick to offer endless assistance and advice.
- Tutor Support at Code Institute for offering invaluable technical support.
- My mentor Aaron Sinnott for his support, time investment and for helping to push this project to be the best that it can be.


[Back to top](#table-of-contents)
