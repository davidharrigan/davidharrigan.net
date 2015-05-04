FROM ubuntu:14.04
MAINTAINER David Harrigan <dharrigan118@gmail.com>

# Update
RUN apt-get update --fix-missing

# Install our dependencies
RUN apt-get install -y build-essential git nodejs npm
RUN apt-get install -y python3 python3-dev python-setuptools
RUN apt-get install -y python-pip python-virtualenv

# Add app files
ADD app.tar.gz /var/www/

WORKDIR /var/www/app

# Install the python app
RUN virtualenv --no-site-packages --python=python3 venv
RUN venv/bin/pip install -r requirements.txt

# Install js requirements
RUN PATH="$PATH:/usr/local/bin"
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN /usr/bin/npm install
RUN node_modules/bower/bin/bower install --allow-root
RUN node_modules/gulp/bin/gulp.js

# expose port(s)
EXPOSE 80

# Run app
CMD ["/var/www/app/venv/bin/python", "/var/www/app/src/server/app.py"]
