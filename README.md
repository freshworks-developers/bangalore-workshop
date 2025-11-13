# Bangalore Workshop - Freshworks App Development

Welcome to the Freshworks Paid Apps In-Person Workshop in Bangalore! This hands-on workshop will guide you through building apps on the Freshworks platform, from basic concepts to advanced integrations.

## 📚 Table of Contents

- [Overview](#overview)
- [Workshop Steps](#workshop-steps)
- [Resources](#resources)
- [Community & Support](#community--support)

## Overview

This workshop is designed to help developers learn how to build marketplace apps for Freshworks products.

## Workshop Steps

### Step 1: Getting Started
**📄 [View Guide](./step-1/getting_started.md)**

Set up your development environment and get familiar with the Freshworks ecosystem.

**What you'll learn:**
- Creating a Freshworks Developer account
- Subscribing to Freshworks products for testing
- Installing NVM and Node.js
- Installing and configuring the FDK CLI

---

### Step 2: Creating Your First App
**📄 [View Guide](./step-2/README.md)**

Build a simple app that displays the requester's name in the Freshdesk ticket sidebar.

**What you'll learn:**
- Understanding modules and placeholders
- App structure and file organization
- Using the Data API to fetch ticket information
- Running and testing your app locally

**Key Concepts:**
- `support_ticket` module
- `ticket_sidebar` placeholder
- `app.activated` event
- `client.data.get()` method

---

### Step 3: Using Crayons Components and Instance Methods
**📄 [View Guide](./step-3/README.md)**

Enhance your app with Freshworks Crayons UI components and learn to resize app instances.

**What you'll learn:**
- Importing and using Freshworks Crayons components
- Creating forms with validation
- Using instance methods to resize your app
- Maintaining UI consistency with Freshworks design system

**Key Concepts:**
- [Freshworks Crayons](https://crayons.freshworks.com/)
- Instance methods
- App resizing
- Form validation

---

### Step 4: Multi-Placeholder App
**📄 [View Guide](./step-4/README.md)**

Make your app available across multiple locations in Freshdesk.

**What you'll learn:**
- Configuring multiple placeholders in manifest.json
- Understanding different placeholder contexts
- Building apps that work across various UI locations

**Supported Placeholders:**
- `ticket_sidebar`
- `full_page_app`
- `ticket_requester_info`
- `cti_global_sidebar`
- `contact_sidebar`
- `new_ticket_requester_info`

---

### Step 5: Specialized Placeholder Content
**📄 [View Guide](./step-5/README.md)**

Create different experiences for Full Page Apps and CTI Global Sidebar placeholders.

**What you'll learn:**
- Creating separate views for different placeholders
- Using the `common` module
- Building a full-page form interface
- Creating a CTI dial pad interface

**Key Concepts:**
- Common placeholders
- Placeholder-specific views
- Context-aware UI design

---

### Step 6: External API Integration
**📄 [View Guide](./step-6/README.md)**

Build an e-commerce app using the Fake Product AP API to demonstrate external API integration.

**What you'll learn:**
- Making external API requests
- Configuring request templates
- Handling API responses
- Building a product catalog interface

**API Used:**
- [Fake Product API API](https://fakerapi.it)

---

## Resources

### Official Documentation
- 📖 [Freshworks Developer Documentation](https://developers.freshworks.com/docs/)
- 🎨 [Freshworks Crayons Component Library](https://crayons.freshworks.com/)
- 🛠️ [App SDK v3.0 Reference](https://developers.freshworks.com/docs/app-sdk/v3.0/)
- 📦 [FDK CLI Documentation](https://developers.freshworks.com/docs/app-sdk/v3.0/quick-start/fdkcommandline/)

### Learning Resources
- 🎓 [Introductory Guide to Freshworks App Development](https://community.freshworks.dev/t/introductory-guide-to-freshworks-app-development/3589)
