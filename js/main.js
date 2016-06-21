(function() {
    'use strict';
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsJavascript = ['Javascript', 'AngularJs', 'Express', 'Nodejs', 'Karma', 'jquery', 'Grunt', 'Gulp', 'Sinon', 'Chai', 'Mocha', 'Jasmine', 'Protractor', 'Chrome Extensions' ],
            skillsPhp = ['PHP', 'Zend Framework', 'Laravel', 'phpUnit', 'composer', 'poo', 'Maven', 'ant', 'Jbehave', 'Selenium', 'Java', 'MySQL', 'mongodb', 'Rest services'],
            skillsOthers = ['HTML5', 'CSS3', 'less', 'sass', 'git', 'perforce', 'Heroku', 'Codeship', 'Bitbucket', 'Jenkins', 'Bower', 'Atlassian tools', 'Agile methodology', 'Responsive design' ],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsJavascript, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsPhp, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();
