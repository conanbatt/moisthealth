# README

After talking to you guys on friday, I wanted to give proper feedback to Engineering after the meetup.
I created this stack to put some effort behind my initial impressions.

### FAST ITERATION IS KEY

A key metric of startup success is how often do you deploy changes to the product. This is what I would optimize in picking the tools for the stack.
Each significant feature deployed can be counted as a cycle and I would aim at multi-daily samples.

### Why Rails

* Very mature community

* Rapid iteration speed

* Easy to find talent short & long term

* Very solid DB model with ActiveRecord & migrations

### Why not Go

* Not optimized for CRUD web development

* Niche and expensive Talent

* Performance advantages not applicable to the use case

### Opinions & decisions

* Rails default html generation for dashboards

Rails scaffolds create models, views, controllers, routes. The default is unsightly but its fast and has validations setup. Building all of that from scratch is very time consuming.

* Single dashboard page on react

A single endpoint can have the true react app level interactions, with asyncronicity, liveupdates, etc. Scoping compliacations to a single page.

* Bootstrap > Material-UI

As a front-end developer I find Material-UI hard to work with (libraries are inconsistent and have very serious issues).
They are hard to use efficiently, and they are more suited for short consumer-based-interactions.

Bootstrap is much easier and reliable to work with, particularly if you don't have front-end experience. *Requires no styling, only structure*.

### Setup time

About 4 hours of reading documentation and punching through bugs to make:
 - install rails
 - create models & views with scaffolds
 - add react & bootstrap
 - figure out serialization
 - deploying

This is barely a prototype, but it was very easy to build and very easy to get going.

*It's most likely that what you are building is going to be scrapped entirely. Make decisions accordingly.*

### Red Flags

- Two engineers with experience, no live system yet
- Pre-optimization topics (data-modeling concerns, CDN, material UI)
- Non-mainstream stack choice (Go) for web development
- Significant visual deficiencies in the product + Talks about building a complex UI (skills don't match aspirations)
- HIPAA compliance issues: Asana is not compliant as far as I know. Google documents have patient information and you need BA's from them. This applies to deploy strategies.
