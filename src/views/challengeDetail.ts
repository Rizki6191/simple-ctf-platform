export function challengeDetailView(data: {
  id: string
  title: string
  description: string
  points: number
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${data.title}</title>
</head>
<body>
  <h1>${data.title}</h1>
  <p><strong>Points:</strong> ${data.points}</p>

  <hr />

  <div>
    ${data.description}
  </div>

  <hr />

  <form method="POST" action="/challenges/${data.id}/submit">
    <input type="text" name="flag" placeholder="CTF{...}" />
    <button type="submit">Submit</button>
  </form>

  <br />
  <a href="/view/challenges">Back</a>
</body>
</html>
`
}
