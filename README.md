# Test Coverage with Browserify Project

This is a simple example project for setting up test coverage reporting in a Browserify project.
Currently using blanket.js as the coverage tool.

## Installation

    git clone git@github.com:andyperlitch/browserify_coverage.git
    cd browserify_coverage
    npm install .
    
## Running Tests

first, run:

    make test
    
Then open [http://localhost:3334/test/runner.html](http://localhost:3334/test/runner.html).


## Non-browserify Equivalent

I have set up the equivalent `a.js` module and test without browserify to illustrate the main problem with the browserify approach I have so far. To see it, go to [http://localhost:3334/test/runner_nobr.html](http://localhost:3334/test/runner_nobr.html) after running `make test`.