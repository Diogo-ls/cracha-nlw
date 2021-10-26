const linksSocialMedia = {
  github: 'diogo-ls',
  youtube: 'channel/UCeK1F4Tp5vci2eK8sTszgwQ',
  facebook: 'diogoleal',
  instagram: 'diogo_lleal',
  twitter: 'diogoleal121'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImages.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
