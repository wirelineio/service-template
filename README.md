# Wireline Service Template.

## Setup

### CLI

See https://github.com/wirelineio/darkstar/blob/master/%40wirelineio/cli/README.md for CLI and access key setup instructions.

### Create project

- using git:

```bash
git clone --depth=1 git@github.com:wirelineio/service-template.git <service_name>
cd <service_name>
rm -rf .git
```
- using CLI:

```bash
wire create --template="https://github.com/wirelineio/service-template" --path="<service_name>"
cd <service_name>
```

### Install Packages

```bash
yarn install
```

### Change service.yml and stack.yml

Edit service.yml and stack.yml and change the service and stack names.

## Service Register

```bash
$ wire build
```

```
$ wire service register --domain example.com

Domain           Name                            Version         Content Hash                                                            Versions
---------------------------------------------------------------------------------------------------------------------------------------------------
example.com      service-template                0.0.1           52cdbe12f3119fb929edccd5d3be5206a02b30665006ee21796e6720f3813bde
```

## Stack Deploy

```
$ wire stack deploy

Name                            Service                         Version         Status          Content Hash                                                            Endpoint
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
my-deployment                   wrn::service-template           0.0.1           IN_PROGRESS
```

```
$ wire stack list-deployments

Name                            Service                         Version         Status          Content Hash                                                            Endpoint
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
my-deployment                   wrn::service-template           0.0.1           DONE                                                                                    https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev
```

## Test Endpoint

```bash
$ export WRL_ACCESS_KEY="<INSERT ACCESS KEY HERE>"

$ curl -s -XGET -H'Authorization: $WRL_ACCESS_KEY' https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev/test | jq
{
  "message": "Hello Alice"
}

$ curl -s -XGET -H'Authorization: $WRL_ACCESS_KEY' https://1k06alat20.execute-api.us-east-1.amazonaws.com/dev/test?name=Bob | jq
{
  "message": "Hello Bob"
}
```


