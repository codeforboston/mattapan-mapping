# Mattapan Mapping

This is the repository dedicated to the creation, ongoing development and management of the Mattapan Mapping application. This project is a collaborative project between http://powerfulpathways.org and http://www.codeforboston.org.

## Project Description

The Mattapan Mapping project is a web application that is designed to be accessible while providing a similar experience/look-and-feel regardless of device. The project enables members of the greater mattapan community to share information in the form of photos, videos, audio overlayed with statistical and geographic information to provide a narrative of change in the community. This information can serve as a catalyst for change by generating conversations around the challenges facing the community in light of gentrification and housing affordability crisis.

Prototype V1: https://codeforboston.github.io/mattapan-mapping-june2021/

## Project Management

This project will be run utilizing the [Agile Kanban methodology](https://www.atlassian.com/agile/kanban).

All development tasks associated with the project will first be created as Kanban cards added to the following Kanban board:

https://github.com/codeforboston/mattapan-mapping/issues


Anyone should enter a card if they feel work needs to be done and they've searched and do not see it. We'll evaluate the new cards regularly. Similarly, all cards have the ability to take comments. Any concerns/advice/tips to improve the proposed change should be added as a comment. 

In general, cards should have a descriptive title. Cards should be labeled with the feature(s) they relate to. And cards should have a clear description and acceptance criteria. Ideally, a contributor could start the card and not need any additional detail to complete the work. 

Comments should be added as you make changes. If you are making lots of code changes, please make incremental commits and push your work-in-progress up to the main repo for review/discussion (more details below). The team/facilitator/feature lead may need to reassign work. Having any incremental work available makes this a more seamless process.

The project will have the following roles which, as an agile team, we expect to rotate so everyone gets some varied experience:

1. Product Owner - a representative from the business side whose job it is to represent the customer and their feedback and prioritize the work.
2. Architect - Facilitate decisions about any technology choices. Ensure that we address issues with security/maintaining code/handling the CICD process design
3. Facilitator - Ensures that Issues and PRs are updated in an orderly fashion if the team is not doing it automatically. Ensures agile practices are followed and that documentation is updated. 
4. Feature Lead - Individuals lead specific features. They are responsible for breaking the work into issues and ensuring that the work is co-ordinated and delivered on time.
5. DevOps Lead - This person leads resources assigned to coordinate code reviews, integrate changes, and release the software to production. DevOps may serve as backup to faciliator.
6. PR - This person tracks the progress of the project and reports status each week to CFB and entices new people to join and helps them onboard. This person is also responsible for any other external communication the project has (scheduling interviews/working with outside organizations etc.

Everyone on the team has a voice and is encouraged to be involved/ask questions and participate. These roles help us understand who is responsible for what.  


Current members include:

- Allentza Michel (powerfulpathwaysinc@gmail.com)
- Barry Fradkin (bfradkin@comcast.net)
- Brad Smith (brad@smithwebtek.com)
- David Morrison (morrisond7@gmail.com)
- James Gui (zkgui98@gmail.com)
- Jed Pittman (edpittman@gmail.com)
- Jeff Korenstein (j.korenstein@gmail.com)
- Kayla Patel (kayla.patel@tufts.edu)
- Sasha Hulk (srhu222@gmail.com)
- Shay McDonough (shay.m.mcdonough@gmail.com)
- Stephan Halarewicz (shalarewicz@gmail.com)
- Stephen McCall (stephen.mccall@gmail.com)
- Tejasvi Srigiriraju (sritejasvi@gmail.com)
- Dickson Lau (kr.d.tsl@gmail.com)

Sharing of any of the information pertaining to these resources outside of the accepted team members is prohibited.

-----
## Contributing Code

### Tab Spaces
For this repository please use **spaces** and a tab-width is equivilant to **two spaces**.

### Atomic Design
This application loosely follows [**Atomic Design Principles**](https://bradfrost.com/blog/post/atomic-web-design/). In the context of React applications, web pages are essentially made up of components that are made up of even smaller components. Theoretically a 'component' can be as atomic as you want and entire interfaces can be broken down into fundamental building blocks.

Now consider, within the context of science, that **Atoms** are the most basic unit of life.

Atoms, through their different types of bonding and mechanisms, form to create **Molecules**.

Molecules may coalesce and give rise to **Organisms**

And, bear with me here, Organisms eventually comprise of full fledged HTML pages, which ultimately make up the contents of your application.

[Read more here](https://bradfrost.com/blog/post/atomic-web-design/)

### Agile Practices
If you are unfamiliar, Agile projects generally follow the https://agilemanifesto.org/. This project's agile practices are described below.

This project uses the [Task Branching methodology](https://www.atlassian.com/agile/software-development/branching).

Any changes to the codebase should occur in a separate branch created specifically to implement the work associated with a specific Kanban issue card.

The naming convention for each branch should be: **Kanban Task Name** - **Release Name**.

For instance: 

        feature/implement-mapping-feature-1.0.0
        

Developers will create all changes necessary to implement a task/feature in a single branch, and each task/feature branch 
will undergo a team code review prior to being merged to the Main branch of the project. If you are having trouble/need assistance, you can push your branch early and start a pull request and prefix with WIP (work in progress). This will indicate to others it is not ready. However, this can help others stay up to date on code and get comments/feedback out early before code is fully baked.

### Code Reviews
Code reviews and merges will be submitted via [Pull Requests](https://github.com/features/code-review/).
Please see the following links to familiarize yourself with the Pull Requst process:

* [About Pull Requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
* [Creating a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

For the time being only dedicated members of the development team will have access to this repo and any other external technical resources.

Commit messages should begin with the issue id they are referring to. So your commit message might be "#43-finished coding ui change."

Similarly, pull requests should have a similar message including the id e.g.:
"Closes #43. 1. Finished all UI changes. 2. Cleanup some old comments."

Then when that Pull Request is reviewed and merged the issue will automatically be closed on the board.

While it is generally expected that any Pull Request will be related to a task, it could be the case you notice something that needs fixing outside of scheduled work, e.g. a broken test. In this case, create a branch chore/fixing_broken_test. Make your change and commit and submit a PR. This time, just provide a simple description. 

All PRs should follow the standard testing process and include proof that testing has been run locally. We will also run automation in the pipeline, but tests should always be run locally and a screenshot/note included. 

### Developer Environment Setup

The Mattapan Mapping project makes use of the following tools to aid contributors....

Use of an IDE is strongly recommended.

Steps to build and run the application locally:

1. `git clone` the repo

2. `yarn` to install dependencies 
        
3. `yarn start` to boot up dev server hosting on port 3000

#### Required Environment Variables

There some important and sensitive environment variables are required in order for the app to work as intended. Create a `.env` file at the project root, then ask a fellow member for the following environment variables:

- `REACT_APP_MAPBOX_ENV`
- `REACT_APP_GRAPHQL_URI`

> ⚠️ ***Caution:** Do **NOT** stage and commit your `.env` file into `git` version control, much less at the public GitHub repo. The `.gitignore` file is intended to prevent you from accidentally pushing the file and exposing those variables to the public.*

When deciding on adding more environment variables for the React App, refer to [this documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/) for more info.

### GraphQl TypeScript Code Generator

While GraphQl is a strongly typed query language, there are no way for TypeScript to understand the typing of GraphQl queries out of the box. While it can be possible to manually create interface/types by hand, it's time consuming. [GraphQL Code Generator](https://www.graphql-code-generator.com/) makes generating TypeScript types and hooks from GraphQl queries/files as simple as typing `yarn codegen` on the CLI and generate the functions and types to use in `src/graphql/generated.ts` file.

For convenience, all GraphQl queries are under the `src/graphql/queries/` directory as referred to the `codegen.yml` file. All GraphQl must have a unique name for codegen to name React hooks from. (Ex. a `.gql` file with "query queryName" will create "useQueryNameQuery" and "useQueryNameLazyQuery")

Refer to [this GraphQL Code Generator documentation](https://www.graphql-code-generator.com/docs/config-reference/codegen-config) for more info.

### Automated Testing
This project will have both automated tests that are part of the standard release pipeline and
tests that can be run adhoc locally during the local development of changes. This ensures that code that is submitted for review has been tested.

-----
This codebase will make use of [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) testing framework. 

The test suites can be run using the following command...

### Release

This project makes use of the [SemVer naming convention](https://semver.org/) for releases:

MAJOR version when you make incompatible API changes

MINOR version when you add functionality in a backwards compatible manner, and

PATCH version when you make backwards compatible bug fixes.

### Documentation

All great open source projects start with amazing documentation! :)

Documentation describing the Mattapan Mapping application will be avaialble in this repo and at the following locations...

## External Resources
