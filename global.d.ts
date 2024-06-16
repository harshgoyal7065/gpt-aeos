import { NextApiRequest } from "next";

export interface ExtendedApiRequest extends NextApiRequest {
    db: any;
}