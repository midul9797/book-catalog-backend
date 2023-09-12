import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string().optional(),
    orderedBooks: z.array(
      z.object({
        bookId: z.string({ required_error: 'Book Id is required' }),
        quantity: z.number({ required_error: 'Quantity is required' }),
      }),
      { required_error: 'ordered Books is required' }
    ),
  }),
});

export const OrderValidation = {
  create,
};
