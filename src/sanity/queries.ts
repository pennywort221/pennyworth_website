export const RECENT_BLOGS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
]|order(publishedAt desc)[0...6]{
  _id,
  title,
  description,
  slug,
  publishedAt,
  "image": image.asset->url
}`;

export const productBySlugQuery = `
*[_type == "product" && slug.current == $slug][0]{
  title,
  "slug": slug.current,

  hero{
    badge,
    title,
    logo,
    image1,
    image1Alt,
    image2,
    image2Alt
  },

  productAbout{
    title,
    description,
    images
  },

  variants[]{
  title,
  imagePosition,
  images[]{
    _key,
    alt,
    image
  },
  accordionItems[]{
    title,
    content,
  }
}

}
`;




export const signatureProductsQuery = `
*[_type == "product"]
| order(order asc, _createdAt desc){
  title,
  "slug": slug.current,
  cardOverlay{
    description,
    materials,
    applications,
    cta
  },
  "image": cardImage.asset->url
}
`;

export const homeEngagementsQuery = `
*[_type == "homePage"][0]{
  engagements[]{
    _key,
    title,
    image
  }
}
`;


export const homeVideosQuery = `
*[_type == "homePage"][0]{
  videos[]{
    _key,
    title,
    videoUrl,
    "thumbnail": thumbnail.asset->url
  }
}
`;
;
export const testimonialsQuery = `
*[_type == "testimonial" && isActive == true]
| order(order asc, _createdAt desc){
  _id,
  quote,
  author,
  company
}[0...10]
`;





