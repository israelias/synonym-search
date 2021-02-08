
![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_performance.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_accessibility.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_best-practices.svg?raw=true?sanitize=true)![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_seo.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_pwa.svg?raw=true?sanitize=true)

![](https://github.com/israelias/synonym-chaser/blob/master/public/og-image-synsearch-app01redblue_Light.png?raw=true)


# SynonymSearch


***A *meaningful* thesaurus***

Remember all the words you find when you use a Thesaurus.


SynonymSearch helps you to review what you've just learned (and might otherwise forget) by sorting a list of all your search queries by their shared definitions as you're finding them.

SynonymSearch lets you test the similarity of synonymous words by injecting them into a sentence whose meaning depends on the definition they share. The app helps you actively make sense of a definition and then review it against a repository of synonyms.

<!-- SynonymSearch also always lets you know when you've found a word that you should "already know."  -->

This project is developed as part of MS2 Interactive Front End module at Code Institute. It is written to work with [Merriam-Webster's Collegiate® Thesaurus](https://dictionaryapi.com/)'s JSON response format, and is developed with [React](https://reactjs.org/) via [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed with [Vercel](https://nextjs.org/docs/deployment).

Please visit the project here: [synonyms.vercel.app](https://synonyms.vercel.app/)

[TOC levels=3]: # "## Contents"

## Contents
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
  - [Design](#design)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Technologies](#technologies)
  - [Frameworks and Libraries](#frameworks-and-libraries)
  - [Programs and Software](#programs-and-software)
- [Notes](#notes)
- [Testing](#testing)
- [Deployment](#deployment)
- [Cloning This Repository](#cloning-this-repository)
- [Credits](#credits)
  - [Code](#code)
  - [Content and Media](#content-and-media)
  - [Acknowledgements](#acknowledgements)

## UX
### User Stories
#### __New Visitor Goals__

- As a new visitor, I want to have a good understanding of what the application does within a few seconds.
- As a new visitor, I want to intuitively understand how to navigate the site without additional instructions.
- As a new visitor, I want to access valuable content from any device, with minimal wait time and with a minimal amount of clicks.
- As a new visitor, I want to understand the source of the site's content.

#### __Returning Visitor Goals__

- As a Returning Visitor, I want to use a thesaurus to find groups of words with the same or similar meanings.
- As a Returning Visitor, I want the ability to see a history of my searched words grouped by their synonymous definitions.

#### __Frequent Visitor Goals__

- As a Frequent Visitor, I want to have the option to preview how a word and its synonyms might be used in a sentence.
- As a Frequent Visitor, I want to understand if I am looking at results for a definition that I have already seen before.
- As a Frequent Visitor, I want to know that I can delete my search history.

### Wireframes

###### [View PDF Set of Schematic Wireframes](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes.pdf)

>  ##### *Schematic mockups commenced in early January 2021 to establish relationships between disparate components, and assign appropriate responsibilities.*

<hr>

#### Thinking in React
<hr>
<details><summary>The React App's core functionality can be understood as a <em><b>Products List</b></em> with <em><b>products</b></em> fetched from a <em><b>store</b></em>  and a <em><b>Shopping Cart</b></em> with a list of <em><b>items</b></em> added that  can be removed and/or cleared</summary>
<br>

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true)

<br>
</details>

<hr>

<details><summary>with the ability to query the <em><b>Products List</b></em>     </summary>
<br>

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true)

<br>
</details>
<hr>


<details><summary>with the ability to manage <em><b>products</b></em> that are already in <em><b>items</b></em> and vice versa   </summary>
<br>

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true)

<br>
</details>
<hr>


<details><summary>with the ability to toggle between <em><b>Products List</b></em> and <em><b>Shopping Cart</b></em>   </summary>
<br>

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true)

<br>
</details>
<hr>

>  ##### *This approach helped break-down the project scope, and, most importantly, afford a benchmark for references for development and troubleshooting.* 
>  see Thinking in React ([Docs](https://reactjs.org/docs/thinking-in-react.html))

#### Component Breakdown

<br>
<details><summary> Lifecycle of a Result Instance  </summary>
<br>


 [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes02.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes02.jpg?raw=true)
  Input(props), Saves(Context), Results(HOC)

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes03.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes03.jpg?raw=true)
Input goes into Results to fetch list of Options from API

  [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes04.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes04.jpg?raw=true)
  Selected Option is added to Saves Store

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes05.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes05.jpg?raw=true)
Selected Option is New Input

  [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes06.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes06.jpg?raw=true)

<br>
</details>
<hr>

<details><summary> Working with the API   </summary>
<br>

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes08.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes08.jpg?raw=true)
Merriam-Webster Thesaurus API's JSON response
See sample response [Documentation](https://dictionaryapi.com/products/api-collegiate-thesaurus)


[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Early concerns and considerations involved how to manage and deconstruct or write the schema of a result and which tools might help.

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes10.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Earlier tests considered using [mw-dict](https://github.com/NdYAG/mw-dict) (Node.js Wrapper for Merriam Webster Developer API) as a helper, but eventually opted out of using this dependency.

<br>
</details>
<hr>

<details><summary> Results Scope (products)   </summary>
<br>

 [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes11.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Early schematic breakdown of Results HOC.
Composed to map, render and pass props down the component tree.
Props are Merriam-Webster-schema-specific and are generated from every response returned by [searchThesaurus](https://github.com/israelias/synonym-chaser/blob/master/src/services/mwThesaurusService.js) API handler.
Now broken down to  `{Results} => {Root} => {Sense} => {Option}`
(See [results Directory](https://github.com/israelias/synonym-chaser/blob/master/src/components/results))

<br>
</details>
<hr>

<details><summary> Selections Scope (cart)   </summary>
<br>

 [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes12.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Early schematic breakdown of Selections component. Represents data from internal Context.Provider (see [HistoryProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/words.context.js)).
Now broken down to  `{Saves} => {Selection}`
(See [saves Directory](https://github.com/israelias/synonym-chaser/blob/master/src/components/saves))

<br>
</details>
<hr>

<details><summary> Display Scope (product preview)   </summary>
<br>

 [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes26.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Early schematic breakdown of Display component.
Represents a manipulated string passed from `{Results} =>{Root} => {Sense}` via `{ReplaceSubStringNode}` (see [string.helper.js](https://github.com/israelias/synonym-chaser/blob/master/src/helpers/string.helper.js)).
Now broken down to  `{Saves} => {Selection}`
(See [Display](https://github.com/israelias/synonym-chaser/blob/master/src/components/shared/string-display.js))

[<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes27.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
Display is now a dummy component as [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer#readme) is handled entirely between `{Sense} => {Option}` in Results tree (See [results Directory](https://github.com/israelias/synonym-chaser/blob/master/src/components/results))

<br>
</details>
<hr>


### Design
#### Loose Leaf

- A consistent top and bottom border is applied to all nodes with dynamic content. These discrete borders are designed to convey the material scale of a note pad as a familiar touchpoint to a user. These `wordBoxes` only vary in spacing and are responsible for visually conveying hierarchy in a the ***list of list of lists***.

   <details><summary> Literal loose leaf  </summary>
    <br>

     [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes20.jpg?raw=true" width="300px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes01.jpg?raw=true)
        Horizontal wordBox cells.

     [<div style="text-align:center"><img src="https://www.seekpng.com/png/full/307-3077665_loose-leaf-paper-clipart-clipart-panda-free-clipart.png" width="300px"></div>](https://www.seekpng.com/png/full/307-3077665_loose-leaf-paper-clipart-clipart-panda-free-clipart.png)
     Loose leaf: A piece of paper that is not bound in place, or available on a continuoues roll, but typically punched so as to be organized in a ring binder.

     [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes01.jpg?raw=true" width="300px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes01.jpg?raw=true)
        Sample Page.

    <br>
    </details>


#### Theme

- Material-UI's `ThemeProvider` wraps the app in order to pass styles down the component tree. See [Material-UI Theming](https://material-ui.com/styles/advanced/#advanced).

#### Typography

- The font family is set to an array of system fonts in order to adapt to device/platform/user configuration and avoid depending on an explicit typeface. A `commonSettings` object in `theme.context.js` contains a list of these overrides, which is merged with Material-UI's theme provider. See [Material-UI Global-css](https://material-ui.com/customization/globals/#global-css)


    <details><summary> commonSettings </summary>
    <br>

     ```jsx
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


#### Color

- The app features two sets of primary and secondary colors for a light theme and a dark theme configured via Material UI's [palette configuration](https://material.io/resources/color/#!/?view.left=0&view.right=0). Behaviors and states of colors rely on properties defined in [Material-UI's Default Theme object](https://material-ui.com/customization/default-theme/#default-theme). Secondary colors are set to neutral tone, while primaries are rendered as the singular "feature color". The minimal approach to color sets is to enhance a notepad


    <details><summary> lightTheme instance </summary>
    <br>

     ```jsx
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
  
    <details><summary> darkTheme instance </summary>
    <br>

     ```jsx
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


## Features
### Existing Features
#### Dynamic Page
  - The website is modeled as a progressive web application to render a single-page-app's functionality without full page reloads and optimized to perform like a native app. Its framework ensures flexibility across browsers.

  - The website takes advantage of large floating action buttons (FAB) to quickly navigate between its three remote views: "Search", "Info", and "Saves". Visual metaphors are utilized to represent these view modes discretely and efficiently.

  - A floating "speed dial" button persists across views to quickly access the app's core actions: querying a term, clearing the saved history, and toggling light or dark mode.

  - The app features a custom launch screen on initial page load to succinctly describe its purpose: "An interactive thesaurus app".

#### Info
  - The website offers an info section to credit brands, namely, Merriam-Webster's Collegiate Thesaurus, and supply information about the app.


#### Search / Results
- The application is written to return lists of Synonyms, Related Words, Synonymous Phrases and Similar Words for any queried word in the english language via Thesaurus API. Each word is presented as an option to query.
- ##### Actions:
 -  Ability to see if and how many times a word has been queried before.
 -  Ability to see if and how many words have been queried with the same definition.
 -  Ability to see if and how many definitions queried share the same root.
-  Ability to match definition in a string (See [Verbal Illustration](#-verbal-illustration)).

#### Saves
- The website features the ability to view all previous queries, grouped by their sense definition, accessible via the Saves tab.
- ##### Actions:
-  Ability to remove individual words from the list.
-  Ability to clear the list.

#### Verbal Illustration

- If a definition contains an example sentence, the website displays this as  verbal illustration to feature how a particular word might be used in context.
- On scroll and/or on hover, the word used in the sentence changes to the next word in the list of synonyms.
- ##### Actions:
-  Ability to see a word in a sentence by touch/mouse/scroll event.

### Features Left to Implement

- Ability to deep-merge from a localStorage and/or Apollo Client.
- Ability to manage user search history after browser session.
- Show Anyonyms feature.
- Call random word on initial load from Word Of The Day API.
- "Feeling Lucky" random word query.
- Prevent default refresh on browser refresh.
- Make installable.

## Technologies
### Frameworks and Libraries

- [Node.js:](https://nodejs.org/en/) The runtime environment that allows the app to run asynchronous server-side scripts and events.(Bootstrapped with Nextjs)
- [Webpack:](https://webpack.js.org/) The static module bundler that builds a dependency graph mapping every module the project requires. (Bootstrapped with Nextjs)
- [React 17.0:](https://reactjs.org/) JavaScript Library for building user interfaces.
- [Babel:](https://babeljs.io/docs/en/) The toolchain compiler that transforms syntax to ensure all evolved code function, namely between `jsx`, `jss` `js`. (Bootstrapped with Nestjs)
- [Nextjs 5.8.2:](https://nextjs.org/) React Framework for Production. Nextjs is a toolkit for universal, server-rendered React.js applications. This framework leverages Webpack and Babel so that our interface is straightforwardly: `next` to develop, `next build` to prep for production and `next start` to serve.
- [Material UI 4.11.1:](https://material-ui.com/) React component for faster and easier web development. Includes [Material UI Icons](), [Material UI Lab](), [Material UI System]()
- [PropTypes:]()
- [React Intersection Observer:]()
- [Axios:]()
- [HTML React Parser:]()
- [clsx:]()


### Programs and Software

- [WebStorm:](https://www.jetbrains.com/webstorm/) WebStorm 2020.3.2 by [JetBrains](https://www.jetbrains.com/) is the web development IDE used to locally construct the project
- [Git:](https://git-scm.com/) Git is used as the version control system and is utilized via the WebStorm terminal to `commit` to Git and `push` to GitHub.
- [GitHub:](https://github.com/) GitHub is used to store the project's code and directory upon concurrent `push`es via Git.
- [Adobe InDesign:](https://www.adobe.com/sea/products/xd.html) Adobe InDesign is used to mock wireframes.
- [jsOnline:]()

## Notes

- Styles are written in [jss](https://cssinjs.org/jss-syntax/?v=v10.5.1) syntax and follow the spec for [Material-UI](https://material-ui.com/styles/advanced/#theming) to play nicely with [Nextjs](https://nextjs.org/docs/getting-started) Server-side rendering, which includes [this logic](https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js) of customizing `pages/_document`  to to inject server-side rendered styles into the markup right before it's used. Note that this is an unofficial recommendation, and should be refactored if/when MUI releases an official plugin for Nextjs similar to the one for [MUI/Gatsby](https://github.com/hupe1980/gatsby-plugin-material-ui).
- All style objects are created with MUI's `makeStyles` hook and follow guidelines in [MUI style Docs](https://material-ui.com/styles/advanced/#makestyles) for theming. This includes CSS overrides and media queries. Style objects for main components are separated by scope in the [styles Directory](https://github.com/israelias/synonym-chaser/blob/master/src/styles/) and imported in modules as required. However, some components, namely, `Launcher`, have all style props declared in the component file itself. Note that all styles should eventually be exported from one directory for consistency.
- The `results` tree renders `jsx` components on every API call without initializing constants. Props and conditional expressions control the iteration of the response schema from MW-Thesaurus API. Note that values and Prop-Type verifications are specifically written to get the right data from this schema:
    <details><summary> Mapping conditionals down the tree </summary>
    <br>

     - Each query has several headWords
          *("about" as preposition, as adverb...)*:
        - Each headWord has several definitions
           *("about" as in to be, "about as in to...)*:
          - Each headWord defined in a particular sense:
            - has A definition.
            - may have A string that uses the word in a sentence ([see Verbal Illustration](#verbal-illustration))
            - may have A list of Synonyms
            - may have A list of Related words
            - may have A list of Synonymous Phrases
            - may have A list of Similar Words

    <br>
    </details>
- Each saved word instance retains properties of the Results family it is "taken" from -- such as the word's particular definition, label, root word -- to increment values of duplicates and group words by sense definitions while ensuring each instance, no matter identical at name value, is distinct if the definition and sense is different
- React hooks `useReducer`, `useContext`, `createContext` are assembled together in `context/words.context` ([see HistoryProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/words.context.js)) to provide a context wrapper for components to share and consume the same data. Note that this logic is directly modeled from the example set in [next.js/examples/with-context-api](https://github.com/vercel/next.js/tree/canary/examples/with-context-api).
- Following what is achieved by `HistoryProvider`'s exported context wrapper hooks `useHistory` and `useDispatchHstory` -- which are utilized across higher-order components, shared components and helper functions in `helpers/*` to radically manipulate the DOM -- the same logic is repurposed to ride multiple hooks along a custom wrapper with MUI's ThemeProvider the ([see ThemeProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/theme.context.js)). In this case, setting the the view value, allows any component to change the page from anywhere, to name a few. Note that the catch-all nature of this Context layout provider.
    <details><summary> All layout states in a Context Theme </summary>
    <br>

    ``` jsx
      export const ThemeContextProvider = ({ children }) => {
      // Sets the theme for MUI ThemeProvider to use
      const [darkMode, setDarkMode] = useState(false);
      // Sets the current view 
      const [value, setValue] = useState('launch');
      // Hooks to set warning colors for searchText input
      const [meta, setMeta] = useState(true);
      const [root, setRoot] = useState('');
      // Rides an MUI hook to set a memoized theme
      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

      useMemo(
        () => (prefersDarkMode
          ? setDarkMode(true)
          : setDarkMode(false)),
        [prefersDarkMode],
      );
      
      // Provides all values and the hooks that control them

      return (
        <ThemeDispatchContext.Provider
          value={{
            darkMode,
            setDarkMode,
            value,
            setValue,
            meta,
            setMeta,
            root,
            setRoot,
          }}
        >
            <ThemeProvider 
            theme={
                darkMode
                  ? darkTheme
                  : lightTheme
              }
            >
              {children}
            </ThemeProvider>
        </ThemeDispatchContext.Provider>
      );
    };
    
    // All state/hooks are accessible by importing
    // a catch-all export below
    // Example:
    // // anyFile.js
    // import { useDispatchTheme } from './../theme.context'
    //
    // const dispatch = useDispatchTheme()
    // 
    // Change any/all states from any component
    // dispatch.setDarkMode(false)
    // dispatch.setValue('search')
    // 
    
    export const useDispatchTheme = () => useContext(ThemeDispatchContext);
    

    ```

    <br>
    </details>
- Using MW-Thesaurus is free for non-commercial and/or educational purposes. Featured brand logos in the info tab is to follow branding guidelines requested by but not limited to Merriam-Webster's Development center.
- The registered Thesaurus API key linked to this project is currently public. Following [this discussion](https://github.com/vercel/next.js/discussions/12531), the effort to protect API calls on the client side is aimless as the private key will always be exposed. Further configuration to have an internal endpoint in `/pages/api` should be considered following [Nextjs API routes](https://nextjs.org/docs/api-routes/introduction). Note that the key has been exposed from `.env.local` for the reasons above and for the educational purposes of the project.

    <details><summary> mwThesaurusService.js </summary>
    <br>

    ```  jsx

        const axiosConfig = { baseURL: 'https://dictionaryapi.com/api/v3/references/', }; 

        function searchThesaurus(searchText, selection) { 
            const query = selection || searchText; 

            // Key is processed from ignored env.local
            // use this method if API endpoint is set up in /pages/api/*
            const key = process.env.MW_THESAURUS_KEY;
            // @note Key is explicitly declared otherwise
            // for Production/submission

          return axiosGetCancellable(
            `/thesaurus/json/${query}?key=${key}`,
            axiosConfig,
          );
        }

    ```

    <br>
    </details>
    

> *Note: All descriptions of atypical methods can be found within comment blocks that follow jsDoc standards.*

## Testing
#### Lighthouse
#### [Performance, Accessibility, Best Practices, SEO, PWA](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Latest Results](https://lighthouse.vercel-lighthouse-integration.now.sh/reports/synonym-chaser-d4oa432xn.vercel.app)
- Lighthouse via Vercel is used to test performace, which produces unique results on every `git push`. [lighthouse-badges](https://github.com/emazzotta/lighthouse-badges) is used to generate new badges for every deployment by installing ```npm i -g lighthouse-badges``` and pushing the new hashed url to the array of urls:

    ```
    lighthouse-badges 
    -o docs/badges -r 
    -u https://synonyms.vercel.app/ [... all other urls]
                       
   # Output to docs/badges
   # Badges will contain the respective
      average score(s) of all the urls 
      supplied, combined
    ```
- Lighthouse's metrics, namely Accessibility and Performance generate specific flags on each audit. Adjustments are made on each push that specifically address any issues. 
  

#### ChromeVox

- [ChromeVox Extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) was used to ensure that screen-reader accessibility standards are met. This was done by walking through the entire project with the screen-reader plugin enabled. Various adjustments were made following these tests. Notably, the tab-index order of nav elements, and changing refining HTML5 semantic elements for `role` clarity.

#### Browser Testing

- Throughout the development of the project, in-browser dev tools were used to test for consistency across browsers. The browsers themselves were equally used for general use-case testing. The following browsers' per-device applications were accessed with an iPhone 11 Pro, MacBook Pro 15" and iPad Pro 12.9":
- Chrome Version: 83
- Firefox 82
- Opera 72
- Safari 14

<!-- ### Known Bugs
___

- xx.
- xx. -->

[Back to top](#table-of-contents)

## Deployment

- The project is developed with [React](https://reactjs.org/) via [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed with [Vercel](https://nextjs.org/docs/deployment), which I achieved with the following steps:
- `commit` and `push` the code from my local IDE to Github via Git and my MacBook Pro's iTerm terminal.
- Log in to Vercel and click the [New Project](https://vercel.com/new) CTA.
- Access "Import Git Repository" via the `select` input, located at the top-left of the immediate prompt.
- Click "Import" on the repository named "synonym-chaser"
- Select the default "Personal Account" along with the default "master" root directory.
- Click "Deploy"
- Barring errors, await the prompt for:
> ##### "Your project has been successfully deployed."

[Back to top](#table-of-contents)

## Cloning This Repository

- Clone this repo by running: 
```bash
git clone https://github.com/israelias/synonym-chaser
```

- at the jump, `cd` to the name of this repo:

```bash
cd synonym-chaser
```

- install the package and deps:

```bash
npm install 
```
- and run the development server:

```bash
npm run dev  
# or  
yarn dev  
```

open your browser to [localhost:3000](http://localhost:3000/)

##### useful: [Next JS Docs](https://github.com/imranhsayed/next-js-app)

## Credits
### Code

- [Github Repos](). [WIP]
- [withContext](). [WIP]
- [Reducers reference]() [WIP]
- [Material UI components]() [WIP]

### Content and Media
- [Merriam-Webster's Collegiate Thesaurus]()

### Acknowledgements

- [Search App HTML5 markup](https://stackoverflow.com/questions/3255109/marking-up-a-search-result-list-with-html5-semantics)
- [Intersection Observer](https://developers.google.com/web/updates/2017/09/sticky-headers)
- The site's favicon was generated via [Real Favicon Generator.net](https://realfavicongenerator.net/) following Philippe Bernard's [comprehensive summary on favicons](https://css-tricks.com/favicon-quiz/).
- The development of this README.md takes precedent from various templates and samples throughout Code Institute's course. The development of the UX section and Jesse Garret's Five Planes of UX equally take direct inspiration from Code Institute's course.
- The Slack community at Code Institute, namely the senior leads, for being generous and quick to offer endless assistance and advice.
- Tutor Support at Code Institute for offering invaluable technical support.
- My mentor Aaron Sinnott for his support, time investment and for helping to push this project to be the best that it can be.


[Back to top](#table-of-contents)
