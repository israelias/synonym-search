
![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_performance.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_accessibility.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_best-practices.svg?raw=true?sanitize=true)![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_seo.svg?raw=true?sanitize=true) ![](https://github.com/israelias/synonym-chaser/blob/master/docs/badges/lighthouse_pwa.svg?raw=true?sanitize=true)

![](https://github.com/israelias/synonym-chaser/blob/master/public/og-image-synsearch-app01redblue_Light.png?raw=true)

---
# SynonymSearch
---

***A *meaningful* thesaurus***
___
Remember all the words you find when you use a Thesaurus.


SynonymSearch helps you to review what you've just learned (and might otherwise forget) by sorting a list of all your search queries by their shared definitions as you're finding them.

SynonymSearch lets you test the similarity of synonymous words by injecting them into a sentence whose meaning depends on the definition they share. The app helps you actively make sense of a definition and then review it against a repository of synonyms.

<!-- SynonymSearch also always lets you know when you've found a word that you should "already know."  -->

This project is developed as part of MS2 Interactive Front End module at Code Institute. It is written to work with [Merriam-Webster's Collegiate® Thesaurus](https://dictionaryapi.com/)'s JSON response format, and is developed with [React](https://reactjs.org/) via [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and deployed with [Vercel](https://nextjs.org/docs/deployment).

Please visit the project here: [synonyms.vercel.app](https://synonyms.vercel.app/)

[TOC levels=3]: # "## Contents"

## Contents
- [A *meaningful* thesaurus.](#a-meaningful-thesaurus)
- [UX](#ux)
  - [User Stories](#user-stories)
  - [Concept](#concept)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Technologies](#technologies)
  - [Frameworks and Libraries](#frameworks-and-libraries)
  - [Programs and Software](#programs-and-software)
- [Testing](#testing)
  - [Documentation Notes](#documentation-notes)
  - [Code Testing](#code-testing)
  - [Accessibility Testing](#accessibility-testing)
  - [Browser Testing](#browser-testing)
  - [Known Bugs](#known-bugs)
- [Deployment](#deployment)
- [Cloning This Repository](#cloning-this-repository)
- [Credits](#credits)
  - [Code](#code)
  - [Content and Media](#content-and-media)
  - [Acknowledgements](#acknowledgements)
<!--  - [A *meaningful* thesaurus.](#a-meaningful-thesaurus)-->
  - [UX](#ux)
    - [User Stories](#user-stories)
    - [Concept](#concept)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Technologies](#technologies)
    - [Frameworks and Libraries](#frameworks-and-libraries)
    - [Programs and Software](#programs-and-software)
  - [Testing](#testing)
    - [Documentation Notes](#documentation-notes)
    - [Code Testing](#code-testing)
    - [Accessibility Testing](#accessibility-testing)
    - [Browser Testing](#browser-testing)
    - [Known Bugs](#known-bugs)
  - [Deployment](#deployment)
  - [Cloning This Repository](#cloning-this-repository)
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

- As a new visitor, I want to have a good understanding of what the application does within a few seconds.
- As a new visitor, I want to intuitively understand how to navigate the site without additional instructions.
- As a new visitor, I want to access valuable content from any device, with minimal wait time and with a minimal amount of clicks.
- As a new visitor, I want to understand the source of the site's content.

#### __Returning Visitor Goals__
___

- As a Returning Visitor, I want to use a thesaurus to find groups of words with the same or similar meanings.
- As a Returning Visitor, I want the ability to see a history of my searched words grouped by their synonymous definitions.

#### __Frequent Visitor Goals__
___

- As a Frequent Visitor, I want to have the option to preview how a word and its synonyms might be used in a sentence.
- As a Frequent Visitor, I want to understand if I am looking at results for a definition that I have already seen before.
- As a Frequent Visitor, I want to know that I can delete my search history.


### Concept
___
#### Wireframes
____
###### [View PDF Set of Schematic Wireframes](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes.pdf)

- Schematic mockups commenced in early January 2021 to establish relationships between disparate components, and assign appropriate responsibilities.
___

#### Thinking in React
___

- ##### Appropriating Precedent


    <details><summary> The React App's core functionality can be understood as a <em><b>Products List</b></em> with <em><b>products</b></em> fetched from a <em><b>store</b></em>  and a <em><b>Shopping Cart</b></em> with a list of <em><b>items</b></em> added that  can be removed and/or cleared... </summary>
    <br>

    [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes07.jpg?raw=true)

    <br>
    </details>
    <br>


    <details><summary> ...with the ability to query the <em><b>Products List</b></em>     </summary>
    <br>

   [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes14.jpg?raw=true)

    <br>
    </details>
    <br>


    <details><summary> ...with the ability to manage <em><b>items</b></em> that are the same <em><b>products</b></em>   </summary>
    <br>

  [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes22.jpg?raw=true)

    <br>
    </details>
    <br>


    <details><summary> ...with the ability to toggle between <em><b>Products List</b></em> and <em><b>Shopping Cart</b></em>   </summary>
    <br>

    [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes25.jpg?raw=true)

    <br>
    </details>
    <br>
    <br>

    >  This approach helped break-down the project scope, and, most importantly, afford a benchmark for references for development and troubleshooting.

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
    <br>

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
    <br>


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
    <br>

    <details><summary> Selections Scope (cart)   </summary>
    <br>

     [<div style="text-align:center"><img src="https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes12.jpg?raw=true" width="600px"></div>](https://github.com/israelias/synonym-chaser/blob/master/docs/wireframes/MS2_Wireframes09.jpg?raw=true)
    Early schematic breakdown of Selections component. Represents data from internal Context.Provider (see [HistoryProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/words.context.js)).
    Now broken down to  `{Saves} => {Selection}`
    (See [saves Directory](https://github.com/israelias/synonym-chaser/blob/master/src/components/saves))

    <br>
    </details>
    <br>

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
    <br>


#### Design
___
##### Loose Leaf

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


##### Theme

- Material-UI's `ThemeProvider` wraps the app in order to pass styles down the component tree. See [Material-UI Theming](https://material-ui.com/styles/advanced/#advanced).

##### Typography

- The font family is set to an array of system fonts in order to adapt to device/platform/user configuration and avoid depending on an explicit typeface. A `commonSettings` object in `theme.context.js` contains a list of these overrides, which is merged with Material-UI's theme provider. See [Material-UI Global-css](https://material-ui.com/customization/globals/#global-css)


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


##### Color

- The app features two sets of primary and secondary colors for a light theme and a dark theme configured via Material UI's [palette configuration](https://material.io/resources/color/#!/?view.left=0&view.right=0). Behaviors and states of colors rely on properties defined in [Material-UI's Default Theme object](https://material-ui.com/customization/default-theme/#default-theme). Secondary colors are set to neutral tone, while primaries are rendered as the singular "feature color". The minimal approach to color sets is to enhance a notepad


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

#### Dynamic Page
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

- If a definition contains an example sentence, the website displays this as  verbal illustration to feature how a particular word might be used in context.
- On scroll and/or on hover, the word used in the sentence changes to the next word in the list of synonyms.
- ##### Actions:
-  Ability to see a word in a sentence by touch/mouse/scroll event.

___
### Features Left to Implement
___

- Ability to deep-merge from a localStorage and/or Apollo Client.
- Ability to manage user search history after browser session.
- Show Anyonyms feature.
- Call random word on initial load from Word Of The Day API.
- "Feeling Lucky" random word query.
- Prevent default refresh on browser refresh.
- Make installable.
___
___
## Technologies
___
### Frameworks and Libraries
___

1. [React 17.0:](https://reactjs.org/) JavaScript Library for building user interfaces.
3. [Nextjs 5.8.2:](https://nextjs.org/) React Framework for Production.
4. [Material UI 4.11.1:](https://material-ui.com/) React component for faster and easier web development.

___
### Programs and Software
___

1. [WebStorm:](https://www.jetbrains.com/webstorm/) WebStorm 2020.3.2 by [JetBrains](https://www.jetbrains.com/) is the web development IDE used to locally construct the project
2. [Git:](https://git-scm.com/) Git is used as the version control system and is utilized via the WebStorm terminal to `commit` to Git and `push` to GitHub.
4. [GitHub:](https://github.com/) GitHub is used to store the project's code and directory upon concurrent `push`es via Git.
5. [Adobe InDesign:](https://www.adobe.com/sea/products/xd.html) Adobe InDesign is used to mock wireframes.

___
___
## Testing
___
### Documentation Notes
___

1. Styles are written in [jss](https://cssinjs.org/jss-syntax/?v=v10.5.1) syntax and follow the spec for [Material-UI](https://material-ui.com/styles/advanced/#theming) to play nicely with [Nextjs](https://nextjs.org/docs/getting-started) Server-side rendering, which includes [this logic](https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js) of customizing `pages/_document`  to to inject server-side rendered styles into the markup right before it's used. Note that this is an unofficial recommendation, and should be refactored if/when MUI releases an official plugin for Nextjs similar to the one for [MUI/Gatsby](https://github.com/hupe1980/gatsby-plugin-material-ui).
2. All style objects are created with MUI's `makeStyles` hook and follow guidelines in [MUI style Docs](https://material-ui.com/styles/advanced/#makestyles) for theming. This includes CSS overrides and media queries. Style objects for main components are separated by scope in the [styles Directory](https://github.com/israelias/synonym-chaser/blob/master/src/styles/) and imported in modules as required. However, some components, namely, `Launcher`, have all style props declared in the component file itself. Note that all styles should eventually be exported from one directory for consistency.
3. Styles follor [this logic](https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js) to work with Next.js
2. Directory follows Vercel documentation but moved to src folder, .
6. The `results` tree renders `jsx` components on every API call without initializing constants. Props and conditional expressions control the iteration of the response schema from MW-Thesaurus API. Note that values and Prop-Type verifications are specifically written to get the right data from this schema:

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

7. Each saved word instance retains properties of the Results family it is "taken" from -- such as the word's particular definition, label, root word -- to increment values of duplicates and group words by sense definitions while ensuring each instance, no matter identical at name value, is distinct if the definition and sense is different
8. React hooks `useReducer`, `useContext`, `createContext` are assembled together in `context/words.context` ([see HistoryProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/words.context.js)) to provide a context wrapper for components to share and consume the same data. Note that this logic is directly modeled from the example set in [next.js/examples/with-context-api](https://github.com/vercel/next.js/tree/canary/examples/with-context-api).
9. Following what is achieved by `HistoryProvider`'s exported context wrapper hooks `useHistory` and `useDispatchHstory` -- which are utilized across higher-order components, shared components and helper functions in `helpers/*` to radically manipulate the DOM -- the same logic is repurposed to ride multiple hooks along a custom wrapper with MUI's ThemeProvider the ([see ThemeProvider](https://github.com/israelias/synonym-chaser/blob/master/src/context/theme.context.js)). In this case, setting the the view value, allows any component to change the page from anywhere, to name a few. Note that the catch-all nature of this Context layout provider.

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

10: Using MW-Thesaurus is free for non-commercial and/or educational purposes. Featured brand logos in the info tab is to follow branding guidelines requested by but not limited to Merriam-Webster's Development center.
1.  For the educational purposes of the project, the API key is currently public. Further configuration to have an internal endpoint in `/pages/api` should be considered. See [this discussion](https://github.com/vercel/next.js/discussions/12531) and [Nextjs API routes](https://nextjs.org/docs/api-routes/introduction).

<details><summary> Current implementation </summary>
<br>

```  jsx

    const axiosConfig = { baseURL: 'https://dictionaryapi.com/api/v3/references/', }; 
    
    function searchThesaurus(searchText, selection) { 
        const query = selection || searchText; 
      
        // Key is processed from ignored env.local
        // use this method if API endpoint is set up in /pages/api/*
        const key = process.env.MW_THESAURUS_KEY;
    
      return axiosGetCancellable(
        `/thesaurus/json/${query}?key=${key}`,
        axiosConfig,
      );
    }

```

<br>
</details>

> *Note: All descriptions of atypical methods can be found within comment blocks that follow jsDoc standards.*

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
