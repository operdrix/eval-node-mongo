import { Hono } from "hono";
import { Brand } from "../models/brands";
import { HTTPException } from "hono/http-exception";
import { isValidObjectId } from "mongoose";

const api = new Hono().basePath("/brands");

api.get("/", async (c) => {
    try {
        const brands = await Brand.find({});
        return c.json(brands);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

api.get("/:brandId", async (c) => {
    const brandId = c.req.param("brandId");

    if (!isValidObjectId(brandId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const flipper = await Brand.findById(brandId);

        if (!flipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json(flipper);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

api.post("/", async (c) => {
    const body = await c.req.json();

    try {
        const newFlipper = new Brand(body);
        const savedFlipper = await newFlipper.save();
        return c.json(savedFlipper, 201);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

api.put("/:brandId", async (c) => {
    const brandId = c.req.param("brandId");
    const body = await c.req.json();

    if (!isValidObjectId(brandId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const updatedFlipper = await Brand.findByIdAndUpdate(brandId, body, { new: true });

        if (!updatedFlipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json(updatedFlipper);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

api.delete("/:brandId", async (c) => {
    const brandId = c.req.param("brandId");

    if (!isValidObjectId(brandId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const deletedFlipper = await Brand.findByIdAndDelete(brandId);

        if (!deletedFlipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json({ msg: "DELETE done" }, 204);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

export default api;