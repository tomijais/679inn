// import type { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";
// import departamentos from "../../src/departamentos.json";

// // Fake users data
// const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

// export default function GET(_req: NextApiRequest, res: NextApiResponse) {
//   // Get data from your database

//   const { id } = _req.query;

//   const { images } = departamentos[Number(id)];

//   const imageDirectory = path.join(process.cwd(), `public/${images}`);

//   const imageFiles = fs.readdirSync(imageDirectory);

//   return res.status(200).json(imageFiles);
// }
