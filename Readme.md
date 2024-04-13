


First, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


1. 🛣️ [Project Organization & File colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)
2. 🛣️ [Parallel Routes]()
3. 🛣️ [Unmatched & Intercepting Routes]()
4. 🛣️ [Conbination of Intercepting and Parallel Routes]()

     - **Intercepting** 
       
        - Routes can be used together with Parallel Routes to create modals. This allows you to solve common challenges when building modals, such as:
        
       -  Making the modal content **shareable through a URL**.
       -  **Preserving context when the page is refreshed**, instead of closing the modal.
       -  Closing the modal on **backwards navigation** rather than going to the previous route.
        **Reopening the modal on forwards navigation.**
        
        
       ` Convention`
        Intercepting routes can be defined with the (..) convention, which is similar to relative path convention ../ but for segments.
        
    **You can use:**
        
    - (.) to match segments on the `same level`
    - (..) to match segments `one level above`
    - (..)(..) to match segments `two levels above`
    - (...) to match segments from the `root app directory`
        
    - For example, you can intercept the photo segment from within the feed segment by creating a (..)photo directory.


1. 🛣️ [**Route Handler** GET,POST,PATCH,DELETE]()

    - When we need **APi response** then we use **route.js**
    - When we need page response then we use **page.js**
    - `Pages routes respond to HTML content` while Route Handlers allows us to create `RESTful endpoints.`

6. 🛣️ [**Headers, Cookies, Redirecting** ]()
7. 🛣️ [**Middleware**]()
8. 🛣️ [**Not Found Page**](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

    - By default,` not-found is a Server Component`. You can mark it as async to fetch and display data:
    - manaually go to the not found page using next js` notFound() function` use in product page.

9. 🛣️ [**Internationalization**](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

    - Next.js enables you to configure the routing and rendering of content to support **multiple languages.** Making your site adaptive to different locales includes translated content (localization) and internationalized routes.



