# College Exam Seat Planner

## Objective
Develop and deploy a working application that allocates classrooms for exams using the minimum number of rooms while preferring lower-floor classrooms.

## Tech Stack
- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
- Deployed on Vercel


## Features
- Add classroom with validation
- View all classrooms
- Allocate exam seats using greedy optimization
- Prefers lower-floor classrooms
- Minimizes number of rooms used
- Displays allocated classrooms
- Handles insufficient capacity cases
- Proper input validation and error handling


## Greedy Allocation Approach

1. Classrooms are sorted by:
   - Floor number (ascending)
   - Capacity (descending within same floor)

2. Rooms are selected until total capacity >= total students.

3. If total capacity is insufficient:
   - Displays: "Not enough seats available"

This ensures:
- Minimum number of rooms
- Lower floors preferred first


## How to Run Locally

```bash
npm install
npm run dev