/*
 * This file was generated by the Gradle 'init' task.
 *
 * This is a general purpose Gradle build.
 * Learn more about Gradle by exploring our samples at https://docs.gradle.org/7.4.1/samples
 */

tasks.register<Exec>("test"){
    commandLine("turtle", "--validate", "_data/vocabolangelo.ttl")
}
