# Creating your first app

## Modify  your first app with Crayons components and instance method

[Crayons](https://crayons.freshworks.com/) is a design library for developers who build apps for us. Through pre-built components, Crayons offers control and flexibility to build rich interfaces consistent with the Freshworks product design and experience.

[Instance method](https://developers.freshdesk.com/v2/docs/instance-method/) A single app can be present in multiple locations on the same page. In addition, a location may open up one or more modals. The locations and modals can be thought of as separate instances of the app and can be resized, closed, and communicate with each other. The app framework provides instance methods to enable these use cases.
Take a look at the [Instance method sample app](https://github.com/freshworks-developers/instance-method-samples) for a demonstration of this feature.

## Modify your app template to use Crayons components

1. Ensure you have followed the steps given in [README.md](../../step-2/your_first_app/README.md) of step-2
2. Navigate to `app/index.html` via Explorer
3. Add below code block to your `index.html`
   ```html
   <fw-accordion expanded>
    <fw-accordion-title>accordion example</fw-accordion-title>
    <fw-accordion-body>
        This is an example of accordion component. The detail of this component can be found [here](https://crayons.freshworks.com/components/core/accordion/)
    </fw-accordion-body>
    </fw-accordion>
   ```
4. Remove the line 
   ```html
   <p>Utilize this template code to build your App</p>
   ```
5. Navigate to your project via CLI
   ```sh
   cd your_first_app
   ```
6. Run command `fdk run` to run the app
7. Navigate to your product page - https://[subdomain].[product].com/a/dashboard/sample Eg: https://paidappdemo.freshdesk.com/ 
   1. Navigate to a specific ticket - https://[subdomain].[product].com/a/tickets/[id] Eg.https://paidappdemo.freshdesk.com/a/tickets/3
   2. Append `?dev=true` or `&dev=true` in URI to include query param For example
   3. When to use when there is no query param in URI
    `https://paidappdemo.freshdesk.com/a/tickets/3?dev=true`
   4. To use when there is already a URI query param is present 
    `https://paidappdemo.freshservice.com/a/tickets/3?current_tab=details&dev=true` 
8. Change the content of accordion section with below code
   ```html
    <fw-accordion-body style="--fw-accordion-body-background-color: #FFFFFF">
        <div id="accordion-form">
        <fw-button
            id="accordion-form-submit"
            color="secondary"
            style="display: block; margin-bottom:10px;"
            >Submit</fw-button
        >
        <fw-button id="accordion-form-reset" style="display: block;"
            >Reset</fw-button
        >
        </div>
    </fw-accordion-body>
    </fw-accordion>
    </div>

    <script type="application/javascript">
    var accForm = document.createElement('fw-form');
    var accFormContainer = document.querySelector('#accordion-form');
    document
    .querySelector('#accordion-form-submit')
    .addEventListener('click', async (e) => {
        const { values, isValid } = await accForm.doSubmit(e);
        console.log({ values, isValid });

        if (!isValid) {
        // if error from backend , set Errors - passing key value pair
        accForm.setFieldErrors({
            first_name: 'First Name must be unique <<Server Error>>',
        });
        }
    });
    document
    .querySelector('#accordion-form-reset')
    .addEventListener('click', (e) => {
        accForm.doReset(e);
    });
    var accFormSchema = {
    name: 'Test Form',
    fields: [
        {
        id: '2978f2320-704b-46c7-9f88-110e14e34q3c',
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
        id: '3971f8320-704b-46c7-9f88-110e1j934a8c',
        name: 'last_name',
        label: 'Last Name',
        type: 'TEXT',
        position: 3,
        required: true,
        placeholder: 'Enter…',
        hint: 'Please provide a text of at max 100 characters',
        choices: [],
        },

        {
        id: '42aeh88f-25cf-46yce-89r5-5410fe3d4315',
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
        id: '69e48f820-704b-49o7-9f88-110e14e34a8c',
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
        id: '8u878cg20-704b-46c7-9f88-110e14e34a8c',
        name: 'phone_number',
        label: 'Phone number',
        type: 'TEXT',
        position: 3,
        required: true,
        placeholder: 'Enter…',
        hint: 'Please provide your phone number',
        choices: [],
        },
    ],
    };
    accFormContainer.prepend(accForm);
    var fields = accFormSchema.fields.map((field) => {
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

    var accFormSchema1 = {
    ...accFormSchema,
    fields: fields,
    };
    accForm.formSchema = accFormSchema1;
    </script>
   ```
9.  Verify the changes in your app page
10. Navigate to your app.js file from Explorer located at `step-3/your_first_app/app/scripts/app.js`
11. Add below line in your `init()` method
    ```js
    await client.instance.resize({height: "700px"});
    ```
12. Verify your changes
