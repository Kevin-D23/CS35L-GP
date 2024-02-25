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

How to fetch user information:
```
import { getUser, getAllUsers } from "@/app/api/user/route";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const session = await getServerSession(options);
let email = session?.user?.email;
const user = getUser(email) --> returns user object
const userArray = getAllUsers() --> returns array of user objects

/* To get fields from DB: */
let field = user.field

ex: 
let name = user.name
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Contributors:

Hieu Duong - Kevin-D23

Britney Chen - Britney Chen

Michael Khojastegan - mkhojastegan

Haohan Chen - Tangerine-maker

Amanda Mai - moomoonda
