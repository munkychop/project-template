var moduleB = require('modules/module-b');

module.exports = {
    exampleProp1 : 'hello!',
    exampleProp2 : moduleB.add(2, 3)
};