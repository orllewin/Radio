import kotlinx.html.dom.append
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.*
import kotlinx.html.js.onClickFunction
import org.w3c.xhr.XMLHttpRequest
import kotlinx.serialization.*
import kotlinx.serialization.json.*
import org.w3c.dom.Audio
import org.w3c.dom.HTMLImageElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.get
import org.w3c.dom.url.URL

val audio = Audio()

fun main() {
    window.onload = {
        println("document.documentURI: ${document.documentURI}")
        val feedQuery = when {
            document.documentURI.contains("?") -> document.documentURI.substring(document.documentURI.indexOf("?") + 1, document.documentURI.length)
            else -> window.localStorage["feed_url_override"] ?:  "https://orllewin.uk/orllewin_stations.json"
        }

        val backButton = document.getElementById("back_button")
        val settingsLayout = document.getElementById("settings")
        val settingsButton = document.getElementById("settings_button")
        val saveUrlButton = document.getElementById("save_url_button")
        val urlTextArea = document.getElementById("url_input") as HTMLInputElement

        settingsButton?.addEventListener("click", {
            backButton?.setAttribute("style", "display: block;")
            settingsLayout?.setAttribute("style", "visibility: visible;")
            settingsButton.setAttribute("style", "display: none;")

            window.localStorage["feed_url_override"]?.let { overideUrl ->
                urlTextArea.value = overideUrl
            }
        })

        saveUrlButton?.addEventListener("click", {
            val urlOverride = urlTextArea.value
            val overrideUrl = URL(urlOverride)

            println("Url override: $urlOverride protocol: ${overrideUrl.protocol}")

            if(overrideUrl.protocol !== "https:"){
                //todo show error

                return@addEventListener
            }

            window.localStorage.setItem("feed_url_override", urlOverride)

            //todo - reload page?
        })

        //Close Settings
        backButton?.addEventListener("click", {
            backButton.setAttribute("style", "display: none;")
            settingsLayout?.setAttribute("style", "visibility: hidden;")
            settingsButton?.setAttribute("style", "display: block;")
        })

        when {
            feedQuery.isEmpty() -> getFeed("https://orllewin.uk/orllewin_stations.json") { rawFeed ->
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

    stations.stations.forEach { station ->
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
        val controls = document.getElementById("controls")
        controls?.setAttribute("style", "visibility: visible;")

        val nowPlayingIcon = document.getElementById("now_playing_icon") as HTMLImageElement
        station.logoUrl?.let{ logoUrl ->
            nowPlayingIcon.setAttribute("style", "visibility: block;")
            nowPlayingIcon.src = logoUrl
        } ?: run{
            nowPlayingIcon.setAttribute("style", "visibility: hidden;")
        }

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

external fun setMetadata(stationTitle: Any?, imageUrl: Any?)

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
data class Stations(val stations: List<Station>)

@Serializable
data class Station(val title: String?, val website: String?, val streamUrl: String?, val logoUrl: String?)