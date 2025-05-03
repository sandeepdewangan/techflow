# TechFlow

TechFLow is a mobile friendly web app where user can ask questions on a programming technical topics and gets response from the community.

### Technology Used

1. Next Js

### Package Used

1. `next-themes`: For dark and light mode theme.

### Project Setup

VS Code Extensions

- Babel JavaScript
- Better Comments
- Catppuccin for VSCode
- ESLint
- IntelliCode
- Material Icon Theme
- npm Intellisense
- Path Intellisense
- Prettier - Code formatter
- Prettier ESLint
- Pretty TypeScript Errors
- Tailwind CSS IntelliSense

### Create Project

Create Project npx create-next-app@latest With following options

- typescript
- tailwind
- app router
- turbopack

### Birth of Server Components

React began with a simple yet powerful premise: build user interfaces using components that live and breathe in the browser. Every React application followed this pattern:

- Initial page load downloads the JavaScript bundle
- React bootstraps itself in the browser
- Components render and become interactive
- The application handles all subsequent user interactions locally

Basically, every React app lived entirely in the browser. Your whole application is downloaded as a bundle of JavaScript, like getting a complete LEGO set dumped on your desk at once.

The turning point came when Meta's own teams struggled with these limitations while building Instagram's web application. They found themselves shipping increasingly large amounts of JavaScript to users browsers. This wasn't just a technical problem - it directly impacted user experience, especially in regions with slower internet connections or less powerful devices.

**Server Components**

- Server Components represent a fundamental shift in how React applications work. Instead of running everything in the browser, components can now run on the server and send only the necessary HTML to the user. This is more than just an optimization - it's a complete rethinking of React's architecture.
- React Server Components (RSC) is a core React feature that Next.js happens to implement exceptionally well.
- Server Components would manage data-heavy, non-interactive parts of the app, leaving only interactive elements to be handled by client components.

**Components**

Client Components: Rendered on client side.

Server Components:

- Rendered on server side.
- Faster initial page load.
- Smaller JS bundle size.
- SEO.

**When to deciede what components to use**

Client Components: User interaction like button clicks, inputs and using react hooks.

Server Components: Fetching data from server, displaying static content.

<mark>Note:</mark>
**Every components are treated as server components**
**`use client` to use as client components**

**Static Rendering**
If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.
**Pre-rendering process includes the Server and Client Components.**

<mark>The client components can only render the client components</mark>

### Runtime Environment

The **Node.js** Runtime: Default runtime that has access to all the nodejs API and ecosystem.

The **Edge** Runtime: A lightweight runtime based on Web API's with support to a limited subset of Node.js API's.

Setting runtime:
`export const runtime = 'edge' // 'nodejs'`

### Rendering Strategies

1. Static Site Generation (SSG) - Build time
2. Incremental Static Generation (ISG)
3. Server-Side Rendering (SSR) - on a request to a server

**Static site generation** is where your HTML is generated at build time. This HTML is then used for each request. Static site generation is probably the best type of rendering strategy for SEO as not only do you have all the HTML on page load because it's pre-rendered, but it also helps with page performance – now another ranking factor when it comes to SEO.

**Server-Side Rendering (SSR)** is pre-rendered, which also makes it great for SEO. Instead of being generated at build time, as in SSG, SSR's HTML is generated at request time. This is great for when you have pages that are very dynamic.

**Incremental Static Regeneration:**
If you have a very large amount of pages, generating them all at build time may not be feasible. Next.js allows you to create or update static pages after you have built your site. It enables developers and content editors to use static generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages.

**Client Side Rendering (CSR):**
Client-Side Rendering allows developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is generally served with little to no content until you fetch the JavaScript and the browser compiles everything.

In general Client-Side Rendering is not recommended for optimal SEO.

CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index.

**When to use**

```mermaid
graph TD;
A(["Will this page content will display the same information for each request?"])
A --> B{"Yes"} --> D["SSG"]
A --> C{"No"}
C --> E["Requires frequent updates, every seconds"]
E --> F{"Yes"} --> H["SSR"]
E --> G{"No"} --> I["ISG"]
```

### Hydration

Hydration in Next.js is the process where the client-side JavaScript takes over the server-rendered HTML to make it interactive. It attaches event listeners and other interactive behaviors to the static HTML, allowing React to update the DOM and respond to user interactions without re-rendering the entire page.

### Tailwind

**Screen Sizes**

`sm`: width >= 640px

`max-sm`: width < 640px

### HTTP State Managment Mechanisms

HTTP is a stateless protocol, meaning it does not maintain state between requests. However, web applications often require maintaining state to manage user sessions, track user preferences, and personalize user experiences.

To address this, various state management mechanisms have been developed, including cookies, local storage, session storage, and more.

**Cookies**

Cookies are small pieces of data stored in the user's web browser by the server. They are commonly used for session management, tracking user preferences, and personalizing user experiences.

Client sends cookies with every request to the same server, allowing the server to identify the user and maintain state across requests. It happens automatically once the cookie is set by the server making it a convenient way to manage user sessions.

**Local Storage**

Local storage is a web storage mechanism that allows data to be stored in the user's web browser. It provides a simple key-value storage interface and is commonly used for persisting user preferences, caching data, and storing application state.

It provides a larger storage capacity than cookies (typically up to 5-10MB per domain) and is accessible via JavaScript APIs.

Local storage is commonly used for caching static assets, storing user preferences, and offline data storage in progressive web applications (PWAs).

**Session Storage**

Session storage is similar to local storage but is cleared when the user's session ends (i.e., when the browser is closed). It is commonly used for storing temporary data that should not persist across sessions.

Using session storage can help improve security by ensuring that sensitive data is not stored beyond the user's session.

It is often used for temporary data storage, such as form data and shopping cart items, that should not persist across browser sessions

**IndexedDB**

IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs.

It provides a more powerful and flexible storage solution compared to local storage and session storage but requires more complex programming logic.

It is commonly used for storing large datasets, offline data synchronization, and complex data querying in web applications.

### Different ways of Storing Sessions for Authorization

**What's Session Token?**

A session token is a unique identifier used to authenticate a user's session. It is typically generated during the authentication process and is used to associate a user with their session data on the server.

It's a common practice to store session tokens on the client side and send them with each request to authenticate the user.

Do keep in mind that session tokens are not associated with session based authentication only, they can be used with token based authentication as well in the form of bearer tokens like JSON Web Tokens (JWT).

1. Cookies: Session tokens are often stored as cookies on the client's browser. The server sets a cookie containing the session token during the authentication process, and the client automatically sends this cookie with each subsequent request.

2. Authorization headers (Bearer tokens): Bearer tokens, such as JSON Web Tokens (JWT), are another common method for storing session tokens. After successful authentication, the server generates a token containing user information and signs it. This token is then sent to the client, typically in the response body, and the client includes it in the Authorization header of subsequent requests.

and many more.
