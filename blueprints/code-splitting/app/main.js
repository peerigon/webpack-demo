require.ensure(["./part1.js"], () => {
    console.log(require("./part1"));
});

require.ensure(["./part2.js"], () => {
    console.log(require("./part2"));
});

require.ensure(["./part3.js"], () => {
    console.log(require("./part3"));
});
