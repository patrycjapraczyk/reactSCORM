$(document).ready(function () {
    var scorm = pipwerks.SCORM;
    // scorm.version = "1.2";
    scorm.version = "2004";
    var callSucceeded = scorm.init();

    function init() {
        set('cmi.completion_status', 'completed'); // true
        //set('cmi.completion_status', 'passed'); // true
        //set('cmi.completion_threshold', 90); // true

        set("cmi.progress_measure", "0.4");
        //set('cmi.scaled_passing_score', 81); // false
        set('cmi.location', value + '%'); // false
        set('cmi.score.scaled', 0.5); // false
        //set('cmi.lesson_location', value+'%'); // true
        set('cmi.score.max', 100);	// true
        set('cmi.score.min', 0);	// true
        set('cmi.score.raw', 81);
        set('cmi.core.success_status', 'passed');
        set('cmi.objectives._count', 1);
        // true
        //set('cmi.score_scaled', 22); // true
        //set('cmi.score.scaled ', 23); // true

        set('cmi.objectives.1.progress_measure', 80); // false
        set('cmi.objectives.1.score.min', 0); // true
        set('cmi.objectives.1.score.max', 100); // true
        set('cmi.objectives.1.score.scaled', 32); // true
        set('cmi.objectives.1.score.raw', 82); // false
        set('cmi.objectives.1.status ', 'passed');	// false


        // set('cmi.core.success_status',  'passed'); 2014 only
        //	set('cmi.lesson_status', 'passed'); // true

        console.log('courseprogress value saved' + value);
    }

    function set(param, value) {
        console.log('Setting' + param + ': ' + value);
        var callSucceeded = scorm.set(param, value);
        console.log(callSucceeded);
        var callSucceeded = scorm.save();
        return true;
    }


    init();



});