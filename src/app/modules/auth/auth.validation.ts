import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum(['admin', 'customer'], {
      required_error: 'Role is required',
    }),
    contactNo: z.string({ required_error: 'Phone NO. is required' }),
    address: z.string({
      required_error: 'Address is required',
    }),
    profileImg: z.string({ required_error: 'Image URL is required' }),
  }),
});
const login = z.object({
  body: z.object({
    id: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});
export const AuthValidation = {
  create,
  login,
};
