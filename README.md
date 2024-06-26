This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next-Auth

Tech I am using for auth:
- Next-auth 5.0 setup with Prisma Neon adapter & Vercel Postgres
- OAuth (Google, GitHub)
- Email magic links (Resend)
- Admin role
- Authentication in server components, client components, server actions, and API route handlers
- Auth request deduplication (caching)
- Updating user data
- Static caching
- And more

## Rem
--login = /api/auth/signin
 

# GO to vercel.com in the storage section
-- create storage
-- click .env.local tab
-- copy end paste to .env

# on the next outh
--after installing the library
--run: npx auth secret
--that will generate auth secret

# db config 
-- visit https://next-auth.js.org/v3/adapters/prisma-legacy#setup


## starting tamplate
-- use : npx create-next-app@latest 
## Next get into folder and start

## initializing chat ui use: npx shadcn-ui@latest init
-- setting use : ts ; yes ; default ; slate (Base color)
--  del global.css then on where is your global, type src/app/global.css
-- css varibles = yes; 
-- located : tailwind.config.ts
-- util = yes
--proceed to write files = yes

## Rem
-- anytime you use a component from shatcn,
--run : npx shadcn-ui@latest add button
prompt choose yes
## run project use : npm run dev

4.24.2

## starting tamplate
-- use : npx create-next-app@latest 
## Next get into folder and start
## setting up prisma
install prisma and @prisma/client
-- run npx prisma init
-- after schema.prisma config,
-- run npx prisma generate
-- then run : npx prisma migrate dev
-- to check db : npx prisma studio

## initializing chat ui use: npx shadcn-ui@latest init
-- setting use : ts ; yes ; default ; slate (Base color)
--  del global.css then on where is your global, type src/app/global.css
-- css varibles = yes; 
-- located : tailwind.config.ts
-- util = yes
--proceed to write files = yes

## for drizzle-kt
-- 
-- after creating schema. run : npx drizzle-kit push:pg

## Rem
-- anytime you use a component from shatcn,
--run : npx shadcn-ui@latest add button
prompt choose yes
## run project use : npm run dev


4.24.2

## mongodb url
## user name
## password : RfzUP16IFGXu1jNO
## url = mongodb+srv://apimain90:RfzUP16IFGXu1jNO@cluster0.5uknphj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
##DATABASE_URL=mongodb+srv://apimain90:RfzUP16IFGXu1jNO@cluster0.5uknphj.mongodb.net/kre-staff-policies-DB?retryWrites=true&w=majority&appName=Cluster0


