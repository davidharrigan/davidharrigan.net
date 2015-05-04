import os
dirname = os.path.dirname
base_dir = lambda d: os.path.join(dirname(dirname(__file__)), d)

# The version string for this application is used by docopt.
VERSION = "0.0.0"

# Run the application in debug mode.
DEBUG = True

# Port on which the HTTP Server will bind.
PORT = 8080

STATIC_DIR = "dist"

GCAPTCHA_SECRET = os.environ.get("GCAPTCHA_SECRET", "")

# Tornado Server Configuration.
TORNADO_SETTINGS = {
        "debug": DEBUG,
        "serve_traceback": DEBUG,
        "autoreload": DEBUG,
        "static_path": STATIC_DIR,
        "template_path": base_dir('templates'),
}
