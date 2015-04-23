MOCHA=mocha
OPT= -G
TESTS=test/*.test.js
test:
	$(MOCHA) $(OPT) $(TESTS)
.PHONY:test
