# Wireline Service Template.

## Setup

### Install Packages

```
git clone --depth=1 git@github.com:wirelineio/service-template.git <service name>
cd <service name>
rm -rf .git
yarn link "@wirelineio/sdk"
yarn install
```

### Change service.yml and stack.yml

Edit service.yml and stack.yml and change the service and stack names.

## Service Register

```
$ WRL_ACCESS_KEY=abc123 babel-node ~/wireline/darkstar/@wirelineio/cli/src/main.js build
```

```
$ WRL_ACCESS_KEY=abc123 babel-node ~/wireline/darkstar/@wirelineio/cli/src/main.js service register --domain example.org

Domain           Name                            Version         Content Hash                                                            Versions
---------------------------------------------------------------------------------------------------------------------------------------------------
example.org      service-template                0.0.1           52cdbe12f3119fb929edccd5d3be5206a02b30665006ee21796e6720f3813bde
```

## Stack Deploy

```
$ WRL_ACCESS_KEY=abc123 babel-node ~/wireline/darkstar/@wirelineio/cli/src/main.js stack deploy

Name                            Service                         Version         Status          Content Hash                                                            Endpoint
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
my-deployment                   wrn::service-template           0.0.1           IN_PROGRESS
```

```
$ babel-node /Users/ashwinp/projects/wireline/darkstar/@wirelineio/cli/src/main.js stack deploy

Name                            Service                         Version         Status          Content Hash                                                            Endpoint
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
my-deployment                   wrn::service-template           0.0.1           DONE                                                                                    https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev
```

## Test Endpoint

```
$ curl -s -XGET -H'Authorization: abc123' https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev/test | jq
{
  "message": "Hello Alice"
}

$ curl -s -XGET -H'Authorization: abc123' https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev/test?name=Bob | jq
{
  "message": "Hello Bob"
}
```

## INTERNAL ONLY

This package is currently internal to the Wireline team; it requires private access to the @wirelineio org.


### Private Repos

https://www.npmjs.com/org/wirelineio

~~~~
npm login                       # NOTE: Must preceed yarn login.
yarn login
~~~~

Check auth tokens: `~/.npmrc`


### Local Repos

To use local repositories:

~~~~
cd darkstar/@wirelineio/sdk
yarn link

cd <service name>
yarn link "@wirelineio/sdk"
~~~~
