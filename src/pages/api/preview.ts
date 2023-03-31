// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { secret } = req.query

  if (secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET || !secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  res.setPreviewData({})
  res.writeHead(307, { Location: '/' })
  res.end()
}
