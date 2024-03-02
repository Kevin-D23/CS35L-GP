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

How to fetch user information (ONLY WORKS ON SERVER SIDE COMPONENTS):
```
import { getUser, getAllUsers } from "@/app/api/user/route";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

# get current session and user email
const session = await getServerSession(options);
let email = session?.user?.email;


# To get fields from user object:
const user = getUser(email) --> returns user object
example: 
let name = user.name


const userArray = getAllUsers() --> returns array of user objects

let changes = {name: "Haohan Smith, age: 16}
updateUser(email, changes) --> changes fields in user object and returns newly updated object
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Contributors:

Hieu Duong - Kevin-D23

Britney Chen - Britney Chen

Michael Khojastegan - mkhojastegan

Haohan Chen - Tangerine-maker

Amanda Mai - moomoonda
