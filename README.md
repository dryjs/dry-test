This is a test runner binary, it works on filename conventions. It's backed by mocha. 

    npm install dry-test

    # dry-test [-v] [files] [--mocha [<mocha args>]]

The binary will pickup all files names *.test.js and *.test.tjs in your current working tree. It ignores node_modules on the file tree walk. It will compile the .tjs (tamejs) files to hidden files, ie .*.test.tjs in the same path as the original file.  It will then pass all the files to mocha to test.

It does a walk of the file system every time, so I imagine it runs pretty slow with a bunch of test files on a conventional HD. If you do builds of anything, buy an SSD. Seriously.

By default it runs with qunit style tests and the dot reporter, however you can pass whatever args you want to mocha with the ```--mocha``` argument.

