# Creating your first app

## Modified app with separate full page app page and cti dialer page

1. Ensure you have followed the steps given in [getting started guide](../../step-1/getting_started.md)
2. create following files in your app directory
   1. create a folder called `views`
   2. under `views` create two files namely `cti_global_sidebar.html` and `full_page_app.html`
3. Modify your `manifest.json` locations with below section
   ```json
    "location": {
        "ticket_sidebar": {
          "url": "index.html",
          "icon": "styles/images/dial_pad.svg"
        },
        "full_page_app": {
          "url": "views/full_page_app.html",
          "icon": "styles/images/icon.svg"
        },
        "ticket_requester_info": {
          "url": "index.html",
          "icon": "styles/images/icon.svg"
        },
        "cti_global_sidebar": {
          "url": "views/cti_global_sidebar.html",
          "icon": "styles/images/dial_pad.svg"
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
4. Add below code in `cti_global_sidebar.html`
   ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Dialer</title>
    <link rel="stylesheet" type="text/css"
    href="https://assets.freshservice.com/widget-sdks/crayons/1.0.0./crayons.min.css">
    <script type="text/javascript"
    src="https://assets.freshservice.com/widget-sdks/crayons/1.0.0./crayons.min.js"></script>
    </head>

    <body>
    <div class="dialer-container">
    <h4>Freshworks Dialler Interface</h4>
    <div class="input-container">
        <fw-country-phone value="+918888888888" name="country-code" clear-input select-placeholder="select country code"
        input-placeholder="Enter phone number" required input-label="Support phone number" select-label="Country Code"
        error-text="Error message text" warning-text="Please use numbers for user ID" state="normal"
        class="dialer-input"></fw-country-phone>
    </div>
    <fw-tooltip content="Click here to call">
        <fw-button size="icon" color="secondary" class="dial-button"><fw-icon name="phone" size="20"></fw-icon>
        </fw-button>
    </fw-tooltip>
    <fw-popover same-width="false">
        <fw-button slot="popover-trigger">Contacts</fw-button>
        <fw-list-options variant="icon" id="predefinedOptions" slot="popover-content" option-label-path="name"
        option-value-path="id"></fw-list-options>
    </fw-popover>
    </div>
    <script>
    document.querySelector('.dial-button').addEventListener('click', function () {
        const phoneNumber = document.querySelector('.dialer-input').value;
        if (phoneNumber) {
        alert(`Dialing: ${phoneNumber}`);
        } else {
        alert('Please enter a phone number');
        }
    });
    </script>
    <style>
    .dialer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 300px;
        margin: 50px auto;
        padding: 20px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .input-container {
        margin-bottom: 20px;
        width: 100%;
    }
    </style>
    </body>

    </html>

    <script async type="module"
    src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
    <script async nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
   ```
