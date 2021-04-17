angular.module('Resume', ['ngMaterial'])

.directive('resume', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div class="resume">
      <section class="main" ng-transclude></section>
    </div>`
  }
})

.directive('resumeHeading', function() {
  return {
    restrict: 'E',
    scope: {
      firstName: '@',
      lastName: '@',
      website: '@',
      phone: '@',
      email: '@',
      github: '@',
      linkedin: '@'
    },
    template: `<div class="header">
      <div class="page-title-container">
        <h3 class="page-title page-title-first">{{firstName}}</h3>
        <h3 class="page-title page-title-last" style="color:#1a8dff, font-weight:700;">{{lastName}}</h3>
      </div>
      <div class="header-icons">
        <span ng-if="website" class="md-subhead page-subhead"><a target="_blank" href="https://keen-raman-ecb495.netlify.app/#products" style="color:black"><i class="fa fa-lg fa-code"></i>{{website}}</a></span>
        <span ng-if="email" class="md-subhead page-subhead"><a target="_blank" href="mailto:2018ugec030@nitjsr.ac.in" style="color:black;"><i class="fa fa-lg fa-envelope"></i>{{email}}</a></span>
        <span ng-if="github" class="md-subhead page-subhead"><a target="_blank" href="http://github.com/sourav1319" style="color:black;"><i class="fa fa-lg fa-github"></i>{{github}}</a></span>
        <span ng-if="linkedin" class="md-subhead page-subhead"><a md-theme="default" target="_blank" href="http://linkedin.com/in/souravsingh1319" style="color:black;"><i class="fa fa-lg fa-linkedin-square"></i>{{linkedin}}</a></span>
      </div>
    </div>`
  }
})

.directive('resumeBody', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div layout="row" ng-transclude></div>`
  }
})

.directive('resumeColumn', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div ng-transclude style="750px;"></div>`
  }
})

.directive('sidebarCategory', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <div class="category">
        <h5 class="category-row-title">{{name}}</h5> 
        <ng-transclude></ng-transclude>
      </div>
    </div>`
  }
})

.directive('category', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <h1 class="category-row-title"><strong>{{name}}</strong></h1>
      <ng-transclude></ng-transclude>
    </div>`
  }
})

.directive('categoryItem', function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      date: '@',
      subtitle: '@'
    },
    transclude: true,
    template: `<div class="category">
        <h4 class="category-title ax md-body-2">{{title}}</h4>&nbsp;
        <h4 class="category-subtitle md-caption">{{subtitle}}</h4>
        <h5 class="category-title md-body-2" style="float:right;">{{date}}</h5>
        <ul class="category-bullets lx" ng-transclude></ul>
    </div>`
  }
})

.directive('skillItem', function() {
  return {
    restrict: 'E',
    scope: {
      languages: '@',
      technologies: '@'
    },
    transclude: true,
    template: `<div class="category">
        <h4 class="category-title bx md-body-2"><strong>Languages:</strong>{{languages}}</h4>&nbsp;
        <h4 class="category-title bx md-body-2"><strong>Technologies: </strong>{{technologies}}</h4>
        <ul class="category-bullets" ng-transclude></ul>
    </div>`
  }
})