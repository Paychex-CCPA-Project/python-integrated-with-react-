#!/bin/bash  

docker build -t operatingsys.azurecr.io/python-django:latest .

docker run -d -p 8080:3000 operatingsys.azurecr.io/python-django

docker login -u operatingSys -p n30Dv6YqEnH8Q+inhyJu4s=zsvkkYhpk  operatingsys.azurecr.io

docker push operatingsys.azurecr.io/python-django

 
 
