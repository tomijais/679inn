import type { NextApiRequest, NextApiResponse } from 'next'

// Fake users data
const users  = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function GET(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data from your database

    const id = _req.params.id
  
  return res.status(200).json(users)
}