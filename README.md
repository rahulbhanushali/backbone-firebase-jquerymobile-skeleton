#Backbone-Firebase-jquerymobile-Skeleton
___

Single page application skeleton using backbonejs, firebase / backbonefire, jquery mobile and requirejs.

This skeleton uses best of open source Javascript libraries and frameworks which are as follows:

| Framework / Library | Version |
| :-----------------: | -------:|
| jQuery              | 2.1.1   |
| jQuery Mobile       | 1.4.5   |
| BackboneJS          | 1.1.2   |
| UnderscoreJS        | 1.1.2   |
| Firebase            | 2.0.6   |
| BackboneFire        | 0.5.0   |
| RequireJS           | 1.7.0   |

Use this skeleton app to bootstrap your kickass Single Page Applications (SPA)
and start coding.

#Code Architecture
___

The skeleton not only helps in defining a robust structure for your application 

1. All the css files reside in the styles folder and javascript files in js folder respectively.
2. Javascript external libraries i.e. bacbkone, jquery mobile, firebase etc. reside in the js/lib folder.
3. The core components of the applications go in js/core folder. As of now, it defines base collection, model, view
 and some utilities for validation and Firebase details.
4. Use the js/app folder to places the required backbone models, views and collections.

*The skeleton comes with an ready to use `Session` Model that you can use to authenticate users.*

#Firebase configuration
___

Define your Firebase URL in the file: `/js/core/utils/firebaseProvider.js` and get started. No additional configuration 
required.