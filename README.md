# Grav Cachet Plugin
This simple Plugin lets you display your website status from [Cachet](https://www.cachethq.io) with a status light.

# Setup
To get started, you just have to set the URL of your Cachet status page either in `user/plugins/cachet.yaml` or in the plugins section of the Grav admin plugin.

The plugin fetches the data over XHR request. Check in your Cachet settings, that your website doesn't get blocked by CORS policy. More information about that [here](https://docs.cachethq.io/docs/cors).
# Usage
To display the status light on your website, just insert `{% include 'partials/cachet_status_simple.html.twig' %}` where you want to display it.
