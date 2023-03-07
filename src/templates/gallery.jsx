import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { eventGallery } from "../services/event"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import { Typography } from "@mui/material"
import "react-image-lightbox/style.css"

const EventGallery = ({ pageContext, location }) => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    eventGallery({ id: pageContext.strapiId })
      .then((res) => {
        console.log("gallery images", res.gallery)
        setImages(res.gallery)
      })
      .catch((err) => {
        console.log("gallery images", err)
      })
  }, [])

  if (!images)
    return (
      <Layout
        heading={pageContext.name}
        images={[process.env.REACT_APP_STRAPI_API_URL + pageContext.imageUrl]}
      >
        <Typography variant="h2" compomnent="h2">No images are available yet.</Typography>
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
        src: process.env.REACT_APP_STRAPI_API_URL + x.url,
        original: process.env.REACT_APP_STRAPI_API_URL + x.url,
        height: x.formats.medium.height,
        width: x.formats.medium.width,
      }
    })
    return _images
  }

  return (
    <Layout
      heading={pageContext.name}
      images={[process.env.REACT_APP_STRAPI_API_URL + pageContext.imageUrl]}
    >
      <Gallery
        images={getFormats(images)}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={process.env.REACT_APP_STRAPI_API_URL + currentImage.url}
          mainSrcThumbnail={
            process.env.REACT_APP_STRAPI_API_URL + currentImage.src
          }
          nextSrc={process.env.REACT_APP_STRAPI_API_URL + nextImage.original}
          nextSrcThumbnail={
            process.env.REACT_APP_STRAPI_API_URL + nextImage.src
          }
          prevSrc={process.env.REACT_APP_STRAPI_API_URL + prevImage.original}
          prevSrcThumbnail={
            process.env.REACT_APP_STRAPI_API_URL + prevImage.src
          }
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </Layout>
  )
}

export default EventGallery
