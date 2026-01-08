import { Challenge } from "../types/challenge.types"

export function challengeListView(challenges: Challenge[]) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Challenges</title>
</head>
<body>
  <h1>Challenges</h1>

  <ul>
    ${challenges.map(c => `
      <li>
        <a href="/view/challenges/${c.id}">
          ${c.meta.title} (${c.meta.points} pts)
        </a>
      </li>
    `).join("")}
  </ul>

  <a href="/">Back</a>
</body>
</html>
`
}
