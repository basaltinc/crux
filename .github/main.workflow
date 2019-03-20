workflow "Main" {
  on = "push"
  resolves = [
    "install",
    "test:percy",
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

action "test:percy" {
  uses = "docker://basaltinc/docker-node-php-base:latest"
  needs = ["build"]
  runs = "yarn"
  args = "test:percy"
  secrets = ["PERCY_TOKEN"]
}
