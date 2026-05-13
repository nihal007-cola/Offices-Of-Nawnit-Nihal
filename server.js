import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

const PORT =
  process.env.PORT || 3000

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL

const __filename =
  fileURLToPath(import.meta.url)

const __dirname =
  path.dirname(__filename)

app.use(cors())

app.use(express.json())

/********************************************************
 * API HEALTH CHECK
 ********************************************************/

app.get("/api/health", (req, res) => {

  res.json({

    success: true,
    system:
      "ONN NODE PROXY",
    status: "RUNNING"

  })

})

/********************************************************
 * API PROXY
 ********************************************************/

app.post("/api", async (req, res) => {

  try {

    const response =
      await fetch(

        APPS_SCRIPT_URL,

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body: JSON.stringify(
            req.body
          )

        }

      )

    const data =
      await response.json()

    res.json(data)

  } catch (error) {

    console.error(error)

    res.status(500).json({

      success: false,
      error:
        error.toString()

    })

  }

})

/********************************************************
 * FRONTEND BUILD SERVING
 ********************************************************/

app.use(

  express.static(

    path.join(
      __dirname,
      "dist"
    )

  )

)

app.get("*", (req, res) => {

  res.sendFile(

    path.join(
      __dirname,
      "dist",
      "index.html"
    )

  )

})

/********************************************************
 * START SERVER
 ********************************************************/

app.listen(PORT, () => {

  console.log(

    "ONN SERVER RUNNING ON PORT:",
    PORT

  )

})