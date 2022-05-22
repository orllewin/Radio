import kotlinx.html.dom.append
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import org.w3c.xhr.XMLHttpRequest
import kotlinx.serialization.*
import kotlinx.serialization.json.*
import org.w3c.dom.Audio

val audio = Audio()

fun main() {
    window.onload = {
        println("document.documentURI: ${document.documentURI}")
        val feedQuery = if (document.documentURI.contains("?")) {
            document.documentURI.substring(document.documentURI.indexOf("?") + 1, document.documentURI.length)
        } else {
            ""
        }

        when {
            feedQuery.isEmpty() -> getFeed("https://orllewin.uk/default_stations.json") { rawFeed ->
                addStations(rawFeed)
            }
            else -> getFeed(feedQuery) { rawFeed ->
                addStations(rawFeed)
            }
        }
    }
}

fun addStations(rawFeed: String) {

    val stations = Json.decodeFromString<Stations>(rawFeed)
    val gridHolder = document.getElementById("grid_holder")

    stations.defaultStations.forEach { station ->
        gridHolder?.append {
            div {
                onClickFunction = {
                    playStation(station)
                }
                this.classes += "station"

                station.logoUrl?.let { url ->
                    img {
                        style = "width: 100%;height: auto;"
                        src = url
                    }
                }
            }
        }
    }
}

fun playStation(station: Station) {
    station.streamUrl?.let { url ->
        println("Play station ${station.streamUrl}")

        //Play stream
        audio.src = url
        audio.play().then {
            setMetadata(station.title, station.logoUrl)
        }

        //Update ui
        val controls = document.getElementById("footer")
        controls?.setAttribute("style", "display: block;")

        val websiteButton = document.getElementById("website_button")
        websiteButton?.innerHTML = "${station.title}"
        websiteButton?.addEventListener("click", {
            window.open(station.website ?: "", "_blank")?.focus()
        })

        val stopButton = document.getElementById("stop_button")
        stopButton?.addEventListener("click", {
            audio.pause()
            audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA="
            controls?.setAttribute("style", "display: none;")
        })
    }
}

external fun setMetadata(stationTitle: Any?, imageUrl: Any?): Unit
external fun stopAudio()

fun getFeed(url: String, onFeed: (String) -> Unit) {
    val xmlHttp = XMLHttpRequest()
    xmlHttp.open("GET", url)
    xmlHttp.onload = {
        when {
            xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200.toShort() -> {
                onFeed.invoke(xmlHttp.responseText)
            }
        }
    }
    xmlHttp.send()
}

@Serializable
data class Stations(val defaultStations: List<Station>)

@Serializable
data class Station(val title: String?, val website: String?, val streamUrl: String?, val logoUrl: String?)

const val JS_METADATA = "if (\"mediaSession\" in navigator) {\n" +
        "                navigator.mediaSession.metadata = new MediaMetadata({\n" +
        "                    title: %%title,\n" +
        "                    artwork: [\n" +
        "                      { src: %%arturl, sizes: '96x96',   type: 'image/png' },\n" +
        "                      { src: %%arturl, sizes: '128x128', type: 'image/png' },\n" +
        "                      { src: %%arturl, sizes: '192x192', type: 'image/png' },\n" +
        "                      { src: %%arturl, sizes: '256x256', type: 'image/png' },\n" +
        "                      { src: %%arturl, sizes: '384x384', type: 'image/png' },\n" +
        "                      { src: %%arturl, sizes: '512x512', type: 'image/png' },\n" +
        "                    ]\n" +
        "                });\n" +
        "            }"