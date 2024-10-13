# Learn-Microservice-with-NodeJS-and-React

This repo store anything that I learn about microservice with node JS and react by Udemy

- install NGINX Ingress Controller

  - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml`

- port-forward

  - kubectl port-forward `<name pod>` `<port host>`:`<port pod>`
  - `kubectl port-forward nats-depl-7796bd4475-6bfbq 4222:4222 8222:8222`

- create a Secret

  - `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=abc`
  - `kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<stripe secrets key>`
