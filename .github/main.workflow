workflow "Main" {
  on = "push"
  resolves = [
    "build",
  ]
}

action "install" {
  uses = "docker://basaltinc/docker-node-php-base:latest"
  runs = "yarn"
  args = "install"
}

action "build" {
  uses = "docker://basaltinc/docker-node-php-base:latest"
  runs = "yarn"
  needs = "install"
  args = "build"
}

workflow "Deploy & Test" {
  on = "deployment_status"
  resolves = ["test:percy"]
}

action "isDeployReady" {
  uses = "docker://node:10.14.2"
  runs = "node"
  args = "./scripts/actions--on-deploy.js"
}

action "install post-deploy" {
  uses = "docker://node:10.14.2"
  runs = "yarn"
  args = "install"
  needs = ["isDeployReady"]

  # https://developer.github.com/actions/creating-github-actions/accessing-the-runtime-environment
}

action "test:percy" {
  uses = "docker://cypress/browsers:chrome67"
  needs = ["install post-deploy"]
  secrets = ["PERCY_TOKEN"]
  runs = ["sh", "-c", "export BASE_URL=$(cat .github/artifacts/now-url.txt) && yarn test:percy"]
}
