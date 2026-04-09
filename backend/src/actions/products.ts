import { Request, Response } from "express";
import { supabase } from "../lib/supabase";

export async function getProducts(req: Request, res: Response) {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
}
