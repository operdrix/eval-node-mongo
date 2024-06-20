import { Hono } from "hono";
import { Flipper } from "../models/flippers";
import { HTTPException } from "hono/http-exception";
import { isValidObjectId } from "mongoose";

const api = new Hono().basePath("/flippers");

/** 
 * Get all flippers
 * @api {get} /flippers Get all flippers
 * 
 * @returns {Flipper[]} - All flippers
 * @throws {HTTPException} - 400 - Error message
 */
api.get("/", async (c) => {
    try {
        const flippers = await Flipper.find({});
        return c.json(flippers);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

/** 
 * Get a flipper by id
 * @api {get} /flippers/:flipperId Get a flipper by id
 * 
 * @param {string} flipperId - Flipper id
 * @returns {Flipper} - A flipper
 * @throws {HTTPException} - 400 - Error message
 */
api.get("/:flipperId", async (c) => {
    const flipperId = c.req.param("flipperId");

    if (!isValidObjectId(flipperId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const flipper = await Flipper.findById(flipperId);

        if (!flipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json(flipper);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

/** 
 * Create a flipper
 * @api {post} /flippers Create a flipper
 * 
 * @param {Flipper} - Flipper object
 * @returns {Flipper} - Created flipper
 * @throws {HTTPException} - 400 - Error message
 */
api.post("/", async (c) => {
    const body = await c.req.json();

    try {
        const newFlipper = new Flipper(body);
        const savedFlipper = await newFlipper.save();
        return c.json(savedFlipper, 201);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

/** 
 * Update a flipper
 * @api {put} /flippers/:flipperId Update a flipper
 * 
 * @param {string} flipperId - Flipper id
 * @param {Flipper} - Flipper object
 * @returns {Flipper} - Updated flipper
 * @throws {HTTPException} - 400 - Error message
 */
api.put("/:flipperId", async (c) => {
    const flipperId = c.req.param("flipperId");
    const body = await c.req.json();

    if (!isValidObjectId(flipperId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const updatedFlipper = await Flipper.findByIdAndUpdate(flipperId, body, { new: true });

        if (!updatedFlipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json(updatedFlipper);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

/** 
 * Delete a flipper
 * @api {delete} /flippers/:flipperId Delete a flipper
 * 
 * @param {string} flipperId - Flipper id
 * @returns {Flipper} - Deleted flipper
 * @throws {HTTPException} - 400 - Error message
 */
api.delete("/:flipperId", async (c) => {
    const flipperId = c.req.param("flipperId");

    if (!isValidObjectId(flipperId)) {
        return c.json({ msg: "ObjectId malformed" }, 400);
    }

    try {
        const deletedFlipper = await Flipper.findByIdAndDelete(flipperId);

        if (!deletedFlipper) {
            return c.json({ msg: "Flipper not found" }, 404);
        }
        return c.json({ msg: "DELETE done" }, 204);
    } catch (error: any) {
        return c.json(error, 400);
    }
});

export default api;