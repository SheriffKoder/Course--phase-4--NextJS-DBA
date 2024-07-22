

# Phase 4
This repo contains my notes and code progress for the following courses:

- Next.js 14 & React
- Algorithms and Data Structures Masterclass

## **Next.js 14 & React**

**`introduction`**
- server side rendering vs. client side rendering 
- App router vs. Pages router

## **`react refresher`**
>**section1-react-part 1**
- project setup
- using components
- using css files file.module.css
- states and passing/lifting state up
######
- Show/Hide the NewPost form
- show by clicking on the new post button in the header
- hide by clicking on the cancel button in the form
- wrap components using the 'children' prop name
- show/hide components dynamically using states and functions
- pass states and functions across multiple levels of components
######
> **section1-react-part2**
-  change: moving states to the newPost component
- formSubmit function updates postData and sends the input values to parent state with a passed function from the parent
- if there are posts display the Post component
- if there are no posts display "no posts"
- sending/storing postData to a backend-server (dummy-backend folder)
- retrieving postData from a backend-server (dummy-backend folder)
- handle fetching delays with an alternative UI using isFetching
> **section1-react-part3**
- routing
- routing: Layouts
- Navigating using: Link, useNavigate, redirect
- routing: Layouts: using loader/action properties to handle GET/POST requests instead of using a useEffect

## **`Foodies project`** 
 >**section3-njs-foodies-starting-project-part1**
- **Action: Work on the root page, layout header, nested route pages**
- Dynamic pages: create meals/share, community routes
- Style the nav and nav background
- Work on the root page.js
- Nested layouts & the children prop
- Import Images as variables
- Styling using the module.css files
- Link and Image Next.js elements
- **Action: Work on the image-slideshow, community, meals components**
- @components/images/image-slideshow component add code
- @app/community page add content
- @app/meals page add content
- React server and client components
- Use the code that uses client side code into separate components
- Use usePathname hook to determine current urls to activate buttons
- **Action: Create/fetch from a sql-lite database**
- Work with sql-lite database from 'initdb.js' to create a database file 'meals.db'
- Fetch data using @lib/meals.js using async on the @app/meals page and @app/meals/[mealSlug] that uses the params object to send the mealId to fetch with
- Loading.js UI and Suspense
 >**section3-njs-foodies-starting-project-part2**
- **Action: Work on the @meals/share page to gather form input values and an image**
- Use an image-picker component to display and alternative image-picker button and display the uploaded image on the UI
- Gather the submitted form data in the formData format in a server function
- **Action: Save the image and meal data to the database using the saveMeal function in @lib/meals.js**
- Use the 'slugify' package to generate a slug/id based on the title
- Use the 'xss' package to protect against cross site scripting attacks as we are outputting HTML content of meal.instructions in @mealSlug 
- Use the filesystem API to o be able to save the image with the name we generated
- Write meal data to the database
- Use the useFormStatus hook to indicate the form submit status on the submit button in @meals/share page
- Add server side input validation and related display errors
- Production mode: Update cache by revalidating pages to display new added content using revalidatePath()
- Store and fetch images using AWS S3
- Metadata root, sub-layout (@meals), Dynamic metadata for dynamic pages [mealSlug]'s page.js


## **`NextNews Project`** 
 >**section4-njs-nextnews-part1**
- **Dynamic pages:** @/news/[slug] displays dynamic content based on the slug value from an imported object with not-found check for a not-found UI
- Add /archive page which uses @archive/@latest "parallel routes" to display 
two separate contents on the same page even with sub-dynamic pages
- Use "catch-all" routes to display news cards depending on the year/month dynamic values in the url
while @latest display the same latest news cards
- client components cont. error client components
- intercepting route (.) or (..) to display a specific page when internally redirecting
- useRouter() hook
- route groups
- basic app/api/route.js
- /middleware.js to control all/some of the website's requests
 >**section4-njs-nextnews-part1**
- convert the component into RSC by using the modal-backdrop that uses useRouter hook from an external client component instead of transforming the whole RSC component to a client component
- fetching data using useEffect then RSC component with fetch then RSC component using a function fetching from a local database using sqlite
- RSC components fetching using async/await
- parallel routes loading UI's while fetching async values in RSC components


