# Creating your first app

## Modify your app with to include app placeholders

The `manifest.json` file contains information such as the platform version used by a product, locations on the product UI where an app can be rendered (for front-end apps), dependent packages used by the app, SMI functions that can be invoked from an app’s front-end component, events and the corresponding callbacks (for serverless apps), and the Node.js and FDK versions used to build, test, validate, and pack the app. For apps built using FDK version 9.0.0 or later, if the app is expected to make third-party HTTP calls, manifest.json lists the configured request templates that the app invokes to construct and send secure HTTP requests to the third-party domains.

In this section we will modify the app to be visible in multiple places such as `ticket_sidebar`, `full_page_app`, `ticket_requester_info`, `cti_global_sidebar`, `contact_sidebar`, and `new_ticket_requester_info`.


1. Ensure you have followed the steps given in [getting started guide](../../step-1/getting_started.md)
2. Navigate to `your_first_app` directory from CLI  
3. Run command `fdk run` to run the app
4. Navigate to your `manifest.json` file from explorer
5. Replace locations section in your `manifest.json` with new location changes
   Existing manifest.json locations
   ```json
   "location": {
      "ticket_sidebar": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      }
   }
   ```
   Replace it with new locations as shown below
   ```json
   "location": {
      "ticket_sidebar": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      },
      "full_page_app": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      },
      "ticket_requester_info": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      },
      "cti_global_sidebar": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      },
      "contact_sidebar": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      },
      "new_ticket_requester_info": {
         "url": "index.html",
         "icon": "styles/images/icon.svg"
      }
   }
   ```
6. Navigate to your product page - https://[subdomain].[product].com/a/dashboard/sample Eg: https://paidappdemo.freshdesk.com/ 
   1. Navigate to a specific ticket - https://[subdomain].[product].com/a/tickets/[id] Eg.https://paidappdemo.freshdesk.com/a/tickets/3
   2. Append `?dev=true` or `&dev=true` in URI to include query param For example
   3. When to use when there is no query param in URI
    `https://paidappdemo.freshdesk.com/a/tickets/3?dev=true`
   4. To use when there is already a URI query param is present 
    `https://paidappdemo.freshservice.com/a/tickets/3?current_tab=details&dev=true` 
7. Explore the app placeholders defined in manifest.json. The app must be visible under all of the defined placeholders