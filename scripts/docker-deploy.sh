echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-std-in
docker build --build-arg version="$TRAVIS_TAG" -t mankmantos/manktwine-cli:latest .
docker tag mankmantos/manktwine-cli:latest mankmantos/manktwine-cli:$TRAVIS_TAG
docker push "mankmantos/manktwine-cli:latest" && docker push "mankmantos/manktwine-cli:$TRAVIS_TAG"