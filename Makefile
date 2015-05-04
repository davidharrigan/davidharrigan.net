SHELL := /bin/bash

run_app:
	venv/bin/python src/server/app.py

# Archives the app and puts it under docker/app directory
package:
	tar cvfz docker/app/app.tar.gz app/src app/Gulpfile.js app/bower.json app/package.json app/requirements.txt

# Builds the app container
build_app: package
	cd docker/app && docker build -t app .

# Builds the nginx container
build_nginx:
	cd docker/nginx && docker build -t nginx .

# Runs the nginx container
run_nginx:
	docker run -d -p 80:80 --name nginx nginx

# Runs the dev environment
run_dev:
	docker run -d -p 80:8080 --name app_dev -e GCAPTCHA_SECRET=$(GCAPTCHA_SECRET) -v $(shell pwd)/app/src:/var/www/app/src app
	docker exec -d=true app_dev node_modules/gulp/bin/gulp.js dev

run_prod:
	docker run -d -p 80:80 --name app -e "GCAPTCHA_SECRET=$(GCAPTCHA_SECRET)" app

# Kills and removes containers
clean:
	docker kill app && \
	docker rm app && \
	docker kill nginx && \
	docker rm nginx
