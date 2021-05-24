const htmlGenerator = (team) => {
    const head = `<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
    <script src="https://kit.fontawesome.com/563b95b7bc.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <main class="team-cards">`;

    const footer = `</main>
    <script src="" async defer></script>
    </body>
    </html>`;

    let body = '';
    team.forEach(member => {
        console.log(member, '******* member *******')
        const role = member.getRole()
        switch (role) {
            case 'Manager':
                body = body + `<div class="individual-card">
                <div class="card-header">
                    <h2>${member.name}</h2>
                    <h3>${role}</h3>
                </div>
                <div class="card-list">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                        <li class="list-group-item">Office Number: ${member.officeNumber}</li>
                      </ul>
                </div>
    
            </div>`
                break;
            case 'Intern':
                body = body + `<div class="individual-card">
                <div class="card-header">
                    <h2>${member.name}</h2>
                    <h3>${role}</h3>
                </div>
                <div class="card-list">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                        <li class="list-group-item">Intern School: ${member.internSchool}</li>
                      </ul>
                </div>
    
            </div>`
                break;
            case 'Engineer':
                body = body + `<div class="individual-card">
                <div class="card-header">
                    <h2>${member.name}</h2>
                    <h3>${role}</h3>
                </div>
                <div class="card-list">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://www.github.com/${member.gitHubUser}">${member.gitHubUser}</a></li>
                      </ul>
                </div>
    
            </div>`
                break;
        }
    });

    // return "<div>NEW</div>"
    return `<!DOCTYPE html><html>${head} ${body} ${footer}`
}


module.exports = {
    htmlGenerator
}