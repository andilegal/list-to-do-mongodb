import dbConnect from '@/lib/mongodb';
import Item from '@/models/Item';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const items = await Item.find();
    return res.status(200).json(items);
  }

  if (req.method === 'POST') {
    const newItem = await Item.create(req.body);
    return res.status(201).json(newItem);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
