all:
	cd src/ ; babel *.es6 --out-dir ../build/

dev:
	cd src/ ; babel *.es6 --out-dir ../build/ -w
