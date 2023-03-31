// pages/api/revalidate.js

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (!req.body) {
    return res.status(422).json({ message: 'Invalid request body' })
  }

  try {
    await Promise.all([
      // Revalidate the home page
      res.revalidate(`/posts/${req.body.data.slug}`),
      res.revalidate(`/posts`),
    ])

    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send({ err })
  }
}
