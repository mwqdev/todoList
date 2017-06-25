const express = require('express');
const router = express.Router();

const todos = {
    title: 'Task List',
    todo: [{ name: 'Wash the car', complete: false},
        {name: 'Do the dishes', complete: false},
        {name: 'Do homework', complete: true}]
};

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", function (req, res) {
    res.render('index', todos);
});

router.get('/new-task', (req, res) => {
    console.log(req.query);
    todos.todo.push({name: req.query.newTask, complete: false});
    res.redirect('/');
});

router.get('/:name', (req, res) => {
    let taskName = req.params.name;
    console.log(taskName);
    for (let i in todos.todo) {
        if (todos.todo[i].name === taskName) {
            todos.todo[i].complete = true;
        }
    }
    res.redirect('/');
});

// router.post("/", function (req, res) {
//     todos.push(req.body.todo);
//     res.redirect('/');
// });

module.exports = router;