'use strict';
var yeoman = require('yeoman-generator');
// var includes = require('lodash.includes');
var path = require('path');
var fs = require('fs');
var plBase = ('./pattern-lab/source/_patterns');

module.exports = yeoman.Base.extend({
  prompting: function () {

    console.log('Hi! This will help you build a component folder with assets.');
    console.log('Templates for this are in: ' + path.relative(process.cwd(), __dirname));
    console.log('');

    var prompts = [{
      type: 'list',
      name: 'patternType',
      message: 'Where would you like this new component?',
      choices: fs.readdirSync(plBase, 'utf8')
    }, {
      type: 'list',
      name: 'patternSubType',
      message: 'Where in here?',
      choices: function(answers) {
        var folder = path.join(plBase, answers.patternType);
        var subfolders = fs.readdirSync(folder, 'utf8');
        return ['./'].concat(subfolders);
      }
    }, {
      type: 'checkbox',
      name: 'files',
      message: 'What files would you like in there?',
      choices: [
        'twig',
        'scss',
        'js',
        'md'
      ],
      default: [
        'twig',
        'scss',
        'md'
      ]
    }, {
      name: 'name',
      message: 'What shall we name it?',
      filter: function(answer) {
        return answer.replace(/ /g, '-').toLowerCase();
      }
    }, {
      name: 'elements',
      message: 'What Elements does it have? (i.e. title, subtitle, body, etc) Enter comma separated list.',
      filter: answer => answer.split(',').map(item => item.trim()).filter(item => item !== ''),
    }];

    return this.prompt(prompts).then(function (props) {
      console.log(props);
      // To access props later use this.props.someAnswer;
      props.dashlessName = props.name.replace(/-/g, '');
      props.namespace = props.patternType.replace(/[0-9]*-/g, ''); // `01-atoms` => `atoms`
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    // console.log(this.props);
    var destPath = path.join(plBase, this.props.patternType, this.props.patternSubType, this.props.name);

    if (this.props.files.some(file => file === 'scss')) {
      this.fs.copyTpl(
        this.templatePath('_pattern.scss.ejs'),
        this.destinationPath(path.join(destPath, '_' + this.props.name + '.scss')),
        this.props
      );
    }

    if (this.props.files.some(file => file === 'twig')) {
      this.fs.copyTpl(
        this.templatePath('_pattern.twig.ejs'),
        this.destinationPath(path.join(destPath, '_' + this.props.name + '.twig')),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('pattern-demo.twig.ejs'),
        this.destinationPath(path.join(destPath, this.props.name + '-demo-1' + '.twig')),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('pattern-demo.twig.ejs'),
        this.destinationPath(path.join(destPath, this.props.name + '-demo-2' + '.twig')),
        this.props
      );

    }

    if (this.props.files.some(file => file === 'js')) {
      this.fs.copyTpl(
        this.templatePath('pattern.js.ejs'),
        this.destinationPath(path.join(destPath, this.props.name + '.js')),
        this.props
      );
    }

    if (this.props.files.some(file => file === 'md')) {
      this.fs.copyTpl(
        this.templatePath('pattern.md.ejs'),
        this.destinationPath(path.join(destPath, '..', this.props.name + '.md')),
        this.props
      );
    }

  }

});
