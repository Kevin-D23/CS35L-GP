# Students Inferno

Study companion app designed to help students find others to study with. This platform combines the convenience of a dating app with the purpose of finding like-minded individuals.

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

## Documentation
How to fetch user information (ONLY WORKS ON SERVER SIDE COMPONENTS):

```javascript
// replace "@" with proper path
import { getUser, getAllUsers } from "@/app/api/user/route";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

// USE ASYNC/AWAIT FOR ALL DB FUNCTIONS

// get current session and user email //
const session = await getServerSession(options);
let email = session?.user?.email;

//  To get fields from user object //
const user = await getUser(email); // returns user object
let name = user.name;

// returns array of user objects
const userArray = await getAllUsers();

// changes fields in user object and returns newly updated object
// check @/app/api/user/route.js for user fields and data types
let changes = { name: "Haohan Smith", age: 16 };
await updateUser(email, changes);
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- React
- NextJS
- MongoDB Atlas
- Express

#### Libraries:
- next-auth
- mongoose
- react-select
- react-icons


## Contributors:

**Hieu Duong** - Kevin-D23

**Britney Chen** - Britney Chen

**Michael Khojastegan** - mkhojastegan

**Haohan Chen** - Tangerine-maker

**Amanda Mai** - moomoonda
