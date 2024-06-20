import { Schema, model, Types } from 'mongoose';

interface IBrand {
    name: string;
    title: string;
    description: string;
    information?: string;
    logo: string;
    slug: string;
}

const brandSchema = new Schema<IBrand>({
    name: { type: String, required: true, lowercase: true, trim: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    information: { type: String, required: false },
    logo: { type: String, required: true },
    slug: { type: String, required: true },
});

const Brand = model<IBrand>('brands', brandSchema);
export { Brand, IBrand }