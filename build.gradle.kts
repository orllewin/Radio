plugins {
    kotlin("js") version "1.6.21"
    kotlin("plugin.serialization") version "1.6.10"
}

group = "orllewin"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/kotlinx-html/maven")
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-html:0.7.2")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.3")
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}