## **`Posts Project`*
>**section6-posts-project**
- @app/new-post/page.js uses @components/post-form.js uses useFormState to display input validation errors on the component (client component hook)
- which uses @components/form-submit button uses useFormState to display pending if the form submit is in progress (client component hook)
- and the submit server action component at @actions/posts.js is the function responsible for handling the post submission, receiving form inputs passed from the useFormState, checks them, returns error messages, store images to the cloudinary api, then stores the post in the sql-lite database and redirects the page
- use the useOptimistic hook to invert the like status of the post and the like button style and return the updated posts, this functionality is triggered by the like button itself with the help of .bind method
- **Image optimizations** @components/posts.js
- The Image tag with lazy loading, priority, fill, loader, quality props
- Editing the image by creating a custom url returned from the loader function with integrating the values of the src, quality-prop
- height/width props and a matching css on the image container and img tag
- using External image sources
- Static metadata @layout.js, page.js
- Dynamic metadata @feed/page.js

## **`Messages Project`*
>**section7-njs-messages-caching**
- **Next.js cache control**
- **Request memoization**
- **Data caching:** updating the fetch config object with 'cache' and 'next' options
- The 'dynamic' function
- Use unstable_noStore next/cache function
- Using revalidatePath to allow to drop the cached data for new data to come in
- Using revalidateTag which relates to the tags set in the 'next' option in the fetch config to allow cache drop
- **Full route caching** for non-dynamic pages, production mode check
- Exploring other ways of fetching data (local sql-lite database)
- Set/control cache on local databases using react's cache and next.js's unstable_cache where we can use also revalidatePath and revalidateTag
- to use run 'npm run dev' and open the backend directory and run 'node app.js'

## **`Fitness user authentication Project`*
>**section7-njs-authentication-fitness**
- **Create a user with sql-lite**
- use the @actions/auth-actions.js to get, validate data from the form component by using it in the useFormState
- return error messages from @actions/auth-actions.js to be used in the form
- store the new user in the database in @actions/auth-actions.js using @lib/user.js
- use @util/hash.js to hash and verify passwords
- use try/catch at @actions/auth-actions.js to catch user creation errors thrown from the database to return to the form and be displayed to the user



## **Algorithms and Data Structures**


- Introduction 

`Big O Notation`
- comparing code with speed of execution
- measuring time complexity
- measuring space complexity (auxiliary)
- Logarithms

`Built-in Data-structures`
- Objects
- Arrays

## **`Algorithms and Problem Solving Patterns`**
- What is an algorithm and how to improve at solving algorithm
- **Problem solving strategies**
- (1) Understanding the problem
- (2) exploring concrete examples
- (3) Break it down
- (4) Solve/Simplify
- (5) look back and refactor
- **Master common problem solving patterns**
- Concrete Examples concept 1 : Frequency counter / Same
- Concrete Examples concept 1 : Frequency counter / Anagram
- Concrete Examples concept 2 : Multiple pointers / sumZero
- Concrete Examples concept 2 : Multiple pointers / countUniqueValues
- Concrete Examples concept 3 : Sliding windows / maxSubarraySum
- Concrete Examples concept 4: Divide and conquer / search (binary search)
- Assignment on previous concepts: #1 Frequency counter / sameFrequency
- Assignment on previous concepts: #2 Multiple pointers / areThereDuplicates
- Assignment on previous concepts: #3 multiple pointers averagePair
- Assignment on previous concepts: #4 isSubsequence
- Assignment on previous concepts: #5 maxSubarraySum
- Assignment on previous concepts: #6 window sliders / minSubArrayLen
- Assignment on previous concepts: #7 window sliders / findLongestSubstring

## **`Recursion`**
- Recursive functions : example 1
- Recursive functions : example 2 - returning
- Recursive functions : example 3 - factorial
- Recursive functions : example 4 - Helper recursion pattern - collectOddValues
- Recursive functions : example 5 - Pure recursion pattern - collectOddValues
- Assignment on Recursive functions #1 - power
- Assignment on Recursive functions #2 - factorial
- Assignment on Recursive functions #3 - productOfArray
- Assignment on Recursive functions #4 - recursiveRange
- Assignment on Recursive functions #5 - fibonacci - Helper recursion pattern
- Assignment on Recursive functions #5 - fibonacci - Pure recursion solution (lecture)
- Assignment on Recursive functions #6 - reverse string
- Assignment on Recursive functions #7 - reversed string read the same as original check
- Assignment on Recursive functions #8 - pass a callback as an argument
- Assignment on Recursive functions #9 - flatten array
- Assignment on Recursive functions #9 - flatten array - lecture solution
- Assignment on Recursive functions #10 - capitalize first
- Assignment on Recursive functions #11 - nestedEvenSum Pure recursion
- Assignment on Recursive functions #12 - capitalizeWords
- Assignment on Recursive functions #12 - capitalizeWords lecture solution
- Assignment on Recursive functions #13 - stringifyNumbers in nested objects
- Assignment on Recursive functions #14 - collectStrings from nested objects