module.exports = function (grunt) {
    // table for fany display of tasks
    var table = require('text-table');
    // lodash for easier code
    var _ = require('lodash');
    // get all tasks
    var tasks = grunt.config('tasks');
    // get their keys
    var keys = Object.keys(tasks);

    // simple execution wrapper for a meta task, depending on the arguments
    var executeMetaTask = function executeMetaTask(target, param1, param2)
    {
        grunt.task.run('meta:' + target + (!!param1 ? ':' + param1 : '') + (!!param2 ? ':' + param2 : ''));
    };

    // builds the tasklist to be executed
    var buildTasklist = function buildTasklist(tasks, target, targets, param1, options)
    {
        // empty array first, pretty simple
        var tasklist = [];

        // are there any defined pre-tasks?
        if(!!options && !!options.preTasks)
        {
            // yep, there are some - add them to the array first
            preTasks = _.map(options.preTasks, function(t) { return t + ':' + param1; });
            tasklist.push.apply(tasklist, preTasks);
        }

        // is there no param?
        if(!param1)
        {
            // yep, are there any options?
            if (!options)
            {
                // nope, just get the tasks
                task = tasks[target];
            }
            else
            {
                // yep, get the default task
                task = [[target,options.default].join(':')];
            }

            // run the default task!
            grunt.log.writeln('[META] Running default task: ' + task);
            tasklist.push.apply(tasklist, task);
        }
        else
        {
            // there is a param! V needs to be documented V
            _.forEach(targets[param1], function(n, key) {
                if (typeof n === 'object' && n.length > 0) {
                    for (var i = 0; i < n.length; i++)
                    {
                        targets[param1].splice(key + i, i === 0 ? 1 : 0, n[i]);
                    }
                }
            });

            if(typeof targets[param1] === 'string') { targets[param1] = [targets[param1]]; }

            // add them to the tasklist
            tasklist.push.apply(tasklist, targets[param1]);
        }

        // do we have any post-tasks?
        if(!!options && !!options.postTasks)
        {
            // we do, add them!
            postTasks = _.map(options.postTasks, function(t) { return t + ':' + param1; });
            tasklist.push.apply(tasklist, postTasks);
        }

        // return the complete task list
        return tasklist;
    };

    // part where the default tasks get registered - so that the user knows what to do (and grunt as well)
    for (var i = 0; i < keys.length; i++)
    {
        // check if there are any options per target
        if (typeof tasks[keys[i]] === 'object' && keys[i] !== 'options')
        {
            var currentKey = keys[i];
            var subtasks = tasks[currentKey];
            var subkeys = Object.keys(subtasks);


            if (currentKey === 'default')
            {
                // register the very default grunt task
                grunt.registerTask('default', subtasks);
            }
            else
            {
                // register the other tasks as an alias for this very meta task
                grunt.registerTask(currentKey, 'Alias for "meta:' + currentKey + '" task.', function(param1, param2) {
                    executeMetaTask(this.name, param1, param2);
                });
            }
        }
    }

    // finally register the meta task
    grunt.registerTask('meta', 'Takes care of the meta tasks and executes them correctly', function(target, param1, param2) {

        var task, tasklist = [];
        var options = tasks[target].options;
        var targets = _.omit(tasks[target], 'options');

        // build the tasklist so this task knows what to do
        tasklist = buildTasklist(tasks, target, targets, param1, options);

        //... and do it!
        grunt.log.writeln('[META] Run those tasks:', tasklist);
        grunt.task.run(tasklist);
    });

    // registers the fany tasklist task task task. task.
    grunt.registerTask('tasks', 'Shows a list of available tasks for use', function() {

        grunt.log.writeln('Available tasks:');
        for (var i = 0; i < keys.length; i++)
        {
            // remove the option key, so that it doens't get mistaken for a target
            if (typeof tasks[keys[i]] !== 'object' || keys[i] === 'options') { continue; }

            var currentKey = keys[i];
            var tableRows = [];
            var options = tasks[currentKey].options;
            var subtasks = options ? _.omit(tasks[currentKey], 'options') : tasks[currentKey];

            grunt.log.writeln('- ' + currentKey + (subtasks.length ? '   [' + subtasks.join(', ') + ']':''));

            for (var st = 0; st < Object.keys(subtasks).length; st++)
            {
                // remove the option key, so that it doens't get mistaken for a target
                if (subtasks.length || currentKey === 'options') { continue; }

                tasklist = buildTasklist(tasks, currentKey, subtasks, Object.keys(subtasks)[st], options);
                tableRows.push(['  :' + Object.keys(subtasks)[st], '[' + tasklist.join(', ') + ']']);
            }

            grunt.log.writeln(table(tableRows, { align: ['l', 'l'] }));
            // actually doesn't much more than outputting a build tasklist - in a sexy table layout.
        }

    });
};
