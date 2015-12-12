all:
	babel src/*.es6 --out-dir build/

dev:
	babel src/*.es6 --out-dir build/ -w
