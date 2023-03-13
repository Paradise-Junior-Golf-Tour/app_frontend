import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { eventGallery } from "../services/event"
import Box from "@mui/material/Box"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import { Typography } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import "react-image-lightbox/style.css"
import { portalRoot } from "../config"
import { isLoggedIn } from "../services/authentication"
import EventButton from "../components/events/button"

const EventGallery = ({ pageContext }) => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    eventGallery({ id: pageContext.strapiId })
      .then((res) => {
        setImages(res.gallery)
      })
      .catch((err) => {
        console.error("[event-gallery.jsx] Err", err)
      })
  }, [])

  if (!images)
    return (
      <Layout
        heading={pageContext.name}
        images={[process.env.GATSBY_APP_STRAPI_API_URL + pageContext.imageUrl]}
        button={
          <Box>
            <Button
              to={`/events/${pageContext.slug}`}
              color="secondary"
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
            >
              Back to Event
            </Button>
            <Button
              to={`/events/${pageContext.slug}/gallery`}
              color="secondary"
              variant="outlined"
              size="large"
            >
              Gallery
            </Button>
          </Box>
        }
      >
        <Box component="section">
          <Typography variant="h2" compomnent="h2">
            No result are available yet.
          </Typography>
          <Typography variant="h5" compomnent="p">
            Check back during and after the event to see all the action!
          </Typography>
        </Box>
      </Layout>
    )

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage
  const handleClick = (index, item) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  const getFormats = (images) => {
    const _images = images.map((x) => {
      return {
        src: process.env.GATSBY_APP_STRAPI_API_URL + x.url,
        original: process.env.GATSBY_APP_STRAPI_API_URL + x.url,
        height: x.formats.medium.height,
        width: x.formats.medium.width,
      }
    })
    return _images
  }

  return (
    <Layout
      heading={pageContext.name}
      images={[process.env.GATSBY_APP_STRAPI_API_URL + pageContext.imageUrl]}
    >
      <Box component="section">
        <Gallery
          images={getFormats(images)}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={process.env.GATSBY_APP_STRAPI_API_URL + currentImage.url}
            mainSrcThumbnail={
              process.env.GATSBY_APP_STRAPI_API_URL + currentImage.src
            }
            nextSrc={process.env.GATSBY_APP_STRAPI_API_URL + nextImage.original}
            nextSrcThumbnail={
              process.env.GATSBY_APP_STRAPI_API_URL + nextImage.src
            }
            prevSrc={process.env.GATSBY_APP_STRAPI_API_URL + prevImage.original}
            prevSrcThumbnail={
              process.env.GATSBY_APP_STRAPI_API_URL + prevImage.src
            }
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </Box>
    </Layout>
  )
}

export default EventGallery
