import { Request, Response, Router } from "express";
import fs from "fs"

const router: Router = Router()

let poems: string[] = []

fs.readFile("data/poems.json", "utf-8",(err:NodeJS.ErrnoException | null, data: string) => {
    if (err){
        console.error(err)
        return
    }
    try{
        poems = JSON.parse(data)
    } catch(error: any) {
        console.error(`Error parsing JSON: ${error}`)
    }
}
)

router.get("/", (req: Request, res: Response) => {
    res.json(poems)
})

export default router