// from next.js Dato example
import { getPreviewReportBySlug } from "@/lib/api";

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.NEXT_DATO_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewReportBySlug(req.query.slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/reports/${post.slug}` });
  res.end();
}

// from Dato's Next.js example
// export default async (req, res) => {
//   // Please set the NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET env variable
//   // on Vercel/Netlify, or everyone will be able to enter Preview Mode and
//   // see draft content!

//   const secret = process.env.NEXT_DATO_PREVIEW_SECRET;

//   // Check the secret and next parameters
//   if (secret && req.query.secret !== secret) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   // Enable Preview Mode by setting the cookies
//   res.setPreviewData({});

//   // Redirect to the homepage
//   res.writeHead(307, { Location: "/" });
//   res.end();
// };
