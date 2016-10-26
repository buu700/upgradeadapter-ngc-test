Test steps:

	# Optional Docker setup
	docker build -t upgradeadapter-ngc-test .
	docker run -it -v $PWD:/test upgradeadapter-ngc-test
	cp -a /test /test.tmp ; cd /test.tmp

	ngc -p .
