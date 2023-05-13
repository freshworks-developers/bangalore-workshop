@@ -0,0 +1,37 @@
# Creating your first app

## Your First App Template

1. Ensure you have followed the steps given in [getting started guide](../../step-1/getting_started.md)
2. Create a new directory with the name that you wish to give to your app
   ```sh
   mkdir your_app_name
   ```
3. Navigate to your newly created app directory
   ```sh
   cd your_app_name
   ```
4. From within your app directory use FDK run command
   ```sh
   fdk run
   # when prompted for product name, choose freshdesk
   ? Choose a product: freshdesk
   # when prompted for app template use your_first_app
   ? Choose a template: your_first_app
   # when selected it will prompt below message
   A new Freshdesk app was successfully created from template "your_first_app" with the following files.

    /workspae/bangalore-workshop/step-2/your_app_name
    ├── README.md
    ├── app
    │   ├── index.html
    │   ├── scripts
    │   │   └── app.js
    │   └── styles
    │       ├── images
    │       │   └── icon.svg
    │       └── style.css
    ├── config
    │   └── iparams.json
    ├── coverage
    │   ├── app.js.html
    │   ├── base.css
    │   ├── block-navigation.js
    │   ├── favicon.png
    │   ├── index.html
    │   ├── prettify.css
    │   ├── prettify.js
    │   ├── sort-arrow-sprite.png
    │   └── sorter.js
    ├── log
    │   └── fdk.log
    └── manifest.json
   ```
5. Navigate to `your_first_app` directory from CLI  
6. Run command `fdk run` to run the app
7. Navigate to your product page - https://[subdomain].[product].com/a/dashboard/sample Eg: https://paidappdemo.freshdesk.com/ 
   1. Navigate to a specific ticket - https://[subdomain].[product].com/a/tickets/[id] Eg.https://paidappdemo.freshdesk.com/a/tickets/3
   2. Append `?dev=true` or `&dev=true` in URI to include query param For example
   3. When to use when there is no query param in URI
    `https://paidappdemo.freshdesk.com/a/tickets/3?dev=true`
   4. To use when there is already a URI query param is present 
    `https://paidappdemo.freshservice.com/a/tickets/3?current_tab=details&dev=true` 
8. Navigate to [events page](http://localhost:10001/web/test)
9.  Navigate to [custom config page](http://localhost:10001/custom_configs)

### Your First App

This app displays the name of the requester of a freshdesk ticket in the ticket_sidebar placeholder

#### Files and Folders
    .
    ├── README.md                 A file for your future self and developer friends to learn about app
    ├── app                       A folder to place all assets required for frontend components
    │   ├── index.html            A landing page for the user to use the app
    │   ├── scripts               JavaScript to place files frontend components business logic
    │   │   └── app.js
    │   └── styles                A folder to place all the styles for app
    │       ├── images
    │       │   └── icon.svg
    │       └── style.css
    ├── config                    A folder to place all the configuration files
    │   └── iparams.json
    └── manifest.json             A JSON file holding meta data for app to run on platform

Explore [more of app sample apps](https://community.developers.freshworks.com/t/freshworks-sample-apps/3604) on the Freshworks github respository.