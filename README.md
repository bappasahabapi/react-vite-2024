
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
5. 🛣️ [**Route Handler** GET,POST,PATCH,DELETE]()

    - When we need **APi response** then we use **route.js**
    - When we need page response then we use **page.js**
    - `Pages routes respond to HTML content` while Route Handlers allows us to create `RESTful endpoints.`

6. 🛣️ [**Headers, Cookies, Redirecting** ]()
7. 🛣️ [**Middleware**]()
8. 🛣️ [**Not Found Page**](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

    - By default,` not-found is a Server Component`. You can mark it as async to fetch and display data:
    - manaually go to the not found page using next js` notFound() function` use in product page.

1. 🛣️ [**Internationalization**]()
