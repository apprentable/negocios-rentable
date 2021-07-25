# Kotlin website
[![Official project][project-badge]][project-url]

This repository is the source for [https://kotlinlang.org](https://kotlinlang.org).

* [Website structure](#website-structure)
* [Contribution](#contribution)
* [Local deployment](#local-deployment)
* [Feedback and issues](#feedback-and-issues)

<a id="project-structure"></a>
## Website structure 

### Content

|Website page|Source files|
|------------|--------|
| [Main page](https://kotlinlang.org/) | [templates/pages/index.html](templates/pages/index.html) |
| [Kotlin docs](https://kotlinlang.org/docs/home.html) |[docs/topics](docs/topics)| 
| [Community](https://kotlinlang.org/community/) | [docs/pages/community](docs/pages/community) | 
| [Education](https://kotlinlang.org/education/) | [docs/pages/education](docs/pages/education)| 

Note that source files for the [server-side landing page](https://kotlinlang.org/lp/server-side/) and [KMM landing page](https://kotlinlang.org/lp/mobile/) are not publicly available.

#### Sources in different repositories

Source files for KMM docs, coroutine docs, and language specification are stored in separate repositories:

|Website page|GitHub repository|
|------------|--------|
| [KMM docs](https://kotlinlang.org/docs/mobile/home.html) | [kotlin-mobile-docs](https://github.com/JetBrains/kotlin-mobile-docs) |
| [Coroutine docs](https://kotlinlang.org/docs/coroutines-guide.html) | [kotlinx.coroutines](https://github.com/Kotlin/kotlinx.coroutines/docs) |
| [Language specification](https://kotlinlang.org/spec/introduction.html) | [kotlin-spec](https://github.com/Kotlin/kotlin-spec) |

#### Auto-generated content

[API reference documentation](https://kotlinlang.org/api/latest/jvm/stdlib/) is generated based on comments in the Kotlin code. 
Learn more about [documenting the Kotlin code](https://kotlinlang.org/docs/kotlin-doc.html).

The [Kotlin grammar reference](https://kotlinlang.org/docs/reference/grammar.html) is generated by the [Kotlin grammar generator](https://github.com/JetBrains/kotlin-grammar-generator) from the
[Kotlin grammar definition](https://github.com/JetBrains/kotlin/tree/master/grammar).

### Configuration files

|Configuration| File|
|-----|----|
|Navigation and structure| [kr.tree](docs/kr.tree) for docs and [_nav.yml](data/_nav.yml) for other pages |
|Variables, such as release version | [v.list](docs/v.list) for docs and [releases.yml](data/releases.yml) for other pages |
|Community events on the map | [events.xml](data/events.xml) |
|Video list (outdated) | [videos.yml](data/videos.yml) |

### Templates

The Kotlin website uses [Jinja2](http://jinja.pocoo.org/docs/dev/) templates from the [templates](templates) directory.
Note that all Markdown files, except for [docs](docs), are processed as Jinja templates before HTML conversion. 
This allows using all Jinja benefits for Markdown (for example, building URLs with the `url_for` function).

## Contribution

You can contribute to the Kotlin website by sending us a pull request. If you're going to propose a big change, discuss your idea with the team via [doc-feedback@kotlinlang.org](mailto:doc-feedback@kotlinlang.org).

For the Kotlin documentation, follow [these guidelines on style and formatting](https://docs.google.com/document/d/1mUuxK4xwzs3jtDGoJ5_zwYLaSEl13g_SuhODdFuh2Dc/edit?usp=sharing).

For other pages, follow the complete syntax reference at the [kramdown site](http://kramdown.gettalong.org/syntax.html).
You can also include metadata fields. Learn more in the [Jekyll docs](http://jekyllrb.com/docs/frontmatter/).

## Local deployment

Currently, there is no way to deploy the Kotlin website locally. We'll add this support later. You can contribute to the Kotlin website by sending us a pull request.

## Feedback and issues

You can:

* Share feedback in the [#docs-revamped](https://kotlinlang.slack.com/archives/C01GGPPCAA0/p1607340719000500) channel in our Kotlin public Slack ([get an invite](https://surveys.jetbrains.com/s3/kotlin-slack-sign-up)).
* Report an issue to [our issue tracker](https://youtrack.jetbrains.com/newIssue?project=KT&c=tag%20kotlin-doc-migration).
* Email us at [doc-feedback@kotlinlang.org](mailto:doc-feedback@kotlinlang.org).

[project-url]: https://confluence.jetbrains.com/display/ALL/JetBrains+on+GitHub
[project-badge]: http://jb.gg/badges/official.svg
[slack-url]: http://slack.kotlinlang.org