5. Add below code in `full_page_app.html`
   ```html
    <div id="form-container">
    <fw-button id="submit">Submit</fw-button>
    <fw-button id="reset">Reset</fw-button>
    </div>
    <script type="application/javascript">
    var form = document.createElement('fw-form');
    var formContainer = document.querySelector('#form-container');
    document.querySelector('#submit').addEventListener('click', async (e) => {
        const { values, isValid } = await form.doSubmit(e);
    });
    document.querySelector('#reset').addEventListener('click', (e) => {
        form.doReset(e);
    });
    var formSchema = {
        name: 'Test Form',
        fields: [
        {
            id: '2978f820-704b-46c7-9f88-110e14e34a8c',
            name: 'first_name',
            label: 'First Name',
            type: 'TEXT',
            position: 3,
            required: true,
            placeholder: 'Enter…',
            hint: 'Please provide a text of at max 100 characters',
            choices: [],
        },

        {
            id: '3978f820-704b-46c7-9f88-110e14e34a8c',
            name: 'last_name',
            label: 'Last Name',
            type: 'TEXT',
            position: 3,
            required: true,
            placeholder: 'Enter…',
            hint: 'Please provide a text of at max 100 characters',
            choices: [],
            maxlength: 10, // pass any crayons input control related properties
        },

        {
            id: '42aecb8f-25cf-47ce-89c6-5410fe3d4315',
            name: 'languages_known',
            label: 'Languages Known',
            type: 'MULTI_SELECT',
            position: 13,
            required: true,
            placeholder: 'Enter…',
            hint: 'Select one or more values',
            choices: [
            {
                id: 1,
                value: 'English',
                position: 1,
                dependent_ids: {},
            },
            {
                id: 2,
                value: 'Hindi',
                position: 2,
                dependent_ids: {},
            },
            {
                id: 3,
                value: 'Tamil',
                position: 3,
                dependent_ids: {},
            },
            ],
        },

        {
            id: '6978f820-704b-46c7-9f88-110e14e34a8c',
            name: 'email',
            label: 'Email',
            type: 'EMAIL',
            position: 3,
            required: true,
            placeholder: 'Enter…',
            hint: 'Please provide an email Id',
            choices: [],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
            name: 'date_of_birth',
            label: 'Date Of Birth',
            type: 'DATE',
            position: 11,
            required: true,
            Placeholder: 'Enter…',
            hint: 'Please enter your date of birth',
            choices: [],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
            name: 'landmark',
            label: 'Landmark',
            type: 'PARAGRAPH',
            position: 7,
            required: true,
            Placeholder: 'Enter some text…',
            hint: 'Please enter the nearest landmark',
            choices: [],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
            name: 'is_indian_citizen',
            label: 'Indian Citizen?',
            type: 'CHECKBOX',
            position: 7,
            required: true,
            placeholder: null,
            hint: 'Check or Uncheck the box',
            choices: [],
        },

        {
            id: '8978f820-704b-46c7-9f88-110e14e34a8c',
            name: 'phone_number',
            label: 'Phone number',
            type: 'TEXT',
            position: 3,
            required: true,
            placeholder: 'Enter…',
            hint: 'Please provide your phone number',
            choices: [],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
            name: 'pincode',
            label: 'Pincode',
            type: 'NUMBER',
            position: 8,
            required: false,
            Placeholder: 'Enter…',
            hint: 'Please enter your Pincode',
            choices: [],
        },

        {
            id: 'ba53775e-2948-4065-8a59-d99d4494e845',
            name: 'gender',
            label: 'Gender',
            type: 'RADIO',
            position: 5,
            required: true,
            placeholder: null,
            hint: 'Please specify your gender',
            choices: [
            {
                id: 1,
                value: 'Female',
                position: 1,
                dependent_ids: {},
            },
            {
                id: 2,
                value: 'Male',
                position: 2,
                dependent_ids: {},
            },
            ],
        },

        {
            id: '42aecb8f-25cf-47ce-89c6-5410fe3d4315',
            name: 'order_status',
            label: 'Order Status',
            type: 'DROPDOWN',
            position: 4,
            required: true,
            placeholder: 'Enter…',
            hint: 'Select a value',
            choices: [
            {
                id: 1,
                value: 'open',
                position: 1,
                dependent_ids: {},
            },
            {
                id: 2,
                value: 'pending',
                position: 2,
                dependent_ids: {},
            },
            {
                id: 3,
                value: 'closed',
                position: 3,
                dependent_ids: {},
            },
            ],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf487be94595',
            name: 'amount_paid',
            label: 'Amount Paid',
            type: 'DECIMAL',
            position: 10,
            required: true,
            Placeholder: 'Enter…',
            hint: 'Please enter the amount paid',
            choices: [],
        },

        {
            id: 'f319f86f-1b6a-49cb-b4b6-cf4873674595',
            name: 'profile_pic',
            label: 'Profile picture',
            type: 'FILES',
            position: 11,
            required: true,
            placeholder: '',
            multiple: true,
        },
        ],
    };
    var initialValues = {
        is_indian_citizen: true,
    };
    formContainer.prepend(form);
    // do any customisation on the field schema to match the props of crayons components.
    var fields = formSchema.fields.map((field) => {
        // select expects `text` and `value` prop
        if (field.type === 'DROPDOWN' || field.type === 'MULTI_SELECT') {
        return {
            ...field,
            choices: field.choices?.map((f) => {
            return {
                ...f,
                text: f.value,
                value: f.id,
            };
            }),
        };
        } else return field;
    });

    var formSchema1 = {
        ...formSchema,
        fields: fields,
    };
    form.formSchema = formSchema1;
    form.initialValues = initialValues;
    </script>

    <script async type="module" src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"></script>
    <script async nomodule src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"></script>
   ```
6. Navigate to `your_first_app` directory from CLI  
7. Run command `fdk run` to run the app
8. Navigate to your product page - https://[subdomain].[product].com/a/dashboard/sample Eg: https://paidappdemo.freshdesk.com/ 
9.  Append `?dev=true` in your URI query params
10. From global sidebar open full page app and CTI app to test the changes
11. Explore the app placeholders defined in `manifest.json`. The app must be visible under all of the defined placeholders