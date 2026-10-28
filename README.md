# oceanis-dev

This repository hosts the development of the interactive digital tool supporting the OCEANIS Framework.

OCEANIS is a co-created, non-prescriptive framework designed to help people collaboratively explore, understand and address complex challenges.

It provides a flexible architecture for holistic thinking and collaborative inquiry, helping users identify overlooked connections, gaps and uncertainties, generate new questions and ideas, and explore potential approaches to complex problems.

Originally developed in the context of integrated ocean observing, OCEANIS has been advanced through an iterative co-creative process involving researchers, practitioners and stakeholders with diverse expertise. Its potential applications extend beyond ocean observing.

The interactive digital tool allows users to explore the OCEANIS Spiderweb, its interconnected components, descriptors, themes and question-generating prompts.

## Official OCEANIS Framework

The OCEANIS Framework is maintained as a separate, versioned research resource on Zenodo.

**Official title**: OCEANIS Framework
**Framework creators**: Lina Mtwana Nordlund, Elizabeth R. Lawrence and Said Hashim.
**First archived version**: v0.9 (in preparation).
**Reserved version DOI**: 10.5281/zenodo.23724343

The DOI is not yet registered or publicly active.

Once the first version is published, the overarching Concept DOI will be added here as the permanent reference to the OCEANIS Framework and its future versions.

The framework is a distinct research output from the interactive digital software developed in this repository.

## How to Cite OCEANIS

When using the OCEANIS Framework, please cite the official Zenodo framework publication.

The framework citation will be:

Nordlund, L. M., Lawrence, E., & Hashim, S. (2026). OCEANIS Framework (Version 0.9). Zenodo.

The DOI will be included when the publication becomes publicly available.

Please distinguish citations of the OCEANIS Framework from citations of the interactive software, the OCEANIS Quick Start Guide and other associated publications.

## Creators and Contributions

The OCEANIS Framework has been developed through an interdisciplinary and iterative co-creative process, supported by the EU-funded BioEcoOcean project.

**Framework creators:** Lina Mtwana Nordlund, Elizabeth R. Lawrence and Said Hashim.

**Spiderweb illustration:** Lina Mtwana Nordlund and Elizabeth R. Lawrence.

**Interactive software development:** Elizabeth R. Lawrence.

Additional contributions to the development of OCEANIS are recognised separately.

A more detailed contribution statement, using CRediT roles where appropriate, will be developed to acknowledge conceptual, methodological, technical, visual and collaborative contributions.

## Copyright and Licensing

**OCEANIS Spiderweb illustration:**

© 2026 Lina Mtwana Nordlund & Elizabeth R. Lawrence.

Earlier versions of this repository were distributed with a CC0 1.0 Universal public domain dedication.

The licensing of future original contributions is currently under review.

Previously valid CC0 permissions remain unaffected. The historical version and associated licence information are retained in the repository.

New original materials should not be publicly released until their applicable licensing terms have been confirmed.

Please refer to the repository's LICENSE file for the current licensing notice.

## Development and Governance

This GitHub repository is used for the ongoing development of the interactive OCEANIS digital tool.

The repository is maintained by authorised OCEANIS maintainers.

Suggestions, feedback and contributions from the wider community are welcomed. Changes to the maintained digital tool require review and approval before being merged into the official development branch.

Official versions of the OCEANIS Framework are published separately on Zenodo.

## Site structure and local preview

The site uses GitHub Pages' built-in Jekyll support. Shared navigation and footer markup live in `_includes/`, the page wrapper is in `_layouts/default.html`, and page content stays in small root-level HTML files. The main pages are `index.html` (overview), `interactive.html` (spiderweb), and `resources.html` (resource library).

Install Ruby and Jekyll, then run `jekyll serve --baseurl ""` from the repository root for a local preview. Open the local URL printed by Jekyll; the site rebuilds when files change. The workflow in `.github/workflows/deploy.yml` builds and deploys the site on pushes to `main` and can also be run manually.

## Add contributors

To add to the list of contributors, go to the `contribs/` folder and open the [contributors](https://github.com/BioEcoOcean/blueprint-dev/blob/zoom-patch/contribs/contributors.csv).csv file. To edit the file, you have two options:

1. Click the pencil in the top right. Then edit the file directly. Do not add spaces between commas separating names, but within a name or organization title it's okay. Example: FIRST NAME,LAST NAME,ORGANIZATION TITLE,EMAIL. Email is optional and we can remove this column if necessary. When you're done, click the green commit changes button.
   ![](images/edit-contrib-ss.png)
2. Download the csv file by clicking the three ... button in the top right, make edits in your prefered csv-editing software (e.g. Excel).
   a. Reupload the file by navigating the the [contribs folder](https://github.com/BioEcoOcean/blueprint-dev/tree/zoom-patch/contribs).
   ![](images/add-file-ss.png)
   b. Click add file, then upload the modified file. Do not change the file name, it's okay if it is overwritten. If you need to add, remove, or change columns, please make sure there is always "First Name", "last Name", and "Organization". Contact @EliLawrence for questions.

## Host script locally

1. Navigate to the directory containing project files. For example: cd /path/to/your/project
2. Start the HTTP server: `jekyll serve --baseurl= --port 8001`
3. Navigate to http://localhost:8001 
