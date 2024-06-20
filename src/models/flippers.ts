import { Schema, model, Types } from 'mongoose';

interface Iversion {
    name: string;
    link: string;
}

interface IFlipper {
    name: string;
    description: string;
    brand: Types.ObjectId;
    versions?: Iversion[];
    slug: string;

    isNewProduct?: boolean;
    secondHand?: boolean;
    isCrush?: boolean;
    quantity: number;
    arrivalDate?: string;
    isContactUs?: boolean;

    images: string[];
    firstImage: string;
    video?: string;

    price: number;
    year?: number;
    rate?: number;
    dimensions?: string;
    weight?: string;
}

const flipperSchema = new Schema<IFlipper>({
    name: { type: String, required: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    brand: { type: Schema.ObjectId, ref: 'brands' },
    versions: [{ name: String, link: String }],
    slug: { type: String, required: true },

    isNewProduct: { type: Boolean, default: false },
    secondHand: { type: Boolean, default: false },
    isCrush: { type: Boolean, default: false },
    quantity: { type: Number, required: true },
    arrivalDate: String,
    isContactUs: { type: Boolean, default: false },

    images: [{ type: String }],
    firstImage: { type: String, required: true },
    video: String,

    price: { type: Number, required: true },
    year: Number,
    rate: Number,
    dimensions: String,
    weight: String,
});

const Flipper = model<IFlipper>('flippers', flipperSchema);
export { Flipper, IFlipper }