FROM maven:3.9.4-eclipse-temurin-17 as build

WORKDIR /build

COPY src src

COPY pom.xml pom.xml

RUN --mount=type=cache,target=/root/.m2 mvn clean package

FROM openjdk:17

VOLUME /tmp

ARG JAR_FILE=api-0.0.1.jar

WORKDIR /application

COPY --from=build /build/target/${JAR_FILE} application.jar

ENTRYPOINT exec java -jar application.jar ${0} ${@}