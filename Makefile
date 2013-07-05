test:
	# go to http://localhost:3334/test/runner.html
	beefy test/suite.js:test.bundle.js 3334 -- -t ktbr --debug
livetest:
	# go to http://localhost:3334/test/runner.html
	beefy test/suite.js:test.bundle.js 3334 --live 3335 -- -t ktbr --debug
.PHONY: test