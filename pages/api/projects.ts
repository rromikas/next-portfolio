// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  const projects = await fetch("https://fireck.netlify.app/api/projects").then((x) => x.json());
  res.status(200).json(projects);
}
